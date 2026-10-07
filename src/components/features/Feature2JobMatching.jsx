import React from 'react';
import { 
  CheckCircle2, Percent, Briefcase, Award, 
  HelpCircle, ChevronRight, AlertTriangle 
} from 'lucide-react';

export default function Feature2JobMatching({ matchData, job, onNavigate }) {
  const { overallScore, skillsScore, experienceScore, projectsScore, matched, missing, weak } = matchData;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">02</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Job Matching & Explainable Scoring</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Every score is fully explainable and broken down into verifiable components: skills, experience depth, and project deliverables.
        </p>
      </div>

      {/* Hero Match Score Card */}
      <div className="bg-gradient-to-br from-deepBlue to-[#122b7a] rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lightBlue text-xs font-semibold">
            <span>Target Role: {job.title} at {job.company}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            {overallScore}% Overall Alignment
          </h2>
          <p className="text-xs sm:text-sm text-lightBlue/80 max-w-lg leading-relaxed">
            Calculated as: <strong>50%</strong> Skills Alignment + <strong>25%</strong> Experience Depth + <strong>25%</strong> Project Deliverables.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-lightBlue/30 border-t-white flex items-center justify-center font-display font-extrabold text-3xl">
            {overallScore}%
          </div>
        </div>
      </div>

      {/* 3 Metric Component Split */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Skills Alignment */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">1. Skills Alignment</span>
            <span className="text-xl font-display font-bold text-primary">{skillsScore}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-primary h-full rounded-full" style={{ width: `${skillsScore}%` }} />
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Weighted across must-have & nice-to-have requirements. Full credit for proven skills, partial for demonstrated.
          </p>
        </div>

        {/* Experience Depth */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">2. Experience Depth</span>
            <span className="text-xl font-display font-bold text-primary">{experienceScore}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-primary h-full rounded-full" style={{ width: `${experienceScore}%` }} />
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Candidate has 6+ years across tech lead and full-stack roles, surpassing the 5+ year requirement.
          </p>
        </div>

        {/* Projects & Deliverables */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">3. Project Deliverables</span>
            <span className="text-xl font-display font-bold text-primary">{projectsScore}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-primary h-full rounded-full" style={{ width: `${projectsScore}%` }} />
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            DocuSense LLM platform & distributed queue prove hands-on architecture relevance.
          </p>
        </div>

      </div>

      {/* Matched vs Missing Drilldown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Matched Skills */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="font-display font-bold text-base text-deepBlue flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Fulfilled Requirements ({matched.length})</span>
            </h3>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">Active</span>
          </div>
          <div className="space-y-2">
            {matched.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs">
                <span className="font-semibold text-deepBlue">{m.name}</span>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {m.status} (+{m.weight}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing or Weak */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="font-display font-bold text-base text-deepBlue flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Skill Gaps & Weak Spots ({missing.length + weak.length})</span>
            </h3>
            <button 
              onClick={() => onNavigate('feat-22')}
              className="text-xs text-primary hover:underline font-semibold cursor-pointer"
            >
              View Learning Plan →
            </button>
          </div>
          <div className="space-y-2">
            {missing.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/60 border border-amber-100 text-xs">
                <div>
                  <span className="font-semibold text-amber-900 block">{m.name}</span>
                  <span className="text-[10px] text-amber-700">{m.importance} Requirement</span>
                </div>
                <span className="text-[11px] font-semibold text-amber-700">Missing (-{m.weight}%)</span>
              </div>
            ))}
            {weak.map((w, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs">
                <span className="font-semibold text-deepBlue">{w.name}</span>
                <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {w.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
