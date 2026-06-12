'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AppointmentBanner() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-[var(--color-accent)] py-12">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 scroll-reveal" data-animation="fadeInUp">
          
          <div className="text-white scroll-reveal" data-animation="fadeInUp">
            <h2 className="type-h2 mb-4 text-[40px] scroll-reveal" data-animation="fadeInUp">Don't Hesitate To Contact us</h2>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] px-8 py-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-semibold scroll-reveal group" data-animation="fadeInUp">
              <FaCalendarAlt className="mr-2 scroll-reveal group-hover:text-white transition-colors" data-animation="fadeInUp" />
              <span className="scroll-reveal" data-animation="fadeInUp">Make Appointment</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto scroll-reveal" data-animation="fadeInUp">
            {/* Box 1 */}
            <div className="bg-white/20 p-6 rounded-xl flex-1 backdrop-blur-sm card-hover-lift scroll-reveal" data-animation="fadeInUp">
              <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center scroll-reveal" data-animation="fadeInUp">
                <img src="/images/SVG/svg-10.svg" alt="Family Health" className="w-6 h-6 scroll-reveal" data-animation="fadeInUp" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2 scroll-reveal" data-animation="fadeInUp"><span className="scroll-reveal" data-animation="fadeInUp">Need Family Health</span></h3>
              <p className="text-white/90 scroll-reveal" data-animation="fadeInUp"><span className="scroll-reveal" data-animation="fadeInUp">We understand the importance of family health overall well-being.</span></p>
            </div>
            
            {/* Box 2 */}
            <div className="bg-white/20 p-6 rounded-xl flex-1 backdrop-blur-sm card-hover-lift scroll-reveal" data-animation="fadeInUp">
              <div className="w-12 h-12 mb-4 bg-white rounded-full flex items-center justify-center scroll-reveal" data-animation="fadeInUp">
                <img src="/images/SVG/svg-12.svg" alt="24 Hours Service" className="w-6 h-6 scroll-reveal" data-animation="fadeInUp" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2 scroll-reveal" data-animation="fadeInUp">24 hours service</h3>
              <p className="text-white/90 scroll-reveal" data-animation="fadeInUp">We take pride in offering 24-hour medical services to ensure that you.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
