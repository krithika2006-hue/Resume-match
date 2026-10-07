import React, { useState } from 'react';
import { 
  Scale, Bot, User, CheckCircle2, AlertTriangle, 
  Sparkles, RefreshCw 
} from 'lucide-react';
import { callAI } from '../../utils/aiService';

export default function Feature13AdvocateVsSkeptic({ resume, job }) {
  const [isDebating, setIsDebating] = useState(false);
  const [debateRounds, setDebateRounds] = useState([
    {
      speaker: 'advocate',
      name: 'Agent Advocate',
      stance: 'Pro-Hire',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      text: "Sarah is an exceptional match. She architected and shipped a production RAG system handling 15M daily requests with pgvector and FastAPI at Nexus AI. That represents real-world high-throughput execution that exceeds the job's core requirements."
    },
    {
      speaker: 'skeptic',
      name: 'Agent Skeptic',
      stance: 'Risk-Audit',
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      text: "While her pgvector experience is solid, Apex explicitly lists dedicated vector engines (Pinecone / Milvus / Qdrant) in their requirements. pgvector has different scaling dynamics under index mutations. Can she manage distributed vector partitions independently?"
    },
    {
      speaker: 'advocate',
      name: 'Agent Advocate',
      stance: 'Pro-Hire',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      text: "Her DocuSense project already demonstrates hybrid dense/sparse search and local embedding caching. The conceptual jump from pgvector HNSW to Pinecone namespaces is trivial for an engineer with her distributed systems queue background."
    },
    {
      speaker: 'skeptic',
      name: 'Agent Skeptic',
      stance: 'Risk-Audit',
      color: 'bg-amber-50 text-amber-800 border-amber-200',
      text: "Fair, but what about Kubernetes? Her deployments are mostly AWS ECS Fargate task definitions. If Apex runs on-prem or multi-cloud EKS with Helm charts, she will need 2-3 weeks of ramp-up on pod networking."
    }
  ]);

  const handleRunNewDebate = async () => {
    setIsDebating(true);
    await callAI('debate');
    setIsDebating(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">13</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Advocate vs. Skeptic AI Debate</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Two autonomous AI agents debate candidate strengths and vulnerabilities to surface blind spots without confirmation bias.
        </p>
      </div>

      {/* Synthesis Verdict */}
      <div className="bg-gradient-to-r from-deepBlue to-[#122b7a] rounded-2xl p-6 text-white shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-lightBlue">Consensus Synthesis</span>
          <h3 className="text-lg font-bold">Strong Candidate with Addressable Infrastructure Gap</h3>
          <p className="text-xs text-lightBlue/80 max-w-xl mt-1 leading-relaxed">
            Advocate proves core RAG and API competence is top 5% tier. Skeptic rightly flags that Kubernetes manifests and Pinecone metadata filtering should be pre-briefed in interview prep.
          </p>
        </div>

        <button
          onClick={handleRunNewDebate}
          disabled={isDebating}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold text-xs shadow-soft transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
        >
          {isDebating ? <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
          <span>Re-Simulate Debate</span>
        </button>
      </div>

      {/* Debate Stream */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
        <h3 className="font-display font-bold text-sm text-deepBlue flex items-center gap-2">
          <Scale className="w-4 h-4 text-primary" />
          <span>Live Deliberation Transcript</span>
        </h3>

        <div className="space-y-4">
          {debateRounds.map((msg, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    msg.speaker === 'advocate' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                  }`}>
                    {msg.speaker === 'advocate' ? 'A' : 'S'}
                  </div>
                  <span className="font-bold text-xs text-deepBlue">{msg.name}</span>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${msg.color}`}>
                  {msg.stance}
                </span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-sans">{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
