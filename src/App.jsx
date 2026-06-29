import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import AboutCourse from './components/AboutCourse';
import WhyJoin from './components/WhyJoin';
import HowItHelps from './components/HowItHelps';
import UniqueElements from './components/UniqueElements';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <AboutCourse />
        <WhyJoin />
        <UniqueElements />
        <HowItHelps />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
