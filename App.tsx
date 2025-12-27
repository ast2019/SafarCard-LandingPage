
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductExplainer from './components/PlanOverview';
import Benefits from './components/Features';
import Steps from './components/Steps';
import MidCTA from './components/MidCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="reveal-on-scroll"><ProductExplainer /></div>
        <div className="reveal-on-scroll"><Benefits /></div>
        <div className="reveal-on-scroll"><MidCTA /></div>
        <div className="reveal-on-scroll"><Steps /></div>
        <div className="reveal-on-scroll"><FAQ /></div>
        <div className="reveal-on-scroll"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;