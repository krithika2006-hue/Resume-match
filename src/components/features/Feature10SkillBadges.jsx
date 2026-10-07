import React, { useState } from 'react';
import { 
  BadgeCheck, Award, Shield, CheckCircle2, 
  ExternalLink, Share2, Copy 
} from 'lucide-react';

export default function Feature10SkillBadges({ resume }) {
  const [copied, setCopied] = useState(false);

  const tiers = [
    {
      tier: "Tier 1",
      name: "Claimed",
      desc: "Skill listed as a keyword on resume without linked repository or metrics.",
      color: "bg-slate-100 text-slate-700 border-slate-200",
      skills: ["Kubernetes", "GraphQL", "System Design"]
    },
    {
      tier: "Tier 2",
      name: "Demonstrated Unsupervised",
      desc: "Substantiated by public GitHub code, open-source commits, or live demo applications.",
      color: "bg-lightBlue text-primary border-primary/30",
      skills: ["React", "FastAPI", "TypeScript", "Docker", "AWS (ECS/S3)"]
    },
    {
      tier: "Tier 3",
      name: "Live-Verified",
      desc: "Successfully passed 5-minute timed algorithmic proof task or recruiter interview audit.",
      color: "bg-emerald-50 text-emerald-800 border-emerald-300",
      skills: ["Python", "PostgreSQL & pgvector", "RAG & LLM Pipelines"]
    }
  ];

  const handleCopyVerification = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">10</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Three-Tier Skill Verification Badges</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Cryptographically signed badges distinguishing self-reported keywords from production-proven competence.
        </p>
      </div>

      {/* Shareable Link Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lightBlue/50 text-primary flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-deepBlue">Candidate Verification Passport</h4>
            <p className="text-xs text-mutedText">https://verimatch.ai/verify/sarah-chen-3910</p>
          </div>
        </div>

        <button
          onClick={handleCopyVerification}
          className="px-4 py-2 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft transition-all cursor-pointer"
        >
          {copied ? 'Link Copied!' : 'Copy Verification Link'}
        </button>
      </div>

      {/* 3 Tiers Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-mutedText uppercase">{t.tier}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${t.color}`}>
                  {t.name}
                </span>
              </div>
              <p className="text-xs text-mutedText leading-relaxed mb-6">{t.desc}</p>

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-deepBlue uppercase tracking-wider block">Assigned Skills:</span>
                {t.skills.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-semibold text-deepBlue">{s}</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-mutedText flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Immutable cryptographic hash attached</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
