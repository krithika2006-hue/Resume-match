import React, { useState } from 'react';
import { 
  MessageSquare, Send, Sparkles, CheckCircle2, 
  Plus, Bot, User, Clock 
} from 'lucide-react';
import { callAI } from '../../utils/aiService';

export default function Feature5HiddenSkills({ resume, onAddSkill }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi Sarah! I noticed your resume mentions building DocuSense and Nexus AI's RAG pipelines. In 3 quick minutes, let's uncover technical skills you used that aren't formally written on your resume. When query traffic spiked, how did you handle asynchronous task queues and backpressure?"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [discoveredSkills, setDiscoveredSkills] = useState([
    { name: "Asynchronous Message Queues", evidence: "Redis Streams & worker pools under 10k task spike", added: false },
    { name: "PgBouncer Connection Pooling", evidence: "PostgreSQL connection limits during high concurrency", added: false }
  ]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = { sender: 'user', text: inputVal.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    const aiRes = await callAI('hidden-skills', { userResponse: userMsg.text });
    setIsTyping(false);

    setMessages(prev => [
      ...prev,
      {
        sender: 'ai',
        text: `Impressive! From your answer, I detected deep experience in API Rate-Limiting & Exponential Backoff. ${aiRes.followUpQuestion || "Did you also configure database replica failover?"}`
      }
    ]);

    if (aiRes.identifiedSkills) {
      setDiscoveredSkills(prev => [
        ...prev,
        { name: "API Rate-Limiting & Backoff", evidence: "Mentioned 10k task/sec spike resilience", added: false }
      ]);
    }
  };

  const handleAddSkillToProfile = (skillName, idx) => {
    onAddSkill(skillName);
    setDiscoveredSkills(prev => prev.map((s, i) => i === idx ? { ...s, added: true } : s));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">05</span>
          <h1 className="text-2xl font-display font-bold text-deepBlue">Hidden Skills Interview</h1>
        </div>
        <p className="text-xs sm:text-sm text-mutedText mt-1">
          A 3-minute conversational dialogue that surfaces unlisted competencies, system trade-offs, and implicit expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Chat Window */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-soft flex flex-col h-[520px]">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60 rounded-t-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-deepBlue">Skill Discovery Interviewer</span>
                <span className="text-[10px] text-emerald-600 block">● Active Session</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-mutedText font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>3-min quick probe</span>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-lightBlue text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    AI
                  </div>
                )}
                <div className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-lg leading-relaxed ${
                  m.sender === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-slate-100/80 text-darkText rounded-tl-none'
                }`}>
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    SC
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-xs text-mutedText">
                <div className="w-6 h-6 rounded-full bg-lightBlue text-primary flex items-center justify-center text-[10px]">AI</div>
                <div className="flex gap-1 py-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g. We implemented Redis Streams with dead-letter queueing and exponential backoff retry logic..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-darkText focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-semibold shadow-soft flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </form>
        </div>

        {/* Discovered Skills Sidebar */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="font-display font-bold text-sm text-deepBlue">Discovered Skills</h3>
            </div>
            <span className="text-xs font-mono font-bold text-primary">{discoveredSkills.length} Found</span>
          </div>

          <div className="space-y-3">
            {discoveredSkills.map((skill, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-lightBlue/60 bg-lightBlue/20 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-deepBlue">{skill.name}</h4>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    Unlisted
                  </span>
                </div>
                <p className="text-[11px] text-mutedText leading-snug">{skill.evidence}</p>

                <button
                  onClick={() => handleAddSkillToProfile(skill.name, idx)}
                  disabled={skill.added}
                  className={`w-full py-1.5 px-3 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    skill.added 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-primary text-white hover:bg-blue-700 shadow-xs'
                  }`}
                >
                  {skill.added ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Added to Profile</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Profile (+Demonstrated)</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
