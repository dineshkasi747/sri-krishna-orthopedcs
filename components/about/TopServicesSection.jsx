'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export default function TopServicesSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      icon: "/about/SVG/svg-1.svg",
      title: "Modern Laboratory",
      body: "Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.",
      highlighted: false,
      delay: 100
    },
    {
      icon: "/about/SVG/svg-2.svg",
      title: "Experienced Doctors",
      body: "We take pride in our team of experienced doctors who are at the forefront of delivering exceptional.",
      highlighted: false,
      delay: 300
    },
    {
      icon: "/about/SVG/svg-3.svg",
      title: "Patient Centered Care",
      body: "We take pride in our team of experienced doctors who are at the forefront of delivering exceptional.",
      highlighted: true,
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-start">
          
          {/* Left Content - Heading */}
          <div className="space-y-6 sticky top-24">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Top Services</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <SplitText text="We Are a Progressive Medical Clinic." />
            </h2>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-xl border border-black/10 card-hover-lift scroll-reveal group ${service.highlighted ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)]'}`}
                data-animation="fadeInUp"
                data-delay={service.delay}
              >
                <div className="flex-shrink-0 scroll-reveal" data-animation="fadeInUp">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className={`w-[53px] h-[53px] object-contain scroll-reveal ${service.highlighted ? 'brightness-0 invert sepia saturate-[10000%] hue-rotate-[320deg]' : ''}`} 
                    data-animation="fadeInUp"
                  />
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="type-h3 text-xl scroll-reveal" data-animation="fadeInUp">
                    <span className="scroll-reveal" data-animation="fadeInUp">{service.title}</span>
                  </h3>
                  <p className={`type-body scroll-reveal ${service.highlighted ? 'text-white/80' : 'text-[var(--color-primary)]/70'}`} data-animation="fadeInUp">
                    <span className="scroll-reveal" data-animation="fadeInUp">{service.body}</span>
                  </p>
                </div>
                
                <div className="flex-shrink-0 scroll-reveal" data-animation="fadeInUp">
                  <button className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors scroll-reveal ${service.highlighted ? 'text-[var(--color-accent)] hover:text-white' : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'}`} data-animation="fadeInUp">
                    <FaArrowAltCircleRight size={32} className="scroll-reveal" data-animation="fadeInUp" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
