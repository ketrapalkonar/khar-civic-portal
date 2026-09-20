import React from 'react';
import { ShieldAlert, MapPin, Mail, Phone, Flame, FileText } from 'lucide-react';

interface NavbarProps {
  totalVotes: number;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ totalVotes, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-lg">
      {/* Top micro-banner */}
      <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold text-center flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-950 text-amber-300 font-bold uppercase tracking-wider text-[10px]">
          BMC H/West Ward
        </span>
        <span>Aamchi Khar West: Stand up for your road! No more <em>&ldquo;Chalta Hai&rdquo;</em> attitude.</span>
        <span className="hidden sm:inline opacity-75">|</span>
        <span className="hidden sm:inline font-mono">Emergency: 1916 (24x7)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 text-lg">
            KW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                Aamchi Khar West
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Civic Portal Active"></span>
              </span>
            </div>
            <p className="text-[11px] text-slate-300 hidden sm:block font-medium">
              Civic Spot-Fix & Escalation Portal • H/West Ward (400052)
            </p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium text-slate-200">
          <button
            onClick={() => onNavigate('leaderboard-section')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Issue Leaderboard
          </button>
          <button
            onClick={() => onNavigate('directory-section')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
            Whom to Approach
          </button>
          <button
            onClick={() => onNavigate('guide-section')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Complaint Like a Pro
          </button>
          <button
            onClick={() => onNavigate('generator-section')}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-sm flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Generate Letter
          </button>
        </nav>

        {/* Dynamic Vote Pill (Mobile & Desktop) */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-800/90 border border-amber-400/30 rounded-full px-3 py-1 text-right flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="text-[11px] text-slate-400 font-medium hidden xs:inline">Total Votes:</span>
            <span className="text-sm font-black text-amber-400 font-mono tracking-wide">{totalVotes.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
