
import React, { useState } from 'react';
import { formatCurrency, convertToTomanText } from '../utils';

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(50000000);
  const [months, setMonths] = useState<number>(12);

  // تنظیمات وام (قابل تغییر بر اساس قوانین واقعی)
  const annualInterestRate = 0.23; // 23 درصد سالانه
  
  // محاسبه قسط به روش بانکی (PMT Formula)
  const calculateLoan = () => {
    const monthlyRate = annualInterestRate / 12;
    // فرمول: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = numerator / denominator;
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - amount;

    return {
      monthly: Math.round(monthlyPayment),
      total: Math.round(totalPayment),
      interest: Math.round(totalInterest)
    };
  };

  const { monthly, total } = calculateLoan();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
    <section className="py-20 px-6 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl font-black text-slate-900 mb-4">محاسبه اقساط سفر</h2>
          <p className="text-slate-500">بودجه سفر خود را انتخاب کنید و برنامه بازپرداخت را ببینید</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden reveal-on-scroll">
          <div className="grid md:grid-cols-2">
            
            {/* Left: Controls */}
            <div className="p-8 md:p-10 space-y-10">
              
              {/* Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-slate-700">مبلغ اعتبار</label>
                  <div className="text-[#ea4037] font-black text-lg bg-red-50 px-3 py-1 rounded-lg">
                    {formatCurrency(amount / 10)} <span className="text-xs font-medium">تومان</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="10000000" 
                  max="100000000" 
                  step="5000000" 
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ea4037]"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                  <span>۱۰ میلیون</span>
                  <span>۱۰۰ میلیون</span>
                </div>
                <div className="mt-2 text-center text-sm text-slate-500">
                  {convertToTomanText(amount / 10)}
                </div>
              </div>

              {/* Duration Buttons */}
              <div>
                <label className="block font-bold text-slate-700 mb-4">مدت بازپرداخت</label>
                <div className="grid grid-cols-4 gap-3">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-3 rounded-xl font-bold transition-all border-2 ${
                        months === m 
                          ? 'border-[#ea4037] bg-[#ea4037] text-white shadow-lg shadow-red-200' 
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {m} <span className="text-xs font-normal">ماه</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Results (Dark Theme) */}
            <div className="bg-[#0f172a] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#ea4037] opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10 space-y-8">
                <div>
                  <div className="text-slate-400 text-sm mb-1">مبلغ قسط ماهانه</div>
                  <div className="text-3xl lg:text-4xl font-black tracking-tight flex items-baseline gap-2">
                    {formatCurrency(monthly / 10)} 
                    <span className="text-lg font-medium text-slate-500">تومان</span>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">کل بازپرداخت نهایی</span>
                    <span className="font-bold">{formatCurrency(total / 10)} تومان</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">نرخ تسهیلات</span>
                    <span className="font-bold">۲۳٪ سالانه</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">کارمزد عملیات</span>
                    <span className="font-bold text-green-400">رایگان</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-[#0f172a] py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  ثبت درخواست وام
                </button>
              </div>
            </div>

          </div>
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-6 max-w-2xl mx-auto">
          * مبالغ فوق تقریبی است و بر اساس نرخ مصوب بانک مرکزی محاسبه شده است. مبلغ دقیق در زمان عقد قرارداد و بر اساس رتبه اعتباری سازمان شما تعیین می‌گردد.
        </p>
      </div>
    </section>
  );
};

export default Calculator;
