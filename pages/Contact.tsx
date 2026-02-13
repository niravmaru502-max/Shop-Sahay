
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, MessageCircle, Laptop, Video, CheckCircle2, Loader2 } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ContactProps { lang: Language; }

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const selectedPlan = location.state?.selectedPlan;

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to book the ${selectedPlan} plan. Please contact me with the next steps.`
      }));
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API processing
    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="py-20 animate-in slide-in-from-right duration-700 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-6xl font-black text-[#001A3D] tracking-tighter uppercase">{t.contactUs}</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            Serving the entire state of Gujarat. We are a service-based business with no physical office constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Virtual Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-primary">
                  <Video className="w-6 h-6" />
                </div>
                <p className="font-black text-[#001A3D] text-lg uppercase tracking-tight">Virtual Meeting</p>
                <p className="text-gray-500 font-bold text-sm">Google Meet / Zoom</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-4">
                <div className="bg-[#25D366]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <p className="font-black text-[#001A3D] text-lg uppercase tracking-tight">Quick Chat</p>
                <p className="text-gray-500 font-bold text-sm">WhatsApp Primary</p>
              </div>
            </div>

            <div className="bg-[#001A3D] p-12 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Laptop className="w-48 h-48" />
              </div>
              <h3 className="text-3xl font-black text-primary uppercase tracking-tighter">No Office. No Waiting.</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                By operating remotely, we are available faster and can serve you directly in your shop environment via video call or flexible visits.
              </p>
              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex justify-between font-bold text-xs uppercase tracking-widest">
                  <span className="text-gray-500">Service Area</span>
                  <span className="text-white">All Over Gujarat</span>
                </div>
                <div className="flex justify-between font-bold text-xs uppercase tracking-widest">
                  <span className="text-gray-500">Avg. Response</span>
                  <span className="text-primary">Under 1 Hour</span>
                </div>
              </div>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(t.whatsappMsg)}`}
                className="block w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-center shadow-lg hover:scale-[1.02] transition-transform text-xs uppercase tracking-widest"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black text-[#001A3D] uppercase tracking-tighter">Request Sent!</h3>
                <p className="text-gray-500 font-bold text-lg leading-relaxed">Our virtual consultant will contact you on WhatsApp/Phone within 60 minutes.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-primary font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-black text-[#001A3D] uppercase tracking-tight">Book Growth Audit</h3>
                  {selectedPlan && (
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                      {selectedPlan} Plan
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.formName}</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 font-bold focus:ring-0 focus:border-primary transition-all outline-none text-sm" 
                    placeholder="Rajesh Patel" 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.formEmail}</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 font-bold focus:ring-0 focus:border-primary transition-all outline-none text-sm" 
                      placeholder="rajesh@gmail.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.formPhone}</label>
                    <input 
                      required 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 font-bold focus:ring-0 focus:border-primary transition-all outline-none text-sm" 
                      placeholder="+91 90000 00000" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shop Location (City in Gujarat)</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 font-bold focus:ring-0 focus:border-primary transition-all outline-none text-sm" 
                    placeholder="e.g. Surat" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.formMessage}</label>
                  <textarea 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 font-bold focus:ring-0 focus:border-primary transition-all outline-none text-sm resize-none" 
                    placeholder="How can we help your business?" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>{t.formSubmit}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Remote Service Banner */}
        <div className="bg-primary rounded-[3rem] p-10 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="flex items-center space-x-6 mb-8 md:mb-0 relative z-10">
              <Laptop className="w-16 h-16 opacity-30" />
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight leading-none mb-2">Entirely Virtual & Onsite Hybrid</h4>
                <p className="text-white/70 font-bold text-sm">We come to you, or we meet online. Your choice.</p>
              </div>
           </div>
           <div className="flex flex-wrap gap-3 relative z-10 justify-center">
              {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'].map(city => (
                <div key={city} className="bg-white/10 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/20">
                  {city}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
