
import React from 'react';
import { CardIcon, UsersIcon } from './Icons';

const ProductExplainer: React.FC = () => (
  <section id="what-is-it" className="py-20 px-6 relative border-t border-white/5 bg-[#0b1120]/50">
    <div className="max-w-[1156px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">سفر کارت چیست؟</h2>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          سفر کارت یک ابزار نوین پرداخت و رفاهی است که به سازمان‌ها امکان می‌دهد بودجه‌های رفاهی، پاداش‌ها یا هدایای مناسبتی را به صورت اعتبار سفر در اختیار پرسنل قرار دهند.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#ea4037]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CardIcon className="w-32 h-32" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#ea4037] rounded-full"></span>
            ویژگی‌های کلیدی کارت
          </h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span><strong className="text-white">فیزیکی و دیجیتال:</strong> صدور کارت فیزیکی با نام پرسنل و دسترسی آنلاین.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span><strong className="text-white">قابلیت شارژ مجدد:</strong> امکان شارژ گروهی برای مناسبت‌های مختلف.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span><strong className="text-white">شبکه پذیرندگان:</strong> قابل استفاده برای خرید تور، هتل و بلیط در تی‌تی‌شهر.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#ea4037]/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <UsersIcon className="w-32 h-32" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#ea4037] rounded-full"></span>
            مناسب برای
          </h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span>سازمان‌ها و شرکت‌های بزرگ جهت امور رفاهی.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span>استارتاپ‌ها برای پاداش‌های فصلی و Incentive.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-[#ea4037] rounded-full mt-2 shrink-0"></span>
              <span>برندها جهت اهدا به مشتریان وفادار (Loyalty Card).</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProductExplainer;
