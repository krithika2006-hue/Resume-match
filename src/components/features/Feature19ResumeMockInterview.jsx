import React, { useState } from 'react';
import { 
  Mic, Send, CheckCircle2, AlertTriangle, 
  Sparkles, RefreshCw, Volume2 
} from 'lucide-react';

export default function Feature19ResumeMockInterview() {
  const [question, setQuestion] = useState(
    "In your Nexus AI systems experience, you utilized pgvector for retrieval. How did you handle memory exhaustion and index rebuilding trade-offs as embedding volumes scaled beyond 5M records?"
  );
  const [userAnswer, setUserAnswer] = useState(
    "We configured IVFFlat with tuned centroids and later transitioned to HNSW with m=16, efConstruction=64. For memory limits, we segregated older historical embeddings into cold partitions and only kept active document embeddings resident in RAM."
  );
  const [feedback, setFeedback] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setFeedback({
        score: "92/100",
        strengths: [
          "Explicitly cited key HNSW parameters (m=16, efConstruction=64) demonstrating genuine production ownership.",
          "Partitioning cold vs hot data directly resolves PostgreSQL shared buffer saturation."
        ],
        weakness: "Could have mentioned vector quantization (IVF-PQ) or PgBouncer worker connection pooling.",
        modelFollowUp: "How did you monitor index build progress during live database transactions without locking read operations?"
      });
    }, 450);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">19</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Resume-Based Mock Interview</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Precision mock interview targeting your exact weak spots and least-substantiated resume claims before hiring rounds.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft max-w-3xl space-y-6">
        {/* Question Header */}
        <div className="p-4 rounded-2xl bg-lightBlue/30 border border-lightBlue space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targeted Probe on Vector Index Scaling</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-deepBlue">Weak Spot Audit</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-deepBlue leading-relaxed">
            "{question}"
          </p>
        </div>

        {/* Answer Box */}
        <div>
          <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
            Your Technical Response:
          </label>
          <textarea
            rows={5}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Explain your architectural reasoning, metrics, and real-world trade-offs..."
            className="w-full p-4 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary leading-relaxed"
          />
        </div>

        {/* Action Button */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-mutedText">{userAnswer.length} characters</span>
          <button
            onClick={handleEvaluate}
            disabled={isEvaluating}
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isEvaluating ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>Evaluate Response with AI Rubric</span>
          </button>
        </div>

        {/* Evaluation Output */}
        {feedback && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold text-deepBlue">AI Evaluation & Scoring</span>
              <span className="text-sm font-display font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Score: {feedback.score}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-emerald-800 block">Demonstrated Strengths:</span>
              {feedback.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>

            <div className="text-xs pt-1">
              <span className="font-bold text-amber-800 block mb-0.5">Recommended Refinement:</span>
              <p className="text-slate-600">{feedback.weakness}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
