'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';

export default function OurDoctorsSection() {
  const sectionRef = useScrollAnimation();

  const doctors = [
    {
      image: "/about/JPG/team-1.jpg",
      name: "Dr. Elizabeth Foster",
      role: "Family Physician",
      tagline: "Compassionate care for all ages.",
      delay: 100
    },
    {
      image: "/about/JPG/team-2.jpg",
      name: "Dr. David Lee",
      role: "Surgeon",
      tagline: "Skillful hands, transforming lives.",
      delay: 200
    },
    {
      image: "/about/JPG/team-3.jpg",
      name: "Dr. Ava White",
      role: "Cardiologist",
      tagline: "Mental wellness and guiding.",
      delay: 300
    },
    {
      image: "/about/JPG/team-4.jpg",
      name: "Dr. Daniel Brown",
      role: "Dermatologist",
      tagline: "Focuses on skin, hair disorders.",
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Best Doctor</span>
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <SplitText text="Meet Our Doctors." />
          </h2>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center group scroll-reveal" data-animation="fadeInUp" data-delay={doctor.delay}>
              
              {/* Image Container with Social Overlay */}
              <div className="relative overflow-hidden rounded-2xl w-full aspect-square mb-6 shadow-md card-hover-lift scroll-reveal" data-animation="fadeInUp">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scroll-reveal" 
                  data-animation="fadeInUp" 
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-x-4 bottom-4 bg-[var(--color-primary)]/85 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="text-white hover:text-[var(--color-accent)] transition-colors"><FaInstagram size={18} /></a>
                  <a href="#" className="text-white hover:text-[var(--color-accent)] transition-colors"><FaLinkedinIn size={18} /></a>
                  <a href="#" className="text-white hover:text-[var(--color-accent)] transition-colors"><FaXTwitter size={18} /></a>
                  <a href="#" className="text-white hover:text-[var(--color-accent)] transition-colors"><FaFacebookF size={18} /></a>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center space-y-1 w-full">
                <h3 className="type-h3 text-xl scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{doctor.name}</span>
                </h3>
                <span className="block type-body text-[var(--color-accent)] font-semibold scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{doctor.role}</span>
                </span>
                <p className="type-body text-[var(--color-primary)]/70 pt-2 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">{doctor.tagline}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
