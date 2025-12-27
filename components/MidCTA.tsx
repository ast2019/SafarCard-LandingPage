
import React from 'react';

const MidCTA: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto reveal-on-scroll">
        <div className="bg-[#0f172a] rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea4037]/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-6">کاتالوگ و نمونه کارت را دریافت کنید</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              ایمیل خود را وارد کنید تا فایل معرفی، شرایط همکاری و سناریوهای پیشنهادی برای HR برایتان ارسال شود.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ea4037] text-white flex-1 py-4 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg"
              >
                دریافت کاتالوگ
              </button>
              <a href="mailto:info@ttshahr.com" className="bg-white/10 border border-white/20 text-white flex-1 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                ارسال ایمیل
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
