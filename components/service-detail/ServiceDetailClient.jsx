'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServiceDetailHero from '@/components/service-detail/ServiceDetailHero';
import WorkingProcessSection from '@/components/service-detail/WorkingProcessSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { 
  FaChildReaching,
  FaUserDoctor,
  FaBone
} from 'react-icons/fa6';
import { 
  FaCheckCircle, 
  FaPlus, 
  FaMinus, 
  FaArrowAltCircleRight,
  FaRunning
} from 'react-icons/fa';

export default function ServiceDetailClient({ service }) {
  const sectionRef = useScrollAnimation();

  // Accordion State (index of currently open FAQ, default 0)
  const [openFaq, setOpenFaq] = useState(0);

  const sidebarLinks = [
    { title: "Joint Replacement", slug: "joint-replacement", Icon: FaBone },
    { title: "Spine Surgery", slug: "spine-surgery", Icon: FaBone },
    { title: "Sports Injuries", slug: "sports-injuries", Icon: FaRunning },
    { title: "Fracture Care", slug: "fracture-care", Icon: FaBone },
    { title: "Arthroscopy", slug: "arthroscopy", Icon: FaUserDoctor },
    { title: "Paediatric Orthopaedics", slug: "paediatric-orthopaedics", Icon: FaChildReaching }
  ];

  return (
    <>
      <ServiceDetailHero service={service} />

      {/* Main 70/30 Layout */}
      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Content Column (70%) */}
            <div className="lg:w-[70%] w-full space-y-16">
              
              {/* Service Main Image & Description */}
              <div className="space-y-8">
                {/* Service Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-accent)]/15 group scroll-reveal animate-fadeIn" data-animation="fadeInUp">
                  <img 
                    src={service.image || service.video_thumbnail} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-4">
                  {service.description.map((para, idx) => (
                    <p key={idx} className="type-body text-[var(--color-primary)]/80 scroll-reveal" data-animation="fadeInUp" data-delay={100 * idx}>
                      <span className="scroll-reveal" data-animation="fadeInUp">{para}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Health Care Plans */}
              <div className="space-y-8">
                <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <SplitText text="Health Care Plans." />
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.health_plan_items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 scroll-reveal" data-animation="fadeInUp" data-delay={(idx % 4) * 100}>
                      <FaCheckCircle className="text-[var(--color-accent)] text-xl flex-shrink-0 scroll-reveal" data-animation="fadeInUp" />
                      <span className="type-body text-[var(--color-primary)] font-medium scroll-reveal" data-animation="fadeInUp">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 scroll-reveal" data-animation="fadeInUp">
                  <button className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                    <span className="scroll-reveal" data-animation="fadeInUp">Get Started</span>
                    <FaArrowAltCircleRight className="scroll-reveal" data-animation="fadeInUp" />
                  </button>
                </div>
              </div>

              {/* Key Benefits FAQ */}
              <div className="space-y-8">
                <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <SplitText text="Key Benefits." />
                </h2>

                <div className="space-y-3">
                  {service.faq.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className="border border-[var(--color-primary)]/10 rounded-xl overflow-hidden scroll-reveal"
                        data-animation="fadeInUp"
                        data-delay={idx * 100}
                      >
                        <div 
                          className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-[var(--color-surface)]' : 'bg-white hover:bg-[var(--color-surface)]'}`}
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        >
                          <span className="type-body font-semibold text-[var(--color-primary)] pr-4">{faq.question}</span>
                          <div className="text-[var(--color-accent)] flex-shrink-0">
                            {isOpen ? <FaMinus /> : <FaPlus />}
                          </div>
                        </div>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className={`px-6 pb-4 type-body text-[var(--color-primary)]/70 ${isOpen ? 'bg-[var(--color-surface)]' : 'bg-white'}`}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (30%) */}
            <div className="lg:w-[30%] w-full lg:sticky lg:top-28">
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 scroll-reveal" data-animation="fadeInUp">
                <h3 className="type-h3 text-white mb-6 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Medical Service</span>
                </h3>

                <div className="space-y-2 mb-8">
                  {sidebarLinks.map((link, idx) => {
                    const isActive = link.slug === service.slug;
                    return (
                      <Link 
                        key={idx} 
                        href={`/services/${link.slug}`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 scroll-reveal ${isActive ? 'bg-[var(--color-accent)] text-white' : 'bg-white/5 text-white hover:bg-[var(--color-accent)]/20'}`}
                        data-animation="fadeInUp"
                        data-delay={idx * 50}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <link.Icon size={20} className="text-white" />
                        </div>
                        <span className="type-body font-medium">{link.title}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link 
                  href="/services" 
                  className="w-full bg-[var(--color-accent)] text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold scroll-reveal"
                  data-animation="fadeInUp"
                >
                  <span className="scroll-reveal" data-animation="fadeInUp">View All Service</span>
                  <FaArrowAltCircleRight className="scroll-reveal" data-animation="fadeInUp" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WorkingProcessSection />

      {/* Video Modal Removed */}
    </>
  );
}
