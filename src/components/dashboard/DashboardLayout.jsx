import React, { useState } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import { SAMPLE_RESUME, SAMPLE_JOB, calculateMatchScore } from '../../data/mockData';

// Import All 22 Feature Components
import Feature1ResumeParsing from '../features/Feature1ResumeParsing';
import Feature2JobMatching from '../features/Feature2JobMatching';
import Feature3JobInput from '../features/Feature3JobInput';
import Feature4ResumeImprovement from '../features/Feature4ResumeImprovement';
import Feature5HiddenSkills from '../features/Feature5HiddenSkills';
import Feature6ExperienceTranslator from '../features/Feature6ExperienceTranslator';
import Feature7SkillFreshness from '../features/Feature7SkillFreshness';
import Feature8ClaimsVsEvidence from '../features/Feature8ClaimsVsEvidence';
import Feature9VerifiedMatch from '../features/Feature9VerifiedMatch';
import Feature10SkillBadges from '../features/Feature10SkillBadges';
import Feature11AntiCheatSignals from '../features/Feature11AntiCheatSignals';
import Feature12RecruiterReverify from '../features/Feature12RecruiterReverify';
import Feature13AdvocateVsSkeptic from '../features/Feature13AdvocateVsSkeptic';
import Feature14WhatIfSimulator from '../features/Feature14WhatIfSimulator';
import Feature15RecruitersView from '../features/Feature15RecruitersView';
import Feature16AdjacentCareers from '../features/Feature16AdjacentCareers';
import Feature17GapToHiredPlan from '../features/Feature17GapToHiredPlan';
import Feature18JobDecoder from '../features/Feature18JobDecoder';
import Feature19ResumeMockInterview from '../features/Feature19ResumeMockInterview';
import Feature20BiasMirror from '../features/Feature20BiasMirror';
import Feature21PrivacyControls from '../features/Feature21PrivacyControls';
import Feature22LearningRoadmap from '../features/Feature22LearningRoadmap';

export default function DashboardLayout({ currentUser, onSignOut }) {
  const [activeItem, setActiveItem] = useState('home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Shared state layer
  const [resume, setResume] = useState(SAMPLE_RESUME);
  const [job, setJob] = useState(SAMPLE_JOB);
  const [extraSkills, setExtraSkills] = useState([]);

  // Deterministic in-code match scoring
  const matchData = calculateMatchScore(resume, job, extraSkills, []);

  const handleAddSkill = (skillName) => {
    if (!extraSkills.includes(skillName)) {
      setExtraSkills(prev => [...prev, skillName]);
    }
  };

  const handleResetDemoData = () => {
    setResume(SAMPLE_RESUME);
    setJob(SAMPLE_JOB);
    setExtraSkills([]);
    setActiveItem('home');
  };

  const renderActiveView = () => {
    switch (activeItem) {
      case 'home':
        return <DashboardHome matchData={matchData} resume={resume} job={job} onNavigate={setActiveItem} />;
      case 'feat-1':
        return <Feature1ResumeParsing resume={resume} onUpdateResume={setResume} />;
      case 'feat-2':
        return <Feature2JobMatching matchData={matchData} job={job} onNavigate={setActiveItem} />;
      case 'feat-3':
        return <Feature3JobInput currentJob={job} onSelectJob={setJob} />;
      case 'feat-4':
        return <Feature4ResumeImprovement resume={resume} job={job} />;
      case 'feat-5':
        return <Feature5HiddenSkills resume={resume} onAddSkill={handleAddSkill} />;
      case 'feat-6':
        return <Feature6ExperienceTranslator onAddSkill={handleAddSkill} />;
      case 'feat-7':
        return <Feature7SkillFreshness resume={resume} />;
      case 'feat-8':
        return <Feature8ClaimsVsEvidence resume={resume} />;
      case 'feat-9':
        return <Feature9VerifiedMatch onUpgradeSkill={handleAddSkill} />;
      case 'feat-10':
        return <Feature10SkillBadges resume={resume} />;
      case 'feat-11':
        return <Feature11AntiCheatSignals />;
      case 'feat-12':
        return <Feature12RecruiterReverify resume={resume} />;
      case 'feat-13':
        return <Feature13AdvocateVsSkeptic resume={resume} job={job} />;
      case 'feat-14':
        return <Feature14WhatIfSimulator resume={resume} job={job} onApplySimulation={handleAddSkill} />;
      case 'feat-15':
        return <Feature15RecruitersView resume={resume} />;
      case 'feat-16':
        return <Feature16AdjacentCareers resume={resume} onNavigate={setActiveItem} />;
      case 'feat-17':
        return <Feature17GapToHiredPlan />;
      case 'feat-18':
        return <Feature18JobDecoder job={job} />;
      case 'feat-19':
        return <Feature19ResumeMockInterview />;
      case 'feat-20':
        return <Feature20BiasMirror resume={resume} job={job} />;
      case 'feat-21':
        return <Feature21PrivacyControls />;
      case 'feat-22':
        return <Feature22LearningRoadmap onApplyGain={handleAddSkill} />;
      default:
        return <DashboardHome matchData={matchData} resume={resume} job={job} onNavigate={setActiveItem} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 font-sans text-darkText flex flex-col">
      {/* Fixed Top Bar */}
      <TopBar 
        userName={currentUser?.name || 'Sarah Chen'} 
        onSignOut={onSignOut}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        onResetDemoData={handleResetDemoData}
      />

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <Sidebar 
          activeItem={activeItem} 
          onSelectItem={setActiveItem}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-72 p-4 sm:p-8 max-w-7xl mx-auto w-full transition-all">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
