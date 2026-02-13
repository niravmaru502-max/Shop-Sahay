
import React from 'react';
import { LayoutDashboard, TrendingUp, MonitorCheck, ShoppingBag, Users, Zap, Globe, Laptop, Headphones, Video } from 'lucide-react';
import { Language } from './types';

export const TRANSLATIONS = {
  en: {
    navHome: 'Home',
    navServices: 'Services & Pricing',
    navAbout: 'About',
    navResources: 'Resources',
    navContact: 'Contact',
    navAi: 'AI Assistant',
    navClients: 'Our Clients',
    getAudit: 'Get Free Audit',
    heroTitle: "Your Shop's Growth Partner",
    heroSubtitle: "Service-Based, Result-Focused. Empowering Gujarat's small businesses with digital tools and expert advisory without the office overhead.",
    bookAudit: 'Book Free Audit',
    calculateGrowth: 'Calculate Your Growth',
    statsShops: '50+ Shops Helped',
    statsGrowth: '30% Avg Growth',
    statsRemote: '100% Remote Service',
    servicesTitle: "Our Services & Plans",
    whyChooseUs: "Why Choose ShopSahay?",
    ourStory: "Our Story",
    teamTitle: "Meet Our Team",
    contactUs: "Contact Us",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formMessage: "How can we help?",
    formSubmit: "Send Message",
    whatsappMsg: "Hello ShopSahay! I'm interested in growing my shop. Can you help?",
    calcTitle: "Growth Potential Calculator",
    calcMonthlySales: "Current Monthly Sales (₹)",
    calcTraffic: "Daily Footfall",
    calcConversion: "Conversion Rate (%)",
    calcResult: "Potential Monthly Revenue",
    pricingTitle: "Choose Your Growth Plan",
    proceedBooking: "Proceed to Booking",
    serviceModelNote: "Service-Based Business - Serving Across Gujarat",
    testimonialsTitle: "Client Success Stories",
    testimonialsSubtitle: "Real growth stories from shops across Gujarat transformed by our remote strategy.",
    clientsTitle: "Happy Shop Owners",
    clientsSubtitle: "See how local businesses in Gujarat transformed their daily operations with our help."
  },
  gu: {
    navHome: 'હોમ',
    navServices: 'સેવાઓ અને કિંમત',
    navAbout: 'અમારા વિશે',
    navResources: 'રિસોર્સિસ',
    navContact: 'સંપર્ક',
    navAi: 'AI આસિસ્ટન્ટ',
    navClients: 'ગ્રાહકો',
    getAudit: 'ફ્રી ઓડિટ મેળવો',
    heroTitle: "તમારી દુકાનની પ્રગતિના સાથી",
    heroSubtitle: "સેવા-આધારિત, પરિણામ-કેન્દ્રિત. ઓફિસ ખર્ચ વગર ગુજરાતના નાના વ્યવસાયોને સશક્ત બનાવવું.",
    bookAudit: 'ફ્રી ઓડિટ બુક કરો',
    calculateGrowth: 'તમારી વૃદ્ધિ ગણો',
    statsShops: '૫૦+ દુકાનોને મદદ કરી',
    statsGrowth: '૩૦% સરેરાશ વૃદ્ધિ',
    statsRemote: '૧૦૦% રિમોટ સેવા',
    servicesTitle: "અમારી સેવાઓ અને પ્લાન",
    whyChooseUs: "શા માટે ShopSahay?",
    ourStory: "અમારી વાર્તા",
    teamTitle: "અમારી ટીમ",
    contactUs: "સંપર્ક કરો",
    formName: "પૂરું નામ",
    formEmail: "ઈમેઈલ",
    formPhone: "ફોન નંબર",
    formMessage: "અમે તમને કેવી રીતે મદદ કરી શકીએ?",
    formSubmit: "સંદેશ મોકલો",
    whatsappMsg: "નમસ્તે ShopSahay! મારે મારી દુકાન આગળ વધારવી છે. શું તમે મદદ કરી શકો?",
    calcTitle: "વૃદ્ધિ ક્ષમતા કેલ્ક્યુલેટર",
    calcMonthlySales: "વર્તમાન માસિક વેચાણ (₹)",
    calcTraffic: "દૈનિક ગ્રાહકો",
    calcConversion: "રૂપાંતરણ દર (%)",
    calcResult: "સંભવિત માસિક આવક",
    pricingTitle: "તમારો ગ્રોથ પ્લાન પસંદ કરો",
    proceedBooking: "બુકિંગ માટે આગળ વધો",
    serviceModelNote: "સેવા-આધારિત વ્યવસાય - સમગ્ર ગુજરાતમાં કાર્યરત",
    testimonialsTitle: "ગ્રાહકોની સફળતાની વાર્તાઓ",
    testimonialsSubtitle: "અમારી રિમોટ વ્યૂહરચના દ્વારા પરિવર્તિત ગુજરાતભરની દુકાનોની વાસ્તવિક વૃદ્ધિની વાર્તાઓ.",
    clientsTitle: "સંતુષ્ટ ગ્રાહકો",
    clientsSubtitle: "જુઓ કેવી રીતે ગુજરાતના સ્થાનિક વ્યવસાયોએ અમારી મદદથી તેમના દૈનિક કાર્યમાં પરિવર્તન લાવ્યું."
  },
  hi: {
    navHome: 'होम',
    navServices: 'सेवाएं और कीमतें',
    navAbout: 'हमारे बारे में',
    navResources: 'संसाधन',
    navContact: 'संपर्क',
    navAi: 'AI सहायक',
    navClients: 'हमारे क्लाइंट्स',
    getAudit: 'फ्री ऑडिट पाएं',
    heroTitle: "आपकी दुकान की प्रगति का साथी",
    heroSubtitle: "सेवा-आधारित, परिणाम-केंद्रित। बिना किसी ऑफिस खर्च के गुजरात के छोटे व्यवसायों को डिजिटल टूल्स और विशेषज्ञ सलाह के साथ सशक्त बनाना।",
    bookAudit: 'फ्री ऑडिट बुक करें',
    calculateGrowth: 'अपनी वृद्धि मापें',
    statsShops: '50+ दुकानों की मदद की',
    statsGrowth: '30% औसत वृद्धि',
    statsRemote: '100% रिमोट सेवा',
    servicesTitle: "हमारी सेवाएं और प्लान",
    whyChooseUs: "ShopSahay क्यों चुनें?",
    ourStory: "हमारी कहानी",
    teamTitle: "हमारी टीम से मिलें",
    contactUs: "संपर्क करें",
    formName: "पूरा नाम",
    formEmail: "ईमेल पता",
    formPhone: "फ़ोन नंबर",
    formMessage: "हम कैसे मदद कर सकते हैं?",
    formSubmit: "संदेश भेजें",
    whatsappMsg: "नमस्ते ShopSahay! मैं अपनी दुकान बढ़ाना चाहता हूँ। क्या आप मदद कर सकते हैं?",
    calcTitle: "विकास क्षमता कैलकुलेटर",
    calcMonthlySales: "वर्तमान मासिक बिक्री (₹)",
    calcTraffic: "दैनिक ग्राहक",
    calcConversion: "कनवर्जन रेट (%)",
    calcResult: "संभावित मासिक आय",
    pricingTitle: "अपना ग्रोथ प्लान चुनें",
    proceedBooking: "बुकिंग के लिए आगे बढ़ें",
    serviceModelNote: "सेवा-आधारित व्यवसाय - पूरे गुजरात में कार्यरत",
    testimonialsTitle: "ग्राहकों की सफलता की कहानियां",
    testimonialsSubtitle: "हमारी रिमोट रणनीति से बदली हुई गुजरात की दुकानों की वास्तविक प्रगति की कहानियां।",
    clientsTitle: "खुश दुकानदार",
    clientsSubtitle: "देखें कि कैसे गुजरात के स्थानीय व्यवसायों ने हमारी मदद से अपने दैनिक संचालन को बदल दिया।"
  }
};

