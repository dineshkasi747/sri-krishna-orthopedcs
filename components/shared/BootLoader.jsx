'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BootLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out" style={{ opacity: loading ? 1 : 0, visibility: loading ? 'visible' : 'hidden' }}>
      {/* We use an img tag to avoid next/image issues if the SVG doesn't exist yet */}
      <img 
        src="/images/SVG/preloader.svg" 
        alt="Loading..." 
        className="w-16 h-16 animate-pulse"
      />
    </div>
  );
}
