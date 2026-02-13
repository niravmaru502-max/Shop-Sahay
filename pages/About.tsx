
import React from 'react';
import { Laptop, Clock, ShieldCheck, Users } from 'lucide-react';
import { TRANSLATIONS, TEAM } from '../constants';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isIndic = lang === 'gu' || lang === 'hi';

  return (
    <div className="py-16 sm:py-20 animate-in fade-in duration-1000 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-24 sm:mb-32">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#001A3D] ${isIndic ? 'leading-[1.3]' : 'leading-tight'}`}>
              {lang === 'en' ? "No Fancy Office. Just Real Results." : lang === 'gu' ? "કોઈ ફેન્સી ઓફિસ નથી. માત્ર વાસ્તવિક પરિણામો." : "कोई फैंसी ऑफिस नहीं। बस असली नतीजे।"}
            </h1>
            <div className="w-20 h-2 bg-primary rounded-full" />
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed font-medium">
              ShopSahay is a digital-first consulting agency born in Ahmedabad. We help local shops grow by removing the massive costs of physical consulting offices and passing those savings to you.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-primary">50+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shops Helped</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-secondary">0</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Office Rent Overhead</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
             <div className="bg-gray-100 rounded-[3rem] p-4 shadow-xl border border-gray-200">
                <img src="https://images.unsplash.com/photo-1573163231341-2eaf4559521d?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] shadow-2xl w-full h-full object-cover aspect-[4/3]" alt="Digital Collaboration" />
             </div>
             
             {/* Enhanced Hybrid Glass-Morphism Badge */}
             <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-10 bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 max-w-sm w-full mx-auto sm:mx-0 transition-transform hover:-translate-y-2 duration-500 z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-white p-3 rounded-2xl shadow-lg shadow-primary/20">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 px-4 py-1.5 rounded-full border border-white">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-[pulse_1s_infinite]"></div>
                    <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.2em]">Work Your Way</span>
                  </div>
                </div>
                <h3 className="font-black text-[#001A3D] text-xl uppercase tracking-tight mb-3 italic underline decoration-primary decoration-4 underline-offset-4">Virtual & On-Site</h3>
                <p className="text-gray-600 text-xs font-bold leading-relaxed mb-6">
                  Whether you prefer a 1:1 visit to your shop in Surat or a quick video call, we adjust to your schedule.
                </p>
                <div className="flex items-center justify-between">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                           <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="" />
                        </div>
                      ))}
                   </div>
                   <div className="text-[9px] font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-lg">Available Now</div>
                </div>
             </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-32">
           {[
             { icon: <Clock className="w-10 h-10 text-primary" />, title: "Full Flexibility", desc: "Consulting that fits your store's slow hours. Morning or late night, we are here." },
             { icon: <ShieldCheck className="w-10 h-10 text-secondary" />, title: "Guaranteed Values", desc: "Gujarat is built on trust. We provide transparent billing and honest growth targets." },
             { icon: <Users className="w-10 h-10 text-primary" />, title: "Real Experts", desc: "No juniors. You work directly with the founders of ShopSahay on every plan." }
           ].map((v, i) => (
             <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:bg-white hover:shadow-2xl transition-all space-y-6">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-md border border-gray-100">{v.icon}</div>
                <h3 className="text-2xl font-black text-[#001A3D] uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{v.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;
