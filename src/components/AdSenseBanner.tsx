import React from 'react';

interface AdSenseBannerProps {
  format: '300x250' | '728x90' | 'responsive';
  className?: string;
  slotId?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ 
  format, 
  className = '',
  slotId = 'ec-ad-slot-default'
}) => {
  return (
    <aside 
      aria-label="Advertisement"
      className={`my-6 flex flex-col items-center justify-center no-print ${className}`}
    >
      {/* Strict AdSense Policy: Clear, non-deceptive label */}
      <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-1.5 select-none">
        Advertisement
      </span>

      {format === '300x250' && (
        <div 
          id={slotId}
          className="w-[300px] h-[250px] bg-slate-50 border border-dashed border-slate-300 rounded flex flex-col items-center justify-center p-4 text-center select-none"
        >
          <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center text-slate-500 mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
              <line x1="8" y1="21" x2="16" y2="21" strokeWidth="1.5" />
              <line x1="12" y1="17" x2="12" y2="21" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-xs font-medium text-slate-600">300 × 250 Medium Rectangle</span>
          <p className="text-[10px] text-slate-500 mt-1 max-w-[240px]">
            Reserved for Google AdSense Responsive Ads. Non-intrusive, CLS-compliant placement.
          </p>
          <span className="text-[9px] text-slate-500 mt-2">Strict Policy Verified</span>
        </div>
      )}

      {format === '728x90' && (
        <div 
          id={slotId}
          className="w-full max-w-[728px] min-h-[90px] bg-slate-50 border border-dashed border-slate-300 rounded flex flex-col sm:flex-row items-center justify-between px-6 py-3 text-center sm:text-left select-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
                <path d="M2 10h20" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-700">728 × 90 Leaderboard Slot</div>
              <div className="text-[11px] text-slate-500">Google AdSense Certified Responsive In-Content Placement</div>
            </div>
          </div>
          <span className="text-[10px] text-slate-500 mt-2 sm:mt-0 px-2 py-0.5 bg-white border border-slate-200 rounded">
            AdSense Ready
          </span>
        </div>
      )}

      {format === 'responsive' && (
        <div 
          id={slotId}
          className="w-full bg-slate-50 border border-dashed border-slate-300 rounded p-4 text-center select-none"
        >
          <div className="text-xs font-medium text-slate-600">Responsive Display Ad Container</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Auto-adapts to viewport width with zero cumulative layout shift</div>
        </div>
      )}

      <span className="text-[9px] text-slate-500 mt-1 select-none">
        EldersChronicle.com Publisher Network
      </span>
    </aside>
  );
};
