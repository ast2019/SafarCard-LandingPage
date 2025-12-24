
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: "سفر کارت چیست؟", href: "#what-is-it" },
    { label: "مزایا", href: "#benefits" },
    { label: "نحوه اجرا", href: "#how-it-works" },
    { label: "پرسش‌ها", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1156px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Right: Logo & Nav */}
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center group">
            {/* Using a brightened logo or filter for dark mode */}
            <img 
              src="/logo_tt.svg" 
              alt="تی تی شهر" 
              className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/180x60/ea4037/white?text=TTShahr';
              }}
            />
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg text-sm font-bold transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Left: CTAs */}
        <div className="flex items-center gap-4">
          <a href="tel:09120912408" className="hidden lg:flex text-slate-300 hover:text-white font-bold text-sm gap-2 items-center">
            <span>۰۹۱۲۰۹۱۲۴۰۸</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          
          <button 
            onClick={scrollToContact}
            className="hidden sm:flex items-center justify-center bg-[#ea4037] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-900/20"
          >
            درخواست مشاوره
          </button>
          
          {/* Hamburger */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 bg-[#0f172a] border-b border-white/10 shadow-2xl transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-white text-lg font-medium py-2 border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:09120912408" className="text-white bg-white/5 p-3 rounded-xl text-center font-bold">
            تماس: ۰۹۱۲۰۹۱۲۴۰۸
          </a>
          <button 
            onClick={() => { scrollToContact(); setIsMenuOpen(false); }}
            className="bg-[#ea4037] text-white w-full py-3 rounded-xl text-center font-bold shadow-lg shadow-red-900/20"
          >
            ثبت درخواست
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
