'use client';

import { useEffect, useRef, useState } from 'react';

export default function SplitText({ text, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((letter, index) => {
            const currentDelay = letterIndex * 30;
            letterIndex++;
            return (
              <span
                key={index}
                className={`letter-split ${isVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${currentDelay}ms` }}
              >
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
