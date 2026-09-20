import React from 'react';
import { STEP_GUIDES } from '../data/civicData';
import { 
  Smartphone, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  Flame,
  Lightbulb
} from 'lucide-react';

interface ComplaintGuideProps {
  onScrollToGenerator: () => void;
}

export const ComplaintGuide: React.FC<ComplaintGuideProps> = ({ onScrollToGenerator }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-6 h-6 text-emerald-500" />;
      case 1:
        return <PhoneCall className="w-6 h-6 text-rose-500" />;
      case 2:
      default:
        return <Mail className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="guide-section" className="py-12 sm:py-16 bg-slate-100/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Proven BMC Escalation Playbook
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            How to Complaint Like a Pro
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Don&apos;t just vent on WhatsApp groups! Follow this step-by-step 3-tier Mumbaikar protocol to get municipal machinery moving on Khar West streets.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEP_GUIDES.map((step, idx) => {
            return (
              <div
                key={step.stepNumber}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
              >
                {/* Step indicator watermark */}
                <div className="absolute -top-4 -right-2 text-7xl font-black text-slate-100 dark:text-slate-700/40 select-none pointer-events-none group-hover:text-amber-500/10 transition-colors">
                  {step.stepNumber}
                </div>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-inner">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {step.badge}
                    </span>
                  </div>

                  {/* Title & Slang */}
                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5 mb-3">
                    {step.mumbaiSlang}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Checklist bullet points */}
                  <div className="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      Key Steps:
                    </div>
                    {step.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pro Tip Callout */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-800 dark:text-slate-200 mb-6 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-700 dark:text-amber-400">Pro Mumbaikar Tip:</strong> {step.proTip}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-2">
                  {step.actionType === 'scroll' ? (
                    <button
                      onClick={onScrollToGenerator}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 transition-all cursor-pointer"
                    >
                      <span>{step.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : step.actionType === 'phone' ? (
                    <a
                      href={step.actionUrl}
                      className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>{step.actionLabel}</span>
                    </a>
                  ) : (
                    <a
                      href={step.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                    >
                      <span>{step.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MCGM SLA Charter Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black shrink-0">
              SLA
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white">MCGM Citizens Charter Resolution Windows:</strong> Potholes (48 hours) | Garbage Removal (24 hours) | Subway Dewatering (Immediate/Priority 1) | Streetlights (72 hours).
            </div>
          </div>
          <span className="font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
            Ward Jurisdiction: H/West (Khar, Bandra, Santacruz)
          </span>
        </div>
      </div>
    </section>
  );
};
