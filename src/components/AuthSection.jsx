import React, { useState } from 'react';
import { LogIn, UserPlus, Lock, Mail, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthSection({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('Sarah Chen');
  const [email, setEmail] = useState('sarah.chen@example.com');
  const [password, setPassword] = useState('password123');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (isSignUp && !name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid work or personal email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const userData = {
        name: name.trim() || 'Sarah Chen',
        email: email.trim(),
        role: 'Full Stack AI Engineer',
        signedInAt: new Date().toISOString()
      };

      // Store in localStorage as requested
      localStorage.setItem('verimatch_user', JSON.stringify(userData));
      setIsLoading(false);
      onLoginSuccess(userData);
    }, 450);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const demoUser = {
        name: 'Sarah Chen',
        email: 'sarah.chen@example.com',
        role: 'Senior Full Stack Engineer',
        signedInAt: new Date().toISOString()
      };
      localStorage.setItem('verimatch_user', JSON.stringify(demoUser));
      setIsLoading(false);
      onLoginSuccess(demoUser);
    }, 300);
  };

  return (
    <section id="signin" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-lightBlue/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lightBlue/60 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Access Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-deepBlue tracking-tight mb-4">
            {isSignUp ? 'Create your VeriMatch account' : 'Sign in to your career console'}
          </h2>
          <p className="text-mutedText text-base">
            Instant local demo authentication. No credit card or third-party sign-up needed.
          </p>
        </div>

        {/* Auth Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-lg overflow-hidden max-w-md mx-auto">
          {/* Top Toggle Header */}
          <div className="flex border-b border-slate-100 bg-slate-50/60 p-1.5 m-3 rounded-2xl">
            <button
              type="button"
              onClick={() => { setIsSignUp(false); setErrorMessage(''); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                !isSignUp 
                  ? 'bg-white text-deepBlue shadow-sm' 
                  : 'text-mutedText hover:text-darkText'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setIsSignUp(true); setErrorMessage(''); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                isSignUp 
                  ? 'bg-white text-deepBlue shadow-sm' 
                  : 'text-mutedText hover:text-darkText'
              }`}
            >
              Create Account
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {/* Quick Demo Pre-fill Pill */}
            <div className="mb-6 p-3.5 rounded-xl bg-lightBlue/40 border border-lightBlue flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-deepBlue">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span>Pre-loaded with sample engineer profile</span>
              </div>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary hover:bg-blue-700 text-white transition-colors cursor-pointer"
              >
                1-Click Demo
              </button>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field (shown for sign up or pre-filled sign in) */}
              <div>
                <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-mutedText">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Chen"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-mutedText">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-mutedText">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm shadow-soft hover:shadow-soft-lg active:scale-98 transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isSignUp ? 'Create Account & Enter' : 'Sign in to Dashboard'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Privacy footnote */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-mutedText">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Session stored securely in local browser storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
