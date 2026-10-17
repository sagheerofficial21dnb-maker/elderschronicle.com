import React, { useState, useEffect } from 'react';
import { Biography, ViewTab, CategoryType } from '../types';
import { BiographicalInfographicPoster } from './BiographicalInfographicPoster';
import { IqbalInfographicPoster } from './IqbalInfographicPoster';
import { 
  ArrowLeft, 
  Share2, 
  Copy, 
  Check, 
  Twitter, 
  Linkedin, 
  Facebook, 
  BookMarked, 
  Calendar, 
  Clock, 
  Quote, 
  FileText, 
  Award, 
  ChevronRight,
  ExternalLink,
  Type
} from 'lucide-react';

// Helper to convert Markdown links [Anchor](/path) into interactive navigation elements
const renderParagraphWithLinks = (
  text: string, 
  onSelectBio: (slugOrId: string) => void
): React.ReactNode => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, anchorText, url] = match;
    const matchStart = match.index;

    if (matchStart > lastIndex) {
      elements.push(text.substring(lastIndex, matchStart));
    }

    if (url.startsWith('http://') || url.startsWith('https://')) {
      elements.push(
        <a
          key={`ext-link-${matchStart}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline font-semibold text-blue-900 underline decoration-blue-300 underline-offset-2 hover:text-blue-950 hover:decoration-blue-700 transition-colors"
          title={`Visit external repository: ${anchorText}`}
        >
          {anchorText}
        </a>
      );
    } else {
      let targetId = '';
      if (url.includes('/leaders/')) targetId = url.replace('/leaders/', '');
      else if (url.includes('/scientists/')) targetId = url.replace('/scientists/', '');
      else if (url.includes('/philosophers/')) targetId = url.replace('/philosophers/', '');
      else if (url.includes('/literature/')) targetId = url.replace('/literature/', '');
      else if (url.includes('/literary/')) targetId = url.replace('/literary/', '');
      else if (url.includes('/biography/')) targetId = url.replace('/biography/', '');
      else targetId = url.replace(/^\//, '');

      elements.push(
        <button
          key={`link-${matchStart}`}
          type="button"
          onClick={() => {
            if (targetId) {
              onSelectBio(targetId);
            }
          }}
          className="inline font-semibold text-blue-900 underline decoration-blue-300 underline-offset-2 hover:text-blue-950 hover:decoration-blue-700 transition-colors cursor-pointer text-left"
          title={`Read biographical archive: ${anchorText}`}
        >
          {anchorText}
        </button>
      );
    }

    lastIndex = matchStart + fullMatch.length;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
};

interface SinglePostViewProps {
  biography: Biography;
  allBiographies: Biography[];
  onNavigateHome: () => void;
  onSelectBiography: (slug: string) => void;
  onSelectCategory: (cat: CategoryType) => void;
  onNavigateTab: (tab: ViewTab) => void;
}

export const SinglePostView: React.FC<SinglePostViewProps> = ({
  biography,
  allBiographies,
  onNavigateHome,
  onSelectBiography,
  onSelectCategory,
  onNavigateTab
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-base');
  const [readingProgress, setReadingProgress] = useState(0);
  const [showCitationModal, setShowCitationModal] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);

  // Track scroll depth for reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Reading the life chronicle of ${biography.name} on Elders Chronicle.`);
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Academic Citations
  const citations = {
    chicago: `${biography.author.name}. "${biography.title}." Elders Chronicle, ${biography.publishedDate}. https://elderschronicle.com/biography/${biography.slug}.`,
    mla: `${biography.author.name}. "${biography.title}." Elders Chronicle, ${biography.publishedDate}, elderschronicle.com/biography/${biography.slug}. Accessed 16 Oct. 2026.`,
    apa: `${biography.author.name}. (2026, ${biography.publishedDate}). ${biography.title}. Elders Chronicle. https://elderschronicle.com/biography/${biography.slug}`
  };

  const handleCopyCitation = (format: 'chicago' | 'mla' | 'apa') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(citations[format]);
      setCopiedCitation(format);
      setTimeout(() => setCopiedCitation(null), 2500);
    }
  };

  // Related biographies from same category or era
  const relatedBiographies = allBiographies
    .filter(b => b.id !== biography.id)
    .slice(0, 3);

  return (
    <div className="pb-16">
      
      {/* Sticky Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-amber-500 z-50 transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <ol className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <li>
            <button 
              onClick={onNavigateHome}
              className="hover:text-blue-900 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Home</span>
            </button>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </li>
          <li>
            <button 
              onClick={() => {
                onSelectCategory(biography.category);
                onNavigateTab('category');
              }}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              {biography.category}
            </button>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </li>
          <li className="text-slate-800 font-medium truncate max-w-[280px] sm:max-w-md" aria-current="page">
            {biography.name}
          </li>
        </ol>
      </nav>

      {/* Article Header Canvas */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-8">
        
        {/* Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 flex-wrap">
          <span className="font-semibold text-blue-900 uppercase tracking-wider">{biography.category}</span>
          <span aria-hidden="true">·</span>
          <span>{biography.era}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {biography.readTime}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Published {biography.publishedDate}
          </span>
        </div>

        {/* Primary Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900 leading-[1.18] mb-4">
          {biography.title}
        </h1>

        {/* Subtitle Deck */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-reading mb-6">
          {biography.subtitle}
        </p>

        {/* Byline & Reader Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200">
          
          {/* Author Details */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-serif text-sm font-bold shrink-0">
              {biography.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span>By {biography.author.name}</span>
                <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  Senior Historian
                </span>
              </div>
              <div className="text-[11px] text-slate-500">{biography.author.credentials}</div>
            </div>
          </div>

          {/* Reader Adjustments & Academic Citations */}
          <div className="flex items-center gap-2">
            
            {/* Font Size Selector */}
            <div className="flex items-center border border-slate-200 rounded-md p-0.5 text-xs bg-slate-50">
              <span className="px-2 text-slate-400 flex items-center gap-1">
                <Type className="w-3 h-3" />
              </span>
              <button
                onClick={() => setFontSizeClass('text-base')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${fontSizeClass === 'text-base' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeClass('text-lg')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${fontSizeClass === 'text-lg' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                title="Larger text size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeClass('text-xl')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${fontSizeClass === 'text-xl' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                title="Relaxed text size"
              >
                A++
              </button>
            </div>

            {/* Cite Article Button */}
            <button
              onClick={() => setShowCitationModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <BookMarked className="w-3.5 h-3.5 text-slate-600" />
              <span>Cite</span>
            </button>

          </div>

        </div>

      </header>

      {/* Main Reading Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Sticky Social Sharing & Tools Ribbon */}
        <aside 
          aria-label="Article actions" 
          className="my-4 p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs text-slate-600 no-print"
        >
          <div className="flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-slate-700">Share Chronicle:</span>
            <div className="flex items-center gap-1.5 ml-1">
              <button 
                onClick={() => handleShare('twitter')}
                className="p-1.5 rounded hover:bg-white text-slate-600 hover:text-blue-500 transition-colors cursor-pointer"
                aria-label="Share on X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="p-1.5 rounded hover:bg-white text-slate-600 hover:text-blue-700 transition-colors cursor-pointer"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleShare('facebook')}
                className="p-1.5 rounded hover:bg-white text-slate-600 hover:text-blue-800 transition-colors cursor-pointer"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 transition-colors cursor-pointer font-medium text-slate-700"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </aside>

        {/* Featured Archival Hero Artwork with Caption */}
        <figure className="my-8">
          <div className="relative aspect-[16/9] bg-slate-900 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <img
              src={biography.coverImage}
              alt={biography.id === 'napoleon-bonaparte'
                ? "Archival historical infographic poster of Napoleon Bonaparte showing his portrait, key career milestones from 1799 to 1815, and famous quote over a deep navy and gold background"
                : biography.id === 'nikola-tesla'
                ? "Archival historical infographic poster of Nikola Tesla showing his portrait, key career milestones from 1888 to 1901, and famous quote over a deep navy and gold background"
                : biography.id === 'william-shakespeare'
                ? "Archival Chandos portrait of playwright and poet William Shakespeare (c. 1600–1610), attributed to John Taylor, preserved in the National Portrait Gallery, London"
                : biography.id === 'alexander-the-great'
                ? "Archival mosaic detail from Pompeii depicting Alexander the Great astride Bucephalus during his climactic cavalry charge against King Darius III at the Battle of Issus (333 BC), preserved in the Naples National Archaeological Museum"
                : `Historical archive photograph of ${biography.name}`}
              className={`w-full h-full object-cover ${biography.id === 'william-shakespeare' ? 'object-[center_20%]' : 'object-center'}`}
              referrerPolicy="no-referrer"
            />
          </div>
          <figcaption className="text-xs text-slate-500 font-serif italic mt-2.5 text-center">
            {biography.id === 'napoleon-bonaparte'
              ? "Figure 1: Historic overview and key milestones of Napoleon Bonaparte's life and reign."
              : biography.id === 'nikola-tesla'
              ? "Figure 1: Historic overview and key milestones of Nikola Tesla's life, inventions, and electrical legacy."
              : biography.id === 'william-shakespeare'
              ? "Fig. 1 — Archival Chandos portrait of William Shakespeare (c. 1600–1610), attributed to John Taylor. The primary verified portrait of the dramatist, permanently curated in the National Portrait Gallery, London."
              : biography.id === 'alexander-the-great'
              ? "Fig. 1 — The Alexander Mosaic from the House of the Faun, Pompeii (c. 100 BC, after a 4th-century BC Greek painting by Philoxenos of Eretria). Naples National Archaeological Museum."
              : biography.id === 'mahatma-gandhi'
              ? "Fig. 1 — Archival photographic portrait of Mohandas Karamchand Gandhi during his campaigns of nonviolent civil resistance. Preserved in the National Archives of India and Sabarmati Memorial Trust."
              : `Fig. 1 — Archival portrait and document study of ${biography.name} (${biography.dates}). Preserved in national manuscript collections.`}
          </figcaption>
        </figure>

        {/* Table of Contents Box */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg mb-8 no-print">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2.5">
            Table of Contents & Chronological Sections
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {biography.sections.map((section, idx) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className="text-blue-900 hover:text-blue-950 hover:underline flex items-center gap-1.5"
                >
                  <span className="font-mono text-slate-400 tabular-nums">0{idx + 1}.</span>
                  <span className="truncate">{section.heading}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="#milestones-table" className="text-blue-900 hover:text-blue-950 hover:underline flex items-center gap-1.5">
                <span className="font-mono text-slate-400 tabular-nums">0{biography.sections.length + 1}.</span>
                <span>Historical Milestones Matrix</span>
              </a>
            </li>
            <li>
              <a href="#achievements-list" className="text-blue-900 hover:text-blue-950 hover:underline flex items-center gap-1.5">
                <span className="font-mono text-slate-400 tabular-nums">0{biography.sections.length + 2}.</span>
                <span>Major Enduring Legacies</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Long-Form Biographical Content */}
        <article className={`space-y-8 text-slate-800 font-reading leading-[1.8] ${fontSizeClass}`}>
          
          {biography.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="pt-4 scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mb-4 tracking-tight">
                {idx + 1}. {section.heading}
              </h2>

              {section.content.map((paragraph, pIdx) => {
                const trimmed = paragraph.trim();

                // 1. Raw HTML Callout Box (Counterfactual Q&A Section)
                if (trimmed.startsWith('<div')) {
                  return (
                    <div
                      key={pIdx}
                      className="my-1"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  );
                }

                // 2. Markdown Blockquote
                if (trimmed.startsWith('>')) {
                  const quoteLines = trimmed.split('\n').map(l => l.replace(/^>\s*/, '')).join('\n');
                  return (
                    <blockquote
                      key={pIdx}
                      className="my-6 pl-4 border-l-4 border-amber-600 italic text-slate-800 bg-amber-50/70 p-4 rounded-r font-serif text-lg sm:text-xl leading-relaxed shadow-2xs"
                    >
                      {renderParagraphWithLinks(quoteLines, onSelectBiography)}
                    </blockquote>
                  );
                }

                // 3. Structured Markdown Table
                if (trimmed.startsWith('|')) {
                  const rows = trimmed.split('\n').map(r => r.trim()).filter(Boolean);
                  const validRows = rows.filter(r => !r.match(/^\|?\s*[-:]+[-| :]*$/));
                  if (validRows.length >= 2) {
                    const headerCols = validRows[0].split('|').map(c => c.trim()).filter(Boolean);
                    const bodyRows = validRows.slice(1).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
                    return (
                      <div key={pIdx} className="my-6 border border-slate-200 rounded-lg overflow-x-auto shadow-2xs font-sans">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                              {headerCols.map((col, cIdx) => (
                                <th key={cIdx} className="py-3 px-4 whitespace-nowrap">{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {bodyRows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className={`py-3 px-4 ${cIdx === 0 ? 'font-mono font-bold text-blue-950 whitespace-nowrap' : cIdx === 1 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                                    {renderParagraphWithLinks(cell, onSelectBiography)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                }

                // 4. Standard Paragraph
                return (
                  <p 
                    key={pIdx} 
                    className={`mb-5 ${idx === 0 && pIdx === 0 ? 'drop-cap' : ''}`}
                  >
                    {renderParagraphWithLinks(paragraph, onSelectBiography)}
                  </p>
                );
              })}

              {/* Quotation Callout Box after Section 1 */}
              {idx === 0 && (
                <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
                  <Quote className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <blockquote className="text-lg sm:text-xl font-serif italic text-slate-900 leading-relaxed mb-3">
                    "{biography.historicalQuote}"
                  </blockquote>
                  <cite className="text-xs font-sans not-italic text-slate-500 font-medium">
                    — {biography.quoteSource}
                  </cite>
                </div>
              )}

              {/* Coalition Clashes Table for Napoleon */}
              {section.id === 'master-of-the-battlefield' && (
                <div className="my-6 border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
                  <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                    <span className="font-serif font-bold text-xs uppercase tracking-wider text-amber-300">
                      Chronology of Major Coalition Clashes
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">1805 – 1815</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                          <th className="py-2.5 px-4 font-mono uppercase text-[10px] tracking-wider">Engagement</th>
                          <th className="py-2.5 px-4 font-mono uppercase text-[10px] tracking-wider">Year</th>
                          <th className="py-2.5 px-4 font-mono uppercase text-[10px] tracking-wider">Opponent Coalition</th>
                          <th className="py-2.5 px-4 font-mono uppercase text-[10px] tracking-wider">Decisive Outcome</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Austerlitz</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1805</td>
                          <td className="py-2.5 px-4 text-slate-600">Austria, Russia</td>
                          <td className="py-2.5 px-4 font-medium text-emerald-800">Decisive French Victory</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Jena-Auerstedt</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1806</td>
                          <td className="py-2.5 px-4 text-slate-600">Prussia</td>
                          <td className="py-2.5 px-4 font-medium text-emerald-800">Collapse of Prussia</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Friedland</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1807</td>
                          <td className="py-2.5 px-4 text-slate-600">Russia</td>
                          <td className="py-2.5 px-4 font-medium text-emerald-800">Treaty of Tilsit</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Wagram</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1809</td>
                          <td className="py-2.5 px-4 text-slate-600">Austria</td>
                          <td className="py-2.5 px-4 font-medium text-emerald-800">Austrian Capitulation</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Borodino</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1812</td>
                          <td className="py-2.5 px-4 text-slate-600">Russia</td>
                          <td className="py-2.5 px-4 font-medium text-amber-700">Pyrrhic French Victory</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Leipzig</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1813</td>
                          <td className="py-2.5 px-4 text-slate-600">Sixth Coalition</td>
                          <td className="py-2.5 px-4 font-medium text-rose-700">Catastrophic Defeat</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-bold text-slate-900">Battle of Waterloo</td>
                          <td className="py-2.5 px-4 font-mono text-blue-900 font-bold">1815</td>
                          <td className="py-2.5 px-4 text-slate-600">Britain, Prussia</td>
                          <td className="py-2.5 px-4 font-medium text-rose-800">Final Imperial Fall</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Formatted Historical Milestones Data Table */}
          <section id="milestones-table" className="pt-6 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mb-3 tracking-tight">
              Historical Milestones & Chronological Record
            </h2>
            <p className="text-xs text-slate-600 mb-4 font-sans">
              Primary dates, verified state actions, and historical turning points cross-referenced from sovereign archives.
            </p>

            <div className="border border-slate-200 rounded-lg overflow-x-auto shadow-xs font-sans">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th scope="col" className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] w-24">Year</th>
                    <th scope="col" className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] w-48">Historic Event</th>
                    <th scope="col" className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Archival Significance</th>
                    <th scope="col" className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] hidden sm:table-cell w-36">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {biography.keyMilestones.map((milestone, mIdx) => (
                    <tr key={mIdx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-950 whitespace-nowrap tabular-nums">
                        {milestone.year}
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {milestone.event}
                      </td>
                      <td className="py-3 px-4 text-slate-600 leading-relaxed">
                        {milestone.significance}
                      </td>
                      <td className="py-3 px-4 text-slate-500 hidden sm:table-cell">
                        {milestone.location || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Major Enduring Achievements List */}
          <section id="achievements-list" className="pt-6 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mb-3 tracking-tight">
              Enduring Legacies & Historic Impact
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 font-sans">
              <ul className="space-y-3">
                {biography.majorAchievements.map((item, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="w-5 h-5 rounded bg-blue-950 text-amber-400 flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                      {aIdx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Featured Archival Infographic Poster for Quaid-e-Azam Muhammad Ali Jinnah */}
          {biography.id === 'muhammad-ali-jinnah' && (
            <section className="pt-4 scroll-mt-20">
              <BiographicalInfographicPoster />
            </section>
          )}

          {/* Featured Archival Infographic Poster for Allama Muhammad Iqbal */}
          {biography.id === 'allama-iqbal' && (
            <section className="pt-4 scroll-mt-20">
              <IqbalInfographicPoster />
            </section>
          )}



          {/* Primary Archival Sources Documentation */}
          <section className="pt-6">
            <h3 className="text-base font-serif font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Primary Archival Sources & Repository Catalog</span>
            </h3>
            <div className="border-t border-slate-200 pt-3 space-y-2 font-sans text-xs text-slate-600">
              {biography.archivalSources.map((source, sIdx) => (
                <div key={sIdx} className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-100">
                  <div>
                    <span className="font-semibold text-slate-800">{source.title}</span>
                    <span className="text-slate-500 block text-[11px]">{source.institution}</span>
                  </div>
                  {source.year && (
                    <span className="font-mono text-slate-400 text-[11px] tabular-nums shrink-0">
                      {source.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

        </article>

        {/* Rich Author Bio Box with Editorial Standards */}
        <section className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-blue-950 text-white flex items-center justify-center font-serif text-2xl font-bold shrink-0 border-2 border-slate-200 shadow-sm">
              {biography.author.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="font-serif font-bold text-base text-slate-950">
                  {biography.author.name}
                </h3>
                <span className="text-xs text-blue-950 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {biography.author.role}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2 font-sans">
                {biography.author.credentials}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed font-reading mb-3">
                {biography.author.bio}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Elders Chronicle Scholar Board · Adheres to Oxford Historiography & Primary Verification Standard</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Biographies Recommendation */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif font-bold text-slate-900">
              Related Historical Chronicles
            </h3>
            <button
              onClick={onNavigateHome}
              className="text-xs font-semibold text-blue-950 hover:underline cursor-pointer"
            >
              View All Chronicles →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedBiographies.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectBiography(rel.slug)}
                className="text-left bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-900 transition-colors shadow-2xs group cursor-pointer"
              >
                <span className="text-[10px] font-semibold uppercase text-blue-900 block mb-1">
                  {rel.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-1.5">
                  {rel.name}
                </h4>
                <p className="text-slate-500 text-[11px] line-clamp-2 font-reading">
                  {rel.excerpt}
                </p>
              </button>
            ))}
          </div>
        </section>

      </div>

      {/* Academic Citation Generator Modal */}
      {showCitationModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-blue-900" />
                <h3 className="font-serif font-bold text-base text-slate-900">
                  Academic Citation Generator
                </h3>
              </div>
              <button
                onClick={() => setShowCitationModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Pre-formatted scholarly citations according to Chicago, MLA 9, and APA 7 editorial guidelines for students and researchers.
            </p>

            <div className="space-y-4 text-xs">
              
              {/* Chicago */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-700">Chicago Manual of Style (17th ed.)</span>
                  <button
                    onClick={() => handleCopyCitation('chicago')}
                    className="text-blue-900 hover:text-blue-950 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCitation === 'chicago' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCitation === 'chicago' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-slate-800 break-words">
                  {citations.chicago}
                </div>
              </div>

              {/* MLA */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-700">MLA Style (9th ed.)</span>
                  <button
                    onClick={() => handleCopyCitation('mla')}
                    className="text-blue-900 hover:text-blue-950 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCitation === 'mla' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCitation === 'mla' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-slate-800 break-words">
                  {citations.mla}
                </div>
              </div>

              {/* APA */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-700">APA Format (7th ed.)</span>
                  <button
                    onClick={() => handleCopyCitation('apa')}
                    className="text-blue-900 hover:text-blue-950 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCitation === 'apa' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCitation === 'apa' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-slate-800 break-words">
                  {citations.apa}
                </div>
              </div>

            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowCitationModal(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
