import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, XCircle, CheckCircle2, 
  ExternalLink, Filter, Upload, FileCode 
} from 'lucide-react';

export default function Feature8ClaimsVsEvidence({ resume }) {
  const [filter, setFilter] = useState('all');
  const [skillsList, setSkillsList] = useState(resume.skills);
  const [evidenceModal, setEvidenceModal] = useState(null);

  const filteredSkills = skillsList.filter(s => {
    if (filter === 'all') return true;
    return s.level.toLowerCase() === filter.toLowerCase();
  });

  const handleUpgradeProof = (skillName) => {
    setSkillsList(prev => prev.map(s => {
      if (s.name === skillName) {
        return { ...s, level: 'Proven', proof: 'Verified with candidate test submission' };
      }
      return s;
    }));
    setEvidenceModal(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">08</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Claims vs. Evidence Verification</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          Every technical claim must be backed by code repositories, architecture artifacts, or direct deliverables.
        </p>
      </div>

      {/* Proof Statistics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Proven Skills</span>
            <div className="text-2xl font-display font-extrabold text-emerald-700">
              {skillsList.filter(s => s.level === 'Proven').length}
            </div>
            <p className="text-[11px] text-mutedText">Verified code & deliverables</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Demonstrated / Weak</span>
            <div className="text-2xl font-display font-extrabold text-amber-700">
              {skillsList.filter(s => s.level === 'Demonstrated' || s.level === 'Weak').length}
            </div>
            <p className="text-[11px] text-mutedText">Claimed with partial artifacts</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-mutedText">Missing Proof</span>
            <div className="text-2xl font-display font-extrabold text-red-700">
              {skillsList.filter(s => s.level === 'Missing proof').length}
            </div>
            <p className="text-[11px] text-mutedText">Listed without codebase evidence</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {['all', 'proven', 'demonstrated', 'weak', 'missing proof'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
              filter === f
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-primary/50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Skills Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-deepBlue uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4">Skill Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Evidence Level</th>
                <th className="py-3.5 px-4">Proof Grounding / Citation</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSkills.map((s, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-deepBlue">{s.name}</td>
                  <td className="py-3.5 px-4 text-mutedText">{s.category}</td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold text-[11px] ${
                      s.level === 'Proven' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      s.level === 'Demonstrated' ? 'bg-lightBlue text-primary border border-lightBlue' :
                      s.level === 'Weak' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {s.level}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 max-w-xs truncate" title={s.proof}>
                    {s.proof}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    {s.level !== 'Proven' && (
                      <button
                        onClick={() => setEvidenceModal(s)}
                        className="px-2.5 py-1 rounded-lg bg-lightBlue/60 hover:bg-lightBlue text-primary font-semibold transition-colors cursor-pointer"
                      >
                        Submit Proof
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Proof Submission Modal */}
      {evidenceModal && (
        <div className="fixed inset-0 bg-deepBlue/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-soft-lg space-y-4">
            <h3 className="font-display font-bold text-lg text-deepBlue">
              Verify Evidence for {evidenceModal.name}
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Link a GitHub PR, repository commit, or live documentation URL to upgrade this claim from <strong>{evidenceModal.level}</strong> to <strong>Proven</strong>.
            </p>

            <div>
              <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-1">
                Repository or Pull Request URL
              </label>
              <input
                type="text"
                defaultValue="https://github.com/sarahchen/task-orchestrator/pull/14"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setEvidenceModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpgradeProof(evidenceModal.name)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-blue-700 text-white shadow-soft cursor-pointer"
              >
                Confirm & Upgrade to Proven
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
