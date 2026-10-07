import React from 'react';
import { 
  Percent, Award, AlertTriangle, ArrowRight, 
  Sparkles, CheckCircle2, ChevronRight, FileText, 
  Briefcase, Sliders, GraduationCap, ShieldCheck 
} from 'lucide-react';

export default function DashboardHome({ matchData, resume, job, onNavigate }) {
  const { overallScore, skillsScore, experienceScore, projectsScore, provenCount, gapsCount } = matchData;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-deepBlue via-[#122b7a] to-deepBlue rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lightBlue text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Match: {job.title} at {job.company}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
            Profile Alignment & Evidence Console
          </h1>
          <p className="text-sm text-lightBlue/80 max-w-2xl leading-relaxed">
            Your resume was analyzed against production requirements. All scores below are explainable and derived from verifiable proof artifacts.
          </p>
        </div>

        <button
          onClick={() => onNavigate('feat-14')}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold text-sm shadow-soft transition-all duration-150 shrink-0 cursor-pointer"
        >
          <span>Run What-If Simulator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Summary Cards (As specified in Requirements) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Current Match Score */}
        <div 
          onClick={() => onNavigate('feat-2')}
          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Current Match Score</span>
            <div className="w-9 h-9 rounded-xl bg-lightBlue/60 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Percent className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-deepBlue">
              {overallScore}%
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              High Alignment
            </span>
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Skills {skillsScore}% • Exp {experienceScore}% • Projects {projectsScore}%
          </p>
        </div>

        {/* Card 2: Proven Skills Count */}
        <div 
          onClick={() => onNavigate('feat-8')}
          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Proven Skills Count</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-deepBlue">
              {provenCount}
            </span>
            <span className="text-xs text-mutedText font-medium">of {resume.skills.length} tracked</span>
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Substantiated by deliverables & open repositories
          </p>
        </div>

        {/* Card 3: Gaps Found */}
        <div 
          onClick={() => onNavigate('feat-22')}
          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Gaps Found</span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-deepBlue">
              {gapsCount}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Addressable
            </span>
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Pinecone/Milvus & Kubernetes cluster operations
          </p>
        </div>

        {/* Card 4: Next Recommended Step */}
        <div 
          onClick={() => onNavigate('feat-9')}
          className="bg-primary/5 rounded-2xl p-6 border border-primary/20 shadow-soft hover:shadow-soft-lg hover:border-primary transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Next Recommended Step</span>
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-soft">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-sm font-bold text-deepBlue mb-1 leading-snug">
            Take 5-min Verified Match Task
          </div>
          <p className="text-xs text-mutedText leading-relaxed">
            Verify Vector DB indexing to boost match score to <strong>91%</strong> instantly.
          </p>
        </div>

      </div>

      {/* Quick Launchpad to Core Features */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-display font-bold text-deepBlue">
              Active Intelligence Modules
            </h2>
            <p className="text-xs text-mutedText">
              Access the complete suite of 22 tools from the left sidebar anytime.
            </p>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-lightBlue text-primary font-semibold">
            All 22 Ready
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('feat-1')}
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-lightBlue/30 hover:border-primary/30 transition-all text-left flex items-start gap-3 cursor-pointer"
          >
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-deepBlue">1. Resume Parsing</div>
              <div className="text-xs text-mutedText mt-0.5">View structured profile extraction & skills</div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('feat-2')}
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-lightBlue/30 hover:border-primary/30 transition-all text-left flex items-start gap-3 cursor-pointer"
          >
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-deepBlue">2. Job Matching</div>
              <div className="text-xs text-mutedText mt-0.5">Explainable score split: skills, exp, projects</div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('feat-22')}
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-lightBlue/30 hover:border-primary/30 transition-all text-left flex items-start gap-3 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-deepBlue">22. Skill Gap Roadmap</div>
              <div className="text-xs text-mutedText mt-0.5">7-day project blueprints & free resources</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
