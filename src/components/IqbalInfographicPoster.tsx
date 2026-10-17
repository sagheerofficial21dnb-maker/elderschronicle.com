import React from 'react';
import { Feather, BookOpen, Compass, Award, Quote, Download, Check, Sparkles, Lightbulb } from 'lucide-react';

interface IqbalInfographicPosterProps {
  className?: string;
}

export const IqbalInfographicPoster: React.FC<IqbalInfographicPosterProps> = ({
  className = ''
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  const handlePrint = () => {
    window.print();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto my-10 ${className}`}>
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-slate-300 rounded-t-xl border border-slate-800 text-xs no-print">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span className="font-serif font-bold text-white tracking-wide">
            Elders Chronicle Archival Infographic Folio
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-[11px] text-emerald-300/90 hidden sm:inline">
            Series: Great Philosophers & Visionary Minds
          </span>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded text-[11px] transition-colors cursor-pointer shadow-xs"
        >
          {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
          <span>{downloaded ? 'Saved to Print' : 'Print / Export Poster'}</span>
        </button>
      </div>

      {/* 16:9 Widescreen Archival Infographic Poster Container */}
      <div 
        id="iqbal-infographic-poster"
        className="relative overflow-hidden rounded-b-xl border-x border-b border-emerald-500/30 bg-[#081813] text-white shadow-2xl p-6 sm:p-10 lg:p-12 select-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(16, 75, 54, 0.5) 0%, rgba(8, 24, 19, 0.98) 75%)'
        }}
      >
        {/* Decorative Background Elements (Cosmic Geometry & Astrolabe Watermark) */}
        <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden" aria-hidden="true">
          <svg className="absolute -right-20 -bottom-20 w-[520px] h-[520px] text-emerald-200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.8" />
            <polygon points="100,10 120,80 190,100 120,120 100,190 80,120 10,100 80,80" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Outer Fine Gold & Emerald Filigree Border */}
        <div className="absolute inset-3 sm:inset-4 border border-emerald-400/25 rounded-lg pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT THIRD: Historical Portrait & Dignified Archival Frame (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Top Museum Stamp */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-500/20 text-[10px] font-mono text-emerald-300/80 uppercase tracking-widest">
                <span>Cat. Ref: PHIL-SA-1877</span>
                <span>Archival Folio</span>
              </div>

              {/* Portrait Frame with Emerald & Gold Patina */}
              <div className="relative rounded-lg overflow-hidden border-2 border-emerald-400/40 bg-slate-950 shadow-xl group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&h=800&q=85"
                    alt="Authentic portrait study of Allama Muhammad Iqbal in contemplative philosopher posture"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Bottom Portrait Name Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="font-serif text-lg font-bold text-emerald-200 tracking-wide block">
                      Allama Muhammad Iqbal
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-emerald-300/80 uppercase block">
                      1877 – 1938
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Pillars of Iqbal's Philosophy */}
            <div className="mt-4 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-xs backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Pillars of Iqbalian Thought</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300 font-reading">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Philosophy of Khudi:</strong> Rejection of fatalism; cultivation of dynamic selfhood and agency.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Principle of Ijtihad:</strong> Rational reconstruction of law and continuous theological evolution.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>The Shaheen Archetype:</strong> Symbolic eagle representing intellectual soaring and ascetic courage.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Philosophical Statehood:</strong> Conception of an autonomous civil sphere for human flourishing.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT TWO-THIRDS: Typographic Hierarchy, Milestone Cards & Quotes (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
            
            {/* 1. Header Badge: Official Historic Title */}
            <div className="p-4 sm:p-5 rounded-lg bg-emerald-950/70 border border-emerald-400/40 relative">
              <div className="flex items-center gap-2 text-amber-400 text-[11px] font-mono tracking-widest uppercase mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Mufakkir-e-Pakistan · Shair-e-Mashriq (Poet of the East)</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                ALLAMA MUHAMMAD IQBAL (1877–1938)
              </h1>
              <p className="text-xs text-emerald-200/90 font-reading mt-1 leading-relaxed">
                Pioneering philosopher-poet who harmonized Western metaphysical dialectics with Eastern spiritual intuition, inspiring the conceptual birth of a sovereign South Asian nation.
              </p>
            </div>

            {/* 2. Milestone Timeline Cards (Colorful Infographic Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Milestone 1: 1908 */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono font-bold text-xs">
                    1908
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Munich & Cambridge</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Doctorate in Metaphysics
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Completed Ph.D. at Munich University on Persian Metaphysics and called to the Bar at Lincoln’s Inn.
                </p>
              </div>

              {/* Milestone 2: 1915 */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono font-bold text-xs">
                    1915
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Asrar-e-Khudi</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  The Secrets of the Self
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Published his breakthrough philosophical poem formulating human individuality as creative divine agency.
                </p>
              </div>

              {/* Milestone 3: 1930 */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono font-bold text-xs">
                    1930
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Allahabad Address</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Conception of Sovereign Statehood
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Delivered landmark presidential address proposing an autonomous consolidated North-Western Muslim state.
                </p>
              </div>

              {/* Milestone 4: 1934 */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono font-bold text-xs">
                    1934
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Oxford University Press</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Reconstruction of Thought
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Published landmark theological treatise engaging Einstein's relativity, Bergson's duration, and modern physics.
                </p>
              </div>

            </div>

            {/* 3. Iconic Quote Banner (Bottom Card with Emerald Patina) */}
            <div className="p-4 sm:p-5 rounded-lg bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-teal-950/70 border border-emerald-400/40 relative">
              <Quote className="w-6 h-6 text-emerald-400/50 absolute top-3 right-3" />
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300 mb-1">
                The Immortal Verse on Human Sovereignty:
              </div>
              <blockquote className="font-serif italic text-xs sm:text-sm text-emerald-100 leading-relaxed mb-2">
                "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai."
                <span className="block mt-1 text-[11px] text-emerald-300/90 not-italic font-reading">
                  (Exalt the Self to such heights that before decreeing each destiny, God Himself asks man: What is your will?)
                </span>
              </blockquote>
              <div className="text-[11px] text-slate-400 font-sans flex items-center justify-between">
                <span>Bal-e-Jibril (Gabriel's Wing), 1935</span>
                <span className="font-mono text-emerald-400 font-bold hidden sm:inline">EldersChronicle.com</span>
              </div>
            </div>

            {/* Bottom Footer Stamp */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-sans">
              <span>Primary Documents: Ludwig Maximilian University Munich & Oxford University Press Collections</span>
              <span className="font-mono text-emerald-300">Preserved in Elders Chronicle Historical Archive</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
