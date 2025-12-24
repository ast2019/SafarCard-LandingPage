
import React from 'react';
import { CardIcon, UsersIcon } from './Icons';

const ProductExplainer: React.FC = () => (
  <section id="what-is-it" className="py-24 px-6 relative bg-white">
    <div className="max-w-[1156px] mx-auto">
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">یک کارت، هزاران مقصد</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          سفر کارت ابزاری هوشمند برای مدیریت بودجه‌های رفاهی است. 
          به جای قراردادهای پیچیده با هتل‌ها، یک کارت بانکی عضو شتاب به پرسنل خود بدهید که فقط در شبکه گردشگری (تور، هتل، بلیط) قابل استفاده است.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Card 1 */}
        <div className="group relative bg-slate-50 rounded-[2.5rem] p-10 hover:bg-[#fff0f0] transition-colors duration-500 border border-slate-100 hover:border-red-100 reveal-on-scroll">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
            <CardIcon className="w-10 h-10 text-slate-900 group-hover:text-[#ea4037] transition-colors" />
          </div>
          <div className="mt-24">
            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-[#ea4037] transition-colors">قدرت خرید نامحدود</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-green-500">✓</div>
                <div>
                  <strong className="block text-slate-900 mb-1">عضو شبکه شتاب</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">قابل استفاده در تمام درگاه‌های آنلاین و دستگاه‌های پوز مرتبط با گردشگری.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-green-500">✓</div>
                <div>
                  <strong className="block text-slate-900 mb-1">کیف پول لایه باز</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">امکان شارژ مجدد توسط سازمان یا خود پرسنل برای خریدهای بزرگتر.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-slate-50 rounded-[2.5rem] p-10 hover:bg-[#f0f9ff] transition-colors duration-500 border border-slate-100 hover:border-blue-100 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
            <UsersIcon className="w-10 h-10 text-slate-900 group-hover:text-blue-600 transition-colors" />
          </div>
          <div className="mt-24">
            <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">مدیریت هوشمند سازمانی</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-green-500">✓</div>
                <div>
                  <strong className="block text-slate-900 mb-1">پنل گزارش‌گیری آنی</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">مشاهده وضعیت مصرف بودجه و تراکنش‌ها در لحظه برای مدیران HR.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-green-500">✓</div>
                <div>
                  <strong className="block text-slate-900 mb-1">شخصی‌سازی کامل</strong>
                  <span className="text-slate-600 text-sm leading-relaxed">طراحی بدنه کارت با هویت بصری و لوگوی سازمان شما.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ProductExplainer;
