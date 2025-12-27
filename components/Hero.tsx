
import React, { useState } from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon, PhoneIcon } from './Icons';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for capturing email
    console.log("Email captured:", email);
  };

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-right space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              سفر کارت <span className="text-brand-red">تی‌تی‌شهر</span>؛<br/>
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-700 block mt-2">کارت اختصاصی سفر برای سازمان‌ها</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              برای کارمندان یا مشتریان ویژه‌تان کارت سفر با اعتبار و قوانین دلخواه تعریف می‌کنیم؛ مدیریت ساده برای HR و تجربه سفر واقعی برای افراد.
            </p>

            <ul className="space-y-3 text-sm font-bold text-slate-700 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> تعریف سقف اعتبار و قوانین مصرف برای هر نفر یا هر گروه</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> گزارش‌گیری شفاف و کنترل دقیق بودجه سازمان</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-brand-red" /> صدور کارت با برند سازمان + پشتیبانی اجرای طرح</li>
            </ul>

            <div className="max-w-xl mx-auto lg:mx-0 pt-4">
              <form onSubmit={handleSubmit} className="relative group">
                <div className="relative flex flex-col sm:flex-row p-2 bg-white rounded-2xl border border-slate-200 shadow-xl gap-2">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com" 
                    className="flex-1 bg-transparent px-4 py-3 text-slate-900 focus:outline-none font-medium dir-ltr text-left"
                  />
                  <button type="submit" className="bg-brand-red text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-red/90 transition-all whitespace-nowrap shadow-md">
                    دریافت کاتالوگ و شرایط همکاری
                  </button>
                </div>
              </form>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-500 font-medium px-2">
                بعد از ثبت ایمیل، کاتالوگ و نمونه کارت ارسال می‌شود و کارشناس در ساعات اداری تماس می‌گیرد (بدون پیام‌های مزاحم).
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-xs font-bold text-slate-500 border-t border-slate-100 pt-6">
                <a href={`tel:${CONTACT_INFO.supportMob}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
                  <PhoneIcon className="w-4 h-4" /> تماس پشتیبانی: {CONTACT_INFO.supportMobDisplay}
                </a>
                <a href={`tel:${CONTACT_INFO.officeTel}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
                  <PhoneIcon className="w-4 h-4" /> تلفن دفتر: {CONTACT_INFO.officeTelDisplay}
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-brand-red transition-colors uppercase">
                  <span className="text-slate-300">|</span> ایمیل: {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-100/30 rounded-full blur-3xl -z-10"></div>
            <SafarCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
