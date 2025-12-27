
import React, { useState } from 'react';
import { CONTACT_INFO, NAVIGATION } from '../constants';
import { PhoneIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center">
            <img src="/logo_tt.svg" alt="تی تی شهر" className="h-10 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAVIGATION.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollToSection(link.href)}
                className="text-slate-600 hover:text-brand-red text-sm font-bold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex flex-col items-end ml-4 border-l border-slate-200 pl-4">
            <a href={`tel:${CONTACT_INFO.supportMob}`} className="text-brand-red font-black text-sm dir-ltr">
              {CONTACT_INFO.supportMobDisplay}
            </a>
            <span className="text-[10px] text-slate-400 font-bold uppercase">پشتیبانی ۲۴/۷</span>
          </div>
          
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-brand-red text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-red/90 transition-all shadow-lg shadow-red-500/20"
          >
            درخواست مشاوره
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {NAVIGATION.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-right text-slate-700 font-bold py-2 border-b border-slate-50 last:border-0">
              {link.label}
            </button>
          ))}
          <div className="flex justify-between items-center pt-4">
             <a href={`tel:${CONTACT_INFO.supportMob}`} className="flex items-center gap-2 text-brand-red font-bold dir-ltr">
               <PhoneIcon className="w-4 h-4" /> {CONTACT_INFO.supportMobDisplay}
             </a>
             <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 text-xs font-bold">{CONTACT_INFO.email}</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
