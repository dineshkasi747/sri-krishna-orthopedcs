'use client';

import { useEffect, useRef } from 'react';

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Find all descendants that have the scroll-reveal class
      const elements = entry.target.querySelectorAll('.scroll-reveal');
      
      if (entry.isIntersecting) {
        elements.forEach((el, index) => {
          const animType = el.getAttribute('data-animation') || 'fadeInUp';
          const explicitDelay = el.getAttribute('data-delay');
          const delay = explicitDelay ? parseInt(explicitDelay) * 0.5 : index * 40;
          
          setTimeout(() => {
            el.classList.add(`animate-${animType}`);
          }, delay);
        });

        if (entry.target.classList.contains('scroll-reveal')) {
          const animType = entry.target.getAttribute('data-animation') || 'fadeInUp';
          entry.target.classList.add(`animate-${animType}`);
        }
      } else {
        // Reset animations so they trigger again when scrolling back
        elements.forEach((el) => {
          const animType = el.getAttribute('data-animation') || 'fadeInUp';
          el.classList.remove(`animate-${animType}`);
        });

        if (entry.target.classList.contains('scroll-reveal')) {
          const animType = entry.target.getAttribute('data-animation') || 'fadeInUp';
          entry.target.classList.remove(`animate-${animType}`);
        }
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
}
