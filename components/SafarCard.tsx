
import React from 'react';

const SafarCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-[1.586] mx-auto perspective-1000 group">
      {/* Glow Effect behind */}
      <div className="absolute inset-0 bg-[#ea4037] blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
      
      {/* The Card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1 border border-white/10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#000000] to-[#2a0a0a]"></div>
        
        {/* Glass Overlay Texture */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
        
        {/* Red Accents */}
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-gradient-to-b from-transparent via-[#ea4037]/20 to-transparent rotate-12 blur-xl"></div>
        
        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div className="text-white/90 font-black text-xl tracking-widest uppercase">SAFAR CARD</div>
            <img 
              src="/logo_tt.svg" 
              alt="TTShahr" 
              className="h-8 w-auto brightness-0 invert opacity-80" 
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
          </div>
          
          {/* Chip & Signal */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-10 h-8 rounded-md bg-gradient-to-tr from-yellow-200 to-yellow-500 border border-yellow-600 shadow-inner flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 border border-black/20 rounded-md"></div>
               <div className="w-full h-[1px] bg-black/20 absolute top-1/2"></div>
               <div className="h-full w-[1px] bg-black/20 absolute left-1/3"></div>
               <div className="h-full w-[1px] bg-black/20 absolute right-1/3"></div>
            </div>
            <svg className="w-6 h-6 text-white/50 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6v-6h-6zM1 14v6h6v-6h-6zM11 14v6h6v-6h-6zM11 4v6h6v-6h-6z"/></svg>
          </div>

          {/* Bottom Info */}
          <div className="mt-auto space-y-4">
            <div className="text-white/80 font-mono text-xl tracking-[0.15em] shadow-black drop-shadow-md">
              **** **** **** 3291
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Card Holder</div>
                <div className="text-white/90 font-medium tracking-wide">ORGANIZATION NAME</div>
              </div>
              <div className="text-[#ea4037] font-black italic">VIP ACCESS</div>
            </div>
          </div>
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SafarCard;
