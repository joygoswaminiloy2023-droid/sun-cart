import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Modal = ({image,handleUpdate,isUpdating,name,setName,setImage,setOpen}) => {
    return (
        <div>
             <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-sm space-y-5 shadow-2xl">
            <h2 className="text-xl font-black text-center text-slate-800">Edit Profile</h2>
            <div className="space-y-4">
              <input
                className="w-full border-2 border-slate-100 p-3 rounded-xl focus:border-sky-400 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                className="w-full border-2 border-slate-100 p-3 rounded-xl focus:border-sky-400 outline-none"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setOpen(false)} className="flex-1 bg-slate-100 py-3 rounded-xl font-bold">Cancel</button>
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="flex-1 bg-sky-500 text-white py-3 rounded-xl font-bold disabled:opacity-50 flex items-center justify-center"
              >
                {isUpdating ? <BiLoaderAlt className="animate-spin" /> : 'Save'}
              </button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Modal;