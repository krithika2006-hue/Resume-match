import React, { useState } from 'react';
import { 
  Briefcase, Link as LinkIcon, Search, CheckCircle2, 
  ArrowRight, Sparkles, Building 
} from 'lucide-react';
import { SAMPLE_JOBS_LIST, SAMPLE_JOB } from '../../data/mockData';

export default function Feature3JobInput({ currentJob, onSelectJob }) {
  const [inputText, setInputText] = useState(SAMPLE_JOB.summary + '\n\n' + SAMPLE_JOB.mustHaves.join('\n'));
  const [inputUrl, setInputUrl] = useState('https://jobs.lever.co/apexcognitive/ai-lead-3910');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successBanner, setSuccessBanner] = useState('');

  const handleParseJob = () => {
    setIsProcessing(true);
    setSuccessBanner('');
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessBanner('Job requirements parsed successfully! Matched against 4 target benchmark profiles.');
    }, 450);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">03</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Job Description Input & Ranked Roles</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Paste any job description or public listing URL to rank your compatibility against open market roles.
        </p>
      </div>

      {successBanner && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successBanner}</span>
        </div>
      )}

      {/* Input Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Text & Link input */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <h2 className="font-display font-bold text-base text-deepBlue">Paste Job Description or URL</h2>

          {/* URL Input */}
          <div>
            <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-1.5">
              Job Listing Link (LinkedIn, Lever, Greenhouse, etc.)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-mutedText">
                <LinkIcon className="w-4 h-4" />
              </div>
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://company.com/careers/role-id"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Text Area */}
          <div>
            <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-1.5">
              Full Job Description Text
            </label>
            <textarea
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste responsibilities, required qualifications, and company overview..."
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none font-mono"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setInputText(SAMPLE_JOB.summary + '\n\n' + SAMPLE_JOB.mustHaves.join('\n'));
                setInputUrl('https://jobs.lever.co/apexcognitive/ai-lead-3910');
              }}
              className="text-xs text-primary font-semibold hover:underline cursor-pointer"
            >
              Reset to Sample Job
            </button>

            <button
              onClick={handleParseJob}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft transition-all cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              <span>Analyze & Rank Roles</span>
            </button>
          </div>
        </div>

        {/* Right Column: Ranked List of Matching Roles */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-base text-deepBlue">Ranked Benchmark Roles</h2>
            <span className="text-xs text-mutedText">4 Analyzed</span>
          </div>

          <div className="space-y-3">
            {SAMPLE_JOBS_LIST.map((job) => {
              const isSelected = currentJob.id === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => onSelectJob(job)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-lightBlue/30 border-primary shadow-soft' 
                      : 'bg-white border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-deepBlue">{job.title}</h4>
                      <p className="text-xs text-mutedText flex items-center gap-1 mt-0.5">
                        <Building className="w-3 h-3" />
                        <span>{job.company} • {job.location}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`text-sm font-display font-bold px-2 py-0.5 rounded-full ${
                        job.matchScore >= 80 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        job.matchScore >= 70 ? 'bg-lightBlue text-primary' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {job.matchScore}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                    <div className="flex gap-1.5 flex-wrap">
                      {job.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {isSelected ? (
                      <span className="text-primary font-bold">Active Target</span>
                    ) : (
                      <span className="text-mutedText hover:text-primary">Select Target →</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
