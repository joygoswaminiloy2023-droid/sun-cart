"use client";
import Image from 'next/image';
import Lottie from "lottie-react";
import { PiSunHorizonDuotone } from 'react-icons/pi';
import Summervacation from "../../../public/animation/Summer vacation.json";


const Hero = () => {

  return (
    <div className="relative w-full overflow-hidden bg-sky-400 rounded-3xl mt-8 shadow-2xl min-h-[500px] md:min-h-[600px]">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200" 
          alt="Beach Background"
          fill
          className="object-cover opacity-60"
        />
       
        <div className="absolute inset-0 backdrop-blur-[2px] bg-sky-900/10"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full">
        
      
        <div className="relative flex-1 flex flex-col justify-center px-8 py-12 md:px-20 z-20">
          
         
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] opacity-40 pointer-events-none z-0">
            <Lottie animationData={Summervacation} loop={true} />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center md:text-left text-white">
            <span className="bg-yellow-400 text-sky-900 px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4 inline-block">
              Summer Flash Sale
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-4 leading-tight drop-shadow-md">
              BEACH <br /> <span className="text-yellow-400">VIBES</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 opacity-95 max-w-md drop-shadow">
              Grab your summer essentials before they are gone.
            </p>
            <button className="btn btn-lg bg-yellow-400 border-none hover:bg-white text-sky-900 font-black px-10 shadow-xl transition-all hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>

       
        <div className="flex-1 flex items-center justify-center py-10 md:py-0">
          <div className="relative">
             
             <div className="absolute -top-12 -right-8 text-yellow-300 text-7xl animate-pulse">
                <PiSunHorizonDuotone />
              </div>

              {/* Centered Badge */}
              <div className="relative z-10 bg-white/20 backdrop-blur-xl border-4 border-white/40 w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center animate-bounce-slow shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <span className="text-xl md:text-2xl font-bold uppercase italic text-white">Up To</span>
<span className="text-7xl md:text-9xl font-black text-yellow-400 animate-[spin_1s_ease-in-out_1]">
  50%
</span>                <span className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-white">OFF</span>
              </div>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/30 to-transparent"></div>
    </div>
  );
};

export default Hero;