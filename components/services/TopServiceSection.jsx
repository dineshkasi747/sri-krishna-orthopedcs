'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHeartPulse, FaTooth, FaVirus, FaHandHoldingMedical } from 'react-icons/fa6';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function TopServiceSection() {
  const sectionRef = useScrollAnimation();

  const cards = [
    {
      Icon: FaHeartPulse,
      title: "Cardiology",
      delay: 100
    },
    {
      Icon: FaTooth,
      title: "Diagnostics",
      delay: 200
    },
    {
      Icon: FaVirus,
      title: "Virology",
      delay: 300
    },
    {
      Icon: FaHandHoldingMedical,
      title: "Therapy",
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div className="space-y-4">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
              <span className="scroll-reveal" data-animation="fadeInUp">Top Service</span>
            </span>
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="We Are a Progressive Medical Clinic." />
            </h2>
          </div>
          
          <div className="lg:pt-8">
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Welcome to our comprehensive medical services designed to cater to your diverse healthcare needs. We are committed to delivering top-notch medical care with a patient-centered approach.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Cards Row (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-[var(--color-surface)] p-10 flex flex-col items-center text-center border border-[var(--color-primary)]/20 hover:bg-white transition-colors duration-300 card-hover-lift scroll-reveal"
              data-animation="fadeInUp"
              data-delay={card.delay}
            >
              <div className="mb-6 scroll-reveal" data-animation="fadeInUp">
                <card.Icon size={64} className="text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" />
              </div>
              
              <h3 className="type-h3 text-xl font-bold text-[var(--color-primary)] mb-8 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{card.title}</span>
              </h3>
              
              <div className="mt-auto scroll-reveal" data-animation="fadeInUp">
                <button className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors scroll-reveal" data-animation="fadeInUp">
                  <FaArrowAltCircleRight size={28} className="scroll-reveal" data-animation="fadeInUp" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
