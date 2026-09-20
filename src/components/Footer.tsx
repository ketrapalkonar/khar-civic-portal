import React from 'react';
import { ShieldCheck, Heart, MapPin, Phone, Building, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Portal Overview */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm">
                KW
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Aamchi Khar West
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Independent citizen civic spot-fix and escalation portal empowering residents of Khar West (BMC H/West Ward, Mumbai 400052) to demand transparent accountability.
            </p>
            <div className="text-[11px] font-medium text-amber-400">
              Motto: <em>No More Chalta Hai Attitude!</em>
            </div>
          </div>

          {/* Col 2: Key Ward Locations */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Khar West Civic Landmarks
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Khar Subway (S.V. Road connecting link)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Madhu Park (15th Road)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Linking Road Shopping Corridor</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Khar Station West (Approach &amp; Market)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                <span>H/West Ward Office (2nd Hasnabad Lane)</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Official Grievance Links
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://portal.mcgm.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>MCGM Portal (Grievance Tracking)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://trafficpolicemumbai.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Mumbai Traffic Police (MTP App)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://rtionline.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Maharashtra RTI Online Portal</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li className="text-slate-500 pt-1">
                Ward Office: 2nd Hasnabad Lane, Khar West - 400052
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency Contacts */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              24x7 Helplines
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-rose-400">BMC Disaster Management</div>
                <div className="text-white font-mono text-xs font-black">1916 (Toll-Free 24x7)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-amber-400">Mumbai Police Emergency</div>
                <div className="text-white font-mono text-xs font-black">100 / 112</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-blue-400">Khar Traffic Police Chowky</div>
                <div className="text-white font-mono text-xs">022-26006444</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>by Mumbaikars for Khar West Residents (BMC H/West Ward).</span>
          </div>

          <div className="text-slate-500 text-center sm:text-right">
            Public Interest Citizen Toolkit • Non-partisan Civic Initiative
          </div>
        </div>
      </div>
    </footer>
  );
};
