import React from 'react';
import { 
  Compass, ArrowRight, CheckCircle2, AlertTriangle, 
  Sparkles, TrendingUp 
} from 'lucide-react';

export default function Feature16AdjacentCareers({ resume, onNavigate }) {
  const adjacentRoles = [
    {
      title: "AI Solutions Architect",
      readiness: 76,
      overlappingSkills: ["FastAPI", "RAG Pipelines", "System Design", "AWS", "Python"],
      missingBridge: ["Enterprise Client Scoping", "SOC2 / HIPAA Compliance"],
      estimatedBridgeTime: "2-3 Weeks",
      marketSalary: "$175,000 - $210,000",
      demandTrend: "+52% YoY"
    },
    {
      title: "MLOps / Platform Infrastructure Engineer",
      readiness: 72,
      overlappingSkills: ["Docker", "PostgreSQL", "FastAPI", "Python", "CI/CD"],
      missingBridge: ["Kubeflow Pipelines", "Helm Charts & Terraform"],
      estimatedBridgeTime: "3-4 Weeks",
      marketSalary: "$165,000 - $195,000",
      demandTrend: "+68% YoY"
    },
    {
      title: "Developer Experience (DevRel) Engineer",
      readiness: 81,
      overlappingSkills: ["React", "TypeScript", "FastAPI", "DocuSense Open Source"],
      missingBridge: ["Technical Documentation Site", "Keynote Demos"],
      estimatedBridgeTime: "1-2 Weeks",
      marketSalary: "$150,000 - $185,000",
      demandTrend: "+28% YoY"
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">16</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Adjacent Careers & Skill Mobility</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Explore alternative high-growth engineering domains where your verified skillset already satisfies ~70%+ of requirements.
        </p>
      </div>

      {/* Adjacent Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adjacentRoles.map((role, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-display font-bold px-2.5 py-1 rounded-full bg-lightBlue text-primary">
                  {role.readiness}% Ready
                </span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {role.demandTrend}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-deepBlue mb-1">{role.title}</h3>
              <p className="text-xs text-mutedText font-medium mb-4">{role.marketSalary}</p>

              {/* Overlapping skills */}
              <div className="space-y-2 mb-4">
                <span className="text-[11px] font-bold text-deepBlue uppercase tracking-wider block">Overlapping Foundation:</span>
                <div className="flex flex-wrap gap-1">
                  {role.overlappingSkills.map((s, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-medium border border-emerald-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing bridge */}
              <div className="space-y-1.5 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
                <span className="text-[11px] font-bold text-amber-900 block">Bridge Skills Required:</span>
                <div className="text-xs text-amber-800 space-y-1">
                  {role.missingBridge.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-mutedText">Effort: <strong>{role.estimatedBridgeTime}</strong></span>
              <button
                onClick={() => onNavigate('feat-22')}
                className="font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
