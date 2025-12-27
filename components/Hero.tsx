
import React, { useState } from 'react';
import SafarCard from './SafarCard';
import { CheckCircleIcon } from './Icons';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleCatalogRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('لطفاً یک ایمیل معتبر سازمانی وارد کنید.');
      return;
    }
    setError('');
    const subject = encodeURIComponent('درخواست کاتالوگ و شرایط همکاری سفر کارت');
    window.location.href = `mailto:info@ttshahr.com?subject=${subject}&body=درخواست کاتالوگ برای ایمیل: ${email}`;
  };

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-right space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              سفر کارت <span className="text-[#ea4037]">تی‌تی‌شهر</span>؛<br/>
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-700 block mt-2">کارت اختصاصی سفر برای سازمان‌ها</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              برای کارمندان یا مشتریان ویژه‌تان کارت سفر با اعتبار و قوانین دلخواه تعریف می‌کنیم؛ مدیریت ساده برای HR و تجربه سفر واقعی برای افراد.
            </p>

            <ul className="space-y-3 text-sm font-bold text-slate-700 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> تعریف سقف اعتبار و قوانین مصرف برای هر نفر یا هر گروه</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> گزارش‌گیری شفاف و کنترل دقیق بودجه سازمان</li>
              <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-[#ea4037]" /> صدور کارت با برند سازمان + پشتیبانی اجرای طرح</li>
            </ul>

            <div className="max-w-md mx-auto lg:mx-0 pt-4">
              <form onSubmit={handleCatalogRequest} className="relative group">
                <div className="relative flex flex-col sm:flex-row p-2 bg-white rounded-2xl border border-slate-200 shadow-xl gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com" 
                    className="flex-1 bg-transparent px-4 py-3 text-slate-900 focus:outline-none font-medium dir-ltr text-left"
                  />
                  <button type="submit" className="bg-[#ea4037] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d1352d] transition-all whitespace-nowrap shadow-md">
                    دریافت کاتالوگ و شرایط همکاری
                  </button>
                </div>
                {error && <p className="text-red-500 text-xs mt-2 font-bold">{error}</p>}
              </form>
              <p className="mt-4 text-[11px] leading-relaxed text-slate-500 font-medium">
                بعد از ثبت ایمیل، کاتالوگ و نمونه کارت ارسال می‌شود و کارشناس در ساعات اداری تماس می‌گیرد (بدون پیام‌های مزاحم).
              </p>
              <div className="mt-6">
                <a href="mailto:info@ttshahr.com" className="text-slate-500 hover:text-[#ea4037] text-xs font-bold underline transition-colors">
                  ارسال ایمیل مستقیم به info@ttshahr.com
                </a>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-100/30 rounded-full blur-3xl -z-10"></div>
            <SafarCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
