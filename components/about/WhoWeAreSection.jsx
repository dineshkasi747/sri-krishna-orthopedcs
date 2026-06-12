'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhoWeAreSection() {
  const sectionRef = useScrollAnimation();

  const specialties = [
    "Joint Replacement (Hip & Knee)",
    "Spine & Disc Surgery",
    "Fracture & Trauma Fixation",
    "Arthroscopy & Sports Injuries",
    "Tailbone Pain (Coccydynia) Care",
    "Reconstructive Bone Surgery"
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Doctor Photo */}
          <div className="relative flex justify-center scroll-reveal" data-animation="slideInLeft">
            {/* Dark green circle behind doctor */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#0a413b]/10 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white max-w-[400px] w-full aspect-[4/5] scroll-reveal" data-animation="paperReveal">
              <img 
                src="/images/PNG/murali-ohan.png" 
                alt="Dr. M. Murali Mohan" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </div>

          {/* Right Content - Doctor Biography & Timings */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Lead Orthopaedic Surgeon</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal mb-1" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Dr. M. Murali Mohan" />
            </h2>
            <p className="type-body text-lg font-bold text-[var(--color-accent)] scroll-reveal -mt-3" data-animation="fadeInUp" data-delay="300">
              MS (Ortho), M.CH, FJRS (Mumbai), FPO.FSS (Seoul, South Korea)
            </p>
            
            <p className="type-body text-[var(--color-primary)]/75 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Dr. M. Murali Mohan is a renowned senior orthopaedic specialist and the lead surgeon at Sri Krishna Orthopaedic Hospital in Gajuwaka, Visakhapatnam. With over 25 years of extensive clinical experience, he is dedicated to providing high-quality, patient-centric treatments. He has established a strong reputation for surgical excellence in joint replacements, paediatric orthopaedics, spine care, and complex trauma management.
              </span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-reveal" data-animation="fadeInUp" data-delay="500">
              {/* Qualifications Card */}
              <div className="bg-white/40 border border-[var(--color-primary)]/10 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500">Qualifications</h4>
                <div className="space-y-2.5">
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={13} />
                    <p className="type-body text-xs text-[var(--color-primary)] font-medium">
                      <strong className="text-[var(--color-primary)]">M.CH</strong> - Master of Chirurgiae
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={13} />
                    <p className="type-body text-xs text-[var(--color-primary)] font-medium">
                      <strong className="text-[var(--color-primary)]">FJRS</strong> - Fellow in Joint Replacement Surgery, Mumbai
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={13} />
                    <p className="type-body text-xs text-[var(--color-primary)] font-medium">
                      <strong className="text-[var(--color-primary)]">FPO.FSS</strong> - Fellow in Paediatric Orthopedics (Seoul, South Korea)
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={13} />
                    <p className="type-body text-xs text-[var(--color-primary)] font-medium">
                      <strong className="text-[var(--color-primary)]">MS (Orthopaedics)</strong> - Guntur Medical College - 2004
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={13} />
                    <p className="type-body text-xs text-[var(--color-primary)] font-medium">
                      <strong className="text-[var(--color-primary)]">MBBS</strong> - Andhra Medical College, Vizag - 1999
                    </p>
                  </div>
                </div>
              </div>

              {/* International Training Section */}
              <div className="bg-white/40 border border-[var(--color-primary)]/10 rounded-2xl p-6 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500">Global Training</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[var(--color-accent)] font-semibold">
                    <span className="text-2xl">🌍</span>
                    <span className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-bold">International Standards</span>
                  </div>
                  <p className="type-body text-xs text-[var(--color-primary)]/80 leading-relaxed font-medium">
                    Dr. Murali Mohan has received specialized training at premier institutions internationally. By completing a Joint Replacement fellowship in Mumbai and a Paediatric Orthopaedics fellowship in Seoul, South Korea, he brings global surgical standards to Visakhapatnam.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Specialties checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500">Services & Treatments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[var(--color-primary)]/80 text-sm font-medium scroll-reveal" data-animation="fadeInUp" data-delay={600 + i * 50}>
                    <FaCheckCircle className="text-[var(--color-accent)] flex-shrink-0" size={14} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
