import React, { useState } from 'react';
import { 
  FileText, Upload, CheckCircle2, AlertCircle, RefreshCw, 
  ExternalLink, Code, Briefcase, GraduationCap, Sparkles 
} from 'lucide-react';

export default function Feature1ResumeParsing({ resume, onUpdateResume }) {
  const [isParsing, setIsParsing] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  const handleSimulateUpload = () => {
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
    }, 600);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">01</span>
            <h1 className="text-2xl font-display font-bold text-deepBlue">Resume Upload & Parsing</h1>
          </div>
          <p className="text-xs sm:text-sm text-mutedText mt-1">
            Transform raw PDF/DOCX files into structured machine-readable profiles with verified skills and projects.
          </p>
        </div>

        <button
          onClick={handleSimulateUpload}
          disabled={isParsing}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-soft transition-all cursor-pointer disabled:opacity-50"
        >
          {isParsing ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          <span>Re-Parse Resume</span>
        </button>
      </div>

      {/* Upload Zone */}
      <div className="p-8 border-2 border-dashed border-lightBlue rounded-3xl bg-slate-50/50 hover:bg-lightBlue/20 transition-all text-center flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-white border border-lightBlue text-primary flex items-center justify-center shadow-soft">
          <Upload className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-base font-bold text-deepBlue">Upload Resume Document</h3>
          <p className="text-xs text-mutedText mt-1">Supports PDF, DOCX, or TXT formats (Max 15MB)</p>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <button
            onClick={handleSimulateUpload}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-deepBlue hover:border-primary shadow-xs transition-all cursor-pointer"
          >
            Browse Local File
          </button>
          <span className="text-xs text-mutedText">or view loaded sample below</span>
        </div>
      </div>

      {/* Parsed Profile Overview Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-display font-bold text-deepBlue">{resume.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                Parsed Successfully
              </span>
            </div>
            <p className="text-xs text-primary font-medium mt-0.5">{resume.title}</p>
            <p className="text-xs text-mutedText mt-1">{resume.email} • {resume.phone} • {resume.location}</p>
          </div>

          <div className="text-right">
            <span className="text-xs font-semibold uppercase text-mutedText block">Extracted Skills</span>
            <span className="text-2xl font-display font-extrabold text-primary">{resume.skills.length}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 gap-6 mt-4">
          <button
            onClick={() => setActiveTab('skills')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'skills' ? 'border-primary text-primary' : 'border-transparent text-mutedText hover:text-darkText'
            }`}
          >
            Skills ({resume.skills.length})
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'experience' ? 'border-primary text-primary' : 'border-transparent text-mutedText hover:text-darkText'
            }`}
          >
            Experience ({resume.experience.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'projects' ? 'border-primary text-primary' : 'border-transparent text-mutedText hover:text-darkText'
            }`}
          >
            Projects ({resume.projects.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-6">
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {resume.skills.map((skill, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-deepBlue">{skill.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      skill.level === 'Proven' ? 'bg-emerald-50 text-emerald-700' :
                      skill.level === 'Demonstrated' ? 'bg-lightBlue text-primary' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-[11px] text-mutedText">{skill.category} • {skill.years} yrs exp</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4">
              {resume.experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-deepBlue">{exp.role}</h4>
                    <span className="text-xs text-primary font-medium">{exp.duration}</span>
                  </div>
                  <div className="text-xs text-mutedText mb-2 font-medium">{exp.company}</div>
                  <p className="text-xs text-darkText leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsApplied.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resume.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-deepBlue">{proj.name}</h4>
                      <ExternalLink className="w-3.5 h-3.5 text-mutedText" />
                    </div>
                    <p className="text-xs text-darkText leading-relaxed mb-2">{proj.description}</p>
                    <p className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-lg mb-3">
                      <strong>Impact:</strong> {proj.metrics}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-lightBlue text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
