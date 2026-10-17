import React, { useState, useMemo, useEffect } from 'react';
import { ViewTab, CategoryType, Biography } from './types';
import { BIOGRAPHIES } from './data/biographies';
import { Navbar } from './components/Navbar';
import { BiographyCard } from './components/BiographyCard';
import { Sidebar } from './components/Sidebar';
import { SinglePostView } from './components/SinglePostView';
import { LegalPageView } from './components/LegalPageView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { AdSenseComplianceModal } from './components/AdSenseComplianceModal';
import { ArchivalHeroBanner } from './components/ArchivalHeroBanner';
import { BookOpen, Sparkles, Filter, ChevronRight, LayoutGrid, List } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [activeSlug, setActiveSlug] = useState<string>('napoleon-bonaparte-rise-and-fall');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [selectedEra, setSelectedEra] = useState<string>('All Eras');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [complianceModalOpen, setComplianceModalOpen] = useState<boolean>(false);
  const [articleViewMode, setArticleViewMode] = useState<'grid' | 'list'>('grid');

  // Active biography object (safely handle empty array)
  const activeBiography = useMemo(() => {
    if (BIOGRAPHIES.length === 0) return null;
    return (
      BIOGRAPHIES.find(
        (b) =>
          b.slug === activeSlug ||
          b.id === activeSlug ||
          b.slug.includes(activeSlug) ||
          b.id.includes(activeSlug)
      ) || BIOGRAPHIES[0] || null
    );
  }, [activeSlug]);

  // Filtered biographies for main grid
  const filteredBiographies = useMemo(() => {
    return BIOGRAPHIES.filter((bio) => {
      // Category filter
      if (selectedCategory !== 'All' && bio.category !== selectedCategory) {
        return false;
      }
      // Era filter
      if (selectedEra !== 'All Eras' && bio.era !== selectedEra) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = bio.name.toLowerCase().includes(query);
        const matchesTitle = bio.title.toLowerCase().includes(query);
        const matchesExcerpt = bio.excerpt.toLowerCase().includes(query);
        const matchesCategory = bio.category.toLowerCase().includes(query);
        const matchesEra = bio.era.toLowerCase().includes(query);
        return matchesName || matchesTitle || matchesExcerpt || matchesCategory || matchesEra;
      }
      return true;
    });
  }, [selectedCategory, selectedEra, searchQuery]);

  // Dynamic Page Title & Meta Tag Synchronization
  useEffect(() => {
    if (currentTab === 'post') {
      document.title = activeBiography
        ? `${activeBiography.name} — Biographical Chronicle | Elders Chronicle`
        : `Archival Chronicle | Elders Chronicle`;
    } else if (currentTab === 'category') {
      document.title = `${selectedCategory} Chronicles | Elders Chronicle Archive`;
    } else if (currentTab === 'about') {
      document.title = `About Us & Editorial Charter | Elders Chronicle`;
    } else if (currentTab === 'privacy') {
      document.title = `Privacy Policy (GDPR / CCPA / AdSense) | Elders Chronicle`;
    } else if (currentTab === 'terms') {
      document.title = `Terms & Conditions | Elders Chronicle`;
    } else if (currentTab === 'disclaimer') {
      document.title = `Editorial & Fair Use Disclaimer | Elders Chronicle`;
    } else if (currentTab === 'contact') {
      document.title = `Contact Us & Archival Inquiries | Elders Chronicle`;
    } else {
      document.title = `Elders Chronicle | Timeless Legacies & Biographies of History’s Greatest Figures`;
    }
  }, [currentTab, activeBiography, selectedCategory]);

  const handleReadPost = (slug: string) => {
    setActiveSlug(slug);
    setCurrentTab('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: CategoryType | 'All') => {
    setSelectedCategory(category);
    if (category !== 'All') {
      setCurrentTab('category');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTab = (tab: ViewTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-950 font-sans">
      
      {/* Top Navigation Bar with 3-Zone Contract */}
      <Navbar
        currentTab={currentTab}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateTab={handleNavigateTab}
        onSelectCategory={handleSelectCategory}
        onOpenComplianceModal={() => setComplianceModalOpen(true)}
      />

      {/* Prominent Archival Hero Banner right below Header */}
      {(currentTab === 'home' || currentTab === 'category') && (
        <ArchivalHeroBanner
          currentTab={currentTab}
          onSelectCategory={handleSelectCategory}
          onNavigateTab={handleNavigateTab}
        />
      )}

      {/* Main Page Body */}
      <main className="flex-1">
        
        {/* VIEW 1: SINGLE FULL BIOGRAPHY POST */}
        {currentTab === 'post' && (
          activeBiography ? (
            <SinglePostView
              biography={activeBiography}
              allBiographies={BIOGRAPHIES}
              onNavigateHome={() => handleNavigateTab('home')}
              onSelectBiography={handleReadPost}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                handleNavigateTab('category');
              }}
              onNavigateTab={handleNavigateTab}
            />
          ) : (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">
                No Article Selected
              </h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 font-reading">
                All previous sample articles have been removed. The archive is clean and prepared for your custom niche articles.
              </p>
              <button
                onClick={() => handleNavigateTab('home')}
                className="px-5 py-2.5 bg-blue-950 text-white rounded text-xs font-semibold hover:bg-blue-900 cursor-pointer shadow-xs transition-colors"
              >
                ← Return to Archive Home
              </button>
            </div>
          )
        )}

        {/* VIEW 2: LEGAL PAGES (About, Privacy, Terms, Disclaimer) */}
        {(currentTab === 'about' || currentTab === 'privacy' || currentTab === 'terms' || currentTab === 'disclaimer') && (
          <LegalPageView
            pageType={currentTab}
            onNavigateHome={() => handleNavigateTab('home')}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {/* VIEW 3: CONTACT & INQUIRIES */}
        {currentTab === 'contact' && (
          <ContactView
            onNavigateHome={() => handleNavigateTab('home')}
          />
        )}

        {/* VIEW 4: HOME & CATEGORY EXPLORER */}
        {(currentTab === 'home' || currentTab === 'category') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Category Header (if in category mode) */}
            {currentTab === 'category' && selectedCategory !== 'All' && (
              <header className="mb-6 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-xs text-blue-900 font-semibold uppercase tracking-wider mb-1">
                  <span>Archival Discipline</span>
                  <span>/</span>
                  <span>Curated Anthology</span>
                </div>
                <h1 className="text-3xl font-serif font-bold text-slate-950">
                  {selectedCategory}
                </h1>
                <p className="text-sm text-slate-600 font-reading mt-1 max-w-2xl">
                  Chronicles, archival records, and peer-reviewed historical biographies of leading figures within {selectedCategory}.
                </p>
              </header>
            )}

            {/* Grid & List Toggle Toolbar Located Directly Below Hero Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 sm:px-6 py-3.5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-serif font-bold text-base text-slate-900">
                  {selectedCategory === 'All' ? 'Curated Historical Chronicles' : `${selectedCategory} Anthology`}
                </span>
                <span className="text-xs text-slate-500 font-mono tabular-nums bg-white border border-slate-200 px-2 py-0.5 rounded">
                  {filteredBiographies.length} Figures Documented
                </span>
                {selectedEra !== 'All Eras' && (
                  <div className="flex items-center gap-1.5 text-xs bg-blue-50 border border-blue-200 text-blue-950 px-2.5 py-0.5 rounded font-medium">
                    <span>Epoch: {selectedEra}</span>
                    <button 
                      onClick={() => setSelectedEra('All Eras')}
                      className="text-blue-700 hover:text-blue-950 font-bold cursor-pointer"
                      aria-label="Clear epoch filter"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* View Switcher: Grid vs List (AdSense Policy Compliant & Accessible) */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-slate-500 font-medium hidden md:inline">Layout View:</span>
                <div 
                  className="inline-flex items-center bg-white border border-slate-200 rounded-md p-0.5 text-xs select-none shadow-2xs"
                  role="group"
                  aria-label="Article layout format"
                >
                  <button
                    onClick={() => setArticleViewMode('grid')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                      articleViewMode === 'grid'
                        ? 'bg-blue-950 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Grid View (Balanced 2 Columns)"
                    aria-pressed={articleViewMode === 'grid'}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Grid View</span>
                  </button>

                  <button
                    onClick={() => setArticleViewMode('list')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                      articleViewMode === 'list'
                        ? 'bg-blue-950 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="List View (Full Width)"
                    aria-pressed={articleViewMode === 'list'}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>List View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Search / Filter Banner if searching */}
            {searchQuery && (
              <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Search Results for:</span>
                  <div className="font-serif font-bold text-slate-900 text-base">"{searchQuery}"</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-mono tabular-nums">
                    {filteredBiographies.length} chronicle{filteredBiographies.length === 1 ? '' : 's'} matched
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-blue-900 font-semibold hover:underline cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            )}

            {/* 70 / 30 Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Main Stream (70% ~ 8 Columns on lg) */}
              <div className="lg:col-span-8">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif font-bold text-xl text-slate-950">
                      {selectedCategory === 'All' ? 'Biographical Chronicles' : `${selectedCategory} Collection`}
                    </h2>
                    <span className="text-xs text-slate-400 font-mono tabular-nums">
                      ({filteredBiographies.length})
                    </span>
                  </div>
                </div>

                {/* Biography Cards (Grid vs List Layout with Uniform Heights) */}
                {filteredBiographies.length > 0 ? (
                  articleViewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      {filteredBiographies.map((biography) => (
                        <BiographyCard
                          key={biography.id}
                          biography={biography}
                          onReadPost={handleReadPost}
                          layout="grid"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {filteredBiographies.map((biography) => (
                        <BiographyCard
                          key={biography.id}
                          biography={biography}
                          onReadPost={handleReadPost}
                          layout="list"
                        />
                      ))}
                    </div>
                  )
                ) : BIOGRAPHIES.length === 0 ? (
                  <div className="py-16 px-6 text-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/70">
                    <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-4 border border-blue-200 shadow-2xs">
                      <BookOpen className="w-7 h-7 text-blue-950" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase mb-3">
                      Clean Slate Active
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                      Archive Ready for Niche Articles
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-reading max-w-lg mx-auto mb-6 leading-relaxed">
                      All previous articles have been removed. The publication layout, categories, legal pages, and search architecture are now completely clear and waiting for your custom niche articles with high-resolution imagery.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 font-mono">
                      <span>Database Status:</span>
                      <span className="font-bold text-emerald-700">0 Articles (Ready for Upload)</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-16 text-center border border-dashed border-slate-200 rounded-lg p-8">
                    <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <h3 className="font-serif font-bold text-base text-slate-700 mb-1">
                      No Biographical Chronicles Found
                    </h3>
                    <p className="text-xs text-slate-500 font-reading max-w-sm mx-auto mb-4">
                      No historical records matched your query.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                        setSelectedEra('All Eras');
                      }}
                      className="px-4 py-2 bg-blue-950 text-white rounded text-xs font-semibold hover:bg-blue-900 cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}

              </div>

              {/* Sidebar (30% ~ 4 Columns on lg) */}
              <aside className="lg:col-span-4">
                <Sidebar
                  biographies={BIOGRAPHIES}
                  onSelectBiography={handleReadPost}
                  onSelectCategory={handleSelectCategory}
                  selectedCategory={selectedCategory}
                  selectedEra={selectedEra}
                  onSelectEra={setSelectedEra}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </aside>

            </div>

          </div>
        )}

      </main>

      {/* 3-Column Footer with AdSense Compliance Note */}
      <Footer
        onNavigateTab={handleNavigateTab}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          handleNavigateTab('category');
        }}
        onOpenComplianceModal={() => setComplianceModalOpen(true)}
      />

      {/* AdSense Compliance Inspector Modal */}
      <AdSenseComplianceModal
        isOpen={complianceModalOpen}
        onClose={() => setComplianceModalOpen(false)}
        onNavigateToTab={(tab) => {
          handleNavigateTab(tab);
        }}
      />

    </div>
  );
}
