
import React from 'react';

const Footer: React.FC = () => {
  const LogoImage = "/logo_tt.svg";
  
  // Placeholders for logos
  const EnamadLogo = "/Enamad.svg";
  const SamandehiLogo = "/Samandehi.svg";

  return (
    <footer className="relative bg-[#0f172a] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1156px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block">
              <img 
                src={LogoImage}
                alt="تی تی شهر" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/220x80/ea4037/white?text=TTShahr';
                }}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              تی تی شهر، پلتفرم جامع خدمات گردشگری و رفاهی. ما با ارائه راهکارهای نوین سازمانی، تجربه سفر را برای پرسنل شما لذت‌بخش‌تر و برای سازمان شما ساده‌تر می‌کنیم.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 5.432.221v8.085h5v-9.021c0-6.968-7.792-6.615-10.464-3.24v-2.739z"/></svg>
               </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 text-lg">لینک‌های مفید</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#ea4037] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>درباره ما</a></li>
              <li><a href="#benefits" className="hover:text-[#ea4037] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>مزایای سازمانی</a></li>
              <li><a href="#faq" className="hover:text-[#ea4037] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>پرسش‌های متداول</a></li>
              <li><a href="#" className="hover:text-[#ea4037] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>قوانین و مقررات</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-6">
             <h4 className="font-bold text-white mb-2 text-lg">دفتر مرکزی</h4>
             <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
               <svg className="w-5 h-5 text-[#ea4037] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               تهران، خیابان استاد نجات الهی جنوبی، خیابان صارمی، پلاک ۴۶
             </p>
             <div className="flex gap-4 pt-4">
                <img src={EnamadLogo} className="h-16 w-auto bg-white rounded-lg p-2 opacity-90 hover:opacity-100 transition-opacity" alt="Enamad" />
                <img src={SamandehiLogo} className="h-16 w-auto bg-white rounded-lg p-2 opacity-90 hover:opacity-100 transition-opacity" alt="Samandehi" />
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} تمام حقوق برای پلتفرم تی‌تی‌شهر محفوظ است.
          </div>
          <div className="text-xs text-slate-600 font-mono">
            Designed for Business
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
