import React, { useState } from 'react';
import { Biography, CategoryType } from '../types';
import { Search, TrendingUp, Filter, CheckCircle2, Award, Mail } from 'lucide-react';

interface SidebarProps {
  biographies: Biography[];
  onSelectBiography: (slug: string) => void;
  onSelectCategory: (category: CategoryType | 'All') => void;
  selectedCategory: CategoryType | 'All';
  selectedEra: string;
  onSelectEra: (era: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  biographies,
  onSelectBiography,
  onSelectCategory,
  selectedCategory,
  selectedEra,
  onSelectEra,
  searchQuery,
  onSearchChange
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Trending ranked list
  const trendingBiographies = [...biographies]
    .filter(b => b.trendingRank)
    .sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99))
    .slice(0, 5);

  // Category counts
  const categoryCounts = {
    'World Leaders': biographies.filter(b => b.category === 'World Leaders').length,
    'Scientists & Inventors': biographies.filter(b => b.category === 'Scientists & Inventors').length,
    'Literary Legends': biographies.filter(b => b.category === 'Literary Legends').length,
    'Philosophers': biographies.filter(b => b.category === 'Philosophers').length,
  };

  const eras = [
    { label: 'All Eras', value: 'All Eras' },
    { label: 'Classical Antiquity', value: 'Classical Antiquity' },
    { label: 'Renaissance', value: 'Renaissance' },
    { label: '19th Century', value: '19th Century' },
    { label: '20th Century', value: '20th Century' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim().includes('@')) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* 1. Curated by Senior Historians Spotlight */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Editorial Integrity
            </h3>
            <span className="text-[11px] text-slate-500">Curated by Senior Historians</span>
          </div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-reading">
          Every biography published on Elders Chronicle is peer-reviewed against primary manuscripts from the Library of Congress and national archives. Zero AI-generated historical fabrication.
        </p>
      </div>

      {/* 2. Interactive Search Widget */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-blue-900" />
          <span>Search Archives</span>
        </h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by figure, topic, or era..."
            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
          />
        </div>
        {searchQuery && (
          <div className="mt-2 text-[11px] text-slate-500 flex justify-between items-center">
            <span>Filtering archives</span>
            <button 
              onClick={() => onSearchChange('')}
              className="text-blue-900 font-semibold hover:underline cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>

      {/* 3. Trending Biographies Widget */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-900" />
          <span>Trending Biographies</span>
        </h3>

        {trendingBiographies.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {trendingBiographies.map((bio, index) => (
              <button
                key={bio.id}
                onClick={() => onSelectBiography(bio.slug)}
                className="w-full text-left py-3 flex items-start gap-3 group cursor-pointer transition-colors hover:bg-slate-50 rounded px-1"
              >
                <span className="font-serif text-lg font-bold text-slate-400 group-hover:text-blue-950 transition-colors w-5 shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-950 transition-colors truncate">
                    {bio.name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {bio.category} · {bio.era}
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center text-xs text-slate-400 font-reading">
            No trending articles yet. Ready for your niche publications.
          </div>
        )}
      </div>

      {/* 5. Browse by Category & Era */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-blue-900" />
          <span>Biographical Disciplines</span>
        </h3>

        <div className="space-y-1.5 text-xs">
          <button
            onClick={() => onSelectCategory('All')}
            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded transition-colors cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-blue-950 text-white font-medium'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span>All Disciplines</span>
            <span className={`text-[11px] tabular-nums ${selectedCategory === 'All' ? 'text-amber-300' : 'text-slate-400'}`}>
              {biographies.length}
            </span>
          </button>

          {(Object.keys(categoryCounts) as CategoryType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-950 text-white font-medium'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[11px] tabular-nums ${selectedCategory === cat ? 'text-amber-300' : 'text-slate-400'}`}>
                {categoryCounts[cat]}
              </span>
            </button>
          ))}
        </div>

        {/* Filter by Historical Era */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Historical Epochs
          </span>
          <div className="flex flex-wrap gap-1.5">
            {eras.map((era) => (
              <button
                key={era.value}
                onClick={() => onSelectEra(era.value)}
                className={`text-[11px] px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  selectedEra === era.value
                    ? 'bg-blue-950 text-white font-medium'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Newsletter / Bi-Weekly Chronicle */}
      <div className="bg-slate-900 text-white rounded-lg p-5">
        <div className="flex items-center gap-2 mb-2 text-amber-400">
          <Mail className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">The Archival Dispatch</span>
        </div>
        <h4 className="font-serif text-sm font-semibold text-white mb-1.5">
          Bi-Weekly Historical Chronicles
        </h4>
        <p className="text-xs text-slate-300 mb-4 leading-relaxed font-reading">
          Receive curated long-form essays, newly discovered manuscript transcriptions, and timeless lessons from history’s titans.
        </p>

        {newsletterSubscribed ? (
          <div className="p-3 bg-emerald-950/80 border border-emerald-600 rounded text-xs text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Thank you. You have been added to our scholarly dispatch registry.</span>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="historian@university.edu"
              className="w-full text-xs px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded transition-colors cursor-pointer shadow-sm"
            >
              Join Dispatch Registry
            </button>
            <p className="text-[10px] text-slate-400 text-center">
              Zero spam. Unsubscribe anytime in 1-click. GDPR compliant.
            </p>
          </form>
        )}
      </div>

    </div>
  );
};
