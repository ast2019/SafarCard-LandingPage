
import React from 'react';

const Footer: React.FC = () => {
  const LogoImage = "/logo_tt.svg";
  
  // Placeholders for logos (Ideally replace with transparent white versions)
  const BankShahrLogo = "/BankShahr.svg";
  const EnamadLogo = "/Enamad.svg";
  const SamandehiLogo = "/Samandehi.svg";
  const MosaferLogo = "/mosafer1.svg";
  const CaoLogo = "/al.svg";

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-8 overflow-hidden border-t border-white/5">
      <div className="max-w-[1156px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-10">
            <div className="inline-block">
              <img 
                src={LogoImage}
                alt="تی تی شهر" 
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/220x80/ea4037/white?text=TTShahr';
                }}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              تی تی شهر، ارائه دهنده راهکارهای نوین رفاهی و گردشگری برای سازمان‌های پیشرو. با سفر کارت، تجربه متفاوتی از خدمات پرسنلی را خلق کنید.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="font-bold text-white">دسترسی سریع</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-[#ea4037] transition-colors">صفحه اصلی</a></li>
                <li><a href="#benefits" className="hover:text-[#ea4037] transition-colors">مزایا</a></li>
                <li><a href="#faq" className="hover:text-[#ea4037] transition-colors">سوالات متداول</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white">خدمات</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-[#ea4037] transition-colors">سفر کارت سازمانی</a></li>
                <li><a href="#" className="hover:text-[#ea4037] transition-colors">رزرو تور و هتل</a></li>
                <li><a href="#" className="hover:text-[#ea4037] transition-colors">خدمات CIP</a></li>
              </ul>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-4 space-y-6">
             <h4 className="font-bold text-white">دفتر مرکزی</h4>
             <p className="text-slate-400 text-sm leading-relaxed">
               تهران، خیابان استاد نجات الهی جنوبی، خیابان صارمی، پلاک ۴۶
             </p>
             <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Trust Logos - keeping them small and muted */}
                <img src={EnamadLogo} className="h-10 w-auto bg-white/10 rounded p-1" alt="Enamad" />
                <img src={SamandehiLogo} className="h-10 w-auto bg-white/10 rounded p-1" alt="Samandehi" />
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <div className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} TTShahr Platform. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
