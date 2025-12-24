
import React from 'react';

const MidCTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto glass-panel p-10 lg:p-14 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ea4037]/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">همین حالا برای سازمان خود اقدام کنید</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            برای دریافت نمونه قرارداد، لیست قیمت‌ها و کاتالوگ دیجیتال، کافیست ایمیل خود را وارد کنید. کارشناسان ما در سریع‌ترین زمان با شما تماس می‌گیرند.
          </p>
          
          <form action="#contact-form" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#ea4037] transition-all"
            />
            <button 
              type="button"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#ea4037] px-8 py-4 rounded-xl font-black hover:bg-slate-200 transition-all"
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
