'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function BlogPageHero() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] pt-40 pb-32 overflow-hidden z-0">
      
      {/* Decorative background element */}
      <img 
        src="/blog/PNG/half-shape.png" 
        alt="" 
        className="absolute bottom-0 right-0 opacity-20 pointer-events-none z-[-1] scroll-reveal" 
        data-animation="fadeInUp" 
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="type-h1 text-white mb-6 scroll-reveal" data-animation="fadeInUp">
          <SplitText text="Blog" />
        </h1>
        
        <div className="flex items-center justify-center space-x-2 text-white/60 text-sm font-medium scroll-reveal" data-animation="fadeInUp" data-delay="100">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <span className="scroll-reveal" data-animation="fadeInUp">Home</span>
          </Link>
          <span className="scroll-reveal" data-animation="fadeInUp" data-delay="300">»</span>
          <span className="text-white scroll-reveal" data-animation="fadeInUp" data-delay="400">
            <span className="scroll-reveal" data-animation="fadeInUp">Blog</span>
          </span>
        </div>
      </div>
    </section>
  );
}
