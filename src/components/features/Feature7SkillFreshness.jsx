import React, { useState } from 'react';
import { 
  TrendingUp, TrendingDown, Minus, Clock, 
  Sparkles, Sliders, CheckCircle2 
} from 'lucide-react';

export default function Feature7SkillFreshness({ resume }) {
  const [recencyWeight, setRecencyWeight] = useState(70);

  const risingSkills = [
    { name: "RAG & LLM Pipelines", demand: "+148% YoY", recency: "2024 - Present", status: "Surging" },
    { name: "pgvector & Hybrid Retrieval", demand: "+94% YoY", recency: "2024 - Present", status: "Surging" },
    { name: "FastAPI Async Services", demand: "+42% YoY", recency: "2023 - Present", status: "Growing" },
    { name: "TypeScript Strict Contracts", demand: "+35% YoY", recency: "2023 - Present", status: "Growing" }
  ];

  const stableSkills = [
    { name: "React & Next.js", demand: "High Baseline", recency: "Continuous", status: "Evergreen" },
    { name: "Docker Containerization", demand: "High Baseline", recency: "Continuous", status: "Evergreen" },
    { name: "PostgreSQL Relational Storage", demand: "High Baseline", recency: "Continuous", status: "Evergreen" }
  ];

  const fadingSkills = [
    { name: "GraphQL Apollo Federation (Legacy)", demand: "-18% YoY", recency: "2021 (CloudScale)", status: "Fading" },
    { name: "Vue 2 Monoliths", demand: "-32% YoY", recency: "2020 (Internship)", status: "Fading" }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">07</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Skill Freshness & Market Trajectory</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Dynamic weighting algorithm prioritizing technologies practiced recently over legacy stack experience.
        </p>
      </div>

      {/* Recency Weighting Interactive Slider */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="font-bold text-sm text-deepBlue flex items-center gap-2">
              <Sliders className="w-4 h-4 text-primary" />
              <span>Recency Discount Factor: {recencyWeight}%</span>
            </h3>
            <p className="text-xs text-mutedText mt-0.5">
              Higher percentages penalize skills not exercised within the past 18 months.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lightBlue text-primary">
            Market Dynamic Active
          </span>
        </div>

        <input
          type="range"
          min="20"
          max="100"
          value={recencyWeight}
          onChange={(e) => setRecencyWeight(Number(e.target.value))}
          className="w-full accent-primary h-2 bg-slate-100 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-mutedText mt-2">
          <span>Flat Historical Weight (All years equal)</span>
          <span>Heavy Recency Preference (Last 2 years 3x)</span>
        </div>
      </div>

      {/* Trajectory Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Rising Column */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <h3 className="font-bold text-xs sm:text-sm text-deepBlue flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Rising & High Demand</span>
            </h3>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">4 Skills</span>
          </div>

          <div className="space-y-2.5">
            {risingSkills.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs">
                <div className="flex items-center justify-between font-bold text-deepBlue mb-1">
                  <span>{s.name}</span>
                  <span className="text-[10px] text-emerald-700">{s.demand}</span>
                </div>
                <div className="flex justify-between text-[11px] text-mutedText">
                  <span>{s.recency}</span>
                  <span className="text-emerald-700 font-semibold">{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stable Column */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <h3 className="font-bold text-xs sm:text-sm text-deepBlue flex items-center gap-1.5">
              <Minus className="w-4 h-4 text-primary" />
              <span>Stable Core & Evergreen</span>
            </h3>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-lightBlue text-primary">3 Skills</span>
          </div>

          <div className="space-y-2.5">
            {stableSkills.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <div className="flex items-center justify-between font-bold text-deepBlue mb-1">
                  <span>{s.name}</span>
                  <span className="text-[10px] text-primary">{s.demand}</span>
                </div>
                <div className="flex justify-between text-[11px] text-mutedText">
                  <span>{s.recency}</span>
                  <span className="text-slate-600 font-semibold">{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fading Column */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <h3 className="font-bold text-xs sm:text-sm text-deepBlue flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-amber-600" />
              <span>Fading / Older Stack</span>
            </h3>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">2 Skills</span>
          </div>

          <div className="space-y-2.5">
            {fadingSkills.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs">
                <div className="flex items-center justify-between font-bold text-deepBlue mb-1">
                  <span>{s.name}</span>
                  <span className="text-[10px] text-amber-700">{s.demand}</span>
                </div>
                <div className="flex justify-between text-[11px] text-mutedText">
                  <span>{s.recency}</span>
                  <span className="text-amber-800 font-semibold">{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
