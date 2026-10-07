import React, { useState } from 'react';
import { 
  Scan, Eye, FileText, CheckCircle2, 
  Clock, Sparkles, Terminal 
} from 'lucide-react';

export default function Feature15RecruitersView({ resume }) {
  const [viewMode, setViewMode] = useState('heatmap'); // 'heatmap' or 'ats'

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">15</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Recruiter's 6-Second View & ATS Audit</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Eye-tracking heatmap simulation showing the first 6 seconds of human attention, plus raw ATS machine-parsed token stream.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setViewMode('heatmap')}
          className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            viewMode === 'heatmap' ? 'border-primary text-primary' : 'border-transparent text-mutedText hover:text-darkText'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Eye-Tracking Heatmap View</span>
        </button>

        <button
          onClick={() => setViewMode('ats')}
          className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            viewMode === 'ats' ? 'border-primary text-primary' : 'border-transparent text-mutedText hover:text-darkText'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Raw ATS Machine Parser View</span>
        </button>
      </div>

      {viewMode === 'heatmap' ? (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-lightBlue/30 border border-lightBlue flex items-center justify-between text-xs text-deepBlue">
            <span>🔥 <strong>Attention Distribution:</strong> Recruiters spend 3.2s on recent title/company, 1.8s on core skills, 1.0s on education.</span>
            <span className="text-primary font-bold">6.0s Total Gaze</span>
          </div>

          {/* Simulated Resume Document with Heatmap Overlays */}
          <div className="relative bg-white rounded-2xl p-8 border border-slate-300 shadow-soft max-w-3xl mx-auto space-y-6 text-xs text-slate-800 leading-relaxed font-sans">
            {/* Heatmap Layer 1: High focus on Name & Title */}
            <div className="relative p-3 rounded-xl border border-primary/40 bg-primary/5">
              <div className="absolute -top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white">
                Highest Gaze (2.1s)
              </div>
              <h2 className="text-lg font-bold text-deepBlue">{resume.name}</h2>
              <div className="text-primary font-semibold">{resume.title}</div>
              <div className="text-mutedText text-[11px]">{resume.location} • {resume.email}</div>
            </div>

            {/* Summary */}
            <p className="text-slate-600 border-l-2 border-slate-200 pl-3">
              {resume.summary}
            </p>

            {/* Heatmap Layer 2: Latest Experience */}
            <div className="relative p-3 rounded-xl border border-primary/30 bg-primary/5">
              <div className="absolute -top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white">
                High Gaze (2.4s)
              </div>
              <div className="font-bold text-deepBlue">{resume.experience[0].role} — {resume.experience[0].company}</div>
              <div className="text-[11px] text-mutedText mb-1">{resume.experience[0].duration}</div>
              <p>{resume.experience[0].description}</p>
            </div>

            {/* Heatmap Layer 3: Education & Secondary Experience */}
            <div className="relative p-3 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="absolute -top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-500 text-white">
                Brief Scan (1.5s)
              </div>
              <div className="font-bold text-deepBlue">{resume.education[0].institution}</div>
              <div className="text-[11px] text-mutedText">{resume.education[0].degree} ({resume.education[0].gpa})</div>
            </div>
          </div>
        </div>
      ) : (
        /* ATS Plain Text Parser View */
        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs text-slate-200 space-y-4 shadow-soft">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
            <span>ATS_TOKEN_EXTRACTOR v4.8 — Normalized Plaintext</span>
            <span className="text-emerald-400">Parse Success: 100%</span>
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-slate-300">
{`CANDIDATE_RECORD:
  NAME: ${resume.name}
  PRIMARY_TITLE: ${resume.title}
  NORMALIZED_SKILLS_COUNT: ${resume.skills.length}
  EXTRACTED_TOKENS:
    [${resume.skills.map(s => `"${s.name}"`).join(', ')}]
  
EXPERIENCE_BLOCKS:
  [0] ROLE: "${resume.experience[0].role}"
      COMPANY: "${resume.experience[0].company}"
      CONFIRMED_YEARS: 2.0
      METRICS_FOUND: ["42% latency reduction", "15M daily requests"]
  [1] ROLE: "${resume.experience[1].role}"
      COMPANY: "${resume.experience[1].company}"
      CONFIRMED_YEARS: 2.5

ATS_SCORING_SUMMARY:
  - Formatting Cleanliness: 98/100 (Single-column hierarchy, no nested tables)
  - Date Parsing: 100/100 (Standard YYYY formats detected)
  - Keyword Density: Optimal (No unnatural keyword-stuffing flags)`}
          </pre>
        </div>
      )}
    </div>
  );
}
