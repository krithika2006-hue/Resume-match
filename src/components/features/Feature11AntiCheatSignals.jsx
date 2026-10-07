import React, { useState } from 'react';
import { 
  Eye, ShieldCheck, AlertCircle, Info, 
  Clock, RefreshCw, KeyRound, Monitor 
} from 'lucide-react';

export default function Feature11AntiCheatSignals() {
  const [tabSwitches, setTabSwitches] = useState(1);
  const [pasteEvents, setPasteEvents] = useState(2);
  const [taskSeed, setTaskSeed] = useState('0x7F9B-2024');

  const handleRegenerateSeed = () => {
    setTaskSeed('0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">11</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Transparent Anti-Cheat Architecture</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Proof authenticity without intrusive spyware. Soft signals are transparently reported and never used to automatically reject applicants.
        </p>
      </div>

      {/* Philosophy Banner */}
      <div className="p-4 rounded-2xl bg-lightBlue/30 border border-lightBlue flex items-start gap-3">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="text-xs text-deepBlue leading-relaxed">
          <strong>Fairness Guarantee:</strong> We do not use webcams, invasive screen locks, or automated disqualification algorithms. Paste events and tab switches act solely as soft indicators for human recruiters to conduct brief 2-minute conversational follow-ups.
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Signal 1: Seed */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-mutedText">Unique Task Seed</span>
            <KeyRound className="w-4 h-4 text-primary" />
          </div>
          <div className="font-mono font-bold text-sm text-deepBlue">{taskSeed}</div>
          <p className="text-[11px] text-mutedText">Personalized challenge variables derived per candidate.</p>
          <button
            onClick={handleRegenerateSeed}
            className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer pt-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Generate Fresh Attempt</span>
          </button>
        </div>

        {/* Signal 2: Time Envelope */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-mutedText">Time Constraint</span>
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div className="font-mono font-bold text-sm text-deepBlue">5 Min Hard Cap</div>
          <p className="text-[11px] text-mutedText">Ensures candidates solve problems intuitively in real-time.</p>
          <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
            Normal Completion: 3m 42s
          </span>
        </div>

        {/* Signal 3: Tab Switch */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-mutedText">Tab Switches</span>
            <Monitor className="w-4 h-4 text-primary" />
          </div>
          <div className="font-mono font-bold text-sm text-deepBlue">{tabSwitches} Event Logged</div>
          <p className="text-[11px] text-mutedText">Typical range for API documentation lookup (1-3 events).</p>
          <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
            Acceptable Reference Behavior
          </span>
        </div>

        {/* Signal 4: Paste Telemetry */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-mutedText">Paste Cadence</span>
            <Eye className="w-4 h-4 text-primary" />
          </div>
          <div className="font-mono font-bold text-sm text-deepBlue">{pasteEvents} Snippet Pastes</div>
          <p className="text-[11px] text-mutedText">Differentiates bulk copy-pasting from standard code typing.</p>
          <span className="inline-block text-[10px] font-semibold text-primary bg-lightBlue/60 px-2 py-0.5 rounded-full mt-1">
            Logged Transparently
          </span>
        </div>

      </div>
    </div>
  );
}
