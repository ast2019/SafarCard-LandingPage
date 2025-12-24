
import React from 'react';

const MidCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto reveal-on-scroll">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 bg-[#0f172a] z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-[#ea4037]/20 to-transparent"></div>
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea4037]/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3"></div>
          </div>

          <div className="relative z-10 p-10 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              سازمان خود را <span className="text-[#ea4037]">متمایز</span> کنید
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              برای دریافت نمونه کارت فیزیکی، کاتالوگ جامع خدمات و مشاوره رایگان در مورد نحوه پیاده‌سازی، همین حالا اقدام کنید.
            </p>
            
            <form action="#contact-form" className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="ایمیل خود را وارد کنید..." 
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#ea4037] focus:bg-white/15 transition-all backdrop-blur-sm"
              />
              <button 
                type="button"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ea4037] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-900/30 btn-hover-effect"
              >
                ثبت درخواست
              </button>
            </form>
            <p className="mt-6 text-slate-500 text-sm">بدون اسپم، فقط اطلاعات مفید.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
