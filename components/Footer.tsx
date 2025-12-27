
import React from 'react';
import { CONTACT_INFO, NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1 space-y-8">
            <img src="/logo_tt.svg" alt="تی تی شهر" className="h-12 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              تی‌تی‌شهر ارائه دهنده راهکارهای نوین سفر و رفاهی سازمانی. ما تجربه سفر را برای پرسنل شما لذت‌بخش و مدیریت آن را برای سازمان شفاف می‌کنیم.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-brand-red pr-3">تماس با ما</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="flex flex-col">
                <span className="text-slate-600 text-[10px] mb-1">ایمیل:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-red transition-colors uppercase">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 text-[10px] mb-1">موبایل پشتیبانی:</span>
                <a href={`tel:${CONTACT_INFO.supportMob}`} className="hover:text-brand-red transition-colors dir-ltr text-right">{CONTACT_INFO.supportMobDisplay}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 text-[10px] mb-1">تلفن دفتر:</span>
                <a href={`tel:${CONTACT_INFO.officeTel}`} className="hover:text-brand-red transition-colors dir-ltr text-right">{CONTACT_INFO.officeTelDisplay}</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-slate-700 pr-3">دسترسی سریع</h4>
            <nav className="flex flex-col gap-3 text-slate-400 text-sm font-bold">
              {NAVIGATION.map(link => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-lg border-r-4 border-slate-700 pr-3">نمادهای اعتماد</h4>
            <div className="flex flex-wrap gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
              <a href="#" className="h-14 w-14 bg-white rounded-xl p-2 flex items-center justify-center hover:scale-105 transition-transform">
                <img src="/Enamad.svg" alt="اینماد" className="max-h-full" />
              </a>
              <a href="#" className="h-14 w-14 bg-white rounded-xl p-2 flex items-center justify-center hover:scale-105 transition-transform">
                <img src="/Samandehi.svg" alt="ساماندهی" className="max-h-full" />
              </a>
              <div className="h-14 w-14 bg-white rounded-xl p-2 flex items-center justify-center">
                <img src="/BankShahr.svg" alt="بانک شهر" className="max-h-full" />
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[11px] font-bold tracking-wide uppercase">
            &copy; {new Date().getFullYear()} TTShahr Travel Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-[11px] font-bold">
            <a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a>
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
