
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Instagram, Facebook, Youtube, MessageCircle, Linkedin, ChevronRight, MapPin, Phone, ArrowRight, Bot, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import AiAssistant from '../pages/AiAssistant';

const Logo = () => (
  <div className="flex items-center space-x-2 sm:space-x-3 group select-none">
    <div className="relative flex-shrink-0">
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 transition-transform group-hover:rotate-12 duration-500">
        <path d="M50 10L75 25L50 40Z" fill="#BBE4F5" />
        <path d="M50 10L25 25L50 40Z" fill="#80CDEC" />
        <path d="M25 25L25 55L50 40Z" fill="#32A2DE" />
        <path d="M50 40L25 55L50 70L75 55Z" fill="#2184D0" />
        <path d="M75 55L75 85L50 70Z" fill="#1B78B4" />
        <path d="M50 70L75 85L50 100Z" fill="#114B7D" />
        <path d="M50 70L25 85L50 100Z" fill="#001A3D" />
      </svg>
    </div>
    <div className="flex flex-col -space-y-0.5 sm:-space-y-1">
      <span className="text-lg xs:text-xl sm:text-2xl font-black tracking-tighter text-[#001A3D] leading-none uppercase">
        ShopSahay
      </span>
      <span className="text-[6px] xs:text-[7px] sm:text-[8px] font-bold text-[#001A3D]/70 tracking-[0.1em] uppercase whitespace-nowrap">
        Your Shop's Partner
      </span>
    </div>
  </div>
);

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { label: t.navHome, path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: t.navClients, path: '/clients' },
    { label: t.navAbout, path: '/about' },
    { label: t.navResources, path: '/resources' },
    { label: t.navContact, path: '/contact' },
  ];

  const LanguageSwitcher = ({ isMobile = false }) => (
    <div className={`flex items-center bg-gray-100 rounded-full p-0.5 border border-gray-200 ${isMobile ? 'scale-100' : ''}`}>
      {(['en', 'gu', 'hi'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-black transition-all ${
            lang === l 
              ? 'bg-[#001A3D] text-white shadow-md' 
              : 'text-gray-400 hover:text-[#001A3D]'
          }`}
        >
          {l === 'en' ? 'EN' : l === 'gu' ? 'ગુ' : 'हि'}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </Link>

            {/* Centered navigation items - Fixed as requested */}
            <div className="hidden lg:flex flex-grow justify-center">
              <div className="flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[10px] xl:text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 relative py-2 ${
                        isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in slide-in-from-left duration-300"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link 
                to="/contact" 
                className="bg-[#001A3D] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.getAudit}
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-3">
              <LanguageSwitcher isMobile />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-3 rounded-xl transition-all duration-300 shadow-sm ${
                  isMenuOpen ? 'bg-primary text-white rotate-90' : 'bg-[#001A3D] text-white'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 z-[105] bg-[#001A3D] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ top: '64px', height: 'calc(100vh - 64px)' }}
        >
          <div className="h-full flex flex-col p-6 overflow-y-auto">
            <div className="space-y-2 mb-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 px-6 rounded-2xl transition-all duration-300 ${
                      isActive ? 'bg-primary text-white shadow-lg' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  <span className="text-xl font-black uppercase tracking-tighter">{item.label}</span>
                  <ChevronRight size={20} className="opacity-40" />
                </NavLink>
              ))}
            </div>
            <div className="mt-auto pb-12">
              <Link to="/contact" className="block w-full bg-primary text-white py-5 rounded-2xl font-black text-center text-lg uppercase tracking-widest shadow-2xl">
                {t.getAudit}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating AI Assistant Button */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-8 right-8 z-[150] bg-primary text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,137,216,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          <Bot size={32} className="group-hover:rotate-12 transition-transform" />
        </div>
      </button>

      {/* AI Assistant Drawer */}
      <div 
        className={`fixed inset-0 z-[200] bg-[#001A3D]/40 backdrop-blur-sm transition-opacity duration-300 ${isAiOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsAiOpen(false)}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isAiOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 bg-[#001A3D] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-2 rounded-xl">
                  <Sparkles className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight leading-none">ShopSahay AI</h2>
                  <p className="text-primary text-[9px] font-black uppercase tracking-widest mt-1">Gujarat's Growth Bot</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAiOpen(false)}
                className="p-3 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-hidden relative">
              <AiAssistant lang={lang} isDrawer />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#001A3D] text-gray-400 pt-20 pb-12 overflow-hidden border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Logo />
              <p className="text-sm leading-relaxed text-gray-400 font-medium max-w-xs">
                Gujarat's leading digital partner for retail growth. Providing 100% remote strategy since 2022.
              </p>
              <div className="flex space-x-3">
                {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-white/5 rounded-xl text-white/60 hover:bg-primary hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Core Offerings</h3>
              <ul className="grid grid-cols-1 gap-4 text-[10px] font-black uppercase tracking-widest">
                <li><Link to="/services" className="hover:text-primary transition-colors flex items-center group">Services <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors flex items-center group">Growth Plans <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link to="/resources" className="hover:text-primary transition-colors flex items-center group">Free Tools <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><button onClick={() => setIsAiOpen(true)} className="hover:text-primary transition-colors flex items-center group text-left">AI Assistant <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all" /></button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Quick Links</h3>
              <ul className="grid grid-cols-1 gap-4 text-[10px] font-black uppercase tracking-widest">
                <li><Link to="/about" className="hover:text-primary transition-colors">Our Mission</Link></li>
                <li><Link to="/clients" className="hover:text-primary transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Book Audit</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Gujarat HQ</h3>
              <div className="space-y-4">
                <a href="mailto:growth@shopsahay.com" className="flex items-center space-x-3 group text-sm font-bold">
                  <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <span className="truncate">growth@shopsahay.com</span>
                </a>
                <div className="flex items-center space-x-3 text-sm font-bold">
                  <div className="p-3 rounded-xl bg-white/5 text-primary flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10">ShopSahay &copy; 2024. All Rights Reserved.</p>
            <div className="flex items-center space-x-8 text-[9px] font-bold uppercase tracking-widest text-white/20">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
               <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
