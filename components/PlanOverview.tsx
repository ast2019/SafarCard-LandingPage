
import React from 'react';

const ProductExplainer: React.FC = () => (
  <section id="overview" className="py-24 px-6 relative bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center reveal-on-scroll">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10">سفر کارت چیست؟</h2>
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            سفر کارت یک راهکار رفاهی و باشگاه مشتریان هوشمند برای سازمان‌هاست. به کمک این کارت، می‌توانید برای کارمندان یا مشتریان منتخب خود، اعتبار سفر تعریف کنید تا از آن برای خرید خدمات متنوع گردشگری استفاده کنند.
          </p>
          
          <div className="inline-block bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm text-right mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed font-bold border-r-4 border-brand-red pr-4">
              سازمان سیاست‌ها را تعیین می‌کند (سقف اعتبار، دوره شارژ، گروه‌بندی افراد و قوانین مصرف) و تیم ما اجرای عملیاتی و پشتیبانی را انجام می‌دهد.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductExplainer;
