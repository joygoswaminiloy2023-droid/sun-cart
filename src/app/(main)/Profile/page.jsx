'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BsShieldCheck } from 'react-icons/bs';
import { FaExternalLinkAlt, FaMailBulk } from 'react-icons/fa';
import { BiHash, BiLoaderAlt } from 'react-icons/bi';
import { authClient } from '@/lib/auth-client';
import Modal from '@/app/Components/Modal';




const ProfileCardUI = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);



  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(user.name || '');
      setImage(user.image || '');
    }
  }, [user]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <BiLoaderAlt className="animate-spin text-sky-500" size={32} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 text-slate-500 font-bold">
        No user session found.
      </div>
    );
  }
const handleUpdate = async () => {
    if (!name.trim()) return alert("Name cannot be empty");

    setIsUpdating(true);
    try {
      const res = await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, image }),
      });

      const data = await res.json();

      if (data.success) {
     
        authClient.setSession({
            ...session,
            user: {
                ...session.user,
                name: name,
                image: image
            }
        });

       
        await authClient.refreshSession(); 
        
       
        router.refresh();
        
        setOpen(false);
      } else {
        alert(data.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Banner */}
        <div className="absolute top-0 left-0 w-full h-32 bg-yellow-400" />

        <div className="relative pt-16 pb-8 px-6">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src={user.image || 'https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg'}
                width={112}
                height={112}
                alt={user.name || 'user'}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl bg-white"
              />
              {user.emailVerified && (
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg border-2 border-white">
                  <BsShieldCheck size={18} />
                </div>
              )}
            </div>
          </div>

          {/* Name Display */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase leading-tight">
              HI <br /> {user.name}
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${
                user.emailVerified ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
              }`}>
                {user.emailVerified ? 'Verified Account' : 'Verification Pending'}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <FaMailBulk size={16} className="text-yellow-500" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Email</span>
                <span className="text-sm font-semibold text-slate-700 truncate">{user.email}</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <BiHash size={16} className="text-yellow-500" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-slate-400 font-bold uppercase">ID</span>
                <span className="text-xs font-mono text-slate-500 truncate">{user.id}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group w-full py-4 bg-sky-500 hover:bg-yellow-400 hover:text-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
          >
            Update Profile
            <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
       <Modal image={image} handleUpdate={handleUpdate} isUpdating={isUpdating} name={name} setName={setName} setImage={setImage} setOpen={setOpen}></Modal>
      )} 
    </div>
  );
};

export default ProfileCardUI;