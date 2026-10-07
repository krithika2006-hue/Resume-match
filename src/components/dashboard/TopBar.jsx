import React from 'react';
import { Sparkles, Menu, LogOut, User, RefreshCw } from 'lucide-react';

export default function TopBar({ userName, onSignOut, onToggleMobileSidebar, onResetDemoData }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200/90 px-4 sm:px-6 flex items-center justify-between shadow-xs">
      {/* Left side: Mobile trigger + Logo */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-mutedText hover:text-darkText hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-deepBlue hidden sm:inline">
            Veri<span className="text-primary">Match</span> AI
          </span>
        </div>
      </div>

      {/* Center / Welcome text using user's name entered at sign in */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-lightBlue/40 border border-lightBlue/70">
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
            {userName ? userName.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-deepBlue">
            Welcome, <span className="text-primary">{userName || 'Engineer'}</span>
          </span>
        </div>
      </div>

      {/* Right Actions: Reset & Sign out button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {onResetDemoData && (
          <button
            onClick={onResetDemoData}
            title="Reload verified sample resume & job"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-mutedText hover:text-primary hover:border-lightBlue hover:bg-lightBlue/20 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sample Demo Data</span>
          </button>
        )}

        <button
          onClick={onSignOut}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign out</span>
        </button>
      </div>
    </header>
  );
}
