
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'مشاوره و نیازسنجی', desc: 'تماس با ما و تعیین بودجه و تعداد کارت.' },
    { num: '02', title: 'طراحی اختصاصی', desc: 'درج لوگوی سازمان شما روی کارت‌ها.' },
    { num: '03', title: 'صدور و تحویل', desc: 'تحویل کارت‌ها در کمتر از ۳ روز کاری.' },
    { num: '04', title: 'شروع سفر', desc: 'فعال‌سازی آنی و استفاده در شبکه بانکی.' },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1156px] mx-auto relative z-10">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-20 reveal-on-scroll">
          مسیر ساده <span className="text-[#ea4037]">همکاری</span>
        </h2>
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 right-0 left-0 h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group reveal-on-scroll" style={{transitionDelay: `${idx * 150}ms`}}>
                <div className="w-20 h-20 rounded-2xl bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-2xl font-black text-[#ea4037] mb-6 group-hover:bg-[#ea4037] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm px-4 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
