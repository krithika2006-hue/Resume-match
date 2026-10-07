import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2, Clock, Award, 
  ExternalLink, Sparkles, ChevronRight 
} from 'lucide-react';

export default function Feature17GapToHiredPlan() {
  const [completedDays, setCompletedDays] = useState([1, 2]);

  const plan = [
    {
      day: 1,
      title: "Vector Embeddings & HNSW Deep Dive",
      time: "2 Hours",
      focus: "Pinecone / Milvus Indexes",
      deliverable: "Read Pinecone University docs & run local pgvector HNSW benchmark with m=16, ef=64.",
      gain: "+3% Alignment"
    },
    {
      day: 2,
      title: "Hybrid Search (Dense + Sparse) Implementation",
      time: "2.5 Hours",
      focus: "Reciprocal Rank Fusion",
      deliverable: "Combine BM25 keyword rankings with cosine embedding similarity in a clean Python script.",
      gain: "+4% Alignment"
    },
    {
      day: 3,
      title: "Pinecone API Client Project",
      time: "3 Hours",
      focus: "Proof Project 1",
      deliverable: "Build FastAPI endpoint connecting to Pinecone serverless tier with metadata namespace filtering.",
      gain: "+5% Alignment"
    },
    {
      day: 4,
      title: "Kubernetes Core Architecture (Minikube / K3s)",
      time: "2.5 Hours",
      focus: "Pods, Services & Ingress",
      deliverable: "Write declarative deployment.yaml manifest with readiness probes for a Python microservice.",
      gain: "+3% Alignment"
    },
    {
      day: 5,
      title: "Container Autoscaling & Secrets",
      time: "3 Hours",
      focus: "Proof Project 2",
      deliverable: "Simulate Horizontal Pod Autoscaling (HPA) responding to simulated spike traffic in K3s.",
      gain: "+4% Alignment"
    },
    {
      day: 6,
      title: "Resume Refinement & GitHub Push",
      time: "1.5 Hours",
      focus: "Portfolio Evidence",
      deliverable: "Publish clean GitHub repository with README benchmark results and update resume bullet points.",
      gain: "+3% Alignment"
    },
    {
      day: 7,
      title: "5-Minute Verified Match Task & Interview Run",
      time: "1 Hour",
      focus: "Proof Badge Upgrade",
      deliverable: "Complete VeriMatch timed proof test to upgrade Tier 3 Live-Verified badge.",
      gain: "+5% Alignment"
    }
  ];

  const toggleDay = (dayNum) => {
    setCompletedDays(prev =>
      prev.includes(dayNum) ? prev.filter(d => d !== dayNum) : [...prev, dayNum]
    );
  };

  const progressPercent = Math.round((completedDays.length / 7) * 100);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">17</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">7-Day Gap-to-Hired Micro Plan</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          A focused 7-day tactical execution schedule to eliminate your exact technical gaps before employer interviews.
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Curriculum Progress</span>
          <div className="text-2xl font-display font-extrabold text-deepBlue mt-0.5">
            {completedDays.length} of 7 Days Completed ({progressPercent}%)
          </div>
          <p className="text-xs text-mutedText mt-1">Total projected match score lift upon completion: <strong>+12%</strong></p>
        </div>

        <div className="w-full sm:w-48 bg-slate-100 h-3 rounded-full overflow-hidden">
          <div className="bg-primary h-full rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Day by Day Cards */}
      <div className="space-y-3">
        {plan.map((item) => {
          const isDone = completedDays.includes(item.day);
          return (
            <div
              key={item.day}
              onClick={() => toggleDay(item.day)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDone 
                  ? 'bg-emerald-50/40 border-emerald-200' 
                  : 'bg-white border-slate-200 hover:border-primary/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                  isDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  D{item.day}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-bold text-xs sm:text-sm ${isDone ? 'text-emerald-950 line-through' : 'text-deepBlue'}`}>
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-primary bg-lightBlue px-2 py-0.5 rounded-full">
                      {item.focus}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.deliverable}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {item.gain}
                </span>
                <span className="text-xs text-mutedText flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {item.time}
                </span>
                <div className={`w-6 h-6 rounded-lg border flex items-center justify-center ${
                  isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'
                }`}>
                  {isDone && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
