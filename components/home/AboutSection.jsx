'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaCheckCircle, FaArrowCircleRight, FaPlay } from 'react-icons/fa';

export default function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image Collage */}
          <div className="relative h-[600px] w-full">
            <img src="/images/PNG/half-shape.png" alt="" className="absolute left-0 bottom-0 opacity-10 pointer-events-none max-w-[60%] scroll-reveal" data-animation="paperReveal" />
            
            <div className="absolute top-0 left-0 lg:left-4 w-[250px] h-[425px] rounded-full overflow-hidden shadow-xl border-[6px] border-white scroll-reveal" data-animation="paperReveal">
              <img src="/images/JPG/about-img-1.jpg" alt="About" className="w-full h-full object-cover scroll-reveal" data-animation="paperReveal" />
            </div>
            
            <div className="absolute bottom-4 right-0 lg:right-10 w-[250px] h-[425px] rounded-full overflow-hidden shadow-xl border-[6px] border-white scroll-reveal" data-animation="paperReveal" data-delay="300">
              <img src="/images/JPG/about-img-2.jpg" alt="About" className="w-full h-full object-cover scroll-reveal" data-animation="paperReveal" />
            </div>

            {/* Floating Video Card */}
            <div className="absolute bottom-0 left-[5%] w-48 h-32 rounded-xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer scroll-reveal" data-animation="paperReveal" data-delay="600">
              <img src="/images/JPG/about-video-img.jpg" alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 scroll-reveal" data-animation="paperReveal" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center scroll-reveal" data-animation="fadeInUp">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <FaPlay className="ml-1 scroll-reveal" data-animation="fadeInUp" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
              About Sri Krishna Orthopaedic Hospital
            </span>
            
            <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
              <SplitText text="Advanced Orthopaedic Treatments by Experienced Specialists." />
            </h2>
            
            <p className="type-body text-[var(--color-primary)]/70 scroll-reveal" data-animation="fadeInUp">
              At Sri Krishna Orthopaedic Hospital, we take pride in providing comprehensive bone and joint care. Our experienced orthopaedic team offers both surgical and non-surgical treatments, helping patients in Gajuwaka and across Visakhapatnam regain mobility and live pain-free.
            </p>
            
            <ul className="space-y-4 pt-4 scroll-reveal" data-animation="fadeInUp">
              {['Joint Replacement Surgery', 'Emergency Fracture & Trauma Care', 'Spine & Sports Injury Treatment'].map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">
                  <FaCheckCircle className="text-[var(--color-accent)] mr-3 flex-shrink-0 scroll-reveal" size={24} data-animation="fadeInUp" />
                  <span className="scroll-reveal" data-animation="fadeInUp">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6 scroll-reveal" data-animation="fadeInUp">
              <Link href="/about" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 font-semibold scroll-reveal group" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">Read More</span>
                <FaArrowCircleRight className="ml-2 scroll-reveal group-hover:text-[var(--color-primary)] transition-colors" data-animation="fadeInUp" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
