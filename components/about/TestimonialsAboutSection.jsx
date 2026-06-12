'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsAboutSection() {
  const sectionRef = useScrollAnimation();

  const testimonials = [
    { name: "Radhakrishna Babu Sappa", role: "Verified Patient (Lybrate)", stars: 5, avatar: "/about/JPG/author-1.jpg", quote: "He is God for me now, I'm alive because of him. I owe him forever and ever. He has excellent diagnostic skills and gives wonderful treatment." },
    { name: "Appa Rao K.", role: "Gajuwaka, Visakhapatnam", stars: 5, avatar: "/about/JPG/author-2.jpg", quote: "Dr. Murali Mohan performed knee replacement surgery for my father. Within a few weeks he started walking comfortably without support. Very caring and highly experienced doctor." },
    { name: "Srinivasa Raju", role: "Steel Plant, Vizag", stars: 5, avatar: "/about/JPG/author-3.jpg", quote: "Excellent treatment for chronic back pain. Underwent spine care here and now I am completely free of pain. The hospital facilities and the support staff are very professional." },
    { name: "K. Lakshmi", role: "Anakapalle", stars: 5, avatar: "/about/JPG/author-4.jpg", quote: "Highly affordable care. Consulted Dr. Murali Mohan for knee pain. His explanation was very clear, and his treatment cured my pain without requiring any surgery. Best orthopaedic care!" }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden z-0"
      style={{ background: 'linear-gradient(135deg, #07332F 0%, #0F4F4A 100%)' }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            TESTIMONIAL
          </span>
          <h2 className="type-h2 text-white scroll-reveal" data-animation="fadeInUp" data-delay="300">
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
            className="pb-16 testimonial-swiper-about"
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

        {/* Custom Swiper Pagination */}
        <style dangerouslySetInnerHTML={{__html: `
          .testimonial-swiper-about .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: white;
            opacity: 0.5;
            margin: 0 6px !important;
          }
          .testimonial-swiper-about .swiper-pagination-bullet-active {
            background-color: var(--color-accent);
            opacity: 1;
          }
        `}} />

      </div>
    </section>
  );
}
