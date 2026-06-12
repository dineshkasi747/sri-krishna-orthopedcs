'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const sectionRef = useScrollAnimation();

  const testimonials = [
    { name: "Emily Davis", role: "CEO of Digital Marketing", stars: 4, avatar: "/images/JPG/author-4.jpg", quote: "Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff." },
    { name: "Mary Johnson", role: "Student", stars: 5, avatar: "/images/JPG/author-1.jpg", quote: "Great experience, caring doctors, and modern, caring doctors, and modern. Highly doctors and compassionate skilled doctors and compassionate staff." },
    { name: "John Doe", role: "CEO of Digital Marketing", stars: 4, avatar: "/images/JPG/author-2.jpg", quote: "Highly doctors and compassionate skilled doctors and compassionate staff. Highly doctors and compassionate skilled doctors and compassionate staff." },
    { name: "Robert Lee", role: "Accountant", stars: 4, avatar: "/images/JPG/author-3.jpg", quote: "Top-notch healthcare with a patient-centered approach caring doctors, and modern. Highly doctors and compassionate." }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[var(--color-surface)] z-0">
      
      {/* 50/50 Background Split */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[var(--color-primary)] z-[-1]"></div>
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            TESTIMONIAL
          </span>
          <h2 className="type-h2 text-white mt-4 scroll-reveal" data-animation="fadeInUp" data-delay="300">
            <SplitText text="What Patients Say About Us." />
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="scroll-reveal" data-animation="fadeInUp" data-delay="500">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-10 rounded-sm h-full flex flex-col justify-start shadow-xl card-hover-lift group border border-[var(--color-accent)]/30">
                  
                  <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-6">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border border-gray-200 scroll-reveal" data-animation="fadeInUp" />
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] text-lg scroll-reveal" data-animation="fadeInUp"><span className="scroll-reveal" data-animation="fadeInUp">{testimonial.name}</span></h4>
                      <span className="text-sm text-gray-500 scroll-reveal" data-animation="fadeInUp"><span className="scroll-reveal" data-animation="fadeInUp">{testimonial.role}</span></span>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-500 type-body leading-relaxed scroll-reveal" data-animation="fadeInUp">
                      <span className="scroll-reveal" data-animation="fadeInUp">{testimonial.quote}</span>
                    </p>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Swiper Pagination and Stagger Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          /* Pagination Styles */
          .testimonial-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: var(--color-primary);
            opacity: 1;
            margin: 0 6px !important;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            background-color: var(--color-accent);
          }

          /* Staggered Timeline Animation for Review Cards */
          .animate-fadeInUp .testimonial-swiper .swiper-slide {
            animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0;
          }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(1) { animation-delay: 100ms; }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(2) { animation-delay: 250ms; }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(3) { animation-delay: 400ms; }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(4) { animation-delay: 550ms; }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(5) { animation-delay: 700ms; }
          .animate-fadeInUp .testimonial-swiper .swiper-slide:nth-child(n+6) { animation-delay: 850ms; }
        `}} />

      </div>
    </section>
  );
}
