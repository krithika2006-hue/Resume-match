import React, { useState } from 'react';
import { 
  GraduationCap, CheckCircle2, Clock, Award, 
  ExternalLink, Filter, Sparkles, BookOpen, 
  Video, Globe, ChevronRight 
} from 'lucide-react';
import { SKILLS_LEARNING_CATALOG } from '../../data/mockData';

export default function Feature22LearningRoadmap({ onApplyGain }) {
  const [freeOnly, setFreeOnly] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [mediaFormat, setMediaFormat] = useState('all'); // 'all', 'video', 'reading'
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [completedProjects, setCompletedProjects] = useState([]);

  // Convert catalog to ordered array by match gain per week of effort
  // (gain / (estimatedHours / (hoursPerDay * 7)))
  const skillEntries = Object.entries(SKILLS_LEARNING_CATALOG).map(([name, data]) => {
    const weeksNeeded = Math.max(0.2, data.estimatedHours / (hoursPerDay * 7));
    const gainPerWeek = (data.matchGain / weeksNeeded).toFixed(1);
    return { name, ...data, weeksNeeded: weeksNeeded.toFixed(1), gainPerWeek: parseFloat(gainPerWeek) };
  });

  // Sort by match gain per week of effort descending as required!
  skillEntries.sort((a, b) => b.gainPerWeek - a.gainPerWeek);

  const toggleProject = (skillName) => {
    setCompletedProjects(prev =>
      prev.includes(skillName) ? prev.filter(s => s !== skillName) : [...prev, skillName]
    );
  };

  const filteredSkills = skillEntries.filter(skill => {
    if (freeOnly) {
      // Must have free platforms
      const hasFree = skill.platforms.some(p => p.type.toLowerCase().includes('free'));
      if (!hasFree) return false;
    }
    if (mediaFormat === 'video') {
      const hasVideo = skill.platforms.some(p => p.type.toLowerCase().includes('video') || p.name.includes('YouTube'));
      if (!hasVideo) return false;
    }
    if (mediaFormat === 'reading') {
      const hasReading = skill.platforms.some(p => p.type.toLowerCase().includes('reading') || p.type.toLowerCase().includes('docs'));
      if (!hasReading) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">22</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Skill Gap Learning Roadmap</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Ordered by match gain per week of effort. Features vetted platforms (freeCodeCamp, official docs, Kaggle, Coursera, NPTEL/SWAYAM, AWS, Microsoft Learn).
        </p>
      </div>

      {/* Filter Control Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-deepBlue uppercase tracking-wider pb-2 border-b border-slate-100">
          <Filter className="w-4 h-4 text-primary" />
          <span>Roadmap Personalization Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Free Only Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-semibold text-deepBlue">Free Resources Only</span>
            <button
              onClick={() => setFreeOnly(!freeOnly)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                freeOnly ? 'bg-primary justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-xs" />
            </button>
          </div>

          {/* Language Selector */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <label className="text-[10px] font-bold uppercase text-mutedText block mb-1">Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-darkText focus:outline-none focus:border-primary"
            >
              <option value="English">English</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Hindi">Hindi (हिन्दी)</option>
            </select>
          </div>

          {/* Media Format */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <label className="text-[10px] font-bold uppercase text-mutedText block mb-1">Media Format</label>
            <select
              value={mediaFormat}
              onChange={(e) => setMediaFormat(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-darkText focus:outline-none focus:border-primary"
            >
              <option value="all">All (Video & Reading)</option>
              <option value="video">Video First (YouTube / Coursera)</option>
              <option value="reading">Reading & Interactive Docs</option>
            </select>
          </div>

          {/* Hours Per Day */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <label className="text-[10px] font-bold uppercase text-mutedText">Study Pace</label>
              <span className="font-bold text-primary text-[11px]">{hoursPerDay} hrs/day</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full accent-primary h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Ordered Gaps Cards */}
      <div className="space-y-6">
        {filteredSkills.map((skill, idx) => {
          const isDone = completedProjects.includes(skill.name);
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-soft transition-all space-y-5 ${
                isDone ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              {/* Card Header with Rank & Gain per week */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary text-white font-mono font-bold flex items-center justify-center text-xs shrink-0">
                    #{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-deepBlue flex items-center gap-2">
                      <span>{skill.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-lightBlue text-primary font-sans font-semibold">
                        {skill.category}
                      </span>
                    </h3>
                    <p className="text-xs text-mutedText mt-0.5">{skill.whyItMatters}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-mutedText uppercase block">ROI Velocity</span>
                    <span className="text-xs font-display font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      +{skill.gainPerWeek}% match / week
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-mutedText uppercase block">Time Needed</span>
                    <span className="text-xs font-bold text-deepBlue">~{skill.estimatedHours} hrs ({skill.weeksNeeded} wks)</span>
                  </div>
                </div>
              </div>

              {/* Topics Checklist */}
              <div>
                <span className="text-xs font-bold text-deepBlue uppercase tracking-wider block mb-2">
                  Ordered Topic Checklist:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {skill.topics.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hand-written Vetted Learning Platforms */}
              <div>
                <span className="text-xs font-bold text-deepBlue uppercase tracking-wider block mb-2">
                  Curated Platforms & Guides (Vetted):
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {skill.platforms.map((p, i) => (
                    <a
                      key={i}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 bg-white hover:border-primary/60 hover:bg-lightBlue/20 transition-all flex flex-col justify-between text-xs group cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <span className="font-bold text-deepBlue group-hover:text-primary transition-colors">{p.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-mutedText group-hover:text-primary shrink-0" />
                      </div>
                      <span className="text-[10px] text-mutedText font-medium">{p.type}</span>
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-mutedText mt-1.5 italic">
                  * Note: {skill.pricingNote} (check current pricing before enrolling).
                </p>
              </div>

              {/* Proof Project & Progress Tracker */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                    Portfolio Proof Project
                  </span>
                  <p className="text-xs text-darkText font-medium max-w-xl">
                    {skill.proofProject}
                  </p>
                </div>

                <button
                  onClick={() => toggleProject(skill.name)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 ${
                    isDone 
                      ? 'bg-emerald-600 text-white shadow-soft' 
                      : 'bg-white border border-slate-200 text-deepBlue hover:border-primary'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isDone ? 'Project Completed (+Gain Active)' : 'Mark Project Complete'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
