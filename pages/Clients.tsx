
import React, { useState } from 'react';
import { Play, TrendingUp, Star, Video, ShoppingBag, ArrowUpRight, X } from 'lucide-react';
import { TRANSLATIONS, TESTIMONIALS } from '../constants';
import { Language } from '../types';

interface ClientsProps { lang: Language; }

const Clients: React.FC<ClientsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isIndic = lang === 'gu' || lang === 'hi';
  const [selectedStory, setSelectedStory] = useState<typeof TESTIMONIALS[0] | null>(null);

  return (
    <div className="py-12 sm:py-20 animate-in slide-in-from-bottom duration-700 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4">
             <Video size={14} className="text-primary" />
             <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Client Video Reviews</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A3D] uppercase tracking-tighter ${isIndic ? 'leading-[1.4]' : ''}`}>
            {t.clientsTitle}
          </h1>
          <p className="text-gray-500 text-sm sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Real stories of growth and digital transformation from across Gujarat.
          </p>
        </div>

        {/* Video Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-32">
          {TESTIMONIALS.map((client, i) => (
            <div key={i} className="group bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col">
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <iframe 
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  src={client.videoUrl}
                  title={client.name}
                  allowFullScreen
                ></iframe>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white font-black text-[10px] uppercase tracking-widest border border-white/20">
                   {client.metric}
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 px-4 py-1.5 rounded-full text-green-600 border border-green-100">
                    <TrendingUp size={14} />
                    <span className="font-black text-[10px] uppercase tracking-widest">Growth Verified</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#001A3D] uppercase tracking-tight leading-none">{client.name}</h3>
                  <p className="text-primary font-black uppercase tracking-widest text-[10px] italic">{client.shopName}</p>
                  <p className={`text-gray-500 font-medium leading-relaxed italic text-sm sm:text-base ${isIndic ? 'leading-[1.6]' : ''}`}>
                    "{client.text[lang]}"
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedStory(client)}
                  className="w-full pt-6 border-t border-gray-100 flex items-center justify-between group/btn text-[#001A3D] font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors"
                >
                   <span>Read Full Case Study</span>
                   <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-[#001A3D]/95 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all z-10"
              >
                <X size={20} />
              </button>
              <div className="p-8 sm:p-12 space-y-8">
                <div className="flex items-center space-x-6">
                  <img src={selectedStory.image} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-primary/20 shadow-lg object-cover" alt="" />
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-black text-[#001A3D] uppercase tracking-tight">{selectedStory.name}</h2>
                    <p className="text-primary font-black uppercase tracking-widest text-[10px] sm:text-xs">{selectedStory.shopName}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                    <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">The Challenge</p>
                    <p className="text-gray-700 font-medium leading-relaxed italic">"Our business was stagnant, manual work was taking up 4 hours a day."</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">The ShopSahay Solution</p>
                    <p className="text-[#001A3D] text-sm sm:text-lg font-bold leading-relaxed">
                      {selectedStory.fullStory[lang]}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="w-full bg-[#001A3D] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
