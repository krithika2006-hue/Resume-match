import React from 'react';
import { Search, ShieldCheck, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const points = [
    {
      icon: Search,
      title: "Find Hidden Skills",
      tagline: "Uncover capabilities traditional resume parsers miss",
      desc: "Our intelligent conversational agent draws out unlisted skills from your gig work, side projects, open-source code, and day-to-day responsibilities, converting overlooked experience into measurable strengths."
    },
    {
      icon: ShieldCheck,
      title: "Verify Skills with Evidence",
      tagline: "Replace subjective claims with verifiable proof",
      desc: "Every skill on your profile is grounded in work deliverables, project artifacts, or quick 5-minute proof tasks. Recruiters see verified evidence instead of buzzword-stuffed bullet points."
    },
    {
      icon: Wrench,
      title: "Learn Exactly What to Fix",
      tagline: "Actionable 7-day micro plans and instant simulations",
      desc: "Stop guessing why applications don't get callbacks. Get transparent, component-level match breakdowns, live 'What-If' scenario simulators, and prioritized roadmaps with curated free learning materials."
    }
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-lightBlue/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lightBlue/50 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-deepBlue tracking-tight mb-6">
            Transparent Job Matching Built on Verifiable Proof
          </h2>
          <p className="text-lg text-mutedText leading-relaxed">
            VeriMatch AI bridges the trust gap between job seekers and hiring teams. We replace black-box screening with transparent evidence, explainable scores, and concrete roadmaps.
          </p>
        </div>

        {/* 3 Core Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 hover:border-primary/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-xl bg-lightBlue text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Point Number */}
                  <div className="text-xs font-bold text-primary tracking-wider uppercase mb-2">
                    0{index + 1}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-display font-bold text-deepBlue mb-2">
                    {point.title}
                  </h3>
                  <div className="text-sm font-semibold text-primary mb-4">
                    {point.tagline}
                  </div>

                  {/* Plain Language Description */}
                  <p className="text-mutedText leading-relaxed text-sm sm:text-base">
                    {point.desc}
                  </p>
                </div>

                {/* Subtle Indicator */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-primary">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Verified by AI alignment engine</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action quote strip */}
        <div className="mt-16 bg-gradient-to-r from-deepBlue to-[#122b7a] rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div>
            <h4 className="text-xl sm:text-2xl font-display font-bold mb-2">
              Ready to evaluate your resume against top roles?
            </h4>
            <p className="text-lightBlue/80 text-sm sm:text-base">
              Try our instant one-click demo loaded with real engineer and data profiles.
            </p>
          </div>
          <a
            href="#signin"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-lightBlue text-deepBlue font-semibold text-sm transition-all duration-150 shadow-md shrink-0 cursor-pointer"
          >
            <span>Launch Demo Dashboard</span>
            <ArrowRight className="w-4 h-4 text-deepBlue" />
          </a>
        </div>
      </div>
    </section>
  );
}
