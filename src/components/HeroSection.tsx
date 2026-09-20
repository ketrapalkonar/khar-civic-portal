import React from 'react';
import { Flame, Send, Award, Users, AlertTriangle, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  totalVotes: number;
  onJumpToLeaderboard: () => void;
  onJumpToGenerator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  totalVotes,
  onJumpToLeaderboard,
  onJumpToGenerator
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-10 pb-14 border-b border-slate-700/60">
      {/* Subtle Mumbai landmark ambient pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge requested */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Made by Mumbaikars for Mumbaikars</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-slate-300 font-normal">H/West Ward Citizen Voice</span>
          </div>

          {/* Main Title requested */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
            Aamchi Khar West
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 mt-1">
              Civic Spot-Fix &amp; Escalation Portal
            </span>
          </h1>

          {/* Subtitle requested */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Suno BMC! Crowdsourcing Neighborhood Issues &amp; Direct Complaint Escalation for H/West Ward.
          </p>

          {/* Mumbai Slang Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-medium">
            <span className="px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <strong>Fix The Lafda:</strong> Upvote Ground Issues
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <strong>Kachra Free Zone:</strong> SWM Escalation
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <strong>No More Jhol:</strong> Verified Official Contacts
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <strong>Ward 400052:</strong> 2nd Hasnabad Lane AMC Desk
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onJumpToLeaderboard}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-slate-950" />
              Upvote Khar West Issues
            </button>
            <button
              onClick={onJumpToGenerator}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 hover:border-slate-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-amber-400" />
              Draft Escalation Email to AMC
            </button>
          </div>

          {/* Counter Banner requested */}
          <div className="bg-slate-800/80 backdrop-blur border border-amber-500/30 rounded-2xl p-4 sm:p-5 max-w-2xl mx-auto shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    Citizen Democracy in Action
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-100">
                    Total Votes Registered in H/West Ward
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-2 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-700">
                <span className="text-2xl sm:text-3xl font-black font-mono text-amber-400 tracking-tight">
                  {totalVotes.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">Citizen Upvotes</span>
              </div>
            </div>

            {/* Micro stats banner */}
            <div className="mt-3 pt-3 border-t border-slate-700/60 grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
              <div>
                <span className="font-bold text-white">5</span> Top Focus Areas
              </div>
              <div className="border-x border-slate-700">
                <span className="font-bold text-amber-400">100%</span> Open to Citizens
              </div>
              <div>
                <span className="font-bold text-emerald-400">Direct</span> AMC Escalation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
