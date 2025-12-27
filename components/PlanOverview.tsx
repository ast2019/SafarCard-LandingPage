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
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-slate-50 flex items-center justify-center p-8">
             {/* استفاده از لوگوی mosafer1.svg طبق درخواست */}
             <img src="/mosafer1.svg" alt="Mosafer Illustration" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductExplainer;