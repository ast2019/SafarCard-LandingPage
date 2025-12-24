
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'نیازسنجی', desc: 'مشاوره رایگان و تعیین بودجه و تعداد نفرات.' },
    { num: '02', title: 'عقد قرارداد', desc: 'توافق روی مدل همکاری و طراحی کارت اختصاصی.' },
    { num: '03', title: 'صدور و تحویل', desc: 'تحویل فیزیکی یا دیجیتال کارت‌ها به سازمان.' },
    { num: '04', title: 'لذت سفر', desc: 'شروع استفاده پرسنل از خدمات گردشگری.' },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#0f172a] relative overflow-hidden">
        {/* BG Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#ea4037]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1156px] mx-auto relative z-10">
        <h2 className="text-3xl font-black text-white text-center mb-16">مسیر فعال‌سازی</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-1/2 w-full h-[2px] bg-gradient-to-l from-[#ea4037] to-transparent opacity-30 -z-10"></div>
              )}
              
              <div className="w-16 h-16 rounded-full bg-[#0b1120] border-2 border-[#ea4037] flex items-center justify-center text-xl font-black text-white shadow-[0_0_20px_rgba(234,64,55,0.4)] mb-6">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
