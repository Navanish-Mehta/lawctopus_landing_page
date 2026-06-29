import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/Lawctopus-logo-footer.svg"
              alt="Lawctopus Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Course Structure
            </a>
            <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Pricing
            </a>
            <button className="bg-primary hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 shadow-lg">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Course Structure
              </a>
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                Pricing
              </a>
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold mt-4 w-full">
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;