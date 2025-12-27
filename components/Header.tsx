
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "سفر کارت چیست؟", id: "what-is-it" },
    { label: "مزایا", id: "benefits" },
    { label: "نحوه اجرا", id: "how-it-works" },
    { label: "پرسش‌ها", id: "faq" },
    { label: "تماس", id: "contact-form" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1156px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center group">
            <img src="/logo_tt.svg" alt="تی تی شهر" className="h-10 w-auto opacity-90" />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-slate-600 hover:text-[#ea4037] text-sm font-bold transition-all">
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:info@ttshahr.com" className="hidden lg:block text-slate-600 hover:text-[#ea4037] font-bold text-sm">
            info@ttshahr.com
          </a>
          <button onClick={() => scrollToSection('contact-form')} className="bg-[#ea4037] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-500/20">
            درخواست مشاوره
          </button>
          <button onClick={toggleMenu} className="lg:hidden text-slate-800 p-2">
            {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-right text-slate-700 font-medium py-2 border-b border-slate-50">
              {link.label}
            </button>
          ))}
          <a href="mailto:info@ttshahr.com" className="text-[#ea4037] font-bold text-center py-2">info@ttshahr.com</a>
        </div>
      )}
    </header>
  );
};

export default Header;
