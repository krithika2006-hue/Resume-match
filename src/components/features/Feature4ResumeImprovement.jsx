import React, { useState } from 'react';
import { 
  FileEdit, CheckCircle2, ArrowRight, Sparkles, 
  SplitSquareVertical, Check, Copy, Undo2 
} from 'lucide-react';

export default function Feature4ResumeImprovement({ resume, job }) {
  const [activeDiffTab, setActiveDiffTab] = useState('diff');
  const [applied, setApplied] = useState(false);

  const improvements = [
    {
      title: "Highlight pgvector Latency Optimization",
      impact: "+5% Match Gain",
      desc: "Apex emphasizes high-throughput RAG. Elevate the 42% query latency reduction metric to the first bullet under Nexus AI.",
      category: "High Impact"
    },
    {
      title: "Explicitly Feature Vector DB Evaluation",
      impact: "+4% Match Gain",
      desc: "Reference your prototype benchmarking between Pinecone, Milvus, and pgvector in the DocuSense project description.",
      category: "Keyword Relevance"
    },
    {
      title: "Quantify Distributed Queue Throughput",
      impact: "+3% Match Gain",
      desc: "State the 10,000 tasks/second peak resilience with Redis Streams to satisfy concurrent systems scale requirements.",
      category: "System Scale"
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">04</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Resume Improvement & Tailored Diff</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Targeted suggestions and an automated before/after diff tailored specifically for {job.title}.
        </p>
      </div>

      {/* Suggested Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {improvements.map((imp, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lightBlue text-primary">
                  {imp.category}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {imp.impact}
                </span>
              </div>
              <h3 className="font-bold text-sm text-deepBlue mb-1.5">{imp.title}</h3>
              <p className="text-xs text-mutedText leading-relaxed">{imp.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Before / After Diff Viewer */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-base text-deepBlue flex items-center gap-2">
              <SplitSquareVertical className="w-4 h-4 text-primary" />
              <span>Tailored Experience Section Diff</span>
            </h3>
            <p className="text-xs text-mutedText mt-0.5">
              Nexus AI Systems — Lead Full-Stack AI Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setApplied(!applied)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-soft transition-all cursor-pointer ${
                applied 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                  : 'bg-primary text-white hover:bg-blue-700'
              }`}
            >
              {applied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Applied to Profile</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Apply Tailored Rewrite</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Diff Comparison Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 font-mono text-xs">
          {/* Before Column */}
          <div className="p-5 bg-red-50/20">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-red-100">
              <span className="font-bold text-red-900 uppercase tracking-wider text-[11px]">Original Resume</span>
              <span className="text-[10px] text-red-600 font-sans">Generic Phrasing</span>
            </div>
            <div className="space-y-3 text-slate-700">
              <p className="p-2 rounded bg-red-50/60 border border-red-100/80">
                - Worked on RAG services and vector embeddings using LangChain and PostgreSQL.
              </p>
              <p className="p-2 rounded bg-slate-50 border border-slate-100">
                - Improved latency on question answering and handled high traffic requests.
              </p>
              <p className="p-2 rounded bg-slate-50 border border-slate-100">
                - Built frontend dashboard with React and WebSockets for real-time streaming.
              </p>
            </div>
          </div>

          {/* After Column */}
          <div className="p-5 bg-emerald-50/20">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-100">
              <span className="font-bold text-emerald-900 uppercase tracking-wider text-[11px]">Tailored for {job.title}</span>
              <span className="text-[10px] text-emerald-700 font-sans font-semibold">Evidence & Impact Enhanced</span>
            </div>
            <div className="space-y-3 text-slate-800">
              <p className="p-2 rounded bg-emerald-50 border border-emerald-200/80 font-medium">
                + Architected enterprise RAG retrieval services using LangChain, pgvector, and FastAPI; decreased document question-answering latency by <strong>42%</strong> while handling <strong>15M daily requests</strong>.
              </p>
              <p className="p-2 rounded bg-emerald-50 border border-emerald-200/80 font-medium">
                + Evaluated dedicated vector indexing (Pinecone vs pgvector HNSW) and implemented hybrid sparse/dense search pipelines.
              </p>
              <p className="p-2 rounded bg-slate-50 border border-slate-100">
                + Engineered real-time reactive streaming console in React 18 with resilient WebSocket heartbeats and optimistic caching.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-mutedText flex items-center justify-between">
          <span>Alignment gain after tailoring: <strong>+8%</strong> overall match</span>
          <span className="font-semibold text-deepBlue">ATS Keyword Compatibility: 98%</span>
        </div>
      </div>
    </div>
  );
}
