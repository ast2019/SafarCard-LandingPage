
import React from 'react';

const ProductExplainer: React.FC = () => (
  <section id="what-is-it" className="py-24 px-6 relative bg-white">
    <div className="max-w-[1156px] mx-auto">
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">سفر کارت چیست؟</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            سفر کارت یک راهکار رفاهی/باشگاه مشتریان برای سازمان‌هاست که به کمک آن می‌توانید برای کارمندان یا مشتریان منتخب، اعتبار سفر تعریف کنید تا برای خرید خدمات گردشگری استفاده کنند.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed font-medium bg-slate-50 p-6 rounded-2xl border-r-4 border-[#ea4037]">
            سازمان سیاست‌ها را تعیین می‌کند (سقف اعتبار، دوره شارژ، گروه‌بندی افراد و قوانین مصرف) و تیم ما اجرای عملیاتی و پشتیبانی را انجام می‌دهد.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductExplainer;
