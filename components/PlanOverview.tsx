
import React from 'react';

const ProductExplainer: React.FC = () => (
  <section id="overview" className="py-24 px-6 relative bg-white">
    <div className="max-w-[1156px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">سفر کارت چیست؟</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              سفر کارت یک راهکار رفاهی/باشگاه مشتریان برای سازمان‌هاست که به کمک آن می‌توانید برای کارمندان یا مشتریان منتخب، اعتبار سفر تعریف کنید تا برای خرید خدمات گردشگری استفاده کنند.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-black bg-slate-50 p-6 rounded-2xl border-r-4 border-brand-red">
              سازمان سیاست‌ها را تعیین می‌کند (سقف اعتبار، دوره شارژ، گروه‌بندی افراد و قوانین مصرف) و تیم ما اجرای عملیاتی و پشتیبانی را انجام می‌دهد.
            </p>
          </div>
        </div>
        <div className="reveal-on-scroll delay-150">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-slate-900">
             <img src="/state-airline-f45c55b2.svg" alt="TTShahr Platform" className="absolute inset-0 w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                   <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductExplainer;
