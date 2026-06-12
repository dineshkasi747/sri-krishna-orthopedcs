'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-[80px] bg-white relative">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="scroll-reveal" data-animation="fadeInUp">
              <span className="type-h4_label text-[var(--color-accent)] uppercase tracking-[3.6px] mb-2 block">
                Get In Touch
              </span>
              <h2 className="type-h2 text-[var(--color-primary)] mb-6">
                Contact Details
              </h2>
              <p className="type-body text-[#555555] mb-8">
                If you have any questions or need to schedule an appointment, please feel free to reach out to us. We are always here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-[var(--color-surface)] rounded-[12px] scroll-reveal" data-animation="fadeInUp" data-delay="100">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 shadow-sm">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="type-h3 text-[20px] text-[var(--color-primary)] mb-1">Our Location</h3>
                  <p className="type-body text-[#555555]">Jl. Raya Kuta No.70, Kuta<br/>Bali 80361, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[var(--color-surface)] rounded-[12px] scroll-reveal" data-animation="fadeInUp" data-delay="200">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 shadow-sm">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="type-h3 text-[20px] text-[var(--color-primary)] mb-1">Phone Number</h3>
                  <p className="type-body text-[#555555]">+01 547 547 5478<br/>+01 356 897 4521</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-[var(--color-surface)] rounded-[12px] scroll-reveal" data-animation="fadeInUp" data-delay="300">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 shadow-sm">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="type-h3 text-[20px] text-[var(--color-primary)] mb-1">Email Address</h3>
                  <p className="type-body text-[#555555]">healthcare@gmail.com<br/>info@medipro.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#FFF7F4] p-[40px] md:p-[60px] rounded-[12px] h-full scroll-reveal" data-animation="fadeLeftUp">
              <h3 className="type-h2 text-[32px] text-[var(--color-primary)] mb-8">Send Us A Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-[8px] border border-transparent focus:border-[var(--color-accent)] outline-none text-[#555555] bg-white transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-[8px] border border-transparent focus:border-[var(--color-accent)] outline-none text-[#555555] bg-white transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 rounded-[8px] border border-transparent focus:border-[var(--color-accent)] outline-none text-[#555555] bg-white transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-6 py-4 rounded-[8px] border border-transparent focus:border-[var(--color-accent)] outline-none text-[#555555] bg-white transition-colors"
                  />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full px-6 py-4 rounded-[8px] border border-transparent focus:border-[var(--color-accent)] outline-none text-[#555555] bg-white resize-none transition-colors"
                ></textarea>
                <button 
                  type="submit"
                  className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-[8px] font-semibold hover:bg-[var(--color-accent)] transition-colors duration-300 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
