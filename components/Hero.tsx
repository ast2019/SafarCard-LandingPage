
import React, { useEffect, useRef } from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax transforms using translate3d for hardware acceleration
      if (blob1Ref.current) {
        // Moves down slower than scroll (0.2 speed)
        blob1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
      }
      if (blob2Ref.current) {
        // Moves up slightly against scroll (-0.15 speed)
        blob2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.15}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-[#f8fafc]">
      {/* Dynamic Background Elements with Parallax Refs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-red-50/80 rounded-full blur-[120px] pointer-events-none animate-pulse-slow will-change-transform"
      ></div>
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none animate-pulse-slow will-change-transform" 
        style={{animationDelay: '1s'}}
      ></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-20 w-12 h-12 border-4 border-slate-200/50 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 bg-[#ea4037]/10 rounded-lg rotate-12 animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="text-center lg:text-right space-y-8 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea4037] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea4037]"></span>
              </span>
              <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">نسل جدید خدمات رفاهی</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              سفر کارت <span className="text-gradient-red">تی‌تی‌شهر</span>
              <br/>
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-700 mt-2 block">نهایت احترام به انتخاب پرسنل</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              ما باور داریم بهترین پاداش، 
              <span className="text-slate-900 font-bold px-1 relative">
                تجربه
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ea4037]/20 -z-10"></span>
              </span>
              است نه کالا.
              به تیم خود اعتبار سفر بدهید و بگذارید خودشان مقصد رویاهایشان را انتخاب کنند.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> بدون محدودیت مسیر
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> صدور آنی و گروهی
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> اقساط بدون کارمزد
              </div>
            </div>

            {/* Inline Lead Form - Enhanced */}
            <div className="max-w-md mx-auto lg:mx-0 pt-4">
              <form action="#contact-form" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ea4037] to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex p-2 bg-white rounded-xl ring-1 ring-slate-200/50 shadow-xl">
                  <input 
                    type="email" 
                    placeholder="ایمیل سازمانی شما..." 
                    className="flex-1 bg-transparent px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                  />
                  <button 
                    type="button"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#ea4037] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d1352d] transition-all shadow-md whitespace-nowrap btn-hover-effect"
                  >
                    دریافت مشاوره رایگان
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                پاسخگویی سریع: <a href="tel:09120912408" className="text-slate-800 hover:text-[#ea4037] transition-colors dir-ltr font-bold text-sm">۰۹۱۲۰۹۱۲۴۰۸</a>
              </div>
            </div>
          </div>

          {/* Right Column: Card Mockup with 3D feel */}
          <div className="relative reveal-on-scroll perspective-1000 group/card" style={{transitionDelay: '200ms'}}>
             {/* Abstract Backdrop */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-200 to-slate-50 rounded-full opacity-50 blur-3xl -z-10"></div>
             
             <div className="transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12 preserve-3d">
                <SafarCard />
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float z-20 hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold">حداکثر اعتبار</div>
                      <div className="text-lg font-black text-slate-900">۱۰۰ میلیون <span className="text-xs font-medium text-slate-400">تومان</span></div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
