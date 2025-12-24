
import React from 'react';
import { ChartIcon, BuildingIcon } from './Icons';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "کاهش بار اجرایی HR",
      desc: "حذف فرآیندهای پیچیده قرارداد با هتل‌ها و آژانس‌ها. ما همه چیز را مدیریت می‌کنیم.",
      icon: <BuildingIcon className="w-6 h-6" />
    },
    {
      title: "مدیریت و کنترل بودجه",
      desc: "تعیین سقف اعتبار برای هر سطح سازمانی و گزارش‌گیری شفاف از مصارف.",
      icon: <ChartIcon className="w-6 h-6" />
    },
    {
      title: "افزایش رضایت کارکنان",
      desc: "هدیه‌ای که واقعاً استفاده می‌شود. آزادی انتخاب مقصد و زمان سفر برای پرسنل.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "تخفیفات سازمانی",
      desc: "دسترسی به نرخ‌های ویژه و پکیج‌های اختصاصی برای دارندگان کارت.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
    },
    {
      title: "قابلیت شخصی‌سازی",
      desc: "درج لوگوی سازمان شما روی کارت و تعریف پیام تبریک اختصاصی در پنل.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    {
      title: "پشتیبانی اختصاصی",
      desc: "خط ویژه پشتیبانی برای دارندگان سفر کارت جهت رزرو و هماهنگی.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6">
      <div className="max-w-[1156px] mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">چرا سازمان‌ها <span className="text-[#ea4037]">سفر کارت</span> را انتخاب می‌کنند؟</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl hover:bg-white/[0.06] transition-all group">
              <div className="w-12 h-12 bg-[#ea4037]/10 rounded-xl flex items-center justify-center text-[#ea4037] mb-4 group-hover:bg-[#ea4037] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
