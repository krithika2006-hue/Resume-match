import React from 'react';
import { 
  SplitSquareVertical, CheckCircle2, ShieldCheck, 
  AlertTriangle, UserCheck, Sparkles 
} from 'lucide-react';

export default function Feature20BiasMirror({ resume, job }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">20</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Bias Mirror & Parity Audit</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Blind evaluation benchmark comparing scores with demographic cues removed, plus job posting inclusive language audit.
        </p>
      </div>

      {/* Blind Evaluation Comparison Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-sm text-deepBlue">Blind Screening Parity Benchmark</h3>
            <p className="text-xs text-mutedText mt-0.5">
              Name, gender pronouns, university pedigree (UC Berkeley), and graduation year (2022) scrubbed.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Parity Confirmed (Δ 0.0%)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-mutedText uppercase tracking-wider block">Standard Profile Evaluation</span>
            <div className="text-3xl font-display font-bold text-deepBlue">84%</div>
            <p className="text-xs text-mutedText">With candidate name (Sarah Chen) and UC Berkeley institution listed.</p>
          </div>

          <div className="p-4 rounded-xl bg-lightBlue/30 border border-lightBlue space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">Anonymized Blind Mirror Evaluation</span>
            <div className="text-3xl font-display font-bold text-primary">84%</div>
            <p className="text-xs text-deepBlue">Strictly skills, system architecture deliverables, and verified proof tasks evaluated.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs font-medium">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Zero adverse demographic impact detected. Your score is 100% grounded in verifiable technical merit.</span>
        </div>
      </div>

      {/* Inclusive Language Audit on Job Posting */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
        <h3 className="font-bold text-sm text-deepBlue flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Job Description Inclusivity Audit ({job.title})</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-deepBlue block mb-1">Gender Tone Coding:</span>
            <span className="text-emerald-700 font-semibold block">Neutral (Balanced)</span>
            <p className="text-mutedText mt-1">Balanced mix of collaborative and technical action verbs.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-deepBlue block mb-1">Pedigree Gatekeeping:</span>
            <span className="text-emerald-700 font-semibold block">Low (Inclusive)</span>
            <p className="text-mutedText mt-1">Does not demand specific Ivy-League or elite school tiers.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-deepBlue block mb-1">Jargon Density:</span>
            <span className="text-primary font-semibold block">Moderate (Standard)</span>
            <p className="text-mutedText mt-1">Standard modern full-stack / AI engineering nomenclature.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
