
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact-form" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1156px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">درخواست مشاوره سازمانی</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              برای هماهنگی جلسه مشاوره و بررسی سناریوهای اختصاصی سازمان شما، فرم روبرو را تکمیل کنید. کارشناسان ما در ساعات اداری با شما تماس خواهند گرفت.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 inline-block">
              <p className="text-sm font-bold text-slate-400 mb-2">ایمیل مستقیم:</p>
              <a href="mailto:info@ttshahr.com" className="text-xl font-black text-[#ea4037]">info@ttshahr.com</a>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 reveal-on-scroll">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="نام و نام خانوادگی" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm" required />
                <input type="text" placeholder="نام سازمان" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="number" placeholder="تعداد تقریبی نفرات" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm" />
                <input type="tel" placeholder="شماره تماس" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm" required />
              </div>
              <input type="email" placeholder="ایمیل سازمانی" className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm dir-ltr text-left" required />
              <textarea placeholder="توضیحات (اختیاری)" rows={3} className="w-full bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-200 focus:border-[#ea4037] outline-none font-bold text-sm"></textarea>
              <button type="submit" className="w-full bg-[#ea4037] text-white py-4 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-500/20">
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
