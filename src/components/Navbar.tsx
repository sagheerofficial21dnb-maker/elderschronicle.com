import React, { useState } from 'react';
import { ViewTab, CategoryType } from '../types';
import { Search, Menu, X, BookOpen, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentTab: ViewTab;
  selectedCategory: CategoryType | 'All';
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateTab: (tab: ViewTab) => void;
  onSelectCategory: (category: CategoryType | 'All') => void;
  onOpenComplianceModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  selectedCategory,
  searchQuery,
  onSearchChange,
  onNavigateTab,
  onSelectCategory,
  onOpenComplianceModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);

  const handleCategoryClick = (cat: CategoryType) => {
    onSelectCategory(cat);
    onNavigateTab('category');
    setMobileMenuOpen(false);
  };

  const handleTabClick = (tab: ViewTab) => {
    if (tab === 'home') {
      onSelectCategory('All');
    }
    onNavigateTab(tab);
    setMobileMenuOpen(false);
    setLegalDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Editorial Trust Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 sm:px-8 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="font-semibold text-amber-400 uppercase tracking-widest text-[10px]">Elders Chronicle</span>
          <span className="hidden sm:inline text-slate-400">·</span>
          <span className="hidden sm:inline text-slate-300 truncate">Archival Historical Biographies & Scholarly Chronicles</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] shrink-0">
          <button 
            onClick={onOpenComplianceModal}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
            title="Inspect Scholarly & Editorial Standards Verification"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Editorial Standards Verified</span>
            <span className="md:hidden">Standards</span>
          </button>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-slate-400">Vol. VII · Archival Edition 2026</span>
        </div>
      </div>

      {/* Main Top Bar Contract (1 Row, 3 Zones) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single Brand Element */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
          aria-label="Elders Chronicle Home"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-amber-400 shadow-sm border border-blue-900 group-hover:bg-blue-900 transition-colors">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-slate-950 whitespace-nowrap">
              Elders Chronicle
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 hidden md:block">
              Historical Biographies Archive
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (single-line, clean text) */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-slate-700 whitespace-nowrap">
          <button
            onClick={() => handleTabClick('home')}
            className={`transition-colors hover:text-blue-900 cursor-pointer py-1 ${
              currentTab === 'home' && selectedCategory === 'All'
                ? 'text-blue-950 font-semibold border-b-2 border-blue-950'
                : 'text-slate-600'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleCategoryClick('World Leaders')}
            className={`transition-colors hover:text-blue-900 cursor-pointer py-1 ${
              currentTab === 'category' && selectedCategory === 'World Leaders'
                ? 'text-blue-950 font-semibold border-b-2 border-blue-950'
                : 'text-slate-600'
            }`}
          >
            World Leaders
          </button>

          <button
            onClick={() => handleCategoryClick('Scientists & Inventors')}
            className={`transition-colors hover:text-blue-900 cursor-pointer py-1 ${
              currentTab === 'category' && selectedCategory === 'Scientists & Inventors'
                ? 'text-blue-950 font-semibold border-b-2 border-blue-950'
                : 'text-slate-600'
            }`}
          >
            Scientists & Inventors
          </button>

          <button
            onClick={() => handleCategoryClick('Literary Legends')}
            className={`transition-colors hover:text-blue-900 cursor-pointer py-1 ${
              currentTab === 'category' && selectedCategory === 'Literary Legends'
                ? 'text-blue-950 font-semibold border-b-2 border-blue-950'
                : 'text-slate-600'
            }`}
          >
            Literary Legends
          </button>

          <button
            onClick={() => handleCategoryClick('Philosophers')}
            className={`transition-colors hover:text-blue-900 cursor-pointer py-1 ${
              currentTab === 'category' && selectedCategory === 'Philosophers'
                ? 'text-blue-950 font-semibold border-b-2 border-blue-950'
                : 'text-slate-600'
            }`}
          >
            Philosophers
          </button>

          {/* Legal Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
              onBlur={() => setTimeout(() => setLegalDropdownOpen(false), 200)}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-950 py-1 transition-colors cursor-pointer"
            >
              <span>Legal & Policies</span>
              <span className="text-[10px]">▼</span>
            </button>

            {legalDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-50 text-xs">
                <button
                  onClick={() => handleTabClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer"
                >
                  About Us & Editorial Charter
                </button>
                <button
                  onClick={() => handleTabClick('contact')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer"
                >
                  Contact Us & Corrections
                </button>
                <button
                  onClick={() => handleTabClick('privacy')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer"
                >
                  Privacy Policy (GDPR/AdSense)
                </button>
                <button
                  onClick={() => handleTabClick('terms')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => handleTabClick('disclaimer')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer"
                >
                  Fair Use & Disclaimer
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Real-Time Search Bar & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative hidden sm:block w-48 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search biographies..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sample Article Shortcut CTA */}
          <button
            onClick={() => handleTabClick('post')}
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-950 rounded-md hover:bg-blue-900 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Sample Post
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-950 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          {/* Mobile Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search historical figures or eras..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium pt-2">
            <button
              onClick={() => handleTabClick('home')}
              className="text-left px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Home Stream
            </button>
            <button
              onClick={() => handleTabClick('post')}
              className="text-left px-3 py-2 rounded bg-blue-50 text-blue-950 font-semibold cursor-pointer"
            >
              Sample Post (Lincoln)
            </button>
            <button
              onClick={() => handleCategoryClick('World Leaders')}
              className="text-left px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              World Leaders
            </button>
            <button
              onClick={() => handleCategoryClick('Scientists & Inventors')}
              className="text-left px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Scientists & Inventors
            </button>
            <button
              onClick={() => handleCategoryClick('Literary Legends')}
              className="text-left px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Literary Legends
            </button>
            <button
              onClick={() => handleCategoryClick('Philosophers')}
              className="text-left px-3 py-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 cursor-pointer"
            >
              Philosophers
            </button>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Mandatory Policies & Compliance
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
              <button onClick={() => handleTabClick('about')} className="text-left py-1 hover:text-blue-950">About Us</button>
              <button onClick={() => handleTabClick('contact')} className="text-left py-1 hover:text-blue-950">Contact Us</button>
              <button onClick={() => handleTabClick('privacy')} className="text-left py-1 hover:text-blue-950">Privacy Policy</button>
              <button onClick={() => handleTabClick('terms')} className="text-left py-1 hover:text-blue-950">Terms & Conditions</button>
              <button onClick={() => handleTabClick('disclaimer')} className="text-left py-1 hover:text-blue-950">Disclaimer</button>
              <button onClick={onOpenComplianceModal} className="text-left py-1 text-amber-700 font-medium">Editorial Standards</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
