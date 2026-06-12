'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCheckCircle, FaArrowAltCircleRight } from 'react-icons/fa';

export default function FamilyCareSection() {
  const sectionRef = useScrollAnimation();

  const infoBoxes = [
    {
      icon: "/about/SVG/svg-4.svg",
      title: "Patient Information",
      body: "I hereby give consent to and its healthcare professionals to provide medical treatment.",
      delay: 100
    },
    {
      icon: "/about/SVG/svg-4.svg",
      title: "Emergency Contact",
      body: "This application form is for informational purposes only and does not guarantee.",
      delay: 300
    },
    {
      icon: "/about/SVG/svg-4.svg",
      title: "Medical History",
      body: "Your medical history is a vital piece of information that provides healthcare.",
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <h3 className="type-h3 text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">Caring For The Health Of You And Your Family.</span>
            </h3>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
              <SplitText text="We Provide All Aspects Of Medical Practice For Your Whole Family!" />
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6 border-b border-black/10 pb-10">
              <h3 className="type-h3 text-xl text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
                <span className="scroll-reveal" data-animation="fadeInUp">Welcome to medipro, where we offer comprehensive medical care tailored to every member of your family.</span>
              </h3>
              
              <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="300">
                <span className="scroll-reveal" data-animation="fadeInUp">Our dedicated team of healthcare professionals is committed to providing you and your loved ones with personalized and compassionate healthcare services. We understand the importance of family health.</span>
              </p>
              
              <ul className="space-y-4 pt-2 scroll-reveal" data-animation="fadeInUp" data-delay="500">
                {['Family-Centered Care', 'Preventive Services', 'Vaccinations and Immunizations'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg font-medium text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                    <FaCheckCircle className="text-[var(--color-accent)] mr-3 flex-shrink-0 scroll-reveal" size={24} data-animation="fadeInUp" />
                    <span className="scroll-reveal" data-animation="fadeInUp">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 scroll-reveal" data-animation="fadeInUp" data-delay="700">
                <button className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-primary)] transition-all duration-300 font-semibold scroll-reveal group" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Get Started</span>
                  <FaArrowAltCircleRight className="ml-2 scroll-reveal" data-animation="fadeInUp" />
                </button>
              </div>
            </div>

            {/* Info Boxes */}
            <div className="space-y-6 pt-4">
              {infoBoxes.map((box, index) => (
                <div key={index} className="flex items-start space-x-6 card-hover-lift scroll-reveal" data-animation="fadeInUp" data-delay={box.delay}>
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm scroll-reveal" data-animation="fadeInUp">
                    <img src={box.icon} alt={box.title} className="w-[45px] h-[44px] object-contain scroll-reveal" data-animation="fadeInUp" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <h4 className="font-bold text-[var(--color-primary)] text-xl scroll-reveal" data-animation="fadeInUp">
                      <span className="scroll-reveal" data-animation="fadeInUp">{box.title}</span>
                    </h4>
                    <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp">
                      <span className="scroll-reveal" data-animation="fadeInUp">{box.body}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
