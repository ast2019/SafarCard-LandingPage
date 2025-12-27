
import React from 'react';
import { BENEFITS } from '../constants';
import * as Icons from './Icons';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1156px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4">مزایای <span className="text-brand-red">سازمانی</span></h2>
          <p className="text-slate-500 font-bold">چرا سازمان‌های پیشرو تی‌تی‌شهر را انتخاب می‌کنند؟</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.CheckCircleIcon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-6">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;