
import React from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea4037]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1156px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#ea4037] text-xs font-bold uppercase tracking-wide animate-fade-in">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full animate-pulse"></span>
              نسل جدید خدمات رفاهی
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight text-glow">
              سفر کارت <span className="text-[#ea4037]">تی‌تی‌شهر</span>؛ <br/>
              قدردانی از همراهان
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              یک کارت اعتباری اختصاصی برای سازمان‌ها، شرکت‌ها و باشگاه مشتریان.
              به کارمندان و مشتریان خود هدیه‌ای ارزشمند بدهید: 
              <span className="text-white font-bold"> آزادی انتخاب در سفر.</span>
            </p>

            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm font-medium text-slate-300">
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> اعتبار قابل تعریف</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> صدور با برند شما</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> خرید اقساطی سفر</li>
            </ul>

            {/* Inline Lead Form */}
            <div className="max-w-md mx-auto lg:mx-0">
              <form action="#contact-form" className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="ایمیل سازمانی (اختیاری)" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ea4037] transition-colors"
                />
                <button 
                  type="button"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#ea4037] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-900/30 whitespace-nowrap"
                >
                  دریافت کاتالوگ
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-500 text-center lg:text-right">
                یا تماس بگیرید: <a href="tel:09120912408" className="text-slate-300 hover:text-white underline decoration-dotted">۰۹۱۲۰۹۱۲۴۰۸</a>
              </p>
            </div>
          </div>

          {/* Right Column: Card Mockup */}
          <div className="relative reveal active">
             <SafarCard />
             {/* Decorative elements around card */}
             <div className="absolute -top-10 -right-10 w-24 h-24 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute top-1/2 -left-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#ea4037] to-transparent opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
