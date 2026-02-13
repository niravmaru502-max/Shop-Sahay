
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Calculator, Quote, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS, SERVICES, TESTIMONIALS } from '../constants';
import { Language } from '../types';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isIndic = lang === 'gu' || lang === 'hi';
  
  const [calcSales, setCalcSales] = useState(100000);
  const [calcShopType, setCalcShopType] = useState('Grocery / Kirana');
  const estimatedGrowth = (calcSales * 0.3).toFixed(0);

  const stats = [
    { label: t.statsShops, val: "50+" },
    { label: t.statsGrowth, val: "30%" },
    { label: t.statsRemote, val: "100%" },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-[5rem] md:rounded-l-full blur-3xl opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-primary text-[9px] sm:text-[10px] font-black tracking-widest uppercase">Pure Service, Real Growth</span>
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#001A3D] tracking-tight ${isIndic ? 'leading-[1.4] mb-4' : 'leading-[1.1] mb-2'}`}>
                {t.heroTitle}
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 font-medium ${isIndic ? 'leading-relaxed mb-6' : 'leading-relaxed'}`}>
                {t.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link to="/resources" className="bg-primary text-white px-8 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  {t.calculateGrowth}
                  <Calculator className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/pricing" className="bg-white text-[#001A3D] border-2 border-[#001A3D] px-8 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#001A3D] hover:text-white transition-all duration-300 text-center">
                  View Plans
                </Link>
              </div>
            </div>
            
            <div id="calculator" className="relative order-1 lg:order-2 px-0 sm:px-4">
              <div className="bg-[#001A3D] rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl text-white space-y-8 border-4 border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6 relative z-10">
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-widest">{t.calcTitle}</h3>
                  <Calculator className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Sales (₹)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={calcSales} 
                        onChange={(e) => setCalcSales(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xl sm:text-2xl font-black focus:ring-2 focus:ring-primary transition-all outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-black">₹</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shop Category</label>
                    <input 
                      type="text"
                      value={calcShopType}
                      onChange={(e) => setCalcShopType(e.target.value)}
                      placeholder="e.g. Grocery, Mobile, Cafe..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 font-bold outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">Estimated Growth</p>
                    <p className="text-5xl sm:text-6xl font-black text-primary animate-pulse tracking-tighter">₹{estimatedGrowth}</p>
                    <Link to="/contact" className="mt-8 bg-white text-[#001A3D] w-full py-4 rounded-xl flex items-center justify-center font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                      Get Detailed Plan <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#001A3D] py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-4xl sm:text-5xl font-black text-primary">{stat.val}</p>
                <p className="text-white/40 font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001A3D] uppercase tracking-tighter">No Offices. No Fluff.</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base font-medium">
              We leverage technology to offer premium business coaching without the expensive city-office overhead.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="bg-primary/5 text-primary w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  {s.icon}
                </div>
                <h3 className="text-xl font-black text-[#001A3D] mb-4 uppercase tracking-tight">{s.title[lang]}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-medium text-xs sm:text-sm">
                  {s.description[lang]}
                </p>
                <Link to="/pricing" className="bg-gray-100 text-[#001A3D] w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center hover:bg-[#001A3D] hover:text-white transition-all">
                  Details <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
