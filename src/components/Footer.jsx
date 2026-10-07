import React from 'react';
import { Sparkles, ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deepBlue text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Veri<span className="text-lightBlue">Match</span>
                <span className="text-xs ml-1.5 px-2 py-0.5 rounded-full bg-white/20 text-lightBlue font-semibold">AI</span>
              </span>
            </div>
            <p className="text-sm text-lightBlue/70 max-w-md leading-relaxed">
              AI-powered resume analyzer and job matching platform. Grounded in transparent evidence, component-level score explainability, and actionable skill roadmaps.
            </p>
            <div className="flex items-center gap-2 text-xs text-lightBlue/60">
              <Shield className="w-4 h-4 text-lightBlue/80" />
              <span>Ethical AI Architecture • Strict Privacy Controls • Explainable Scoring</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-lightBlue/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Platform Capabilities</a>
              </li>
              <li>
                <a href="#signin" className="hover:text-white transition-colors">Access Console</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact for Queries</a>
              </li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-lightBlue/80 mb-4">
              AI Transparency Notice
            </h4>
            <p className="text-xs text-lightBlue/70 leading-relaxed">
              Every score calculated within this platform reflects algorithmic alignment with the provided job description requirements, not a predictive hiring guarantee or automated employment decision.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lightBlue/60">
          <div>
            © {new Date().getFullYear()} VeriMatch AI Platform. All rights reserved. Visual theme: Blue and White.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
