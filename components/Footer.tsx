
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-[1156px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <img src="/logo_tt.svg" alt="تی تی شهر" className="h-12 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              تی‌تی‌شهر ارائه دهنده راهکارهای نوین سفر و رفاهی سازمانی. ما تجربه سفر را برای پرسنل شما لذت‌بخش و مدیریت آن را برای سازمان شفاف می‌کنیم.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">تماس با ما</h4>
            <a href="mailto:info@ttshahr.com" className="block text-slate-400 hover:text-[#ea4037] transition-colors">info@ttshahr.com</a>
            <p className="text-slate-400 text-sm">تهران، خیابان استاد نجات الهی جنوبی، خیابان صارمی، پلاک ۴۶</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">دسترسی سریع</h4>
            <nav className="flex flex-col gap-2">
              <a href="#benefits" className="text-slate-400 text-sm hover:text-white transition-colors">مزایای سازمانی</a>
              <a href="#faq" className="text-slate-400 text-sm hover:text-white transition-colors">سوالات متداول</a>
              <a href="#contact-form" className="text-slate-400 text-sm hover:text-white transition-colors">درخواست دمو</a>
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-xs font-medium">
          © {new Date().getFullYear()} تمام حقوق برای پلتفرم تی‌تی‌شهر محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
