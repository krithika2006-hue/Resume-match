import React from 'react';
import { 
  FileSearch, CheckCircle2, AlertOctagon, 
  HelpCircle, Sparkles, AlertTriangle, ShieldAlert 
} from 'lucide-react';

export default function Feature18JobDecoder({ job }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">18</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Job Posting Decoder</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Separate non-negotiable must-haves from flexible wish-lists, identify unrealistic requirement traps, and expose real seniority benchmarks.
        </p>
      </div>

      {/* Seniority & Compensation Decode Banner */}
      <div className="bg-gradient-to-r from-deepBlue to-[#122b7a] rounded-2xl p-6 text-white shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-lightBlue">Real Seniority Estimate</span>
          <h3 className="text-xl font-bold mt-0.5">Senior IC4 / IC5 Engineer (4-6 Years Actual Need)</h3>
          <p className="text-xs text-lightBlue/80 max-w-xl mt-1 leading-relaxed">
            Market salary benchmark: <strong>{job.salary || '$165,000 - $195,000'}</strong>. Despite "5+ years required" in title, the day-to-day architecture scope is tailored for autonomous mid-senior to senior individual contributors.
          </p>
        </div>

        <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-center shrink-0">
          <span className="text-lightBlue block">Market Percentile</span>
          <span className="font-bold text-white text-base">Top 15% Comp</span>
        </div>
      </div>

      {/* Must Haves vs Wish List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Must Haves (Hard Gates) */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-sm text-deepBlue flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Hard Gate Requirements (Must-Haves)</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Strict Filter</span>
          </div>

          <div className="space-y-2.5">
            {job.mustHaves.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span className="text-slate-800 font-medium leading-relaxed">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wish List (Negotiable) */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-sm text-deepBlue flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Wish-List (Negotiable Bonuses)</span>
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-lightBlue text-primary">Flexible</span>
          </div>

          <div className="space-y-2.5">
            {job.wishList.map((w, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span className="text-slate-800 font-medium leading-relaxed">{w}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Unrealistic Requirement Flags */}
      <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200 shadow-soft space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertOctagon className="w-4 h-4 text-amber-600" />
          <span>Unrealistic Requirement Flags Detected (1 Warning)</span>
        </div>
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>Flag 1:</strong> Posting suggests "5+ years of production experience orchestrating autonomous LLM agent frameworks". Since commercial LLM APIs and modern agent runtimes only emerged around 2022-2023, this is an inflated requirement template. 2+ years of production generative engineering fulfills the true technical necessity.
        </p>
      </div>
    </div>
  );
}
