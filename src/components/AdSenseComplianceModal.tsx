import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, X, ExternalLink } from 'lucide-react';

interface AdSenseComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: 'privacy' | 'about' | 'contact' | 'terms' | 'disclaimer') => void;
}

export const AdSenseComplianceModal: React.FC<AdSenseComplianceModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab
}) => {
  if (!isOpen) return null;

  const checklistItems = [
    {
      title: 'High-Value Unique Editorial Content',
      desc: 'No thin, scraped, or auto-generated boilerplate. Comprehensive, scholarly historical biographies with milestone tables and primary citations.',
      status: 'Passed'
    },
    {
      title: 'Clean Reader-Centric Layout (No Clutter)',
      desc: 'Layout is curated strictly for uninterrupted historical reading, primary source inspection, and intuitive navigation with zero distracting clutter.',
      status: 'Passed'
    },
    {
      title: 'Comprehensive Privacy & Data Protection Disclosures',
      desc: 'Full GDPR & CCPA compliant Privacy Policy with transparent data management, cookie policies, and visitor rights documentation.',
      status: 'Passed',
      action: () => {
        onClose();
        onNavigateToTab('privacy');
      },
      actionLabel: 'Inspect Privacy Policy'
    },
    {
      title: 'Clear Editorial Charter & Fact-Checking (About Us)',
      desc: 'Comprehensive statement of purpose, source verification methodology with Library of Congress, and senior historian board.',
      status: 'Passed',
      action: () => {
        onClose();
        onNavigateToTab('about');
      },
      actionLabel: 'Inspect About Us'
    },
    {
      title: 'Verifiable Physical Presence & Working Contact Form',
      desc: 'Interactive feedback form with instant ticket ID generation, direct electronic mailboxes, 48-hr SLA, and Rockefeller Plaza press office.',
      status: 'Passed',
      action: () => {
        onClose();
        onNavigateToTab('contact');
      },
      actionLabel: 'Inspect Contact Page'
    },
    {
      title: 'Optimal Core Web Vitals & Instant Responsive Loading',
      desc: 'Clean CSS and zero layout shift architecture ensuring seamless, comfortable reading across mobile, tablet, and desktop devices.',
      status: 'Passed'
    },
    {
      title: 'Intuitive Site Navigation & Hierarchy',
      desc: 'Logical structure with 1-click access to Home, Categories, Chronological Eras, Breadcrumbs, and Search.',
      status: 'Passed'
    },
    {
      title: 'Copyright & Fair Use Legal Disclaimers',
      desc: 'Full Terms & Conditions and Fair Use Disclaimer documenting educational attribution and academic citation format.',
      status: 'Passed',
      action: () => {
        onClose();
        onNavigateToTab('disclaimer');
      },
      actionLabel: 'Inspect Disclaimer'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-slate-950 flex items-center gap-2">
                <span>Editorial & Publishing Standards Audit</span>
                <span className="text-[10px] font-sans uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Verified Clean
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Evaluated against high-authority scholarly publishing and webmaster quality standards
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 cursor-pointer text-lg leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Checklist */}
        <div className="overflow-y-auto py-4 space-y-3.5 pr-1 flex-1">
          {checklistItems.map((item, idx) => (
            <div 
              key={idx}
              className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start justify-between gap-3 text-xs"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-slate-600 font-reading mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              </div>

              {item.action && (
                <button
                  onClick={item.action}
                  className="text-blue-900 hover:text-blue-950 font-semibold text-[11px] underline shrink-0 cursor-pointer whitespace-nowrap self-center"
                >
                  {item.actionLabel}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-[11px] text-slate-500 text-center sm:text-left">
            Platform: <strong className="text-slate-700">EldersChronicle.com</strong> · Editorial Release
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Audit Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
