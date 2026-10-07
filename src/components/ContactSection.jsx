import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-lightBlue/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lightBlue/60 text-primary text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-deepBlue tracking-tight">
              Contact for queries
            </h2>
            
            <p className="text-mutedText leading-relaxed text-base">
              Have questions about resume parsing algorithms, verifiable proof tasks, or enterprise team evaluations? Our team is here to assist.
            </p>

            <div className="space-y-4 pt-4">
              {/* Direct Email Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-lightBlue/30 border border-lightBlue/60">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-soft">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Direct Email Support
                  </div>
                  <a
                    href="mailto:queries@verimatch.ai"
                    className="text-base font-bold text-deepBlue hover:text-primary transition-colors cursor-pointer"
                  >
                    queries@verimatch.ai
                  </a>
                  <p className="text-xs text-mutedText mt-0.5">Average response time: under 4 hours</p>
                </div>
              </div>

              {/* Hours / Availability */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-mutedText">
                    Assistance Hours
                  </div>
                  <div className="text-sm font-semibold text-deepBlue">
                    Monday — Friday: 8:00 AM – 7:00 PM EST
                  </div>
                  <p className="text-xs text-mutedText mt-0.5">Automated proof tests operate 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/60 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-lightBlue text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-lightBlue text-primary mx-auto flex items-center justify-center shadow-soft">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-deepBlue">
                    Thank You! Your Query Has Been Received
                  </h3>
                  <p className="text-mutedText text-sm max-w-md mx-auto">
                    We've logged your message. Our engineering and verification team will follow up at your provided email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-soft cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-deepBlue uppercase tracking-wider mb-2">
                      Inquiry or Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your question regarding the resume matching engine, verifiable badges, or candidate privacy..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-darkText placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-lightBlue transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm shadow-soft hover:shadow-soft-lg active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Query</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
