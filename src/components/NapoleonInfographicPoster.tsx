import React, { useState } from 'react';
import { Crown, Quote, Download, Check, ExternalLink, Image as ImageIcon, Layers } from 'lucide-react';

interface NapoleonInfographicPosterProps {
  className?: string;
}

export const NapoleonInfographicPoster: React.FC<NapoleonInfographicPosterProps> = ({ className = '' }) => {
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [activeView, setActiveView] = useState<'poster' | 'interactive'>('poster');

  const handleCopyQuote = () => {
    navigator.clipboard.writeText('"Great ambition is the passion of a great character." — Napoléon Bonaparte');
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const infographicImagePath = '/images/napoleon-bonaparte-infographic.svg';

  const milestones = [
    {
      year: '1799',
      title: 'The Coup of 18 Brumaire',
      description: 'Ascends to power as First Consul, stabilizing the French Republic.'
    },
    {
      year: '1804',
      title: 'The Civil Code & Coronation',
      description: 'Enacts the Napoleonic Code and crowns himself Emperor at Notre-Dame.'
    },
    {
      year: '1805',
      title: 'Mastery at Austerlitz',
      description: 'Executes a tactical masterstroke, dismantling the Third Coalition.'
    },
    {
      year: '1815',
      title: 'Waterloo & Final Exile',
      description: 'Defeated on the fields of Belgium, concluding the Napoleonic Era.'
    }
  ];

  return (
    <figure
      aria-label="Archival Historical Infographic Poster of Napoleon Bonaparte"
      className={`relative my-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#060D1E] via-[#0B152E] to-[#080E24] text-white shadow-2xl border-2 border-amber-500/40 print:shadow-none print:border-slate-800 ${className}`}
    >
      {/* Neoclassical Golden Filigree Background Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Top Archival Header Bar */}
      <div className="relative z-10 px-6 sm:px-8 pt-6 pb-4 border-b border-amber-500/20 flex flex-wrap items-center justify-between gap-4 bg-slate-950/70 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
            <Crown className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-amber-300 font-bold flex items-center gap-2">
              <span>Elders Chronicle Archival Folio</span>
              <span className="text-amber-500">·</span>
              <span>Plate No. IV</span>
            </div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-white tracking-tight">
              Napoléon Bonaparte (1769–1821): Historical Infographic Poster
            </h3>
          </div>
        </div>

        {/* View Switcher & Action Controls */}
        <div className="flex items-center gap-2 print:hidden flex-wrap">
          <div className="inline-flex bg-white/10 rounded-lg p-0.5 border border-white/10 text-xs">
            <button
              onClick={() => setActiveView('poster')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                activeView === 'poster' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Poster View</span>
            </button>
            <button
              onClick={() => setActiveView('interactive')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                activeView === 'interactive' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Data</span>
            </button>
          </div>

          <button
            onClick={handleCopyQuote}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            title="Copy iconic quote"
          >
            {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Quote className="w-3.5 h-3.5 text-amber-300" />}
            <span className="text-[11px]">{copiedQuote ? 'Copied' : 'Quote'}</span>
          </button>

          <a
            href={infographicImagePath}
            download="Napoleon_Bonaparte_Archival_Infographic.svg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 text-xs font-bold shadow-md transition-colors cursor-pointer"
            title="Download high-resolution archival vector infographic"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="text-[11px]">Download HD</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      {activeView === 'poster' ? (
        /* 1. MASTER POSTER DISPLAY */
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
          <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border-2 border-amber-400/50 bg-[#0B192C]">
            <img
              src={infographicImagePath}
              alt="Archival Historical Infographic Poster of Napoleon Bonaparte showing his portrait, key career milestones from 1799 to 1815, and famous quote over a deep navy and gold background"
              className="w-full h-auto block select-none"
            />
          </div>

          <div className="mt-4 flex items-center justify-between w-full max-w-5xl text-xs text-slate-400 px-2 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              16:9 Archival Folio · Verified Primary Chronology
            </span>
            <a 
              href={infographicImagePath} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Open Raw Masterpiece</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        /* 2. INTERACTIVE BREAKDOWN DISPLAY */
        <div className="relative z-10 p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-[#0D1838]/90 border border-amber-500/30 rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs font-mono">
                    {m.year}
                  </span>
                  <h4 className="font-serif font-bold text-base text-white">
                    {m.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-reading leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quote Strip */}
          <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-between text-xs text-amber-200">
            <div className="flex items-center gap-2 italic font-serif text-sm">
              <Quote className="w-4 h-4 text-amber-400" />
              <span>"Great ambition is the passion of a great character."</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
              Napoléon Bonaparte
            </span>
          </div>
        </div>
      )}
    </figure>
  );
};
