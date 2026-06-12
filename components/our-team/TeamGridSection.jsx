'use client';

import Link from 'next/link';
import Image from 'next/image';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { teamData } from '@/data/team';

export default function TeamGridSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-[80px] bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((doctor, index) => {
            const href = doctor.has_detail ? `/our-team/${doctor.slug}` : '#';
            return (
              <div 
                key={index}
                className="flex flex-col group scroll-reveal"
                data-animation="fadeInUp"
                data-delay={index * 100}
              >
                
                {/* Image & Social Overlay Container */}
                <div className="relative overflow-hidden aspect-square rounded-t-[12px]">
                  <Link href={href} className="block w-full h-full">
                    <Image 
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </Link>

                  {/* Social Icons - Slide Up on Hover */}
                  <div className="absolute left-0 w-full flex justify-center gap-3 bottom-[-60px] opacity-0 group-hover:bottom-[20px] group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 pointer-events-none group-hover:pointer-events-auto">
                    {[FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-250 pointer-events-auto shadow-md"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-5 bg-[var(--color-surface)] border border-t-0 border-[rgba(7,51,47,0.05)] rounded-b-[12px] text-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 ease-in-out relative z-20">
                  <span className="text-[14px] font-semibold uppercase tracking-[3.6px] text-[var(--color-accent)] mb-2 block">
                    {doctor.specialty}
                  </span>
                  
                  <Link href={href}>
                    <h3 className="text-[22px] font-semibold leading-[1.2] text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-250 mb-2">
                      {doctor.name}
                    </h3>
                  </Link>
                  
                  <p className="text-[16px] text-[#555555]">
                    {doctor.tagline}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
