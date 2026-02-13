
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Calculator, Zap, ArrowRight } from 'lucide-react';
import { TRANSLATIONS, PRICING_PLANS } from '../constants';
import { Language } from '../types';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const navigate = useNavigate();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const isIndic = lang === 'gu' || lang === 'hi';

  // Custom Quote Calculator
  const [sessionCount, setSessionCount] = useState(2);
  const [hasDigitalSetup, setHasDigitalSetup] = useState(false);
  
  const customTotal = (sessionCount * 500 + (hasDigitalSetup ? 1500 : 0));

  const handleProceed = (planName: string) => {
    navigate('/contact', { state: { selectedPlan: planName } });
  };

  const handleCustomProceed = () => {
    const customDetails = `Custom Plan: ${sessionCount} sessions/mo ${hasDigitalSetup ? '+ Digital Setup' : ''} (Est. ₹${customTotal})`;
    navigate('/contact', { state: { selectedPlan: customDetails } });
  };

  return (
    <div className="py-12 sm:py-20 animate-in slide-in-from-bottom duration-700 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#001A3D] uppercase tracking-tighter ${isIndic ? 'leading-[1.4] mb-2' : 'leading-tight'}`}>
            {t.pricingTitle}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto font-medium">
            Tailored growth strategies for Every budget. Select your starting point.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {PRICING_PLANS.map((p) => (
            <div 
              key={p.id} 
              onClick={() => setSelectedPlanId(p.id)}
              className={`relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border-4 cursor-pointer transition-all ${
                selectedPlanId === p.id 
                  ? 'border-primary shadow-2xl lg:scale-[1.05]' 
                  : 'border-transparent shadow-sm hover:border-primary/20'
              }`}
            >
              {p.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-4 sm:px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-gray-400 uppercase tracking-widest font-black text-[10px] mb-2">{p.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-black text-[#001A3D]">{p.price}</span>
                  <span className="text-gray-400 ml-2 font-bold text-xs">/ {p.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 sm:mb-12">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-600">
                    <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${selectedPlanId === p.id ? 'text-primary' : 'text-gray-300'}`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center space-x-2 ${
                selectedPlanId === p.id 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}>
                {selectedPlanId === p.id ? (
                  <>
                    <span>Selected</span>
                    <Check className="w-4 h-4" />
                  </>
                ) : (
                  <span>Select Plan</span>
                )}
              </button>
            </div>
          ))}
        </div>

        {selectedPlanId && (
          <div className="mb-20 sm:mb-32 animate-in zoom-in duration-300">
            <div className="bg-[#001A3D] p-8 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl border-4 border-primary/20 relative overflow-hidden text-center md:text-left">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
               <div className="mb-8 md:mb-0 relative z-10">
                  <h4 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${isIndic ? 'leading-relaxed mb-2' : 'mb-1'}`}>
                    Confirmed: {PRICING_PLANS.find(p => p.id === selectedPlanId)?.name}
                  </h4>
                  <p className="text-gray-400 font-bold text-sm sm:text-base">Ready to start your growth journey?</p>
               </div>
               <button 
                 onClick={() => handleProceed(PRICING_PLANS.find(p => p.id === selectedPlanId)?.name || 'Custom')}
                 className="w-full md:w-auto bg-primary text-white px-10 py-4 sm:px-12 sm:py-5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest hover:shadow-xl active:scale-95 transition-all relative z-10"
               >
                 {t.proceedBooking}
               </button>
            </div>
          </div>
        )}

        {/* Custom Quote Calculator */}
        <section className="bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-sm flex flex-col lg:flex-row mb-20 sm:mb-32 border border-gray-100">
          <div className="p-8 sm:p-12 lg:p-20 bg-[#001A3D] text-white space-y-6 sm:space-y-8 flex-1">
            <div className="bg-primary/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tighter ${isIndic ? 'leading-[1.3]' : ''}`}>Build Your Plan</h2>
            <p className="text-gray-400 font-bold text-sm sm:text-base leading-relaxed">
              Mix and match services based on your specific shop size and needs.
            </p>
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Sessions / Mo</label>
                  <span className="text-primary font-black text-lg sm:text-xl">{sessionCount}</span>
                </div>
                <input 
                  type="range" min="1" max="10" step="1" 
                  value={sessionCount} onChange={(e) => setSessionCount(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div 
                className="flex items-center justify-between p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors cursor-pointer group"
                onClick={() => setHasDigitalSetup(!hasDigitalSetup)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Zap className={`w-5 h-5 sm:w-6 sm:h-6 ${hasDigitalSetup ? 'text-primary' : 'text-gray-500'}`} />
                  <span className="font-black uppercase tracking-tight text-xs sm:text-sm">One-time Setup</span>
                </div>
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${hasDigitalSetup ? 'bg-primary border-primary' : 'border-gray-500'}`}>
                  {hasDigitalSetup && <Check className="text-white w-3 h-3 sm:w-4 sm:h-4" />}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center text-center space-y-6 sm:space-y-8 flex-1">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Monthly Investment</p>
            <div>
              <p className="text-6xl sm:text-7xl font-black text-[#001A3D] tracking-tighter">₹{customTotal.toLocaleString()}</p>
              <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-4">Estimated Fee</p>
            </div>
            <button 
              onClick={handleCustomProceed}
              className="bg-[#001A3D] text-white py-5 sm:py-6 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest hover:shadow-2xl active:scale-95 transition-all"
            >
              Book Custom Plan
            </button>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-black text-[#001A3D] mb-8 sm:mb-12 text-center uppercase tracking-tighter">Compare Everything</h3>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 sm:py-6 font-black text-gray-400 uppercase tracking-widest text-[9px] sm:text-[10px]">Service</th>
                  <th className="py-4 sm:py-6 font-black text-primary text-center text-[9px] sm:text-[10px]">BASIC</th>
                  <th className="py-4 sm:py-6 font-black text-primary/70 text-center text-[9px] sm:text-[10px]">GROWTH</th>
                  <th className="py-4 sm:py-6 font-black text-[#001A3D] text-center text-[9px] sm:text-[10px]">PREMIUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { label: "Audit Frequency", b: "Monthly", g: "Weekly", p: "Daily" },
                  { label: "WhatsApp Tips", b: true, g: true, p: true },
                  { label: "Digital Setup", b: false, g: true, p: true },
                  { label: "Priority Support", b: false, g: false, p: true },
                  { label: "Staff Training", b: false, g: "Online", p: "Hybrid" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 sm:py-5 font-bold text-gray-600 text-xs sm:text-sm">{row.label}</td>
                    <td className="py-4 sm:py-5 text-center font-bold text-xs sm:text-sm">
                      {typeof row.b === 'boolean' ? (row.b ? <Check className="mx-auto text-primary" size={16} /> : "-") : row.b}
                    </td>
                    <td className="py-4 sm:py-5 text-center font-bold text-xs sm:text-sm text-primary/70">
                      {typeof row.g === 'boolean' ? (row.g ? <Check className="mx-auto text-primary/70" size={16} /> : "-") : row.g}
                    </td>
                    <td className="py-4 sm:py-5 text-center font-black text-xs sm:text-sm text-[#001A3D]">
                      {typeof row.p === 'boolean' ? (row.p ? <Check className="mx-auto text-[#001A3D]" size={16} /> : "-") : row.p}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center lg:hidden">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center">
              Swipe to compare <ArrowRight className="ml-2 w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;