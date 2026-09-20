import React, { useState } from 'react';
import { WARD_OFFICIALS } from '../data/civicData';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Search,
  Clock
} from 'lucide-react';

export const WardDirectory: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  const filteredOfficials = WARD_OFFICIALS.filter(official => 
    official.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    official.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    official.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    official.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="directory-section" className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              BMC H/West Ward Directory
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Whom to Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Official contact channels for BMC H/West Ward. Stop making endless rounds—connect directly with the right department head.
            </p>
          </div>

          {/* Search box & Address Pill */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search official or dept..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Local Ward Office Address Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900 text-white border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                H/West Ward Municipal Office (Khar West)
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">
                2nd Hasnabad Lane, Khar West, Mumbai - 400052
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300 flex-wrap">
            <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Citizen Hearing: <strong>3:00 PM – 5:00 PM (Mon–Fri)</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-rose-950/80 text-rose-300 border border-rose-800 px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              <span>Disaster Helpline: <strong>1916 (24x7)</strong></span>
            </div>
          </div>
        </div>

        {/* Clear Table for Desktop & Tablet */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                <th className="py-3.5 px-4">Official Role & Designation</th>
                <th className="py-3.5 px-4">Focus / Mumbaikar Slang Tag</th>
                <th className="py-3.5 px-4">Department & Jurisdiction</th>
                <th className="py-3.5 px-4">Direct Email</th>
                <th className="py-3.5 px-4">Phone / Helpline</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
              {filteredOfficials.map((official) => {
                const isCopied = copiedEmail === official.email;
                const isAmc = official.id === 'amc';
                const isDisaster = official.id === 'disaster-helpline';

                return (
                  <tr 
                    key={official.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                      isAmc ? 'bg-amber-50/50 dark:bg-amber-950/10' : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        {official.role}
                        {isAmc && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase">
                            Ward Boss
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                        {official.title}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs border border-slate-200 dark:border-slate-700">
                        {official.slangRole}
                      </span>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {official.badgeText}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-900 dark:text-slate-200">
                        {official.department}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {official.jurisdiction}
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="truncate max-w-[200px]" title={official.email}>
                          {official.email}
                        </span>
                        <button
                          onClick={() => handleCopy(official.email)}
                          className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-amber-500 transition-colors cursor-pointer"
                          title="Copy Email Address"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono font-medium">
                      <a
                        href={isDisaster ? 'tel:1916' : `tel:${official.phone.split('/')[0].trim()}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {official.phone}
                      </a>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`mailto:${official.email}?subject=[Civic Grievance Khar West]&body=Respected Sir/Madam,%0D%0A%0D%0AI am a resident of Khar West...`}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-opacity inline-flex items-center gap-1"
                          title="Send Direct Email"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {filteredOfficials.map((official) => {
            const isCopied = copiedEmail === official.email;
            const isAmc = official.id === 'amc';
            const isDisaster = official.id === 'disaster-helpline';

            return (
              <div
                key={official.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isAmc
                    ? 'bg-amber-50/70 dark:bg-slate-800 border-amber-400 dark:border-amber-500 shadow-md'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {official.role}
                    </h3>
                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {official.title}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                    {official.slangRole}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 my-3">
                  <div>
                    <span className="text-slate-400 font-medium">Dept:</span> {official.department}
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Jurisdiction:</span> {official.jurisdiction}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex flex-col gap-2">
                  {/* Email row */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="truncate text-slate-700 dark:text-slate-300 text-[11px]">
                      {official.email}
                    </span>
                    <button
                      onClick={() => handleCopy(official.email)}
                      className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1 shrink-0"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <a
                      href={isDisaster ? 'tel:1916' : `tel:${official.phone.split('/')[0].trim()}`}
                      className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-200"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>Call Officer</span>
                    </a>
                    <a
                      href={`mailto:${official.email}?subject=[Civic Grievance Khar West]`}
                      className="py-2 px-3 rounded-xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Mail</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
