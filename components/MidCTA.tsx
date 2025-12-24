
import React from 'react';

const MidCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      {/* Keeping this dark for visual break and contrast */}
      <div className="max-w-4xl mx-auto bg-[#0f172a] p-10 lg:p-14 rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ea4037]/20 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">همین حالا برای سازمان خود اقدام کنید</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            برای دریافت نمونه قرارداد، لیست قیمت‌ها و کاتالوگ دیجیتال، کافیست ایمیل خود را وارد کنید. کارشناسان ما در سریع‌ترین زمان با شما تماس می‌گیرند.
          </p>
          
          <form action="#contact-form" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-[#ea4037] transition-all backdrop-blur-sm"
            />
            <button 
              type="button"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#ea4037] px-8 py-4 rounded-xl font-black hover:bg-slate-100 transition-all"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
