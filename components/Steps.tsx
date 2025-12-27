
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '۰۱', title: 'مشاوره و نیازسنجی سازمان', desc: 'بررسی اهداف رفاهی و بودجه سازمان شما.' },
    { num: '۰۲', title: 'تعیین سیاست اعتبار و قوانین مصرف', desc: 'طراحی اختصاصی کارت و تنظیمات سیستمی.' },
    { num: '۰۳', title: 'صدور کارت‌ها و فعال‌سازی', desc: 'تحویل کارت‌ها و فعال‌سازی پنل مدیریتی.' },
    { num: '۰۴', title: 'شروع استفاده و گزارش‌گیری', desc: 'پشتیبانی دوره‌ای و ارائه گزارش‌های مصرف.' },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-[1156px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-20 reveal-on-scroll">
          نحوه <span className="text-[#ea4037]">اجرا</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center reveal-on-scroll">
              <div className="w-16 h-16 rounded-2xl bg-[#ea4037]/10 flex items-center justify-center text-2xl font-black text-[#ea4037] mb-6">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
