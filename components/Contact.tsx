
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { PhoneIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-[1156px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">درخواست مشاوره سازمانی</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              برای هماهنگی جلسه مشاوره و بررسی سناریوهای اختصاصی سازمان شما، فرم روبرو را تکمیل کنید. کارشناسان ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black mb-1 uppercase tracking-widest">تماس پشتیبانی</p>
                  <a href={`tel:${CONTACT_INFO.supportMob}`} className="text-xl font-black text-slate-900 dir-ltr block">{CONTACT_INFO.supportMobDisplay}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black mb-1 uppercase tracking-widest">تلفن دفتر مرکزی</p>
                  <a href={`tel:${CONTACT_INFO.officeTel}`} className="text-xl font-black text-slate-900 dir-ltr block">{CONTACT_INFO.officeTelDisplay}</a>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-400 text-xs font-bold mb-2">آدرس دفتر مرکزی:</p>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 reveal-on-scroll">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="نام و نام خانوادگی" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all" required />
                <input type="text" placeholder="نام سازمان" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="number" placeholder="تعداد تقریبی نفرات" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all" />
                <input type="tel" placeholder="شماره تماس" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all" required />
              </div>
              <input type="email" placeholder="ایمیل سازمانی" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all dir-ltr text-left" required />
              <textarea placeholder="توضیحات (اختیاری)" rows={3} className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-brand-red outline-none font-bold text-sm transition-all"></textarea>
              <button type="submit" className="w-full bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-red-500/30 text-lg">
                ثبت درخواست و هماهنگی جلسه
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
