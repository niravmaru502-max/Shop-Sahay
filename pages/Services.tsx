
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TRANSLATIONS, SERVICES } from '../constants';
import { Language } from '../types';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isIndic = lang === 'gu' || lang === 'hi';

  return (
    <div className="py-20 animate-in slide-in-from-bottom duration-700 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#001A3D] uppercase tracking-tighter ${isIndic ? 'leading-[1.4] mb-4' : 'leading-tight'}`}>
            {t.servicesTitle}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto font-medium">
            Expert remote strategy and implementation plans tailored for every stage of your business.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="bg-primary/5 text-primary p-5 rounded-2xl w-fit mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className={`text-xl font-black text-[#001A3D] mb-4 uppercase tracking-tight ${isIndic ? 'leading-relaxed' : ''}`}>
                {item.title[lang]}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 font-medium text-sm">
                {item.description[lang]}
              </p>
              {/* FIXED: Clicking "See Pricing" now properly opens the Pricing page */}
              <Link to="/pricing" className="text-primary font-black uppercase tracking-widest text-[10px] flex items-center group-hover:translate-x-2 transition-transform">
                See Pricing <ArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-32 bg-[#001A3D] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
           <h3 className={`text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter relative z-10 ${isIndic ? 'leading-tight' : ''}`}>Ready to grow?</h3>
           <Link to="/contact" className="inline-block bg-primary text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all relative z-10">
             Talk to an Expert
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
