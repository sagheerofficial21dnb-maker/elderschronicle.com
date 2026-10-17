import React, { useState } from 'react';
import { Biography } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface BiographyCardProps {
  biography: Biography;
  onReadPost: (slug: string) => void;
  layout?: 'grid' | 'list';
}

export const BiographyCard: React.FC<BiographyCardProps> = ({ 
  biography, 
  onReadPost,
  layout = 'grid'
}) => {
  const [imageError, setImageError] = useState(false);

  // 1. LIST VIEW LAYOUT
  if (layout === 'list') {
    return (
      <article className="group bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col sm:flex-row hover:border-slate-300 transition-all hover:shadow-sm">
        
        {/* Left / Top Image Frame */}
        <div className="relative w-full sm:w-60 md:w-68 shrink-0 aspect-[16/10] sm:aspect-auto bg-slate-100 overflow-hidden">
          {!imageError ? (
            <img
              src={biography.coverImage}
              alt={`Historical portrait of ${biography.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full min-h-[160px] bg-slate-900 flex flex-col items-center justify-center p-4 text-center text-white">
              <BookOpen className="w-7 h-7 text-amber-400 mb-2" />
              <span className="font-serif font-bold text-sm text-slate-100">{biography.name}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{biography.dates}</span>
            </div>
          )}

          {/* Clean date marker */}
          <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-mono font-medium">
            {biography.dates}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1.5 flex-wrap">
              <span className="font-semibold text-blue-900">{biography.category}</span>
              <span aria-hidden="true">·</span>
              <span>{biography.era}</span>
              <span aria-hidden="true">·</span>
              <span>{biography.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>Updated {biography.updatedDate}</span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors mb-2">
              <button 
                onClick={() => onReadPost(biography.slug)}
                className="text-left cursor-pointer hover:underline"
              >
                {biography.title}
              </button>
            </h2>

            {/* Excerpt */}
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-reading mb-4">
              {biography.excerpt}
            </p>
          </div>

          {/* Footer Bar: Author & CTA */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center text-[10px] font-bold">
                {biography.author.name.charAt(0)}
              </div>
              <span className="text-slate-700 font-medium text-[11px] truncate max-w-[180px]">
                {biography.author.name}
              </span>
            </div>

            <button
              onClick={() => onReadPost(biography.slug)}
              className="inline-flex items-center gap-1 font-semibold text-blue-950 hover:text-blue-700 transition-colors cursor-pointer text-xs"
            >
              <span>Read Biography</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </article>
    );
  }

  // 2. GRID VIEW LAYOUT (Strict Uniform Dimensions & Height)
  return (
    <article className="group bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-sm h-full">
      <div>
        {/* Cover Image Frame with Uniform Aspect Ratio */}
        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
          {!imageError ? (
            <img
              src={biography.coverImage}
              alt={`Historical portrait of ${biography.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4 text-center text-white">
              <BookOpen className="w-8 h-8 text-amber-400 mb-2" />
              <span className="font-serif font-bold text-sm text-slate-100">{biography.name}</span>
              <span className="text-[10px] text-slate-400 mt-1">{biography.dates}</span>
            </div>
          )}

          {/* Clean date marker */}
          <div className="absolute top-2.5 right-2.5 bg-slate-950/75 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-mono font-medium">
            {biography.dates}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-2 truncate">
            <span className="font-semibold text-blue-900 shrink-0">{biography.category}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{biography.era}</span>
            <span aria-hidden="true">·</span>
            <span className="shrink-0">{biography.readTime}</span>
          </div>

          {/* Heading with Uniform 2-Line Height Alignment */}
          <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors mb-2 line-clamp-2 h-[3rem]">
            <button 
              onClick={() => onReadPost(biography.slug)}
              className="text-left cursor-pointer hover:underline"
            >
              {biography.title}
            </button>
          </h2>

          {/* Excerpt with Uniform 3-Line Height Alignment */}
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-reading h-[3.5rem] overflow-hidden">
            {biography.excerpt}
          </p>
        </div>
      </div>

      {/* Uniform Card Footer: Author & Read CTA */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
            {biography.author.name.charAt(0)}
          </div>
          <span className="text-slate-700 font-medium text-[11px] truncate max-w-[120px]">
            {biography.author.name}
          </span>
        </div>

        <button
          onClick={() => onReadPost(biography.slug)}
          className="inline-flex items-center gap-1 font-semibold text-blue-950 hover:text-blue-700 transition-colors cursor-pointer text-xs shrink-0"
        >
          <span>Read Biography</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
