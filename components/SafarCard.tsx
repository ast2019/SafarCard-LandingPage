
import React, { useState } from 'react';

const SafarCard: React.FC = () => {
  // لیست تصاویر کارت‌ها
  const cards = [
    "/safarcards/01.jpg",
    "/safarcards/02.jpg",
    "/safarcards/03.jpg"
  ];

  // مدیریت ترتیب کارت‌ها (ایندکس‌ها)
  // [0, 1, 2] یعنی کارت اول رو، کارت دوم وسط، کارت سوم زیر
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
    <div className="relative w-full max-w-[400px] aspect-[1.586] mx-auto perspective-1000 group cursor-pointer" onClick={handleRotate}>
      
      {/* هاله نور قرمز پشت کارت‌ها */}
      <div className="absolute inset-0 bg-[#ea4037] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full -z-10"></div>

      {/* رندر کردن کارت‌ها بر اساس ترتیب */}
      {cards.map((src, originalIndex) => {
        // پیدا کردن موقعیت فعلی کارت در استک
        // position 0 = کارت رویی
        // position 1 = کارت وسط
        // position 2 = کارت زیری
        const position = indices.indexOf(originalIndex);
        
        // استایل‌های داینامیک بر اساس موقعیت
        const isFront = position === 0;
        const isMiddle = position === 1;
        
        // تنظیم Z-index: کارت رویی بیشترین مقدار
        const zIndex = 30 - (position * 10);
        
        // تنظیم Transform: کارت‌های عقب‌تر کوچک‌تر می‌شوند و پایین‌تر می‌روند
        const scale = 1 - (position * 0.07); // 1, 0.93, 0.86
        const translateY = position * 12; // 0px, 12px, 24px
        const opacity = isFront ? 1 : (isMiddle ? 0.7 : 0.4); // شفافیت کارت‌های عقب‌تر

        return (
          <div
            key={originalIndex}
            className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              zIndex: zIndex,
              transform: `translateY(${translateY}%) scale(${scale})`,
              opacity: opacity,
              filter: isFront ? 'none' : 'brightness(0.5) blur(0.5px)', // تاریک کردن کارت‌های عقب
            }}
          >
            {/* کانتینر عکس با بوردر و گردی */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                <img 
                  src={src} 
                  alt={`Safar Card ${originalIndex + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x380/1a1a1a/FFF?text=Card+Image';
                  }}
                />
                
                {/* افکت براق (Shine Effect) فقط روی کارت اول با حرکت موس یا ثابت */}
                {isFront && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                )}
                
                {/* رفلکشن ثابت برای زیبایی */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        );
      })}
      
      {/* راهنمای کلیک (اختیاری) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        برای مشاهده طرح‌های دیگر کلیک کنید
      </div>
    </div>
  );
};

export default SafarCard;
