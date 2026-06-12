'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function HospitalGallerySection() {
  const sectionRef = useScrollAnimation();

  const items = [
    {
      image: "/images/JPG/reception-area.jpg",
      category: "Reception & Lounge",
      title: "OPD Reception & Waiting Lounge",
      description: "A spacious, air-conditioned reception area designed with comfortable seating to ensure a welcoming experience.",
      gridClass: "lg:col-span-2 lg:row-span-2 h-[504px]"
    },
    {
      image: "/images/JPG/operation-room.jpg",
      category: "Operation Theatre",
      title: "Orthopaedic OT 1",
      description: "Laminar airflow and modern orthopaedic tables for zero-infection joint replacements.",
      gridClass: "h-[240px]"
    },
    {
      image: "/images/JPG/lab-room.jpg",
      category: "Diagnostics",
      title: "Hematology & Pathology Lab",
      description: "Equipped with automated biochemistry testing units for rapid pre-operative diagnostic evaluations.",
      gridClass: "h-[240px]"
    },
    {
      image: "/images/JPG/icu-ward.jpg",
      category: "OPD & Wards",
      title: "Post-Op Recovery Ward",
      description: "Monitored patient beds with round-the-clock nursing care and intensive support infrastructure.",
      gridClass: "h-[240px]"
    },
    {
      image: "/images/JPG/operation-room-2.jpg",
      category: "Operation Theatre",
      title: "Orthopaedic OT 2",
      description: "Specialized secondary operating theatre featuring state-of-the-art C-arm imaging systems.",
      gridClass: "h-[240px]"
    },
    {
      image: "/images/JPG/xray-room.jpg",
      category: "Diagnostics",
      title: "Digital Radiography Room",
      description: "High-precision digital X-ray scans to check fractures and joint alignments instantly.",
      gridClass: "lg:col-span-2 h-[240px]"
    },
    {
      image: "/images/JPG/consultation-room.jpg",
      category: "OPD & Wards",
      title: "Dr. Murali Mohan's Chamber",
      description: "Private clinic space for patient consultations, X-ray evaluations, and recovery reviews.",
      gridClass: "lg:col-span-2 h-[240px]"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto scroll-reveal" data-animation="fadeInUp">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            Our Infrastructure
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="State-of-the-Art Hospital Facilities." />
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal" data-animation="fadeInUp" data-delay="300">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer border border-white/10 ${item.gridClass}`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Glassmorphic Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl p-4 text-[var(--color-primary)] transition-all duration-500 ease-in-out shadow-2xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto flex items-center justify-between gap-4">
                <div className="min-w-0">
                  {/* Category Indicator */}
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]/75 mb-0.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    {item.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-sm font-extrabold text-[var(--color-primary)] leading-tight truncate">
                    {item.title}
                  </h3>
                </div>
                
                {/* Action Arrow Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300 shrink-0">
                  <span className="text-base font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
