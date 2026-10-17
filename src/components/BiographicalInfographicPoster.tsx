import React from 'react';
import { Scale, Feather, Award, Calendar, Compass, BookOpen, Quote, Download, Check } from 'lucide-react';

interface BiographicalInfographicPosterProps {
  className?: string;
}

export const BiographicalInfographicPoster: React.FC<BiographicalInfographicPosterProps> = ({
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
          <Compass className="w-4 h-4 text-amber-400" />
          <span className="font-serif font-bold text-white tracking-wide">
            Elders Chronicle Archival Infographic Folio
          </span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-[11px] text-amber-300/90 hidden sm:inline">
            Series: Historical Architects of Statecraft
          </span>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-[11px] transition-colors cursor-pointer shadow-xs"
        >
          {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
          <span>{downloaded ? 'Saved to Print' : 'Print / Export Poster'}</span>
        </button>
      </div>

      {/* 16:9 Widescreen Archival Infographic Poster Container */}
      <div 
        id="jinnah-infographic-poster"
        className="relative overflow-hidden rounded-b-xl border-x border-b border-amber-500/30 bg-[#09152E] text-white shadow-2xl p-6 sm:p-10 lg:p-12 select-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(30, 58, 138, 0.45) 0%, rgba(9, 21, 46, 0.95) 70%)'
        }}
      >
        {/* Decorative Background Elements (Classical Archway & Astrolabe Watermark) */}
        <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden" aria-hidden="true">
          <svg className="absolute -right-20 -bottom-20 w-[500px] h-[500px] text-amber-200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.8" />
            <path d="M100 10 V190 M10 100 H190" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Outer Fine Gold Filigree Border */}
        <div className="absolute inset-3 sm:inset-4 border border-amber-400/25 rounded-lg pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT THIRD: Historical Portrait & Dignified Archival Frame (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Top Museum Stamp */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-amber-500/20 text-[10px] font-mono text-amber-300/80 uppercase tracking-widest">
                <span>Cat. Ref: HIST-PAK-1876</span>
                <span>Archival Grade</span>
              </div>

              {/* Portrait Frame with Gold Patina & Warm Directional Museum Rim Lighting */}
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-400/40 bg-slate-950 shadow-xl group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&h=800&q=85"
                    alt="Authentic portrait study of Quaid-e-Azam Muhammad Ali Jinnah in tailored suit and karakul cap"
                    className="w-full h-full object-cover object-top filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Bottom Portrait Name Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="font-serif text-lg font-bold text-amber-200 tracking-wide block">
                      Muhammad Ali Jinnah
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase block">
                      1876 – 1948
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enduring Attributes of Jinnah's Statesmanship Card */}
            <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-amber-500/30 text-xs backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-500/20 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <Scale className="w-3.5 h-3.5" />
                <span>Attributes of Statesmanship</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300 font-reading">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Constitutional Legality:</strong> Achieved statehood without military violence.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Financial Incorruptibility:</strong> Refused state gifts and public funds.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Democratic Equality:</strong> Enshrined equal rights for religious minorities.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Institutional Vision:</strong> Founded State Bank of Pakistan and civil service.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT TWO-THIRDS: Typographic Hierarchy, Milestone Cards & Quotes (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
            
            {/* 1. Header Badge: Official Historic Title */}
            <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-amber-400/40 relative">
              <div className="flex items-center gap-2 text-amber-400 text-[11px] font-mono tracking-widest uppercase mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Founder of Pakistan & Premier Constitutional Barrister</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                QUAID-E-AZAM MUHAMMAD ALI JINNAH (1876–1948)
              </h1>
              <p className="text-xs text-amber-200/90 font-reading mt-1 leading-relaxed">
                Revered as <em>Baba-e-Qaum</em> (Father of the Nation), Jinnah redefined 20th-century geopolitical history through peerless jurisprudence and unwavering constitutional advocacy.
              </p>
            </div>

            {/* 2. Milestone Timeline Cards (Colorful Infographic Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Milestone 1: 1895 */}
              <div className="p-3.5 rounded-lg bg-blue-950/70 border border-blue-400/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-900/80 text-amber-300 font-mono font-bold text-xs">
                    1895
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Lincoln's Inn, London</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Youngest Called to the English Bar
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Admitted to the Bar at nineteen; absorbed British parliamentary procedure and common law mastery.
                </p>
              </div>

              {/* Milestone 2: 1916 */}
              <div className="p-3.5 rounded-lg bg-blue-950/70 border border-blue-400/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-900/80 text-amber-300 font-mono font-bold text-xs">
                    1916
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">The Lucknow Pact</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Ambassador of Unity
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  United the Indian National Congress and Muslim League upon a joint constitutional reform charter.
                </p>
              </div>

              {/* Milestone 3: 1940 */}
              <div className="p-3.5 rounded-lg bg-blue-950/70 border border-blue-400/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-900/80 text-amber-300 font-mono font-bold text-xs">
                    1940
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Lahore Resolution</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  The Demand for Sovereignty
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Presided over Minto Park session, articulating the Two-Nation Theory and democratic self-determination.
                </p>
              </div>

              {/* Milestone 4: 1947 */}
              <div className="p-3.5 rounded-lg bg-blue-950/70 border border-blue-400/30 hover:border-amber-400/50 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-900/80 text-amber-300 font-mono font-bold text-xs">
                    1947
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">August 14, 1947</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-white mb-1">
                  Creation of Pakistan
                </h4>
                <p className="text-[11px] text-slate-300 font-reading leading-relaxed">
                  Established a sovereign nation of ninety million citizens through constitutional negotiation and general elections.
                </p>
              </div>

            </div>

            {/* 3. Iconic Quote Banner (Bottom Card with Gold Patina) */}
            <div className="p-4 sm:p-5 rounded-lg bg-gradient-to-r from-amber-950/50 via-slate-900/80 to-blue-950/60 border border-amber-400/40 relative">
              <Quote className="w-6 h-6 text-amber-400/50 absolute top-3 right-3" />
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 mb-1">
                The August 11, 1947 Presidential Address:
              </div>
              <blockquote className="font-serif italic text-xs sm:text-sm text-amber-100 leading-relaxed mb-2">
                "You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan... You may belong to any religion or caste or creed—that has nothing to do with the business of the State. We are all citizens, and equal citizens, of one State."
              </blockquote>
              <div className="text-[11px] text-slate-400 font-sans flex items-center justify-between">
                <span>Inaugural Address to the Constituent Assembly of Pakistan, Karachi</span>
                <span className="font-mono text-amber-400 font-bold hidden sm:inline">EldersChronicle.com</span>
              </div>
            </div>

            {/* Bottom Footer Stamp */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-sans">
              <span>Primary Documents: National Archives of Pakistan & British Library Asia Collections</span>
              <span className="font-mono text-amber-300">Preserved in Elders Chronicle Historical Archive</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
