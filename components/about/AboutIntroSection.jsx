'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function AboutIntroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Hospital Details */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
              <span className="scroll-reveal" data-animation="fadeInUp">About the Hospital</span>
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Sri Krishna Orthopaedic Hospital" />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                At Sri Krishna Orthopaedic Hospital, we have been delivering exceptional orthopaedic care since 2010. Located beside Gajuwaka Police Station in Visakhapatnam, our hospital is a trusted destination for advanced bone and joint care, specialized fracture management, and modern arthritis treatments, led by Dr. M. Murali Mohan who brings over 25 years of clinical expertise.
              </span>
            </p>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp" data-delay="500">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Equipped with state-of-the-art diagnostic and surgical infrastructure, our mission is to deliver top-tier surgical precision and personalized rehabilitation programs to help patients regain full mobility and live a pain-free life.
              </span>
            </p>
            
            {/* Location & Contact Info Blocks */}
            <div className="space-y-4 pt-6 border-t border-gray-100 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              {/* Address */}
              <div className="flex items-start space-x-3 text-[var(--color-primary)]">
                <FaMapMarkerAlt className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500">Address</h4>
                  <p className="type-body text-sm text-[var(--color-primary)]/80">
                    Door No 6-66-15, Beside Gajuwaka Police Station, 100 Feet Road, Sramika Nagar, Chinnagantyada, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Clinic Phones */}
                <div className="flex items-start space-x-3 text-[var(--color-primary)]">
                  <FaPhoneAlt className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" size={16} />
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500">Emergency & Clinic</h4>
                    <p className="type-body text-sm font-medium text-[var(--color-primary)]/80">
                      Ambulance: 08341933893<br />
                      Clinic: +91-9849256092
                    </p>
                  </div>
                </div>

                {/* OPD Timings */}
                <div className="flex items-start space-x-3 text-[var(--color-primary)]">
                  <FaClock className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" size={16} />
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500">OPD Timings</h4>
                    <p className="type-body text-sm font-medium text-[var(--color-primary)]/80">
                      Mon - Sat: 10:00 AM - 1:00 PM<br />
                      & 5:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hospital Building Image */}
          <div className="relative w-full flex justify-center lg:justify-end scroll-reveal" data-animation="slideInLeft">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white relative z-10 scroll-reveal" data-animation="paperReveal">
              <img 
                src="/about/JPG/sri-krishna-hospital-building.jpg" 
                alt="Sri Krishna Orthopaedic Hospital Building" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
