'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AppointmentBannerAbout() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-[var(--color-surface)] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-[var(--color-accent)]/20 flex flex-col lg:flex-row items-center justify-between gap-8 scroll-reveal" data-animation="fadeInUp">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:max-w-2xl">
            <div className="flex-shrink-0 w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <img src="/about/SVG/svg-11.svg" alt="Appointment" className="w-10 h-10 scroll-reveal" data-animation="fadeInUp" />
            </div>
            <div className="space-y-3">
              <h2 className="type-h3 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="300">
                <span className="scroll-reveal" data-animation="fadeInUp">Open For Appointments</span>
              </h2>
              <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="500">
                <span className="scroll-reveal" data-animation="fadeInUp">We are delighted to announce that our doors are open, and we are now accepting appointments to serve you better.</span>
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 scroll-reveal" data-animation="fadeInUp" data-delay="700">
            <button className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 font-semibold shadow-lg card-hover-lift scroll-reveal" data-animation="fadeInUp">
              <span className="scroll-reveal" data-animation="fadeInUp">Book Appointment</span>
              <FaCalendarAlt className="ml-3 scroll-reveal" data-animation="fadeInUp" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
