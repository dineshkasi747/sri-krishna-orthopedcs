'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function TimelineSection() {
  const sectionRef = useScrollAnimation();

  const events = [
    {
      year: "1999",
      title: "MBBS Graduation",
      subtitle: "Andhra Medical College, Visakhapatnam",
      desc: "Completed primary medical education and internship, laying a strong foundation in clinical medicine and surgery in Vizag."
    },
    {
      year: "2004",
      title: "MS in Orthopaedics",
      subtitle: "Guntur Medical College, Guntur",
      desc: "Completed specialized residency and post-graduation in Orthopedics, training extensively in trauma care and elective bone surgery."
    },
    {
      year: "2005 - 2006",
      title: "Fellowship in Joint Replacement (FJRS)",
      subtitle: "Premier Medical Centers, Mumbai",
      desc: "Completed an intensive fellowship specializing in joint reconstruction, primary and revision hip/knee replacements."
    },
    {
      year: "2006 - 2007",
      title: "Fellowship in Paediatric Orthopaedics (FPO.FSS)",
      subtitle: "Seoul, South Korea",
      desc: "Completed prestigious international fellowship in Paediatric Orthopaedics, gaining specialized skills in children's bone deformities and joint care."
    },
    {
      year: "2010",
      title: "Founded Sri Krishna Orthopaedic Hospital",
      subtitle: "Gajuwaka, Visakhapatnam",
      desc: "Established a dedicated orthopedic hospital in Sramika Nagar, Gajuwaka to deliver global surgical standards and affordable bone care to the local community."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            THE MEDICAL JOURNEY
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal font-bold" data-animation="fadeInUp" data-delay="300">
            <SplitText text="Milestones of Excellence" />
          </h2>
          <p className="type-body text-gray-500 scroll-reveal" data-animation="fadeInUp" data-delay="400">
            A history of rigorous training, international fellowships, and dedicated service that defines our clinical standard.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2" />

          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative mb-12 last:mb-0 pl-12 pr-4 md:px-8 md:w-1/2 ${
                  isLeft ? 'md:ml-0 md:mr-auto md:text-right' : 'md:ml-auto md:mr-0 md:text-left'
                }`}
              >
                {/* Bullet Node */}
                <div className={`absolute w-5 h-5 rounded-full bg-[var(--color-accent)] border-[4px] border-white shadow-md top-8 z-10 transition-transform duration-300 left-4 -translate-x-1/2 ${
                  isLeft 
                    ? 'md:left-auto md:right-0 md:translate-x-1/2' 
                    : 'md:left-0 md:-translate-x-1/2'
                }`} />

                {/* Event Card */}
                <div 
                  className="bg-[var(--color-surface)] border border-[var(--color-primary)]/5 rounded-2xl p-6 shadow-sm card-hover-lift scroll-reveal relative"
                  data-animation={isLeft ? "slideInLeft" : "fadeInUp"}
                  data-delay={100 + idx * 100}
                >
                  <div className={`flex flex-col ${isLeft ? 'items-start md:items-end' : 'items-start'}`}>
                    <span className="inline-block text-xs font-bold text-white bg-[var(--color-primary)] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-primary)]">
                      {event.title}
                    </h3>
                    <span className="text-xs font-semibold text-[var(--color-accent)] mb-3">
                      {event.subtitle}
                    </span>
                    <p className={`type-body text-xs text-[var(--color-primary)]/75 leading-relaxed ${
                      isLeft ? 'text-left md:text-right' : 'text-left'
                    }`}>
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
