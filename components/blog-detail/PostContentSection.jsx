'use client';

import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function PostContentSection({ post }) {
  const sectionRef = useScrollAnimation();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Image */}
        <div className="w-full relative aspect-[1200/624] rounded-[10px] overflow-hidden mb-10 scroll-reveal" data-animation="fadeInUp">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
            unoptimized={true}
          />
        </div>

        {/* Article Body */}
        <div className="space-y-6 scroll-reveal" data-animation="fadeInUp" data-delay="100">
          <h2 className="type-h2 text-[var(--color-primary)] mb-6">
            {post.content.heading}
          </h2>

          {/* First two paragraphs */}
          {post.content.paragraphs.slice(0, 2).map((para, index) => (
            <p key={index} className="type-body text-[var(--color-primary)]/80 leading-relaxed">
              {para}
            </p>
          ))}

          {/* Blockquote - Solid Orange Background with Quote Icon */}
          <blockquote className="relative bg-[var(--color-accent)] my-[30px] pt-[40px] pr-[40px] pb-[40px] pl-[115px]">
            <span className="absolute left-[40px] top-[45px] text-[var(--color-primary)] text-5xl font-serif leading-none">“</span>
            <p className="font-semibold text-[var(--color-primary)] text-[18px] leading-[27px]">
              {post.content.blockquote}
            </p>
          </blockquote>

          {/* Unordered List */}
          <ul className="list-none space-y-4 my-8">
            {post.content.list_items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 type-body text-[var(--color-primary)]">
                <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0 text-xl opacity-90" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Remaining paragraphs */}
          {post.content.paragraphs.slice(2).map((para, index) => (
            <p key={`end-${index}`} className="type-body text-[var(--color-primary)]/80 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Post Footer: Tags & Share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 pt-8 border-t border-[var(--color-primary)]/10 scroll-reveal" data-animation="fadeInUp" data-delay="200">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 bg-[var(--color-surface)] text-[var(--color-primary)] text-sm rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-250 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-primary)] font-semibold type-body mr-1">Share:</span>
            
            <a 
              href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-sm hover:scale-110 transition-transform duration-250"
              aria-label="Share on Facebook"
            >
              <FaFacebookF />
            </a>

            <a 
              href={`https://x.com/share?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center text-sm hover:scale-110 transition-transform duration-250"
              aria-label="Share on X"
            >
              <FaXTwitter />
            </a>

            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-sm hover:scale-110 transition-transform duration-250"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
