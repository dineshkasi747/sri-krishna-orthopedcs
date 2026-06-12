'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCalendarDays, FaTag } from 'react-icons/fa6';

export default function BlogDetailHero({ post }) {
  const sectionRef = useScrollAnimation();

  // Truncate long post titles for the breadcrumb
  const truncatedTitle = post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title;

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] pt-40 pb-32 overflow-hidden z-0">
      
      {/* Decorative background element */}
      <img 
        src="/blog-detail/PNG/half-shape.png" 
        alt="" 
        className="absolute bottom-0 right-0 opacity-20 pointer-events-none z-[-1] scroll-reveal" 
        data-animation="fadeInUp" 
      />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="type-h1 text-white mb-6 scroll-reveal" data-animation="fadeInUp">
          <SplitText text={post.title} />
        </h1>
        
        {/* Post Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4 scroll-reveal" data-animation="fadeInUp" data-delay="100">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <FaCalendarDays className="text-[var(--color-accent)]" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <FaTag className="text-[var(--color-accent)]" />
            <span>{post.category}</span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-center space-x-2 text-white/50 text-sm mt-3 scroll-reveal" data-animation="fadeInUp" data-delay="200">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            Home
          </Link>
          <span>»</span>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">
            Blog
          </Link>
          <span>»</span>
          <span className="text-white/70">
            {truncatedTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
