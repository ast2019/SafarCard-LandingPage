
import React from 'react';
import { ChartIcon, BuildingIcon } from './Icons';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "آرامش ذهنی HR",
      desc: "خداحافظی با فاکتورهای پراکنده و قراردادهای متعدد. یک قرارداد، تمام خدمات.",
      icon: <BuildingIcon className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "کنترل دقیق بودجه",
      desc: "تخصیص اعتبار مشخص به هر سطح سازمانی و جلوگیری از هزینه‌های پیش‌بینی نشده.",
      icon: <ChartIcon className="w-6 h-6" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "رضایت واقعی پرسنل",
      desc: "طبق آمار، ۸۵٪ کارکنان آزادی انتخاب مقصد سفر را به تورهای سازمانی ترجیح می‌دهند.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "پوشش سراسری",
      desc: "اتصال به شبکه ۱۲۰۰ هتل و ۴۰۰ ایرلاین داخلی و خارجی بدون واسطه.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "برندینگ کارفرمایی",
      desc: "ارائه کارتی لوکس با نام پرسنل و لوگوی سازمان، حس ارزشمندی را منتقل می‌کند.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "پشتیبانی VIP",
      desc: "تیم اختصاصی کانسیرج (Concierge) برای رزرو و هماهنگی سفرهای مدیران ارشد.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1156px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
          <div className="text-center md:text-right w-full md:w-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900">چرا <span className="text-[#ea4037]">تی‌تی‌شهر</span>؟</h2>
            <p className="text-slate-500 mt-3 font-medium">ارزش‌هایی که با ما تجربه می‌کنید</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-slate-200 rounded-full mb-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-slate-100 reveal-on-scroll"
              style={{transitionDelay: `${idx * 100}ms`}}
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
