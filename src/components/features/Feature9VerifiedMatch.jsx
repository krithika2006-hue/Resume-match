import React, { useState, useEffect } from 'react';
import { 
  Award, Clock, CheckCircle2, Play, 
  HelpCircle, Sparkles, Send, ShieldCheck 
} from 'lucide-react';

export default function Feature9VerifiedMatch({ onUpgradeSkill }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [codeAnswer, setCodeAnswer] = useState(
`// Complete the vector reranking function:
async function hybridSearchRerank(queryVector, sparseTokens, topK = 5) {
  // 1. Fetch dense candidates from pgvector
  // 2. Compute BM25 lexical score
  // 3. Return merged reciprocal rank fusion (RRF)
}`
  );
  const [followUpAnswer, setFollowUpAnswer] = useState(
    "We use an RRF constant k=60 to balance lexical keyword matches against dense cosine distances."
  );

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSubmitTask = () => {
    setIsRunning(false);
    setCompleted(true);
    if (onUpgradeSkill) {
      onUpgradeSkill("Vector Databases (Pinecone/Milvus)");
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">09</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Verified Match — 5-Minute Proof Task</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          A personalized 5-minute technical challenge generated directly from your resume and the target role requirements.
        </p>
      </div>

      {completed ? (
        <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-soft text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-display font-bold text-deepBlue">Proof Task Successfully Verified!</h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-lg mx-auto">
            Your reciprocal rank fusion solution and follow-up explanation on RRF constants have been validated. <strong>Vector Databases & Reranking</strong> is now upgraded to <strong>Live-Verified</strong> (+7% Match Gain).
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Badge Earned: Tier 3 Live-Verified</span>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-soft p-6 sm:p-8 space-y-6">
          
          {/* Challenge Banner & Timer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Challenge Objective</span>
              <h3 className="text-sm sm:text-base font-bold text-deepBlue">
                Implement Hybrid Semantic Reranking with Reciprocal Rank Fusion
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 font-mono font-bold text-sm text-deepBlue shadow-xs">
                <Clock className="w-4 h-4 text-primary" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              {!isRunning && timeLeft === 300 && (
                <button
                  onClick={() => setIsRunning(true)}
                  className="px-4 py-1.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start Timer</span>
                </button>
              )}
            </div>
          </div>

          {/* Code Editor Area */}
          <div>
            <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
              1. Code Solution:
            </label>
            <textarea
              rows={8}
              value={codeAnswer}
              onChange={(e) => setCodeAnswer(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 font-mono text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-slate-900 text-slate-100"
            />
          </div>

          {/* Follow-up Question */}
          <div className="p-4 rounded-xl bg-lightBlue/30 border border-lightBlue space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-deepBlue">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Follow-up Question:</span>
            </div>
            <p className="text-xs text-mutedText leading-relaxed">
              Why might pure cosine similarity fail when queries contain specific serial codes or uncommon acronyms, and how does your code mitigate this?
            </p>
            <textarea
              rows={2}
              value={followUpAnswer}
              onChange={(e) => setFollowUpAnswer(e.target.value)}
              placeholder="Your technical explanation..."
              className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs text-darkText focus:outline-none focus:border-primary"
            />
          </div>

          {/* Submit Action */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmitTask}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Verify Proof</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
