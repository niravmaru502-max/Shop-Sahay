
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';
import { Language, Message } from '../types';

interface AiAssistantProps { 
  lang: Language;
  isDrawer?: boolean;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ lang, isDrawer = false }) => {
  const t = TRANSLATIONS[lang];
  
  const getInitialMessage = (l: Language) => {
    switch(l) {
      case 'gu': return "નમસ્તે! હું ShopSahay AI આસિસ્ટન્ટ છું. હું ગુજરાતી દુકાનદારોને ઓનલાઈન બિઝનેસ વધારવામાં મદદ કરું છું. તમને કઈ બાબતમાં મદદ જોઈએ છે?";
      case 'hi': return "नमस्ते! मैं ShopSahay AI सहायक हूँ। मैं गुजरात के दुकानदारों को उनके व्यवसाय को ऑनलाइन बढ़ाने में मदद करता हूँ। आपको किस बारे में जानकारी चाहिए?";
      default: return "Hello! I'm the ShopSahay AI Assistant. I specialize in helping Gujarati shop owners grow remotely. What's on your mind?";
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: getInitialMessage(lang) }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: getInitialMessage(lang) }]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customInput?: string) => {
    const text = customInput || input;
    if (!text.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getGeminiResponse([...messages, userMsg], lang);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  const sampleQuestions = {
    en: ["Increase sales?", "Inventory tips", "Digital setup"],
    gu: ["વેચાણ વધારવું?", "ઇન્વેન્ટરી ટિપ્સ", "ડિજિટલ સેટઅપ"],
    hi: ["बिक्री बढ़ाएं?", "इन्वेंट्री टिप्स", "डिजिटल सेटअप"]
  }[lang];

  const containerClasses = isDrawer 
    ? "flex flex-col h-full bg-white" 
    : "max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-8 lg:py-12 animate-in slide-in-from-bottom duration-700 h-[75vh] sm:h-[600px] lg:h-[750px]";

  const chatWrapperClasses = isDrawer
    ? "flex-grow flex flex-col overflow-hidden"
    : "bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl border-2 sm:border-4 border-primary/10 overflow-hidden flex flex-col h-full";

  return (
    <div className={containerClasses}>
      <div className={chatWrapperClasses}>
        {/* Header (Only show if not in drawer, layout.tsx handles drawer header) */}
        {!isDrawer && (
          <div className="bg-[#001A3D] p-5 sm:p-6 lg:p-8 flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
                <Sparkles className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h1 className="text-white text-base sm:text-lg lg:text-2xl font-black uppercase tracking-tight">Growth AI</h1>
                <p className="text-primary text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Gujarat Expert</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Active</span>
            </div>
          </div>
        )}

        {/* Chat Content */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-10 space-y-6 bg-gray-50/30">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[95%] sm:max-w-[85%] lg:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                  msg.role === 'user' ? 'bg-[#001A3D] text-white' : 'bg-primary text-white'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-[#001A3D] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-xl rounded-tl-none border border-gray-100 flex space-x-1.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Input Control */}
        <div className="p-4 sm:p-6 bg-white border-t border-gray-100 space-y-4">
          <div className="flex flex-wrap gap-2">
            {sampleQuestions.map((q, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(q)}
                className="text-[8px] sm:text-[9px] font-black bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
              >
                {q}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 p-1.5 rounded-xl border-2 border-gray-100 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for advice..."
              className="flex-grow bg-transparent border-none focus:ring-0 px-2 py-2 font-bold text-gray-700 text-xs"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isTyping}
              className="bg-primary text-white p-3 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
          {isDrawer && (
            <div className="text-center pt-2">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(t.whatsappMsg)}`}
                className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest hover:underline"
              >
                <PhoneCall size={12} />
                <span>Talk to a Human Expert</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
