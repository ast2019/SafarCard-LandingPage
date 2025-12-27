
import React from 'react';
import { CONTACT_INFO } from '../constants';

const MidCTA: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto reveal-on-scroll">
        <div className="bg-[#0f172a] rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-6">کاتالوگ و نمونه کارت را دریافت کنید</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              ایمیل خود را ثبت کنید تا فایل معرفی، شرایط همکاری، سناریوهای پیشنهادی برای HR و نمونه طراحی کارت برایتان ارسال شود.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="ایمیل شما..." 
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 text-white outline-none focus:border-brand-red transition-all text-left dir-ltr"
              />
              <button className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-red/90 transition-all shadow-lg whitespace-nowrap">
                دریافت کاتالوگ
              </button>
            </div>
            <div className="mt-8">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white text-xs font-bold transition-colors">
                ارسال ایمیل مستقیم به: {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
