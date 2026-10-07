import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import AuthSection from './AuthSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function LandingPage({ onLoginSuccess }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-darkText">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero (full screen) */}
      <Hero />

      {/* 3. About section */}
      <AboutSection />

      {/* 4. Sign in section (above Contact) */}
      <AuthSection onLoginSuccess={onLoginSuccess} />

      {/* 5. Contact section "Contact for queries" */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
