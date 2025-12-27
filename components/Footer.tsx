
import React from 'react';
import { CONTACT_INFO, NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src="/logo_tt.svg" alt="تی تی شهر" className="h-12 brightness-0 invert opacity-90" />
            <p className="text-slate-400 text-sm leading-relaxed font-medium">ما تجربه سفر را برای پرسنل شما لذت‌بخش و مدیریت آن را برای سازمان شفاف می‌کنیم.</p>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-brand-red pr-3">تماس با ما</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>ایمیل: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-red uppercase">{CONTACT_INFO.email}</a></li>
              <li className="dir-ltr text-right">پشتیبانی: <a href={`tel:${CONTACT_INFO.supportMob}`} className="hover:text-brand-red">{CONTACT_INFO.supportMobDisplay}</a></li>
              <li className="dir-ltr text-right">دفتر مرکزی: <a href={`tel:${CONTACT_INFO.officeTel}`} className="hover:text-brand-red">{CONTACT_INFO.officeTelDisplay}</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-slate-600 pr-3">دسترسی سریع</h4>
            <nav className="flex flex-col gap-3 text-slate-400 text-sm font-bold">
              {NAVIGATION.map(link => <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>)}
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-slate-600 pr-3">نمادهای اعتماد</h4>
            <div className="flex flex-wrap gap-3 bg-white/5 p-4 rounded-2xl">
              <div className="h-12 w-12 bg-white rounded-lg p-1 flex items-center justify-center"><img src="/Enamad.svg" alt="enamad" className="max-h-full" /></div>
              <div className="h-12 w-12 bg-white rounded-lg p-1 flex items-center justify-center"><img src="/Samandehi.svg" alt="samandehi" className="max-h-full" /></div>
              <div className="h-12 w-12 bg-white rounded-lg p-1 flex items-center justify-center"><img src="/BankShahr.svg" alt="bank" className="max-h-full" /></div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{CONTACT_INFO.address}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-[11px] font-bold">
          &copy; {new Date().getFullYear()} TTShahr Travel Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;