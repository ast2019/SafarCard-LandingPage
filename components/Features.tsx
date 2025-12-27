
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: "کنترل بودجه", desc: "تعیین سقف و سیاست مصرف برای هر نفر/گروه", icon: "📊" },
    { title: "کاهش کار اداری HR", desc: "حذف فرایندهای پراکنده و هماهنگی‌های دستی", icon: "⚙️" },
    { title: "رضایت واقعی افراد", desc: "آزادی انتخاب در چارچوب سیاست سازمان", icon: "⭐" },
    { title: "برندینگ کارفرمایی", desc: "صدور کارت با هویت برند سازمان", icon: "🏢" },
    { title: "گزارش‌گیری و شفافیت", desc: "گزارش‌های دوره‌ای برای تصمیم‌گیری بهتر", icon: "📝" },
    { title: "پشتیبانی اجرایی", desc: "همراهی تیم پشتیبانی برای راه‌اندازی و ادامه مسیر", icon: "🛡️" }
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1156px] mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">مزایای <span className="text-[#ea4037]">سازمانی</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all reveal-on-scroll">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
