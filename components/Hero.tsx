
import React from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight">
              سفر کارت <span className="text-brand-red">تی‌تی‌شهر</span>؛<br/>
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-700 block mt-2">کارت اختصاصی سفر برای سازمان‌ها</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              برای کارمندان یا مشتریان ویژه‌تان کارت سفر با اعتبار و قوانین دلخواه تعریف می‌کنیم؛ مدیریت ساده برای HR و تجربه سفر واقعی برای افراد.
            </p>
            <ul className="space-y-3 text-sm font-bold text-slate-700 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> تعریف سقف اعتبار و قوانین مصرف برای هر نفر</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> گزارش‌گیری شفاف و کنترل دقیق بودجه سازمان</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> صدور کارت با برند سازمان + پشتیبانی کامل</li>
            </ul>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/10 rounded-full blur-[100px] -z-10"></div>
            <SafarCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
