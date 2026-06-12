'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function DoctorProfileSection({ doctor }) {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="pt-[80px] bg-[#FFF7F4] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          
          {/* Left: Image */}
          <div className="w-full lg:w-[45%] scroll-reveal" data-animation="fadeInUp">
            <div className="relative w-full h-full min-h-[400px]">
              <img 
                src={doctor.detail_image || doctor.image} 
                alt={doctor.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Bio Content (Dark Green) */}
          <div className="w-full lg:w-[55%] bg-[var(--color-primary)] p-[40px] md:p-[60px] lg:p-[80px] flex flex-col justify-center scroll-reveal" data-animation="fadeLeftUp" data-delay="100">
            <div className="scroll-reveal" data-animation="fadeInUp">
              <span className="text-white uppercase tracking-[3.6px] font-semibold text-[16px] md:text-[18px] mb-4 block">
                {doctor.specialty}
              </span>
            </div>

            <h2 className="type-h2 text-[var(--color-accent)] mb-6 scroll-reveal" data-animation="fadeInUp">
              <SplitText text={doctor.name} />
            </h2>
            
            <p className="type-body text-white mb-10 scroll-reveal" data-animation="fadeInUp" data-delay="100">
              {(doctor.bio || '').split('\n\n')[0] || doctor.short_bio || doctor.tagline}
            </p>

            <div className="flex gap-6 scroll-reveal" data-animation="fadeInUp" data-delay="200">
              {['/ourTeam-detail/SVG/svg-4.svg', '/ourTeam-detail/SVG/svg-5.svg', '/ourTeam-detail/SVG/svg-6.svg'].map((src, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="transition-opacity duration-300 hover:opacity-80 flex items-center justify-center"
                >
                  <img src={src} alt="Social Icon" className="w-[20px] h-[20px] object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(21%) saturate(1637%) hue-rotate(320deg) brightness(101%) contrast(94%)' }} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
