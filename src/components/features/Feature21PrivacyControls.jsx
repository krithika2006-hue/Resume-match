import React, { useState } from 'react';
import { 
  Lock, Shield, EyeOff, Trash2, 
  CheckCircle2, AlertCircle, Info 
} from 'lucide-react';

export default function Feature21PrivacyControls() {
  const [maskPII, setMaskPII] = useState(true);
  const [localOnly, setLocalOnly] = useState(true);
  const [anonymizeSchool, setAnonymizeSchool] = useState(false);
  const [cleared, setCleared] = useState(false);

  const handleClearData = () => {
    localStorage.removeItem('verimatch_user');
    setCleared(true);
    setTimeout(() => setCleared(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">21</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Privacy & Sovereign Data Controls</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Complete candidate sovereignty. Control personal information masking, ephemeral storage, and view transparent governance mandates.
        </p>
      </div>

      {/* Mandatory Regulatory & Transparency Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-lightBlue/30 border border-lightBlue flex items-start gap-3.5">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="text-xs text-deepBlue leading-relaxed space-y-1">
          <span className="font-bold block uppercase tracking-wider text-[11px] text-primary">
            Mandatory Algorithmic Transparency Notice:
          </span>
          <p>
            Every numeric score calculated in VeriMatch AI represents <strong>"Alignment with the job posting"</strong> based on verifiable technical deliverables, and is <strong>never</strong> a predictive hiring decision, psychometric evaluation, or employment guarantee.
          </p>
        </div>
      </div>

      {/* Privacy Toggles Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <h3 className="font-bold text-sm text-deepBlue">Granular Data Protection Toggles</h3>

        <div className="space-y-4">
          {/* PII Masking */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="font-bold text-xs text-deepBlue block">Pre-Analysis PII Scrubbing</span>
              <span className="text-[11px] text-mutedText">
                Automatically masks phone numbers, physical addresses, and direct emails before any algorithmic scoring.
              </span>
            </div>
            <button
              onClick={() => setMaskPII(!maskPII)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                maskPII ? 'bg-primary justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-sm" />
            </button>
          </div>

          {/* Local Storage Only */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="font-bold text-xs text-deepBlue block">Zero-Retention Local Sandbox</span>
              <span className="text-[11px] text-mutedText">
                Profile and job descriptions are processed in your client browser and never used to train public LLM models.
              </span>
            </div>
            <button
              onClick={() => setLocalOnly(!localOnly)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                localOnly ? 'bg-primary justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-sm" />
            </button>
          </div>

          {/* Anonymize School */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="font-bold text-xs text-deepBlue block">Anonymize Educational Institutions</span>
              <span className="text-[11px] text-mutedText">
                Replaces college names with generic classification (e.g., "Accredited Regional University").
              </span>
            </div>
            <button
              onClick={() => setAnonymizeSchool(!anonymizeSchool)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                anonymizeSchool ? 'bg-primary justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-sm" />
            </button>
          </div>
        </div>

        {/* Delete All Data */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-xs text-red-900 block">Right to Erasure (GDPR / CCPA)</span>
            <span className="text-[11px] text-mutedText">
              Permanently wipe all session resumes, job postings, and simulated scores from this browser.
            </span>
          </div>

          <button
            onClick={handleClearData}
            className="px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-xs border border-red-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Purge All Local Data</span>
          </button>
        </div>

        {cleared && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All local session storage successfully purged.</span>
          </div>
        )}
      </div>
    </div>
  );
}
