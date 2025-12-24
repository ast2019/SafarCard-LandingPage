
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      q: "سفر کارت برای چه تعداد پرسنل قابل صدور است؟",
      a: "محدودیتی در تعداد وجود ندارد. از استارتاپ‌های ۱۰ نفره تا سازمان‌های چند هزار نفره می‌توانند از این خدمات استفاده کنند."
    },
    {
      q: "آیا می‌توان کارت را فقط برای خدمات خاصی محدود کرد؟",
      a: "بله، شما می‌توانید تعریف کنید که اعتبار کارت فقط برای رزرو هتل باشد، یا فقط تور، و یا برای تمام خدمات گردشگری باز باشد."
    },
    {
      q: "آیا امکان شارژ مجدد کارت‌ها وجود دارد؟",
      a: "بله، کارت‌ها قابلیت شارژ مجدد به صورت گروهی یا فردی را دارند و می‌توانند به عنوان پاداش مستمر استفاده شوند."
    },
    {
      q: "صدور کارت چقدر زمان می‌برد؟",
      a: "پس از عقد قرارداد و دریافت لیست پرسنل، فرآیند صدور کارت‌های دیجیتال آنی و کارت‌های فیزیکی بین ۳ تا ۷ روز کاری زمان می‌برد."
    },
    {
      q: "آیا این اعتبار قابلیت نقد شدن دارد؟",
      a: "خیر، اعتبار سفر کارت صرفاً برای خرید خدمات از پلتفرم تی‌تی‌شهر قابل استفاده است و به همین دلیل تضمین‌کننده هزینه شدن بودجه رفاهی در مسیر درست است."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-12">سوالات متداول</h2>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all overflow-hidden ${openIndex === index ? 'border-[#ea4037] bg-red-50/50' : 'border-slate-200 bg-white'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right"
              >
                <span className={`text-base lg:text-lg font-bold transition-colors ${openIndex === index ? 'text-[#ea4037]' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#ea4037]' : 'text-slate-400'}`}>
                   <ChevronDownIcon className="w-5 h-5" />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-red-100/50 pt-4">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
