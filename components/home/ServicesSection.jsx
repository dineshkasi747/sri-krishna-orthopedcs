'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ServicesSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    { title: "Joint Replacement", body: "Advanced hip and knee replacement surgeries to restore full mobility and eliminate chronic joint pain.", icon: "/images/SVG/svg-1.svg" },
    { title: "Spine Surgery", body: "Surgical and non-surgical treatments for disc herniation, spinal stenosis, and back pain.", icon: "/images/SVG/svg-2.svg" },
    { title: "Sports Injuries", body: "Specialised care for ligament tears, muscle strains, and all sports-related orthopaedic conditions.", icon: "/images/SVG/svg-3.svg" },
    { title: "Fracture Care", body: "Prompt and precise fracture management — from simple breaks to complex trauma cases.", icon: "/images/SVG/svg-4.svg" },
    { title: "Arthroscopy", body: "Minimally invasive keyhole surgeries for faster recovery and minimal scarring.", icon: "/images/SVG/svg-5.svg" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-primary)] relative overflow-hidden z-0">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal" data-animation="fadeInUp">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto scroll-reveal" data-animation="fadeInUp">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            Orthopaedic Services
          </span>
          <h2 className="type-h2 text-white mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="Comprehensive Bone & Joint Care." />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 scroll-reveal" data-animation="fadeInUp">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-xl card-hover-lift group scroll-reveal"
              data-animation="fadeInUp"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                <img src={service.icon} alt={service.title} className="w-8 h-8 brightness-0 invert scroll-reveal" data-animation="fadeInUp" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 scroll-reveal" data-animation="fadeInUp">{service.title}</h3>
              <p className="text-white/70 mb-6 line-clamp-3 scroll-reveal" data-animation="fadeInUp">{service.body}</p>
              
              <Link href="/services" className="inline-flex items-center text-[var(--color-accent)] font-semibold transition-all duration-300 scroll-reveal group" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">Read More</span>
                <FaArrowCircleRight className="ml-2 scroll-reveal group-hover:text-white transition-colors" data-animation="fadeInUp" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
