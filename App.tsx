
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductExplainer from './components/PlanOverview';
import Benefits from './components/Features';
import HowItWorks from './components/Steps';
import MidCTA from './components/MidCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="reveal">
          <ProductExplainer />
        </div>
        <div className="reveal">
          <Benefits />
        </div>
        <div className="reveal">
          <MidCTA />
        </div>
        <div className="reveal">
          <HowItWorks />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
