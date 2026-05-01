import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-sky-400 rounded-3xl mt-8">
      
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200" 
          alt="Beach Background"
          fill
          className="object-cover"
        />
      </div>

      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-20 md:py-20">
        
        
        <div className="text-center md:text-left text-white max-w-lg">
          <span className="bg-yellow-400 text-sky-900 px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4 inline-block">
            Summer Flash Sale
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            BEACH <span className="text-yellow-400">VIBES</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 opacity-90">
            Grab your summer essentials before they are gone. Everything you need for the perfect coastal getaway.
          </p>
          
          <button className="btn btn-lg bg-yellow-400 border-none hover:bg-white text-sky-900 font-black px-10 shadow-xl transition-all hover:scale-105">
            SHOP NOW
          </button>
        </div>

        
        <div className="mt-10 md:mt-0 relative">
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 p-8 md:p-12 rounded-full flex flex-col items-center justify-center animate-bounce-slow">
            <span className="text-xl font-bold uppercase tracking-tighter italic">Up To</span>
            <span className="text-7xl md:text-9xl font-black text-yellow-400 drop-shadow-lg">50%</span>
            <span className="text-3xl font-black uppercase tracking-[0.2em]">OFF</span>
          </div>
          
      
          <div className="absolute -top-4 -right-4 text-yellow-300 text-4xl animate-pulse">✨</div>
          <div className="absolute -bottom-4 -left-4 text-yellow-300 text-4xl animate-pulse delay-700">✨</div>
        </div>

      </div>
      
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white/20 backdrop-blur-sm"></div>
    </div>
  );
};

export default Hero;