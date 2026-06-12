'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHospital, FaUserDoctor } from 'react-icons/fa6';
import { FaComments, FaCalendarCheck } from 'react-icons/fa';

export default function WorkingProcessSection() {
  const sectionRef = useScrollAnimation();

  const steps = [
    {
      number: "01",
      Icon: FaComments,
      title: "Free Consultation",
      body: "Expert advice for your health concerns, no cost involved. Schedule now!",
      delay: 100
    },
    {
      number: "02",
      Icon: FaCalendarCheck,
      title: "Schedule Date & Time",
      body: "Book your appointment online and choose your preferred date and time for a convenient.",
      delay: 200
    },
    {
      number: "03",
      Icon: FaHospital,
      title: "Arrival to Hospital",
      body: "Your premier destination for comprehensive orthopaedic care. Experience exceptional bone & joint treatments.",
      delay: 300
    },
    {
      number: "04",
      Icon: FaUserDoctor,
      title: "Follow Up Check",
      body: "Ensure your health progress with our comprehensive follow-up examinations, personalized care.",
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Step</span>
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <SplitText text="Our Working Best Working Processs." />
          </h2>
        </div>

        {/* Steps Grid - 2x2 Checkerboard, No Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl scroll-reveal" data-animation="fadeInUp" data-delay="400">
          {steps.map((step, index) => {
            // Checkerboard pattern: 0 and 3 are accent, 1 and 2 are primary
            const isAccent = index === 0 || index === 3;
            const bgClass = isAccent ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-primary)]';

            return (
              <div 
                key={index} 
                className={`relative p-10 lg:p-14 flex flex-col items-start ${bgClass} transition-transform duration-300 hover:scale-[1.02] hover:z-10`}
              >
                
                {/* Icon */}
                <div className="mb-6">
                  <step.Icon size={40} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="type-h3 text-2xl text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="type-body text-white/90 max-w-sm">
                  {step.body}
                </p>

                {/* Bottom Right Number */}
                <div className="absolute bottom-6 right-8 text-4xl font-bold text-white">
                  {step.number}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
