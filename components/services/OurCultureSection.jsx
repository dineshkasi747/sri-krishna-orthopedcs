'use client';

import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function OurCultureSection() {
  const sectionRef = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = Array.from({ length: 10 }, (_, i) => `/services/JPG/cultuer-${i + 1}.jpg`);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  
  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section ref={sectionRef} className="pt-24 overflow-hidden bg-[var(--color-surface)]">
      
      {/* Top Content Row (Constrained Width) */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <div className="space-y-4">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
              <span className="scroll-reveal" data-animation="fadeInUp">Our Culture</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Our Infrastructure & Culture" />
            </h2>
          </div>
          
          <div className="lg:pt-8">
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                At our medipro, we pride ourselves on fostering a culture of care, where every individual's well-being is our utmost priority. Our commitment to excellence in healthcare is grounded.
              </span>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Gallery Row (Edge-to-Edge Full Width, No Gaps) */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-[3/2] overflow-hidden cursor-pointer group scroll-reveal"
            data-animation="fadeInUp"
            data-delay={(index % 5) * 100}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={src} 
              alt={`Culture ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scroll-reveal"
              data-animation="paperReveal" 
            />
            {/* Hover overlay to hint it's clickable */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
            onClick={closeLightbox}
          >
            <FaTimes size={32} />
          </button>
          
          {/* Prev Button */}
          <button 
            className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50"
            onClick={showPrev}
          >
            <FaChevronLeft size={48} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-12 lg:px-24">
            <img 
              src={images[lightboxIndex]} 
              alt={`Gallery Full ${lightboxIndex + 1}`} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-md select-none"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50"
            onClick={showNext}
          >
            <FaChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
