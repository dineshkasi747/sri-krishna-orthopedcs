'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaAward, FaClipboardCheck, FaGlobe, FaRupeeSign, FaStar } from 'react-icons/fa';

export default function StatsBar() {
  const sectionRef = useScrollAnimation();

  const stats = [
    {
      value: "25+",
      label: "Years of Experience",
      sub: "Graduated MBBS in 1999",
      icon: <FaAward className="text-3xl text-[var(--color-accent)]" />
    },
    {
      value: "5000+",
      label: "Surgeries Performed",
      sub: "Joints, spine & trauma",
      icon: <FaClipboardCheck className="text-3xl text-[var(--color-accent)]" />
    },
    {
      value: "1",
      label: "International Fellowship",
      sub: "Seoul, South Korea (FPO)",
      icon: <FaGlobe className="text-3xl text-[var(--color-accent)]" />
    },
    {
      value: "₹300",
      label: "Consultation Fee",
      sub: "Affordable clinic OPD",
      icon: <FaRupeeSign className="text-3xl text-[var(--color-accent)]" />
    },
    {
      value: "3.9★",
      label: "Rated on JustDial",
      sub: "Highly trusted locally",
      icon: <FaStar className="text-3xl text-[var(--color-accent)]" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-[var(--color-primary)] relative overflow-hidden z-0">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--color-primary)] via-[#09413b] to-[var(--color-primary)] opacity-50 z-[-1]" />
      <div className="absolute border border-white/5 rounded-full w-[300px] h-[300px] -top-20 -left-20 pointer-events-none z-[-1]" />
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-center text-center p-4 scroll-reveal ${
                i > 1 ? 'pt-6 md:pt-4' : ''
              }`}
              data-animation="fadeInUp" 
              data-delay={100 + i * 100}
            >
              <div className="mb-3 p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[var(--color-accent)] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-white/50 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
