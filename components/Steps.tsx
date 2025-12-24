
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'نیازسنجی', desc: 'مشاوره رایگان و تعیین بودجه و تعداد نفرات.' },
    { num: '02', title: 'عقد قرارداد', desc: 'توافق روی مدل همکاری و طراحی کارت اختصاصی.' },
    { num: '03', title: 'صدور و تحویل', desc: 'تحویل فیزیکی یا دیجیتال کارت‌ها به سازمان.' },
    { num: '04', title: 'لذت سفر', desc: 'شروع استفاده پرسنل از خدمات گردشگری.' },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white relative overflow-hidden">
        {/* BG Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-slate-50 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1156px] mx-auto relative z-10">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-16">مسیر فعال‌سازی</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Connector Line */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-1/2 w-full h-[2px] bg-slate-200 -z-10"></div>
              )}
              
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#ea4037] flex items-center justify-center text-xl font-black text-[#ea4037] shadow-lg mb-6 group-hover:bg-[#ea4037] group-hover:text-white transition-colors">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
