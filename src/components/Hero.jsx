import React, { useState } from 'react';
import { 
  ArrowDown, CheckCircle2, ChevronRight, Sparkles, 
  FileText, Briefcase, Zap 
} from 'lucide-react';

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  const scrollToSignIn = () => {
    const el = document.getElementById('signin');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-lightBlue/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column (Left-Aligned Text & Actions) */}
        <div className="md:col-span-7 lg:col-span-6 text-left space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lightBlue/70 border border-lightBlue text-primary text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span>Next-Generation Resume Intelligence & Trust Architecture</span>
          </div>

          {/* Project Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-deepBlue tracking-tight leading-[1.1]">
            VeriMatch <span className="text-primary">AI</span>
          </h1>

          {/* One-line Tagline / Description */}
          <p className="text-base sm:text-lg text-mutedText max-w-xl font-normal leading-relaxed">
            An AI-powered resume analyzer and precision job matching platform that proves skills with verifiable evidence.
          </p>

          {/* Three Check Items */}
          <div className="space-y-3 pt-2 text-sm font-medium text-darkText">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-slate-800">Explainable Match Scoring</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-slate-800">Evidence-Based Proof Tasks</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-slate-800">Instant What-If Simulation</span>
            </div>
          </div>

          {/* Action Buttons: Filled 'Get started' + Outlined 'Explore Platform' */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              id="hero-get-started-btn"
              onClick={scrollToSignIn}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-base shadow-soft hover:shadow-soft-lg active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>Get started</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-primary text-primary hover:bg-lightBlue/30 font-semibold text-base transition-all duration-200 cursor-pointer"
            >
              <span>Explore Platform</span>
            </button>
          </div>

        </div>

        {/* Right Column (Robot Video with Soft Glow, Blended Mask, and Floating Glass Cards) */}
        <div className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          
          {/* Soft Blue Glow Behind the Robot */}
          <div className="absolute inset-0 max-w-[500px] max-h-[500px] m-auto bg-gradient-to-tr from-primary/20 via-lightBlue/50 to-transparent blur-3xl rounded-full scale-110 pointer-events-none" />

          {/* Video Container with Feathered Elliptical Edge Mask */}
          <div className="relative w-full max-w-[540px] flex items-center justify-center">
            {!videoFailed ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/hero-poster.jpg"
                onError={() => setVideoFailed(true)}
                className="w-full h-auto max-h-[460px] object-contain hero-video-bg transition-opacity duration-700"
                style={{
                  maskImage: 'radial-gradient(ellipse 68% 62% at 50% 50%, black 30%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.2) 68%, transparent 82%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 68% 62% at 50% 50%, black 30%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.2) 68%, transparent 82%)'
                }}
              >
                <source src="/assets/hero.mp4" type="video/mp4" />
                <source src="/public/assets/hero.mp4" type="video/mp4" />
              </video>
            ) : null}

            {/* Poster Fallback if video fails or reduced motion */}
            <img
              src="/assets/hero-poster.jpg"
              alt="VeriMatch AI Robot"
              style={{
                maskImage: 'radial-gradient(ellipse 68% 62% at 50% 50%, black 30%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.2) 68%, transparent 82%)',
                WebkitMaskImage: 'radial-gradient(ellipse 68% 62% at 50% 50%, black 30%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.2) 68%, transparent 82%)'
              }}
              className={`w-full h-auto max-h-[460px] object-contain ${!videoFailed ? 'hidden motion-reduce:block' : 'block'}`}
            />
          </div>

          {/* Floating Glass Card 1: 'Analyze Resume' (Top Left) */}
          <div className="hidden md:flex absolute -top-1 left-2 lg:left-6 z-20 animate-float-1 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-lightBlue/80 shadow-soft-lg text-deepBlue">
            <div className="w-8 h-8 rounded-xl bg-lightBlue/80 text-primary flex items-center justify-center shadow-xs">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold block leading-tight">Analyze Resume</span>
              <span className="text-[10px] text-mutedText font-medium">Extracting skills...</span>
            </div>
          </div>

          {/* Floating Glass Card 2: 'Match with Jobs' (Bottom Left) */}
          <div className="hidden md:flex absolute bottom-4 -left-2 lg:left-2 z-20 animate-float-2 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-lightBlue/80 shadow-soft-lg text-deepBlue">
            <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold block leading-tight">Match with Jobs</span>
              <span className="text-[10px] text-emerald-700 font-semibold">14 roles verified</span>
            </div>
          </div>

          {/* Floating Glass Card 3: 'Get Recommendations' (Top Right) */}
          <div className="hidden md:flex absolute top-4 -right-1 lg:right-2 z-20 animate-float-3 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-lightBlue/80 shadow-soft-lg text-deepBlue">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shadow-xs">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold block leading-tight">Get Recommendations</span>
              <span className="text-[10px] text-primary font-medium">+8% gap roadmap</span>
            </div>
          </div>

          {/* Floating Glass Card 4: Circular '92% Match Score' Ring (Bottom Right) */}
          <div className="hidden md:flex absolute -bottom-2 right-2 lg:right-8 z-20 animate-float-score items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-lightBlue/80 shadow-soft-lg text-deepBlue">
            {/* SVG Progress Ring */}
            <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
              <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-primary"
                  strokeDasharray="92, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-[11px] font-display font-extrabold text-deepBlue">
                92%
              </span>
            </div>

            <div>
              <span className="text-xs font-bold block leading-tight">Match Score</span>
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                Verified Fit
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Down Arrow */}
      <div 
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-mutedText hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold text-mutedText">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
      </div>
    </section>
  );
}
