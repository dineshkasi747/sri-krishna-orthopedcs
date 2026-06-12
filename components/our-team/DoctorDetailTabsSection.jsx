'use client';

import { useEffect, useRef, useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaGraduationCap } from 'react-icons/fa';

export default function DoctorDetailTabsSection({ doctor }) {
  const sectionRef = useScrollAnimation();
  const progressBarsRef = useRef(null);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressBarsRef.current) {
      observer.observe(progressBarsRef.current);
    }

    return () => {
      if (progressBarsRef.current) observer.unobserve(progressBarsRef.current);
    };
  }, []);

  const bioParagraphs = (doctor.bio || '').split('\n\n').slice(1);

  return (
    <section ref={sectionRef} className="py-[80px] bg-[#FFF7F4]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Bio Details, Services, etc. */}
          <div className="w-full lg:w-[65%]">
            
            {/* Extended Bio */}
            <div className="scroll-reveal" data-animation="fadeInUp">
              <span className="text-[var(--color-accent)] uppercase tracking-[3.6px] font-semibold text-[16px] mb-2 block">
                {doctor.specialty}
              </span>
              <h2 className="type-h2 text-[var(--color-primary)] mb-6">
                {doctor.name}
              </h2>
              
              <div className="space-y-6 mb-8">
                {bioParagraphs.map((p, idx) => (
                  <p key={idx} className="type-body text-[#555555]">
                    {p}
                  </p>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mb-10">
                {['/ourTeam-detail/SVG/svg-4.svg', '/ourTeam-detail/SVG/svg-5.svg', '/ourTeam-detail/SVG/svg-6.svg'].map((src, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="transition-opacity duration-300 hover:opacity-80 flex items-center justify-center"
                  >
                    <img 
                      src={src} 
                      alt="Social Icon" 
                      className="w-[20px] h-[20px] object-contain" 
                      style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(21%) saturate(1637%) hue-rotate(320deg) brightness(101%) contrast(94%)' }} 
                    />
                  </a>
                ))}
              </div>
            </div>

            <hr className="border-t border-[var(--color-accent)] opacity-30 mb-10 scroll-reveal" data-animation="fadeIn" />

            {/* Services Checklist */}
            <div className="scroll-reveal" data-animation="fadeInUp">
              <span className="text-[var(--color-accent)] uppercase tracking-[3.6px] font-semibold text-[16px] mb-2 block">
                SERVICE
              </span>
              <h2 className="type-h2 text-[var(--color-primary)] mb-8">
                My Service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {doctor.checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src="/ourTeam-detail/SVG/svg-9.svg" alt="Check" className="w-[20px] h-[20px] flex-shrink-0 object-contain" />
                    <span className="type-body text-[var(--color-primary)] font-medium capitalize">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-t border-[#E5E5E5] mb-10 scroll-reveal" data-animation="fadeIn" />

            {/* Additional Info: Education & Awards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="scroll-reveal" data-animation="fadeInUp">
                <span className="text-[var(--color-accent)] uppercase tracking-[3.6px] font-semibold text-[16px] mb-2 block">EDUCATION</span>
                <h2 className="type-h2 text-[var(--color-primary)] text-[32px] mb-6">My Education</h2>
                <div className="space-y-6">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 rounded-[12px] bg-white border border-[rgba(7,51,47,0.05)] hover:border-[var(--color-accent)] transition-colors duration-300">
                      <div className="w-[50px] h-[50px] bg-[#FFF7F4] rounded-full flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                        <FaGraduationCap size={24} />
                      </div>
                      <div>
                        <h4 className="type-h3 text-[20px] text-[var(--color-primary)] mb-1">{edu.degree}</h4>
                        <p className="type-body text-[#555555] text-[14px] whitespace-pre-line">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-[var(--color-accent)] uppercase tracking-[3.6px] font-semibold text-[16px] mb-2 block scroll-reveal" data-animation="fadeInUp">AWARDS</span>
                <h2 className="type-h2 text-[var(--color-primary)] text-[32px] mb-6 scroll-reveal" data-animation="fadeInUp">My Awards</h2>
                <div className="space-y-4">
                  {doctor.awards.map((award, index) => (
                    <div key={index} className="flex flex-col bg-white border border-[rgba(7,51,47,0.05)] rounded-[12px] p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 scroll-reveal" data-animation="fadeInUp" data-delay={index * 100}>
                      <img src="/ourTeam-detail/SVG/icon-awards.svg" alt="Award" className="w-[40px] h-[40px] mb-3" />
                      <h4 className="type-h3 text-[20px] text-[var(--color-primary)] mb-2">{award.title}</h4>
                      <p className="type-body text-[#555555]">{award.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-t border-[#E5E5E5] mb-10 scroll-reveal" data-animation="fadeIn" />

            {/* Skills */}
            <div ref={progressBarsRef} className="w-full">
              <span className="text-[var(--color-accent)] uppercase tracking-[3.6px] font-semibold text-[16px] mb-2 block scroll-reveal" data-animation="fadeInUp">SKILLS</span>
              <h2 className="type-h2 text-[var(--color-primary)] text-[32px] mb-8 scroll-reveal" data-animation="fadeInUp">My Skill</h2>
              <div className="space-y-8">
                {doctor.skills.map((skill, index) => (
                  <div key={index} className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--color-primary)] font-semibold text-[16px]">{skill.label}</span>
                      <span className="text-[var(--color-accent)] font-semibold text-[14px]">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-[8px] bg-[#E5E5E5] rounded-[4px] overflow-hidden">
                      <div 
                        className="h-full bg-[var(--color-accent)] rounded-[4px] transition-all duration-1000 ease-out"
                        style={{ width: animateProgress ? `${skill.percentage}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Opening Hours */}
          <div className="w-full lg:w-[35%] sticky top-[100px] scroll-reveal" data-animation="fadeLeftUp" data-delay="200">
            <div className="bg-[var(--color-accent)] p-[40px] md:p-[50px] shadow-lg">
              
              <div className="mb-8">
                <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mb-6">
                  <img src="/ourTeam-detail/SVG/svg-1.svg" alt="Clock Icon" className="w-[35px] h-[35px] object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(21%) saturate(1637%) hue-rotate(320deg) brightness(101%) contrast(94%)' }} />
                </div>
                <h3 className="type-h2 text-white text-[36px]">Opening Hours</h3>
              </div>
              
              <ul className="space-y-4">
                {doctor.schedule.map((slot, index) => (
                  <li key={index} className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-white/20 last:border-0 last:pb-0">
                    <span className="text-white type-body font-medium">{slot.day}</span>
                    <span className="text-white type-body mt-1 sm:mt-0">{slot.time}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
