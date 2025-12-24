
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
    <section id="contact-form" className="py-24 px-6 bg-white">
      <div className="max-w-[1156px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10 reveal-on-scroll">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">شروع همکاری</h2>
              <p className="text-slate-600 leading-relaxed">
                تیم فروش سازمانی ما آماده پاسخگویی به تمام سوالات شماست. فرم را پر کنید تا در کمتر از ۲ ساعت با شما تماس بگیریم.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:09120912408" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#ea4037] shadow-sm group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">مشاوره تلفنی</div>
                  <div className="text-2xl font-black text-slate-900 dir-ltr">۰۹۱۲۰۹۱۲۴۰۸</div>
                </div>
              </a>

              <a href="mailto:info@ttshahr.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#ea4037] shadow-sm group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">ایمیل سازمانی</div>
                  <div className="text-xl font-bold text-slate-900 dir-ltr">info@ttshahr.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="lg:col-span-3 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-8">اطلاعات خود را وارد کنید</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block mr-1">نام و نام‌خانوادگی</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:border-[#ea4037] focus:ring-1 focus:ring-[#ea4037] focus:outline-none transition-all" 
                      placeholder="مثال: علی محمدی"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block mr-1">نام سازمان</label>
                    <input 
                      type="text" 
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:border-[#ea4037] focus:ring-1 focus:ring-[#ea4037] focus:outline-none transition-all" 
                      placeholder="مثال: شرکت فولاد..."
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block mr-1">شماره موبایل</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 dir-ltr text-left focus:border-[#ea4037] focus:ring-1 focus:ring-[#ea4037] focus:outline-none transition-all" 
                      placeholder="0912..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block mr-1">تعداد پرسنل</label>
                    <div className="relative">
                      <select 
                        name="count"
                        value={formData.count}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:border-[#ea4037] focus:ring-1 focus:ring-[#ea4037] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="کمتر از ۵۰ نفر">کمتر از ۵۰ نفر</option>
                        <option value="۵۰ تا ۲۰۰ نفر">۵۰ تا ۲۰۰ نفر</option>
                        <option value="۲۰۰ تا ۵۰۰ نفر">۲۰۰ تا ۵۰۰ نفر</option>
                        <option value="بیش از ۵۰۰ نفر">بیش از ۵۰۰ نفر</option>
                      </select>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#ea4037] text-white py-4 rounded-xl font-bold hover:bg-[#d1352d] transition-all shadow-lg shadow-red-500/20 btn-hover-effect text-lg">
                    دریافت مشاوره رایگان
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
