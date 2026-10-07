import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onNavigateToAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-lightBlue/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-deepBlue">
                Veri<span className="text-primary">Match</span>
                <span className="text-xs ml-1.5 px-2 py-0.5 rounded-full bg-lightBlue text-primary font-semibold tracking-normal">AI</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-mutedText hover:text-primary font-medium text-sm transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('signin')}
              className="text-mutedText hover:text-primary font-medium text-sm transition-colors cursor-pointer"
            >
              Sign in
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-mutedText hover:text-primary font-medium text-sm transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-signin-btn"
              onClick={() => scrollToSection('signin')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-medium text-sm shadow-soft transition-all duration-150 hover:shadow-soft-lg active:scale-98 cursor-pointer"
            >
              <span>Sign in</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-mutedText hover:text-primary hover:bg-lightBlue/40 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-lightBlue/60 bg-white px-4 pt-2 pb-6 space-y-3 shadow-soft-lg animate-fadeIn">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-darkText hover:bg-lightBlue/50"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('signin')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-darkText hover:bg-lightBlue/50"
          >
            Sign in
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-darkText hover:bg-lightBlue/50"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('signin')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-medium shadow-soft"
            >
              <span>Sign in to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
