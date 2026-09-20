import React, { useState, useEffect } from 'react';
import { ComplaintFormData, CivicIssue } from '../types';
import { generateComplaintEmail, GeneratedEmailDraft } from '../utils/letterGenerator';
import { KHAR_ROADS } from '../data/civicData';
import { 
  FileText, 
  Copy, 
  Check, 
  Send, 
  Download, 
  Sparkles, 
  AlertTriangle, 
  HelpCircle,
  Building,
  User,
  MapPin,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface LetterGeneratorProps {
  issues: CivicIssue[];
  selectedIssueId: string;
  onSelectIssue: (issueId: string) => void;
}

export const LetterGenerator: React.FC<LetterGeneratorProps> = ({
  issues,
  selectedIssueId,
  onSelectIssue
}) => {
  const [formData, setFormData] = useState<ComplaintFormData>({
    issueType: selectedIssueId || 'khar-subway',
    customIssueTitle: '',
    residentName: '',
    roadLocality: '14th Road, Khar West',
    landmark: '',
    contactNumber: '',
    societyName: '',
    urgency: 'High Priority Grievance'
  });

  const [draft, setDraft] = useState<GeneratedEmailDraft>(() => 
    generateComplaintEmail({
      issueType: selectedIssueId || 'khar-subway',
      customIssueTitle: '',
      residentName: '',
      roadLocality: '14th Road, Khar West',
      landmark: '',
      contactNumber: '',
      societyName: '',
      urgency: 'High Priority Grievance'
    })
  );

  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [copySubjectSuccess, setCopySubjectSuccess] = useState<boolean>(false);

  // Sync when selectedIssueId prop changes from leaderboard click
  useEffect(() => {
    if (selectedIssueId) {
      setFormData(prev => {
        const updated = { ...prev, issueType: selectedIssueId };
        // auto-tune locality if standard issue
        const matched = issues.find(i => i.id === selectedIssueId);
        if (matched) {
          if (matched.id === 'khar-subway') updated.roadLocality = 'Khar Subway & Approach Road';
          else if (matched.id === 'garbage-madhu-park') updated.roadLocality = '15th Road, near Madhu Park';
          else if (matched.id === 'footpath-linking-road') updated.roadLocality = 'Linking Road (near Khar Telephone Exch)';
          else if (matched.id === 'pub-noise-residential') updated.roadLocality = '14th-18th Roads Residential Belt';
          else if (matched.id === 'broken-streetlights-station') updated.roadLocality = 'Khar Station West Approach Lane';
        }
        return updated;
      });
    }
  }, [selectedIssueId, issues]);

  // Recalculate draft on formData change
  useEffect(() => {
    const newDraft = generateComplaintEmail(formData);
    setDraft(newDraft);
  }, [formData]);

  const handleInputChange = (field: keyof ComplaintFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'issueType') {
      onSelectIssue(value);
    }
  };

  const handleCopyEmail = async () => {
    const fullText = `TO: ${draft.toEmail}\nCC: ${draft.ccEmail}\nSUBJECT: ${draft.subject}\n\n${draft.body}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    }
  };

  const handleCopySubject = async () => {
    try {
      await navigator.clipboard.writeText(draft.subject);
      setCopySubjectSuccess(true);
      setTimeout(() => setCopySubjectSuccess(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${encodeURIComponent(draft.toEmail)}?cc=${encodeURIComponent(draft.ccEmail)}&subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
    window.location.href = mailtoUrl;
  };

  const handleDownloadTxt = () => {
    const fullText = `TO: ${draft.toEmail}\nCC: ${draft.ccEmail}\nSUBJECT: ${draft.subject}\n\n${draft.body}`;
    const element = document.createElement('a');
    const file = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `BMC_HWest_Grievance_${formData.roadLocality.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleReset = () => {
    setFormData({
      issueType: 'khar-subway',
      customIssueTitle: '',
      residentName: '',
      roadLocality: '14th Road, Khar West',
      landmark: '',
      contactNumber: '',
      societyName: '',
      urgency: 'High Priority Grievance'
    });
    onSelectIssue('khar-subway');
  };

  return (
    <section id="generator-section" className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            Executive Escalation Tool
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Automated Letter Generator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
            Produce a formal, legally grounded grievance letter addressed to the Assistant Municipal Commissioner of BMC H/West Ward. One click to copy or email directly.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Inputs Form on Left, Output Draft on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form (5 cols on lg) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Fill Grievance Specifics
              </h3>
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-amber-600 dark:hover:text-amber-400 font-medium flex items-center gap-1 transition-colors"
                title="Reset to defaults"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Issue Dropdown requested */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                1. Select Issue / Grievance Category *
              </label>
              <select
                value={formData.issueType}
                onChange={(e) => handleInputChange('issueType', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="khar-subway">Khar Subway Waterlogging (Monsoon Special Lafda)</option>
                <option value="garbage-madhu-park">Garbage Dumping near Madhu Park (15th Road)</option>
                <option value="footpath-linking-road">Footpath Encroachment on Linking Road</option>
                <option value="pub-noise-residential">Late Night Pub Noise in Residential Lanes</option>
                <option value="broken-streetlights-station">Dark Spots / Broken Streetlights (Khar Station)</option>
                <option value="custom">Other / Custom Khar West Issue</option>
              </select>
            </div>

            {/* Custom Issue Input if selected */}
            {formData.issueType === 'custom' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Describe Custom Issue Title *
                </label>
                <input
                  type="text"
                  value={formData.customIssueTitle}
                  onChange={(e) => handleInputChange('customIssueTitle', e.target.value)}
                  placeholder="e.g. Open Manhole cover opposite 17th Road school"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            )}

            {/* Resident Name requested */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                <span>2. Resident Name *</span>
                <span className="text-[10px] text-slate-400 font-normal">Shown in formal sign-off</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={formData.residentName}
                  onChange={(e) => handleInputChange('residentName', e.target.value)}
                  placeholder="e.g. Kunal Merchant / Pooja Shah"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Khar Road / Locality requested */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                <span>3. Khar Road / Locality *</span>
                <span className="text-[10px] text-slate-400 font-normal">e.g. 14th Road</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  value={formData.roadLocality}
                  onChange={(e) => handleInputChange('roadLocality', e.target.value)}
                  placeholder="e.g. 14th Road / 15th Road, Khar West"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Quick Locality chips for convenience */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="text-[10px] text-slate-500 font-medium self-center mr-1">Quick Select:</span>
                {['14th Road', '15th Road (Madhu Park)', 'Linking Road', 'Khar Subway', '2nd Hasnabad Lane'].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => handleInputChange('roadLocality', `${loc}, Khar West`)}
                    className="px-2 py-0.5 rounded-md text-[10px] bg-slate-200 dark:bg-slate-700 hover:bg-amber-200 dark:hover:bg-amber-900/60 text-slate-700 dark:text-slate-300 font-medium transition-colors"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Specific details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Society / Building (Optional)
                </label>
                <input
                  type="text"
                  value={formData.societyName}
                  onChange={(e) => handleInputChange('societyName', e.target.value)}
                  placeholder="e.g. Silver Cascade CHS"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Landmark / Cross Road
                </label>
                <input
                  type="text"
                  value={formData.landmark}
                  onChange={(e) => handleInputChange('landmark', e.target.value)}
                  placeholder="e.g. Opp. Cafe Terra / Subway Entry"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Contact number & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Citizen Contact (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  placeholder="e.g. +91 98200 XXXXX"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Urgency Level
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => handleInputChange('urgency', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="High Priority Grievance">High Priority Grievance</option>
                  <option value="Monsoon Emergency (Flooding/Drainage)">Monsoon Emergency (Flooding/Drainage)</option>
                  <option value="Public Health & Hygiene Hazard">Public Health &amp; Hygiene Hazard</option>
                  <option value="Pedestrian & Traffic Safety Hazard">Pedestrian &amp; Traffic Safety Hazard</option>
                  <option value="Normal Ward Maintenance">Normal Ward Maintenance</option>
                </select>
              </div>
            </div>

            {/* Micro assurance banner */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>
                Formatted strictly according to <strong>BMC Citizen Grievance Protocol &amp; RTI Guidelines</strong>.
              </span>
            </div>
          </div>

          {/* Output Box (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-3">
            {/* Header with prominent COPY button requested */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 text-white p-4 rounded-t-2xl border border-slate-800">
              <div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Ready to Dispatch Letter Draft
                </div>
                <div className="text-sm font-semibold truncate max-w-md">
                  To: {draft.toEmail}
                </div>
              </div>

              {/* Prominent "Copy Complaint Email" Button requested */}
              <button
                id="copy-complaint-btn"
                onClick={handleCopyEmail}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  copySuccess
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-300'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                }`}
              >
                {copySuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Complaint Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Metadata Strip */}
            <div className="bg-slate-100 dark:bg-slate-800/90 px-4 py-3 border-x border-slate-200 dark:border-slate-700 text-xs space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-bold">TO:</span>
                <span className="text-slate-900 dark:text-white font-semibold">{draft.toEmail}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-700 dark:text-amber-400 font-sans font-bold">
                  H/West Ward Boss
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-bold">CC:</span>
                <span className="text-slate-700 dark:text-slate-300 truncate">{draft.ccEmail}</span>
              </div>
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200 dark:border-slate-700/60">
                <div className="truncate">
                  <span className="text-slate-500 font-bold">SUBJ:</span>{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">{draft.subject}</span>
                </div>
                <button
                  onClick={handleCopySubject}
                  className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline shrink-0 font-sans font-bold"
                >
                  {copySubjectSuccess ? 'Subject Copied!' : 'Copy Subject'}
                </button>
              </div>
            </div>

            {/* Output Box Content displaying the formal email draft requested */}
            <div className="relative rounded-b-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-5 font-mono text-xs text-slate-800 dark:text-slate-200 shadow-inner overflow-y-auto max-h-[460px] leading-relaxed whitespace-pre-wrap select-text">
              {draft.body}
            </div>

            {/* Auxiliary actions row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleOpenMailClient}
                className="py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Open in Default Mail App</span>
              </button>

              <button
                onClick={handleDownloadTxt}
                className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>Download as .txt File</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
