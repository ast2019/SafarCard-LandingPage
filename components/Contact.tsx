
import React, { useState } from 'react';
import { PhoneIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    count: 'کمتر از ۵۰ نفر'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`درخواست مشاوره سازمانی - ${formData.organization}`);
    const body = encodeURIComponent(
      `با سلام،\n\n` +
      `درخواست مشاوره برای سفر کارت با مشخصات زیر:\n\n` +
      `👤 نام و نام‌خانوادگی: ${formData.name}\n` +
      `🏢 نام سازمان: ${formData.organization}\n` +
      `📱 شماره تماس: ${formData.phone}\n` +
      `👥 تعداد پرسنل: ${formData.count}\n`
    );
    window.location.href = `mailto:info@ttshahr.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="py-20 px-6 bg-[#0b1120]">
      <div className="max-w-[1156px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white">تماس با واحد سازمانی</h2>
            <p className="text-slate-400 leading-relaxed">
              تیم فروش سازمانی تی‌تی‌شهر آماده ارائه مشاوره و پاسخگویی به سوالات شماست. برای دریافت سریع اطلاعات می‌توانید مستقیماً تماس بگیرید یا ایمیل ارسال کنید.
            </p>
            
            <div className="space-y-6">
              {/* Phone */}
              <a href="tel:09120912408" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#ea4037]/10 rounded-xl flex items-center justify-center text-[#ea4037] group-hover:bg-[#ea4037] group-hover:text-white transition-all">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">تلفن مستقیم</div>
                  <div className="text-2xl font-black text-white dir-ltr group-hover:text-[#ea4037] transition-colors">۰۹۱۲۰۹۱۲۴۰۸</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@ttshahr.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#ea4037]/10 rounded-xl flex items-center justify-center text-[#ea4037] group-hover:bg-[#ea4037] group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">ایمیل سازمانی</div>
                  <div className="text-xl font-bold text-white dir-ltr group-hover:text-[#ea4037] transition-colors">info@ttshahr.com</div>
                </div>
              </a>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-sm text-white font-bold mb-2">ساعات پاسخگویی</div>
                <div className="text-slate-400 text-sm">شنبه تا چهارشنبه: ۹ صبح تا ۱۷ عصر</div>
                <div className="text-slate-400 text-sm mt-1">پنج‌شنبه: ۹ صبح تا ۱۳ ظهر</div>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6">ثبت درخواست مشاوره</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 block mr-1">نام و نام‌خانوادگی</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#ea4037] focus:outline-none transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 block mr-1">نام سازمان / شرکت</label>
                  <input 
                    type="text" 
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#ea4037] focus:outline-none transition-colors" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-slate-400 block mr-1">شماره موبایل</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white dir-ltr text-left focus:border-[#ea4037] focus:outline-none transition-colors" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-400 block mr-1">تعداد پرسنل (تقریبی)</label>
                <select 
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:border-[#ea4037] focus:outline-none transition-colors appearance-none"
                >
                  <option className="text-black" value="کمتر از ۵۰ نفر">کمتر از ۵۰ نفر</option>
                  <option className="text-black" value="۵۰ تا ۲۰۰ نفر">۵۰ تا ۲۰۰ نفر</option>
                  <option className="text-black" value="۲۰۰ تا ۵۰۰ نفر">۲۰۰ تا ۵۰۰ نفر</option>
                  <option className="text-black" value="بیش از ۵۰۰ نفر">بیش از ۵۰۰ نفر</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#ea4037] text-white py-4 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-900/20">
                  ارسال درخواست
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
