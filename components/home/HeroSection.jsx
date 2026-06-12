'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowCircleRight, FaUserCheck, FaHeartbeat, FaClipboardCheck, FaAward, FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-primary)] py-16 lg:py-24 overflow-hidden z-0 min-h-[90vh] flex items-center">
      
      {/* Background shape in bottom right (subtle) */}
      <img src="/images/PNG/half-shape.png" alt="" className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-1/3 z-[-1] scroll-reveal" data-animation="fadeInUp" />
      
      {/* Decorative curves at bottom-left */}
      <div className="absolute border border-white/5 rounded-full w-[400px] h-[400px] -bottom-48 -left-48 pointer-events-none z-0" />
      <div className="absolute border border-[var(--color-accent)]/10 rounded-full w-[300px] h-[300px] -bottom-36 -left-36 pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 lg:col-span-7">
            <span className="type-label text-white inline-block scroll-reveal tracking-[0.2em] uppercase text-sm font-bold" data-animation="fadeInUp" data-delay="100">
              EXPERT ORTHOPAEDIC CARE — GAJUWAKA, VISAKHAPATNAM
            </span>
            
            <h1 className="type-h1 text-[var(--color-accent)] scroll-reveal font-bold leading-tight" data-animation="fadeInUp" data-delay="400">
              <SplitText text="Sri Krishna Orthopaedic Hospital — Your Trusted Bone & Joint Specialists." />
            </h1>
            
            <p className="type-body text-white/70 max-w-xl scroll-reveal" data-animation="fadeInUp" data-delay="700">
              With over 25 years of dedicated orthopaedic care, we offer advanced surgical and non-surgical treatments for joint, spine, and sports injuries. Located beside Gajuwaka Police Station, Visakhapatnam.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2 pb-6 scroll-reveal" data-animation="fadeInUp" data-delay="900">
              <a 
                href="https://wa.me/919849256092?text=Hi,%20I'd%20like%20to%20book%20an%20appointment%20at%20Sri%20Krishna%20Orthopaedic%20Hospital."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-semibold gap-2 shadow-lg"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </a>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center border border-white/20 bg-white/10 text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-semibold gap-2"
              >
                <span>Contact Us</span>
                <FaArrowCircleRight />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 scroll-reveal" data-animation="fadeInUp" data-delay="1100">
              {/* Stat 1 */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-2xl sm:text-3xl">
                  <FaUserCheck className="text-xl sm:text-2xl" />
                  <span>25+</span>
                </div>
                <span className="text-white/60 text-xs sm:text-sm leading-snug">Years Experience</span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col space-y-1 border-l border-white/10 pl-4 sm:pl-6">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-2xl sm:text-3xl">
                  <FaHeartbeat className="text-xl sm:text-2xl" />
                  <span>5000+</span>
                </div>
                <span className="text-white/60 text-xs sm:text-sm leading-snug">Happy Patients</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col space-y-1 border-l-0 sm:border-l border-white/10 pl-0 sm:pl-6 mt-4 sm:mt-0">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-2xl sm:text-3xl">
                  <FaClipboardCheck className="text-xl sm:text-2xl" />
                  <span>1000+</span>
                </div>
                <span className="text-white/60 text-xs sm:text-sm leading-snug">Successful Surgeries</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col space-y-1 border-l border-white/10 pl-4 sm:pl-6 mt-4 sm:mt-0">
                <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-2xl sm:text-3xl">
                  <FaAward className="text-xl sm:text-2xl" />
                  <span>24/7</span>
                </div>
                <span className="text-white/60 text-xs sm:text-sm leading-snug">Patient Support</span>
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[580px] lg:col-span-5 flex items-end justify-center z-10 scroll-reveal" data-animation="fadeInUp" data-delay="1200">
            
            {/* Dots background */}
            <div 
              className="absolute left-4 sm:left-12 lg:left-0 top-8 w-[140px] h-[280px] opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: "url('/images/PNG/white-dots-img.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            />

            {/* Dark green circle behind doctor */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full bg-[#0a413b] bottom-6 z-0" />

            {/* Transparent doctor image */}
            <img 
              src="/images/PNG/murali-ohan.png" 
              alt="Dr. Murali Ohan" 
              className="relative z-10 h-[420px] sm:h-[520px] lg:h-[560px] w-auto object-contain select-none bottom-0 transition-transform duration-500 hover:scale-105" 
            />

            {/* Accent curves around circle */}
            <div className="absolute border border-white/5 rounded-full w-[200px] h-[200px] -bottom-10 -right-10 pointer-events-none z-0" />
            <div className="absolute border border-[var(--color-accent)]/10 rounded-full w-[320px] h-[320px] -bottom-16 -right-16 pointer-events-none z-0" />

          </div>
          
        </div>
      </div>
    </section>
  );
}
