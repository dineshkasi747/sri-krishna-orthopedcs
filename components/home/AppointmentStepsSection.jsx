'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AppointmentStepsSection() {
  const sectionRef = useScrollAnimation();

  const steps = [
    { icon: "/images/SVG/svg-6.svg", title: "Book An Appointment" },
    { icon: "/images/SVG/svg-7.svg", title: "Conduct Checkup" },
    { icon: "/images/SVG/svg-8.svg", title: "Perform Treatment" },
    { icon: "/images/SVG/svg-9.svg", title: "Prescribe & Payment" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-reveal" data-animation="fadeInUp">
          
          {/* Left CTA Box (Col span 4) */}
          <div className="lg:col-span-4 bg-white p-10 rounded-2xl shadow-xl scroll-reveal" data-animation="fadeInUp">
            <div className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center mb-6 scroll-reveal" data-animation="fadeInUp">
              <img src="/images/SVG/svg-13.svg" alt="Open Appointments" className="w-8 h-8 scroll-reveal" data-animation="fadeInUp" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 scroll-reveal" data-animation="fadeInUp">Open For Appointments</h3>
            <p className="text-[var(--color-primary)]/70 mb-8 type-body scroll-reveal" data-animation="fadeInUp">
              We are delighted to announce that our doors are open and we are now accepting appointments to serve you better.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white w-full py-4 rounded-full hover:bg-[var(--color-primary)] transition-all duration-300 font-semibold scroll-reveal group" data-animation="fadeInUp">
              <FaCalendarAlt className="mr-2 scroll-reveal group-hover:text-[var(--color-accent)] transition-colors" data-animation="fadeInUp" />
              <span className="scroll-reveal" data-animation="fadeInUp">Make Appointment</span>
            </Link>
          </div>

          {/* Right Content (Col span 8) */}
          <div className="lg:col-span-8 lg:pl-8 scroll-reveal" data-animation="fadeInUp">
            <div className="mb-12 scroll-reveal" data-animation="fadeInUp">
              <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
                How We Work
              </span>
              <h2 className="type-h2 text-[var(--color-primary)] mt-4 mb-6 scroll-reveal" data-animation="fadeInUp">
                <SplitText text="A Comprehensive Directory For Your Health Care." />
              </h2>
              <p className="type-body text-[var(--color-primary)]/70 max-w-2xl scroll-reveal" data-animation="fadeInUp">
                We are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory connects you with a wide range of qualified healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 scroll-reveal" data-animation="fadeInUp">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-6 card-hover-lift scroll-reveal"
                  data-animation="fadeInUp"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0 scroll-reveal" data-animation="fadeInUp">
                    <img src={step.icon} alt={step.title} className="w-10 h-10 scroll-reveal" data-animation="fadeInUp" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
