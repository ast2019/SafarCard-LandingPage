
import React, { useState } from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon, PhoneIcon } from './Icons';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`کاتالوگ به زودی برای ${email} ارسال خواهد شد.`);
  };

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
            <div className="max-w-xl mx-auto lg:mx-0 pt-4">
              <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row p-2 bg-white rounded-2xl border border-slate-200 shadow-xl gap-2">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" className="flex-1 bg-transparent px-4 py-3 text-brand-dark outline-none dir-ltr text-left" />
                <button type="submit" className="bg-brand-red text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all whitespace-nowrap">دریافت کاتالوگ و شرایط</button>
              </form>
              <p className="mt-3 text-[11px] text-slate-500 font-medium">بعد از ثبت ایمیل، کاتالوگ ارسال شده و کارشناس با شما تماس می‌گیرد (بدون پیام مزاحم).</p>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-slate-500 border-t pt-6">
                <a href={`tel:${CONTACT_INFO.supportMob}`} className="flex items-center gap-2 hover:text-brand-red transition-colors font-mono"><PhoneIcon className="w-4 h-4" /> {CONTACT_INFO.supportMobDisplay}</a>
                <a href={`tel:${CONTACT_INFO.officeTel}`} className="flex items-center gap-2 hover:text-brand-red transition-colors font-mono"><PhoneIcon className="w-4 h-4" /> {CONTACT_INFO.officeTelDisplay}</a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-red transition-colors border-r pr-4 uppercase">{CONTACT_INFO.email}</a>
              </div>
            </div>
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