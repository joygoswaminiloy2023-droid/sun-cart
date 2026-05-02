import React from 'react';

const page = () => {
    return (
        import React from 'react';
import { Mail, ShieldCheck, Calendar, Hash, ExternalLink } from 'lucide-react';

const ProfileCardUI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-slate-900">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
        </div>

        <div className="relative pt-16 pb-8 px-6">
          {/* Avatar Section */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocLnoqRuJEkIUXBYLmtqLiCyVh8soBb9oSDKLIeAFFtKMtuiq6I=s96-c" 
                alt="Joy Goswami"
                className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg border-2 border-white">
                <ShieldCheck size={18} />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Joy Goswami</h2>
            <div className="flex items-center justify-center gap-1.5 text-slate-500 mt-1">
              <Mail size={14} />
              <span className="text-xs font-medium uppercase tracking-widest">Verified Account</span>
            </div>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-1 gap-3 mb-8">
            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <Mail size={16} className="text-indigo-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Email Address</span>
                <span className="text-sm font-semibold text-slate-700">joygoswaminiloy2023@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <Hash size={16} className="text-indigo-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">System ID</span>
                <span className="text-sm font-mono text-slate-600 truncate w-48">69f56ddba13783bd0541b835</span>
              </div>
            </div>

            <div className="flex items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                <Calendar size={16} className="text-indigo-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Created On</span>
                <span className="text-sm font-semibold text-slate-700">May 02, 2026</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="group w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-indigo-200">
            View Full Profile
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardUI;
    );
};

export default page;