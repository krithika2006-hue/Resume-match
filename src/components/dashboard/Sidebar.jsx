import React from 'react';
import {
  FileText, CheckCircle2, Briefcase, FileEdit,
  MessageSquare, Languages, TrendingUp,
  ShieldCheck, Award, BadgeCheck, Eye, UserCheck,
  Scale, Sliders, Scan, Compass, Calendar,
  FileSearch, Mic, SplitSquareVertical, Lock,
  GraduationCap, Home, ChevronRight, X
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  {
    category: "Overview",
    items: [
      { id: "home", label: "Dashboard Home", icon: Home, num: null }
    ]
  },
  {
    category: "Core",
    items: [
      { id: "feat-1", label: "Resume Upload & Parsing", icon: FileText, num: 1 },
      { id: "feat-2", label: "Job Matching", icon: CheckCircle2, num: 2 },
      { id: "feat-3", label: "Job Description Input", icon: Briefcase, num: 3 },
      { id: "feat-4", label: "Resume Improvement", icon: FileEdit, num: 4 }
    ]
  },
  {
    category: "Understand Me",
    items: [
      { id: "feat-5", label: "Hidden Skills Interview", icon: MessageSquare, num: 5 },
      { id: "feat-6", label: "Experience Translator", icon: Languages, num: 6 },
      { id: "feat-7", label: "Skill Freshness", icon: TrendingUp, num: 7 }
    ]
  },
  {
    category: "Trust & Verification",
    items: [
      { id: "feat-8", label: "Claims vs Evidence", icon: ShieldCheck, num: 8 },
      { id: "feat-9", label: "Verified Match", icon: Award, num: 9 },
      { id: "feat-10", label: "Skill Badges", icon: BadgeCheck, num: 10 },
      { id: "feat-11", label: "Anti-Cheat Signals", icon: Eye, num: 11 },
      { id: "feat-12", label: "Recruiter Re-verify", icon: UserCheck, num: 12 }
    ]
  },
  {
    category: "See & Act",
    items: [
      { id: "feat-13", label: "Advocate vs Skeptic Debate", icon: Scale, num: 13 },
      { id: "feat-14", label: "What-If Simulator", icon: Sliders, num: 14 },
      { id: "feat-15", label: "Recruiter's 6-Second View", icon: Scan, num: 15 },
      { id: "feat-16", label: "Adjacent Careers", icon: Compass, num: 16 },
      { id: "feat-17", label: "Gap-to-Hired Plan", icon: Calendar, num: 17 },
      { id: "feat-18", label: "Job Posting Decoder", icon: FileSearch, num: 18 },
      { id: "feat-19", label: "Resume Mock Interview", icon: Mic, num: 19 }
    ]
  },
  {
    category: "Fairness & Trust",
    items: [
      { id: "feat-20", label: "Bias Mirror", icon: SplitSquareVertical, num: 20 },
      { id: "feat-21", label: "Privacy Controls", icon: Lock, num: 21 }
    ]
  },
  {
    category: "Learn",
    items: [
      { id: "feat-22", label: "Skill Gap Roadmap", icon: GraduationCap, num: 22 }
    ]
  }
];

export default function Sidebar({ activeItem, onSelectItem, isOpenMobile, onCloseMobile }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-deepBlue/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-16 bottom-0 left-0 z-40 w-72 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile close header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Navigation Menu</span>
          <button 
            onClick={onCloseMobile}
            className="p-1 rounded-lg text-mutedText hover:text-darkText hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin">
          {SIDEBAR_ITEMS.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-mutedText/80">
                {group.category}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    id={`sidebar-item-${item.id}`}
                    onClick={() => {
                      onSelectItem(item.id);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer
                      ${isActive 
                        ? 'bg-primary text-white shadow-soft font-semibold' 
                        : 'text-darkText hover:bg-lightBlue/40 hover:text-primary'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-primary'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.num && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono shrink-0 ml-1.5 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-mutedText'
                      }`}>
                        #{item.num}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-[11px] text-mutedText flex items-center justify-between">
          <span className="truncate">22 Intelligence Features</span>
          <span className="font-semibold text-primary">All Active</span>
        </div>
      </aside>
    </>
  );
}
