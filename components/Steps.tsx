
import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    { num: '۰۱', title: 'مشاوره و نیازسنجی سازمان', desc: 'بررسی دقیق اهداف رفاهی و بودجه‌بندی مجموعه‌ی شما' },
    { num: '۰۲', title: 'تعیین سیاست اعتبار و طراحی اختصاصی', desc: 'تدوین قوانین مصرف و طراحی کارت با هویت بصری سازمان' },
    { num: '۰۳', title: 'صدور کارت‌ها و فعال‌سازی', desc: 'تولید فیزیکی و دیجیتال کارت‌ها و آموزش پنل مدیریتی' },
    { num: '۰۴', title: 'شروع استفاده و گزارش‌گیری', desc: 'پشتیبانی ۲۴ ساعته از پرسنل و ارائه گزارش‌های دقیق' },
  ];

  return (
    <section id="steps" className="py-24 px-6 bg-white">
      <div className="max-w-[1156px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-20 reveal-on-scroll">
          نحوه <span className="text-brand-red">اجرا</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center reveal-on-scroll">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-2xl font-black text-brand-red mb-6 border border-brand-red/20">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4 font-medium">{step.desc}</p>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-8 -left-5 w-10 border-t-2 border-dashed border-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
