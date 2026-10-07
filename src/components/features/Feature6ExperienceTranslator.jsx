import React, { useState } from 'react';
import { 
  Languages, ArrowRight, Sparkles, CheckCircle2, 
  Briefcase, HeartHandshake, Shield, Store 
} from 'lucide-react';

export default function Feature6ExperienceTranslator({ onAddSkill }) {
  const [category, setCategory] = useState('gig');
  const [rawText, setRawText] = useState(
    "Managed an independent e-commerce store and local delivery dispatch for family wholesale business. Handled customer disputes, negotiated vendor contracts, and automated inventory sync with Google Sheets scripts."
  );
  const [translated, setTranslated] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);

  const categories = [
    { id: 'gig', label: 'Gig / Freelance Work' },
    { id: 'family', label: 'Family Business' },
    { id: 'break', label: 'Career Break / Caregiving' },
    { id: 'volunteer', label: 'Volunteering / Open Source' },
    { id: 'military', label: 'Military Service' },
    { id: 'regional', label: 'Regional-Language Resume' }
  ];

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setIsTranslating(false);
      setTranslated({
        professionalTitle: "Operations Automation Lead & Supply Chain Specialist",
        coreCompetencies: [
          "Workflow Automation (Google Apps Script / Webhooks)",
          "Vendor Relationship Management & Contract Negotiation",
          "Logistics & Multi-Channel Inventory Optimization",
          "Cross-Functional Crisis Escalation & Customer Retention"
        ],
        bulletPoint: "Architected automated inventory synchronization pipelines across multi-channel distributors; reduced order fulfillment bottlenecks by 35% through custom automated scripting."
      });
    }, 400);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">06</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Experience Translator</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Translate gig work, family businesses, career pauses, military service, and non-traditional experience into standard executive competencies.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => { setCategory(c.id); setTranslated(null); }}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              category === c.id
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-primary/50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Input / Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Input Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <h3 className="font-bold text-sm text-deepBlue">Raw / Non-Traditional Experience Description</h3>
          <textarea
            rows={6}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            className="w-full p-3.5 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none font-sans"
          />

          <button
            onClick={handleTranslate}
            disabled={isTranslating}
            className="w-full py-3 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-xs shadow-soft flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isTranslating ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            <span>Translate to Corporate Competencies</span>
          </button>
        </div>

        {/* Output Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
          <h3 className="font-bold text-sm text-deepBlue">Standardized Professional Translation</h3>

          {translated ? (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-3.5 rounded-xl bg-lightBlue/30 border border-lightBlue">
                <span className="text-[10px] font-bold uppercase text-primary tracking-wider block">Recommended Role Title</span>
                <span className="text-sm font-bold text-deepBlue">{translated.professionalTitle}</span>
              </div>

              <div>
                <span className="text-xs font-bold text-deepBlue uppercase tracking-wider block mb-2">Identified Core Competencies:</span>
                <div className="space-y-1.5">
                  {translated.coreCompetencies.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs p-2 rounded-lg bg-slate-50 text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wider block mb-1">Tailored Resume Bullet:</span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">{translated.bulletPoint}</p>
              </div>
            </div>
          ) : (
            <div className="h-48 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center p-6 text-mutedText">
              <Languages className="w-8 h-8 text-slate-300 mb-2" />
              <p className="text-xs">Click translate to map real-world responsibilities into industry terminology.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
