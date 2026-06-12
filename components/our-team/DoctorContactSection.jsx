'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCalendarAlt } from 'react-icons/fa';


export default function DoctorContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-[80px] bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal" data-animation="fadeInUp">
          <span className="type-h4_label block mb-2">Fill The Form</span>
          <h2 className="type-h2 text-[var(--color-primary)]">
            <SplitText text="Contact Form." />
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left CTA Card */}
          <div className="w-full lg:w-1/2 bg-[var(--color-primary)] rounded-[12px] p-[40px] relative overflow-hidden flex flex-col justify-center scroll-reveal" data-animation="fadeRightUp">
            <div className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <img 
                src="/ourTeam-detail/PNG/half-circle-img.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="type-h3 text-white mb-8 max-w-[400px]">
                Make Appointment & Take Care Of Your Healthy Life
              </h3>
              <button className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold type-body">
                Book Appointment <FaCalendarAlt />
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-[12px] p-[40px] shadow-sm scroll-reveal" data-animation="fadeLeftUp" data-delay="100">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full px-5 py-4 border border-[#E5E5E5] rounded-[8px] bg-[#F8F8F8] type-body text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full px-5 py-4 border border-[#E5E5E5] rounded-[8px] bg-[#F8F8F8] type-body text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone" 
                  required 
                  className="w-full px-5 py-4 border border-[#E5E5E5] rounded-[8px] bg-[#F8F8F8] type-body text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                />
                <input 
                  type="date" 
                  name="date" 
                  required 
                  className="w-full px-5 py-4 border border-[#E5E5E5] rounded-[8px] bg-[#F8F8F8] type-body text-[#555555] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300"
                />
              </div>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                className="w-full px-5 py-4 border border-[#E5E5E5] rounded-[8px] bg-[#F8F8F8] type-body text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-300 resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[var(--color-primary)] text-white px-8 py-4 rounded-[8px] hover:bg-[var(--color-accent)] transition-all duration-300 font-semibold type-body"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
