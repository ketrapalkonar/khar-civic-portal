import React, { useState, useMemo } from 'react';
import { INITIAL_ISSUES } from './data/civicData';
import { CivicIssue } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IssueLeaderboard } from './components/IssueLeaderboard';
import { WardDirectory } from './components/WardDirectory';
import { ComplaintGuide } from './components/ComplaintGuide';
import { LetterGenerator } from './components/LetterGenerator';
import { Footer } from './components/Footer';

export default function App() {
  const [issues, setIssues] = useState<CivicIssue[]>(() => {
    // Sort initially by votes descending
    return [...INITIAL_ISSUES].sort((a, b) => b.votes - a.votes);
  });

  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(() => new Set());
  const [selectedIssueId, setSelectedIssueId] = useState<string>('khar-subway');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute live total votes across all issues
  const totalVotes = useMemo(() => {
    return issues.reduce((acc, issue) => acc + issue.votes, 0);
  }, [issues]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpvote = (issueId: string) => {
    setIssues(prevIssues => {
      const updated = prevIssues.map(issue => {
        if (issue.id === issueId) {
          return {
            ...issue,
            votes: issue.votes + 1,
            lastUpdated: 'Just now'
          };
        }
        return issue;
      });

      // Dynamically re-sort cards by votes (highest votes = highest urgency)
      return updated.sort((a, b) => b.votes - a.votes);
    });

    setUpvotedIds(prev => {
      const next = new Set(prev);
      next.add(issueId);
      return next;
    });

    const target = issues.find(i => i.id === issueId);
    showToast(`+1 Vote Registered for "${target?.title || 'Issue'}"! Re-sorted by urgency.`);
  };

  const handleSelectForLetter = (issueId: string) => {
    setSelectedIssueId(issueId);
    const target = issues.find(i => i.id === issueId);
    showToast(`Loaded "${target?.title}" into Escalation Generator!`);
    const el = document.getElementById('generator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-amber-400 border border-amber-500/40 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold animate-slide-up">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navbar with total votes & navigation */}
      <Navbar
        totalVotes={totalVotes}
        onNavigate={scrollToSection}
      />

      <main>
        {/* Section 1: Header & Hero */}
        <HeroSection
          totalVotes={totalVotes}
          onJumpToLeaderboard={() => scrollToSection('leaderboard-section')}
          onJumpToGenerator={() => scrollToSection('generator-section')}
        />

        {/* Section 2: "Khar West Issue Leaderboard" (Upvoting Dashboard) */}
        <IssueLeaderboard
          issues={issues}
          upvotedIds={upvotedIds}
          onUpvote={handleUpvote}
          onSelectForLetter={handleSelectForLetter}
        />

        {/* Section 3: "Whom to Approach" (Local Ward Directory) */}
        <WardDirectory />

        {/* Section 4: "How to Complaint Like a Pro" (3-Step Guide) */}
        <ComplaintGuide
          onScrollToGenerator={() => scrollToSection('generator-section')}
        />

        {/* Section 5: "Automated Letter Generator" */}
        <LetterGenerator
          issues={issues}
          selectedIssueId={selectedIssueId}
          onSelectIssue={setSelectedIssueId}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
