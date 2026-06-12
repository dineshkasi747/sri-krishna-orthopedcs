'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaHospital, FaFileMedical, FaRunning, FaBriefcaseMedical, FaPills, FaBed } from 'react-icons/fa';

export default function FacilitiesSection() {
  const sectionRef = useScrollAnimation();

  const facilities = [
    {
      title: "Laminar Flow OT",
      desc: "Our ultra-modern, infection-free operation theatre is equipped with advanced laminar airflow and orthopedic surgical consoles.",
      icon: <FaHospital className="text-3xl text-[var(--color-primary)]" />
    },
    {
      title: "Digital X-Ray Unit",
      desc: "In-house high-frequency digital X-Ray system for immediate, high-resolution skeletal imaging and accurate joint diagnosis.",
      icon: <FaFileMedical className="text-3xl text-[var(--color-primary)]" />
    },
    {
      title: "Physiotherapy & Rehab",
      desc: "A fully equipped physical therapy unit with dedicated therapists to guide post-surgical rehabilitation and mobility recovery.",
      icon: <FaRunning className="text-3xl text-[var(--color-primary)]" />
    },
    {
      title: "24/7 Trauma & Emergency",
      desc: "Prompt medical response and stabilization for fractures, joint dislocations, and accidental orthopedic trauma around the clock.",
      icon: <FaBriefcaseMedical className="text-3xl text-[var(--color-primary)]" />
    },
    {
      title: "In-House Pharmacy",
      desc: "Stocked with orthopedic medications, specialized joint supplements, supportive braces, plaster casts, and recovery aids.",
      icon: <FaPills className="text-3xl text-[var(--color-primary)]" />
    },
    {
      title: "Inpatient Rooms & Wards",
      desc: "Comfortable recovery spaces including private rooms, sharing rooms, and general wards, managed by skilled nursing staff.",
      icon: <FaBed className="text-3xl text-[var(--color-primary)]" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp" data-delay="100">
            HOSPITAL INFRASTRUCTURE
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal font-bold" data-animation="fadeInUp" data-delay="300">
            <SplitText text="Our Advanced Facilities" />
          </h2>
          <p className="type-body text-gray-500 scroll-reveal" data-animation="fadeInUp" data-delay="400">
            Equipped with modern healthcare technologies and recovery infrastructure to ensure comfortable patient stays and superior surgical results.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <div 
              key={i}
              className="bg-white border border-[var(--color-primary)]/5 rounded-2xl p-8 shadow-sm flex items-start space-x-6 card-hover-lift scroll-reveal group"
              data-animation="fadeInUp"
              data-delay={100 + i * 100}
            >
              <div className="p-4 bg-[var(--color-surface)] rounded-xl text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                {fac.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  {fac.title}
                </h3>
                <p className="type-body text-xs text-[var(--color-primary)]/75 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
