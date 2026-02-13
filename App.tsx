
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import AiAssistant from './pages/AiAssistant';
import Clients from './pages/Clients';
import Pricing from './pages/Pricing';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <HashRouter>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/pricing" element={<Pricing lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/resources" element={<Resources lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/ai-assistant" element={<AiAssistant lang={lang} />} />
          <Route path="/clients" element={<Clients lang={lang} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
