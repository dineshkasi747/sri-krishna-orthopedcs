'use client';

import Link from 'next/link';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function PageHeroBanner({ title, breadcrumbItems, decorativeImage = "/our_team/PNG/half-circle-img.png" }) {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] pt-40 pb-32 overflow-hidden z-0">
      
      {/* Decorative background element */}
      {decorativeImage && (
        <div className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none z-[-1] scroll-reveal" data-animation="fadeInUp">
          <Image 
            src={decorativeImage} 
            alt="" 
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="type-h1 text-white mb-6 scroll-reveal" data-animation="fadeInUp">
          <SplitText text={title} />
        </h1>
        
        <div className="flex flex-wrap items-center justify-center space-x-2 text-white/60 text-sm font-medium scroll-reveal" data-animation="fadeInUp" data-delay="100">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <div key={index} className="flex items-center space-x-2">
                <span className={isLast ? "text-[var(--color-accent)]" : "text-white/60 hover:text-white transition-colors"}>
                  {item.link ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </span>
                {!isLast && <span>»</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
