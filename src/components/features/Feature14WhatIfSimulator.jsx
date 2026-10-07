import React, { useState } from 'react';
import { 
  Sliders, Plus, CheckCircle2, RotateCcw, 
  Sparkles, Award, ArrowUpRight 
} from 'lucide-react';
import { calculateMatchScore } from '../../data/mockData';

export default function Feature14WhatIfSimulator({ resume, job, onApplySimulation }) {
  const [addedSkills, setAddedSkills] = useState([]);
  const [addedCerts, setAddedCerts] = useState([]);

  // Calculate scores dynamically in code with ZERO external API calls
  const simulation = calculateMatchScore(resume, job, addedSkills, addedCerts);
  const baseScore = calculateMatchScore(resume, job, [], []);

  const toggleSkill = (skillName) => {
    setAddedSkills(prev => 
      prev.includes(skillName) ? prev.filter(s => s !== skillName) : [...prev, skillName]
    );
  };

  const toggleCert = (certName) => {
    setAddedCerts(prev => 
      prev.includes(certName) ? prev.filter(c => c !== certName) : [...prev, certName]
    );
  };

  const handleReset = () => {
    setAddedSkills([]);
    setAddedCerts([]);
  };

  const delta = simulation.overallScore - baseScore.overallScore;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">14</span>
            <h1 className="text-2xl font-display font-bold text-deepBlue">What-If Scenario Simulator</h1>
          </div>
          <p className="text-xs sm:text-sm text-mutedText mt-1">
            Toggle hypothetically added skills, projects, and certifications. Computes match adjustments instantly in code.
          </p>
        </div>

        {(addedSkills.length > 0 || addedCerts.length > 0) && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-mutedText hover:text-deepBlue hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Scenario</span>
          </button>
        )}
      </div>

      {/* Instant Dynamic Score Comparison Banner */}
      <div className="bg-gradient-to-r from-deepBlue via-[#122b7a] to-deepBlue rounded-3xl p-6 sm:p-8 text-white shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-lightBlue uppercase tracking-wider">Simulated Match Outcome</span>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
              {simulation.overallScore}%
            </span>
            <span className="text-xl text-lightBlue/70 font-semibold line-through">
              {baseScore.overallScore}%
            </span>
            {delta > 0 && (
              <span className="text-sm font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                +{delta}% Potential Gain
              </span>
            )}
          </div>
          <p className="text-xs text-lightBlue/80 mt-2 max-w-md">
            Skills Score: <strong>{simulation.skillsScore}%</strong> • Experience: <strong>{simulation.experienceScore}%</strong> • Projects: <strong>{simulation.projectsScore}%</strong>
          </p>
        </div>

        <div className="w-full md:w-auto bg-white/10 rounded-2xl p-4 backdrop-blur-xs border border-white/10 text-xs text-center">
          <span className="text-lightBlue block mb-1">Active Scenario Elements:</span>
          <span className="text-lg font-bold text-white">
            {addedSkills.length + addedCerts.length} items toggled
          </span>
        </div>
      </div>

      {/* Simulator Toggles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Missing Skills Toggles */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-sm text-deepBlue">Hypothetical Missing Skills</h3>
            <span className="text-[11px] text-mutedText">Click to toggle</span>
          </div>

          <div className="space-y-2.5">
            {[
              { name: "Vector Databases (Pinecone/Milvus)", gain: "+7% Gain", category: "Must-Have Gap" },
              { name: "Kubernetes (K8s)", gain: "+6% Gain", category: "Nice-to-Have Gap" },
              { name: "LangSmith / RAGAS Evaluation", gain: "+4% Gain", category: "Quality Tooling" },
              { name: "Rust Systems Programming", gain: "+3% Gain", category: "High Concurrency" }
            ].map((skill, idx) => {
              const isSelected = addedSkills.includes(skill.name);
              return (
                <div
                  key={idx}
                  onClick={() => toggleSkill(skill.name)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? 'bg-lightBlue/40 border-primary text-deepBlue shadow-xs' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-primary/40'
                  }`}
                >
                  <div>
                    <span className="font-bold text-xs block">{skill.name}</span>
                    <span className="text-[10px] text-mutedText">{skill.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {skill.gain}
                    </span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Proof Projects Toggles */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-bold text-sm text-deepBlue">Projects & Industry Certifications</h3>
            <span className="text-[11px] text-mutedText">Proof Boosters</span>
          </div>

          <div className="space-y-2.5">
            {[
              { name: "AWS Certified Solutions Architect", gain: "+4% Gain", type: "Certification" },
              { name: "Published Vector Retrieval Benchmark Repo", gain: "+5% Gain", type: "Portfolio Project" },
              { name: "Certified Kubernetes Administrator (CKA)", gain: "+6% Gain", type: "Certification" },
              { name: "DeepLearning.AI LLM Specialization", gain: "+3% Gain", type: "Coursework" }
            ].map((cert, idx) => {
              const isSelected = addedCerts.includes(cert.name);
              return (
                <div
                  key={idx}
                  onClick={() => toggleCert(cert.name)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? 'bg-lightBlue/40 border-primary text-deepBlue shadow-xs' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-primary/40'
                  }`}
                >
                  <div>
                    <span className="font-bold text-xs block">{cert.name}</span>
                    <span className="text-[10px] text-mutedText">{cert.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {cert.gain}
                    </span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
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
