import React from 'react';
import { ViewTab } from '../types';
import { LEGAL_PAGES_DATA } from '../data/legalContent';
import { Shield, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';

interface LegalPageViewProps {
  pageType: 'about' | 'privacy' | 'terms' | 'disclaimer';
  onNavigateHome: () => void;
  onNavigateTab: (tab: ViewTab) => void;
}

export const LegalPageView: React.FC<LegalPageViewProps> = ({
  pageType,
  onNavigateHome,
  onNavigateTab
}) => {
  const content = LEGAL_PAGES_DATA[pageType];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Back to Home Button */}
      <button
        onClick={onNavigateHome}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-950 hover:underline mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Chronicle Home</span>
      </button>

      {/* Header Container */}
      <header className="border-b border-slate-200 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs text-blue-900 font-semibold uppercase tracking-wider mb-2">
          <Shield className="w-4 h-4 text-amber-600" />
          <span>Elders Chronicle Governance & Compliance Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-2">
          {content.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-reading leading-relaxed mb-3">
          {content.subtitle}
        </p>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>Effective & Last Verified: {content.lastUpdated}</span>
          <span>·</span>
          <span>Version 3.2 (GDPR & Google AdSense Standard)</span>
        </div>
      </header>

      {/* Legal Navigation Tabs */}
      <nav aria-label="Legal documents" className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-slate-100 text-xs">
        <button
          onClick={() => onNavigateTab('about')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            pageType === 'about' ? 'bg-blue-950 text-white font-semibold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          About Us & Editorial Charter
        </button>
        <button
          onClick={() => onNavigateTab('privacy')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            pageType === 'privacy' ? 'bg-blue-950 text-white font-semibold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Privacy Policy (GDPR / AdSense)
        </button>
        <button
          onClick={() => onNavigateTab('terms')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            pageType === 'terms' ? 'bg-blue-950 text-white font-semibold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => onNavigateTab('disclaimer')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            pageType === 'disclaimer' ? 'bg-blue-950 text-white font-semibold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Editorial Disclaimer
        </button>
        <button
          onClick={() => onNavigateTab('contact')}
          className="px-3 py-1.5 rounded-md whitespace-nowrap bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          Contact & Corrections
        </button>
      </nav>

      {/* Main Legal Sections Prose */}
      <article className="space-y-8 font-reading text-slate-800 text-sm sm:text-base leading-relaxed">
        {content.sections.map((section, sIdx) => (
          <section key={sIdx} className="bg-slate-50/60 border border-slate-200/80 rounded-lg p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-3 tracking-tight flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-950 shrink-0" />
              <span>{section.heading}</span>
            </h2>
            <div className="space-y-3 font-reading text-slate-700 text-sm sm:text-[15px] leading-[1.75]">
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* Compliance Trust Notice */}
      <div className="p-5 bg-blue-50/80 border border-blue-200 rounded-lg flex items-start gap-3 mt-8">
        <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
        <div className="text-xs text-blue-950 leading-relaxed font-sans">
          <strong>Scholarly Compliance Notice:</strong> Elders Chronicle operates under strict academic copyright protocols, honoring the Library of Congress guidelines, fair use doctrine for historical education, and the comprehensive regulatory privacy frameworks of the United States and the European Union.
        </div>
      </div>

    </div>
  );
};