export const SERVICES = [
  {
    id: 'audit',
    title: { 
      en: 'Virtual Business Audit', 
      gu: 'વર્ચ્યુઅલ બિઝનેસ ઓડિટ',
      hi: 'वर्चुअल बिजनेस ऑडिट'
    },
    description: { 
      en: 'Detailed remote analysis of your operations via video call and digital data review.', 
      gu: 'વીડિયો કોલ અને ડિજિટલ ડેટા રિવ્યુ દ્વારા તમારા સંચાલનનું વિગતવાર રિમોટ વિશ્લેષણ.',
      hi: 'वीडियो कॉल और डिजिटल डेटा समीक्षा के माध्यम से आपके संचालन का विस्तृत रिमोट विश्लेषण।'
    },
    icon: <MonitorCheck className="w-8 h-8 text-primary" />,
    link: '/services#pricing'
  },
  {
    id: 'digital',
    title: { 
      en: 'Remote Digital Setup', 
      gu: 'રિમોટ ડિજિટલ સેટઅપ',
      hi: 'रिमोट डिजिटल सेटअप'
    },
    description: { 
      en: 'Digital transformation including billing software and GMB setup, managed 100% remotely.', 
      gu: 'બિલિંગ સોફ્ટવેર અને GMB સેટઅપ સહિત ડિજિટલ ટ્રાન્સફોર્મેશન, ૧૦૦% રિમોટલી મેનેજ.',
      hi: 'बिलिंग सॉफ़्टवेयर और GMB सेटअप सहित डिजिटल बदलाव, जो 100% रिमोट मैनेज किया जाता है।'
    },
    icon: <Globe className="w-8 h-8 text-secondary" />,
    link: '/services#pricing'
  },
  {
    id: 'growth',
    title: { 
      en: 'Growth Coaching', 
      gu: 'વૃદ્ધિ કોચિંગ',
      hi: 'ग्रोथ कोचिंग'
    },
    description: { 
      en: 'Ongoing strategy sessions over WhatsApp and Meet to optimize your profit levels.', 
      gu: 'તમારા નફાના સ્તરને શ્રેષ્ઠ બનાવવા માટે WhatsApp અને Meet પર ચાલતા વ્યૂહરચના સત્રો.',
      hi: 'लाभ के स्तर को बेहतर बनाने के लिए WhatsApp और Google Meet पर निरंतर रणनीति सत्र।'
    },
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    link: '/services#pricing'
  }
];

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: "BASIC",
    price: "₹499",
    period: "month",
    color: "primary",
    features: [
      "Weekly WhatsApp tips",
      "Basic templates",
      "Monthly review call",
      "Email support"
    ]
  },
  {
    id: 'growth',
    name: "GROWTH",
    price: "₹1,999",
    period: "month",
    color: "secondary",
    recommended: true,
    features: [
      "Everything in Basic +",
      "Bi-weekly virtual consultation",
      "Digital setup assistance",
      "Custom action plan"
    ]
  },
  {
    id: 'premium',
    name: "PREMIUM",
    price: "₹4,999",
    period: "month",
    color: "primary",
    features: [
      "Everything in Growth +",
      "Daily support access",
      "Complete business makeover",
      "Priority 24/7 support"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 'harish-vaghela',
    name: "Harish Vaghela",
    shopName: "Vaghela Provision Store, Vadodara",
    metric: "+42% Sales Growth",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    text: {
      en: "I was skeptical about remote help, but Meera from ShopSahay setup my whole billing and Google presence via Zoom. The digital shift was seamless.",
      gu: "મને રિમોટ મદદ વિશે શંકા હતી, પરંતુ ShopSahay ના મીરાએ ઝૂમ દ્વારા મારું આખું બિલિંગ અને ગૂગલ પ્રેઝન્સ સેટ કર્યું. ડિજિટલ શિફ્ટ એકદમ સરળ હતી.",
      hi: "मुझे रिमोट मदद पर संदेह था, लेकिन ShopSahay की मीरा ने ज़ूम के माध्यम से मेरा पूरा बिलिंग और गूगल प्रेजेंस सेट किया। डिजिटल बदलाव बहुत आसान था।"
    },
    fullStory: {
      en: "Harish faced issues with inventory tracking and outdated manual billing. Through 4 weekly Zoom sessions, we implemented a mobile-first billing app. His daily paperwork reduced by 80%, allowing him to focus on customer service.",
      gu: "હરીશભાઈને ઇન્વેન્ટરી ટ્રેકિંગ અને જૂના મેન્યુઅલ બિલિંગમાં સમસ્યા હતી. ૪ સાપ્તાહિક ઝૂમ સત્રો દ્વારા, અમે મોબાઇલ-ફર્સ્ટ બિલિંગ એપ લાગુ કરી. તેમનું દૈનિક પેપરવર્ક ૮૦% ઘટ્યું.",
      hi: "हरीश को इन्वेंट्री ट्रैकिंग और पुराने मैनुअल बिलिंग के साथ समस्याओं का सामना करना पड़ा। 4 साप्ताहिक ज़ूम सत्रों के माध्यम से, हमने एक मोबाइल-फर्स्ट बिलिंग ऐप लागू किया। उनका दैनिक कागजी कार्य 80% कम हो गया।"
    },
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 'anjali-patel',
    name: "Anjali Patel",
    shopName: "Patel Textiles, Surat",
    metric: "2.5x Customer Retention",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    text: {
      en: "The WhatsApp marketing strategies they taught us remotely changed how we talk to our regulars. Our repeat orders have doubled in 3 months.",
      gu: "તેમણે અમને જે WhatsApp માર્કેટિંગ વ્યૂહરચનાઓ રિમોટલી શીખવી તેનાથી અમારા ગ્રાહકો સાથે વાત કરવાની રીત બદલાઈ ગઈ. અમારા રિપીટ ઓર્ડર ૩ મહિનામાં બમણા થઈ ગયા છે.",
      hi: "उन्होंने हमें रिमोटली जो व्हाट्सएप मार्केटिंग रणनीतियां सिखाईं, उससे हमारे नियमित ग्राहकों से बात करने का तरीका बदल गया। हमारे पुराने ग्राहकों के ऑर्डर 3 महीने में दोगुने हो गए हैं।"
    },
    fullStory: {
      en: "Anjali's textile business had many walk-ins but few regulars. We setup a WhatsApp Business API and broadcast strategy. In just 90 days, 60% of her weekend sales now come from broadcast messages to existing customers.",
      gu: "અંજલિના કાપડ વ્યવસાયમાં ઘણા ગ્રાહકો આવતા પણ નિયમિત ઓછા હતા. અમે WhatsApp બિઝનેસ API અને બ્રોડકાસ્ટ વ્યૂહરચના સેટ કરી. હવે ૬૦% વેચાણ જૂના ગ્રાહકો તરફથી આવે છે.",
      hi: "अंजलि के कपड़ा व्यवसाय में बहुत सारे ग्राहक आते थे लेकिन नियमित बहुत कम थे। हमने व्हाट्सएप बिजनेस एपीआई और ब्रॉडकास्ट रणनीति तैयार की। अब उनकी 60% बिक्री पुराने ग्राहकों से आती है।"
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const TEAM = [
  {
    name: "Rajesh Patel",
    role: { en: "Founder & Lead Strategist", gu: "સ્થાપક અને મુખ્ય વ્યૂહરચનાકાર", hi: "संस्थापक और मुख्य रणनीतिकार" },
    bio: { 
      en: "20 years of retail expertise, now democratizing consulting remotely.", 
      gu: "રિટેલ ક્ષેત્રમાં ૨૦ વર્ષનો અનુભવ, હવે રિમોટલી કન્સલ્ટિંગને લોકપ્રિય બનાવવું.",
      hi: "रिटेल क्षेत्र में 20 वर्षों का अनुभव, अब रिमोटली कंसल्टिंग को सुलभ बना रहे हैं।"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Meera Shah",
    role: { en: "Digital Operations Head", gu: "ડિજિટલ ઓપરેશન્સ હેડ", hi: "डिजिटल ऑपरेशंस हेड" },
    bio: { 
      en: "Former Tech Lead specialized in SME digital transformation.", 
      gu: "ભૂતપૂર્વ ટેક લીડ, SME ડિજિટલ ટ્રાન્સફોર્મેશનમાં નિષ્ણાત.",
      hi: "पूर्व टेक लीड, जो SME डिजिटल बदलाव में विशेषज्ञ हैं।"
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
  }
];
