
import React, { useState } from 'react';

const SafarCard: React.FC = () => {
  // از تصاویر آنلاین استفاده می‌کنیم تا مطمئن شویم در پیش‌نمایش دیده می‌شوند.
  // وقتی فایل‌های خود را آپلود کردید، این آدرس‌ها را به './safarcards/01.jpg' و... تغییر دهید.
  const cards = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", // تصویر هواپیما
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", // تصویر طبیعت
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"  // تصویر جاده
  ];

  // مدیریت ترتیب کارت‌ها (ایندکس‌ها)
  const [indices, setIndices] = useState([0, 1, 2]);

  const handleRotate = () => {
    setIndices((prev) => {
      const newOrder = [...prev];
      const first = newOrder.shift(); // برداشتن اولی
      if (first !== undefined) newOrder.push(first); // بردن به ته لیست
      return newOrder;
    });
  };

  return (
    <div className="relative w-full max-w-[420px] aspect-[1.586] mx-auto perspective-1000 group cursor-pointer select-none" onClick={handleRotate}>
      
      {/* هاله نور قرمز جذاب پشت کارت‌ها */}
      <div className="absolute inset-0 bg-brand-red blur-[90px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full -z-10 animate-pulse"></div>

      {/* رندر کردن کارت‌ها */}
      {cards.map((src, originalIndex) => {
        // پیدا کردن موقعیت فعلی کارت
        const position = indices.indexOf(originalIndex);
        const isFront = position === 0;
        
        // تنظیم Z-index و استایل‌ها
        const zIndex = 30 - (position * 10);
        const scale = 1 - (position * 0.08); // کارت‌های عقب کوچک‌تر
        const translateY = position * 14; // کارت‌های عقب پایین‌تر
        const rotateX = isFront ? 0 : 5; // کمی چرخش برای کارت‌های عقب
        
        return (
          <div
            key={originalIndex}
            className="absolute inset-0 w-full h-full rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              zIndex: zIndex,
              transform: `translateY(${translateY}%) scale(${scale}) rotateX(${rotateX}deg)`,
              opacity: isFront ? 1 : 1 - (position * 0.3),
              filter: isFront ? 'none' : `blur(${position * 1}px) brightness(${1 - position * 0.2})`,
              transformOrigin: 'bottom center'
            }}
          >
            {/* بدنه کارت */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800">
                <img 
                  src={src} 
                  alt={`Card ${originalIndex}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1a1a1a/FFF?text=Image+Load+Error';
                  }}
                />
                
                {/* لایه گرادینت تیره روی عکس برای خوانایی بهتر متن احتمالی */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                {/* افکت شیشه‌ای و براق (Shine) روی کارت اول */}
                {isFront && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" 
                         style={{ transform: 'skewX(-20deg) translateX(-100%)', animation: 'shine 2s infinite' }}>
                    </div>
                    {/* رفلکشن ثابت */}
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/10 to-transparent rotate-45 pointer-events-none"></div>
                  </>
                )}
                
                {/* لوگو یا متن روی کارت (اختیاری برای زیبایی) */}
                <div className="absolute bottom-4 right-5 text-white text-right">
                  <div className="text-[10px] opacity-80 font-light tracking-widest uppercase">Travel Card</div>
                  <div className="text-lg font-black tracking-tight">VIP ACCESS</div>
                </div>
            </div>
          </div>
        );
      })}
      
      {/* دکمه راهنما در پایین */}
      <div className="absolute -bottom-16 left-0 right-0 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur text-slate-600 text-xs font-bold shadow-sm cursor-pointer hover:bg-white transition-colors">
          <svg className="w-4 h-4 text-brand-red animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
          برای مشاهده کارت‌های بعدی کلیک کنید
        </span>
      </div>
    </div>
  );
};

export default SafarCard;
