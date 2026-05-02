'use client'
import React from 'react';
import Image from 'next/image';
import { BsShieldCheck } from 'react-icons/bs';
import { FaExternalLinkAlt, FaMailBulk } from 'react-icons/fa';
import { BiHash } from 'react-icons/bi';
import { authClient } from '@/lib/auth-client';

const ProfileCardUI = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
console.log(user)

 
  if (!user) {
    return <div className="text-center mt-10">No user session found.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Banner */}
        <div className="absolute top-0 left-0 w-full h-32 bg-yellow-400">
          <div className="absolute inset-0 opacity-80 bg-yellow-400"></div>
        </div>

        <div className="relative pt-16 pb-8 px-6">
          {/* Avatar Section */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image 
                src={user.image || "https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"}
                width={112} // Adjusted to match w-28
                height={112} 
                alt={user.name}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl "
              />
              {user.emailVerified && (
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg border-2 border-white">
                  <BsShieldCheck size={18} />
                </div>
              )}
            </div>
          </div>

          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
              HI<br></br>{user.name}
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-slate-500 mt-1">
              <FaMailBulk size={14} className={user.emailVerified ? "text-emerald-500" : "text-amber-500"} />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${user.emailVerified ? "text-emerald-600" : "text-amber-600"}`}>
                {user.emailVerified ? "Verified Account" : "Verification Pending"}
              </span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 gap-3 mb-8">
           
            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <FaMailBulk size={16} className="text-yellow-400" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Email Address</span>
                <span className="text-sm font-semibold text-slate-700 truncate">{user.email}</span>
              </div>
            </div>

           
            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <BiHash size={16} className="text-yellow-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">System ID</span>
                <span className="text-sm font-mono text-slate-600 truncate w-48">
                  {user.id}
                </span>
              </div>
            </div>
          </div>

          <button className="group w-full py-4 bg-sky-400 hover:bg-yellow-400 hover:text-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-yellow-200">
            View Full Profile
            <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardUI;