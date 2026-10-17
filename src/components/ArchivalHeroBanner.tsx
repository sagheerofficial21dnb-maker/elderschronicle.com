import React, { useState } from 'react';
import { BookOpen, Compass, Award, ShieldCheck } from 'lucide-react';
import { ViewTab } from '../types';

interface ArchivalHeroBannerProps {
  currentTab: ViewTab;
  onNavigateTab?: (tab: ViewTab) => void;
  onSelectCategory?: (category: any) => void;
}

export const ArchivalHeroBanner: React.FC<ArchivalHeroBannerProps> = ({
  currentTab
}) => {
  const [imageError, setImageError] = useState(false);

  // High-authority archival library photography
  const archiveImageUrl = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&h=650&q=85';

  return (
    <section 
      aria-label="Elders Chronicle Archival Banner"
      className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white border-b border-amber-900/40 shadow-md select-none"
    >
      {/* Background Classical Architectural & Astrolabe Vector Artwork */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Content Column (7 cols) - 100% English, Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Curatorial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-serif tracking-wide uppercase text-[11px]">Scholarly Historical Repository</span>
              <span className="text-amber-400/60">·</span>
              <span className="text-[11px]">Primary Manuscript Sourced</span>
            </div>

            {/* Primary Main Title: Elders Chronicle: Historical Biographies Archive */}
            <div>
              <div className="text-amber-400 font-serif text-xs sm:text-sm tracking-widest uppercase font-semibold mb-1.5 flex items-center gap-2">
                <span>The Sovereign Historical Collection</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Elders Chronicle: Historical Biographies Archive
              </h1>
            </div>

            {/* Purpose Description in High-Register English */}
            <p className="text-xs sm:text-sm text-slate-300 font-reading leading-relaxed max-w-2xl">
              An authoritative archive chronicling the transformative lives, philosophical legacies, and decisive milestones of history’s greatest statesmen, visionary scientists, ethical philosophers, and literary pioneers. Every biography is rigorously grounded in peer-reviewed archival manuscripts from the Library of Congress, the British National Archives, and international historical repositories.
            </p>

            {/* Editorial Quote & Mission Philosophy */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg max-w-2xl text-[11px] sm:text-xs text-amber-200/90 font-serif italic flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                "To understand the architects of human civilization is to decipher the moral and intellectual blueprints of our shared future."
              </span>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 font-medium">100% Primary Sources</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 font-medium">Peer-Reviewed Historiography</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-amber-400 font-bold font-mono">Vol. VII</span>
                <span>Archival Edition 2026</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column (5 cols) - Professional Museum-Grade Historical Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 bg-slate-900 group">
              
              {/* Inner Framing Border */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                {!imageError ? (
                  <img
                    src={archiveImageUrl}
                    alt="Grand classical archive library reading room with historical leather-bound manuscripts"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Zero-Broken-Image Policy Fallback */
                  <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-amber-950 p-6 flex flex-col items-center justify-center text-center">
                    <BookOpen className="w-12 h-12 text-amber-400 mb-3" />
                    <span className="font-serif font-bold text-base text-amber-200">
                      The Grand Historical Archives
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                      Manuscripts & Folios Repository
                    </span>
                  </div>
                )}

                {/* Archival Vignette Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid Corner Historical Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-mono font-semibold px-2.5 py-1 rounded border border-amber-500/30 uppercase tracking-widest">
                  Archival Folio
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="font-serif font-bold text-sm text-white drop-shadow-sm">
                    The Archival Reading Room
                  </div>
                  <div className="text-[10px] text-amber-200/80 font-serif italic truncate">
                    Preserving centuries of human thought, statecraft, and scientific revelation
                  </div>
                </div>
              </div>

              {/* Bottom Caption Strip */}
              <figcaption className="px-4 py-2 bg-slate-950/90 border-t border-white/10 text-[10px] text-slate-400 flex items-center justify-between font-sans">
                <span>Ref: MS-HIST-2026 / Primary Collection</span>
                <span className="font-mono text-amber-400/90">EldersChronicle.com</span>
              </figcaption>

            </figure>
          </div>

        </div>
      </div>
    </section>
  );
};
