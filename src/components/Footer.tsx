import React from 'react';
import { ViewTab, CategoryType } from '../types';
import { BookOpen, ShieldCheck, Mail, FileText, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: ViewTab) => void;
  onSelectCategory: (category: CategoryType) => void;
  onOpenComplianceModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onSelectCategory,
  onOpenComplianceModal
}) => {
  const currentYear = 2026;

  const handleCategoryClick = (cat: CategoryType) => {
    onSelectCategory(cat);
    onNavigateTab('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: ViewTab) => {
    onNavigateTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 no-print">
      {/* Upper 3-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Mission (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-blue-900 border border-blue-700 flex items-center justify-center text-amber-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Elders Chronicle
              </span>
            </div>

            <p className="text-xs text-slate-400 font-reading leading-relaxed max-w-sm">
              Unfolding the Timeless Legacies & Biographies of History’s Greatest Figures. Dedicated to rigorous archival history, primary source documentation, and inspiring the modern mind through the lives of monumental historical leaders, scientists, philosophers, and humanitarians.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <div>Domain: <span className="font-mono text-amber-400">EldersChronicle.com</span></div>
              <div className="text-[11px] text-slate-500 mt-1">ISSN: 2984-7218 · Curated in New York & London</div>
            </div>
          </div>

          {/* Column 2: Biographical Categories (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Biographical Disciplines
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleCategoryClick('World Leaders')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  World Leaders & Statesmen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Scientists & Inventors')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Scientists & Visionary Inventors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Literary Legends')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Literary Legends & Polymaths
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Philosophers')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Philosophers & Ethical Thinkers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('home')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer"
                >
                  Full Archival Chronicle Index
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Editorial Policies (md:col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Legal, Editorial & Compliance
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleTabClick('about')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer flex items-center justify-between w-full"
                >
                  <span>About Us & Editorial Charter</span>
                  <span className="text-[10px] text-slate-600">Ethics & Fact-Checking</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('contact')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Contact Us & Corrections</span>
                  <span className="text-[10px] text-slate-600">48-Hr Turnaround</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('privacy')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Privacy Policy</span>
                  <span className="text-[10px] text-amber-500/80">GDPR / CCPA / AdSense</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('terms')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Terms & Conditions</span>
                  <span className="text-[10px] text-slate-600">Academic Citation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('disclaimer')}
                  className="hover:text-amber-400 transition-colors text-slate-400 hover:underline cursor-pointer flex items-center justify-between w-full"
                >
                  <span>Fair Use Disclaimer</span>
                  <span className="text-[10px] text-slate-600">Archival Notice</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenComplianceModal}
                  className="text-amber-400 hover:text-amber-300 transition-colors text-xs flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Scholarly & Editorial Standards</span>
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Editorial Standards Statement Bar */}
      <div className="border-t border-slate-900 bg-black/60 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-400">
          <div>
            © {currentYear} <strong className="text-slate-300">EldersChronicle.com</strong>. All Rights Reserved. Primary manuscripts cited under statutory Fair Use for educational instruction.
          </div>
          <div className="text-[11px] text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded max-w-xl">
            <span className="text-amber-400 font-semibold">Editorial Standards Notice:</span> Elders Chronicle adheres strictly to digital publishing ethics, academic fact-checking, and independent archival scholarship.
          </div>
        </div>
      </div>
    </footer>
  );
};
