import React, { useState } from 'react';
import { 
  UserCheck, Clock, CheckCircle2, Send, 
  Sparkles, MessageSquare, ShieldCheck 
} from 'lucide-react';

export default function Feature12RecruiterReverify({ resume }) {
  const [selectedSkill, setSelectedSkill] = useState('PostgreSQL & pgvector');
  const [scheduled, setScheduled] = useState(false);

  const verificationPrompts = {
    'PostgreSQL & pgvector': {
      q1: "How do you decide between HNSW and IVFFlat index lists given memory budget limits in PostgreSQL?",
      q2: "What is your fallback strategy if pgvector distance queries spike CPU to 100%?"
    },
    'RAG & LLM Pipelines': {
      q1: "What chunking strategy did you find most effective for structured Markdown vs raw text tables?",
      q2: "How do you benchmark retrieval faithfulness without human evaluators in the loop?"
    },
    'FastAPI': {
      q1: "Why would you choose async def over def in FastAPI when interacting with synchronous DB drivers?",
      q2: "How do you handle connection pooling across async workers?"
    }
  };

  const currentQuestions = verificationPrompts[selectedSkill] || {
    q1: "Can you explain an edge case you resolved while implementing this in production?",
    q2: "What telemetry or monitoring metrics do you check to verify this component is healthy?"
  };

  const handleRequestFollowup = () => {
    setScheduled(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">12</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Recruiter Re-Verify</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Request a fast 2-minute verbal confirmation drill on any specific technical skill during initial recruiter screening.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-3xl space-y-6">
        <div>
          <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
            Select Technical Skill to Re-Verify:
          </label>
          <select
            value={selectedSkill}
            onChange={(e) => { setSelectedSkill(e.target.value); setScheduled(false); }}
            className="w-full p-3 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary"
          >
            <option value="PostgreSQL & pgvector">PostgreSQL & pgvector (Database)</option>
            <option value="RAG & LLM Pipelines">RAG & LLM Pipelines (AI/ML)</option>
            <option value="FastAPI">FastAPI (Backend Architecture)</option>
            <option value="Docker">Docker & Containerization</option>
          </select>
        </div>

        {/* 2-Minute Questions Card */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-deepBlue flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Generated 2-Minute Screening Script</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-mutedText border border-slate-200">
              Targeted Prompt
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-primary block mb-1">Question 1:</span>
              <p className="text-darkText">{currentQuestions.q1}</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-primary block mb-1">Question 2:</span>
              <p className="text-darkText">{currentQuestions.q2}</p>
            </div>
          </div>
        </div>

        {scheduled ? (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-xs font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>2-Minute Re-Verification invite sent to candidate calendar. Status will reflect Live-Verified after call completion.</span>
          </div>
        ) : (
          <button
            onClick={handleRequestFollowup}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4" />
            <span>Request 2-Minute Live Re-Verify with Candidate</span>
          </button>
        )}
      </div>
    </div>
  );
}
