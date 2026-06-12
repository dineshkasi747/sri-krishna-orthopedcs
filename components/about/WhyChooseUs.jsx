'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHeart, FaUserGraduate, FaAmbulance, FaMoneyBillWave } from 'react-icons/fa';

export default function WhyChooseUs() {
  const sectionRef = useScrollAnimation();

  const pillars = [
    {
      title: "Affordable Care",
      desc: "Quality orthopedic care should be accessible to all. We charge a reasonable ₹300 OPD consultation fee to support our community.",
      icon: <FaMoneyBillWave className="text-3xl text-[var(--color-accent)]" />,
      badge: "₹300 Consultation"
    },
    {
      title: "Emergency Ready",
      desc: "Round-the-clock emergency support with a dedicated 24/7 ambulance hotline for trauma, fractures, and immediate care.",
      icon: <FaAmbulance className="text-3xl text-[var(--color-accent)]" />,
      badge: "24/7 Ambulance Line"
    },
    {
      title: "Globally Trained",
      desc: "Dr. Murali Mohan is internationally certified, holding specialist fellowships in Mumbai and Seoul, South Korea.",
      icon: <FaUserGraduate className="text-3xl text-[var(--color-accent)]" />,
      badge: "International Fellow"
    },
    {
      title: "Trusted by Locals",
      desc: "Serving Gajuwaka and Visakhapatnam region for over 25 years. Built on a foundation of long-term patient recovery and trust.",
      icon: <FaHeart className="text-3xl text-[var(--color-accent)]" />,
      badge: "25+ Years of Trust"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            OUR CORE VALUES
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal font-bold" data-animation="fadeInUp" data-delay="300">
            <SplitText text="Why Choose Sri Krishna Hospital" />
          </h2>
          <p className="type-body text-gray-500 scroll-reveal" data-animation="fadeInUp" data-delay="400">
            We are dedicated to bringing world-class orthopedic treatments, international surgical standards, and compassionate care to your doorstep.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div 
              key={i}
              className="bg-[var(--color-surface)] border border-[var(--color-primary)]/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm card-hover-lift scroll-reveal relative group overflow-hidden"
              data-animation="fadeInUp"
              data-delay={200 + i * 100}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 space-y-4">
                <div className="p-4 bg-white rounded-xl inline-block shadow-sm text-[var(--color-primary)]">
                  {pillar.icon}
                </div>
                <h3 className="type-h3 text-xl font-bold text-[var(--color-primary)]">
                  {pillar.title}
                </h3>
                <p className="type-body text-sm text-[var(--color-primary)]/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-[var(--color-primary)]/5">
                <span className="inline-block text-xs font-bold text-[var(--color-primary)] bg-white border border-[var(--color-primary)]/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {pillar.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
