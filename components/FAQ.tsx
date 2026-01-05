
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      q: "سفر کارت برای چه سازمان‌هایی مناسب است؟",
      a: "برای شرکت‌ها و سازمان‌هایی که می‌خواهند مزیت رفاهی یا باشگاه مشتریان سفر را هدفمند، قابل‌کنترل و قابل‌اندازه‌گیری اجرا کنند."
    },
    {
      q: "آیا می‌توان افراد را گروه‌بندی کرد؟",
      a: "بله، می‌توانید افراد را گروه‌بندی کنید و برای هر گروه سیاست اعتبار متفاوت تعریف کنید."
    },
    {
      q: "آیا امکان محدودسازی مصرف وجود دارد؟",
      a: "بله، قوانین مصرف بر اساس سیاست‌های سازمان تنظیم می‌شود."
    },
    {
      q: "راه‌اندازی چقدر زمان می‌برد؟",
      a: "پس از نهایی شدن اطلاعات سازمان، زمان‌بندی دقیق در جلسه مشاوره اعلام می‌شود."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-12">پرسش‌های متداول</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className={`border rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'border-[#ea4037] bg-red-50/20' : 'border-slate-200'}`}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-right">
                <span className={`font-bold ${openIndex === index ? 'text-[#ea4037]' : 'text-slate-800'}`}>{item.q}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180 text-[#ea4037]' : 'text-slate-400'}`} />
              </button>
              {openIndex === index && <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-red-100/30 pt-4">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
