'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaChildReaching, FaUserDoctor, FaBone } from 'react-icons/fa6';
import { FaCheckCircle, FaArrowAltCircleRight, FaRunning } from 'react-icons/fa';

export default function ServicesGridSection() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      id: "joint-replacement",
      Icon: FaBone,
      title: "Joint Replacement",
      description: "Advanced total and partial hip and knee replacements using the latest implant technology to restore full mobility and eliminate chronic joint pain.",
      checklist: ["Total knee replacement", "Total hip replacement", "Revision joint replacement"],
      link: "/services/joint-replacement",
      delay: 100
    },
    {
      id: "spine-surgery",
      Icon: FaBone,
      title: "Spine Surgery",
      description: "Surgical and non-surgical treatments for disc herniation, spinal stenosis, spinal fusion, and back pain with minimally invasive options.",
      checklist: ["Disc herniation treatment", "Spinal fusion procedures", "Microdiscectomy"],
      link: "/services/spine-surgery",
      delay: 200
    },
    {
      id: "sports-injuries",
      Icon: FaRunning,
      title: "Sports Injuries",
      description: "Specialised assessment, arthroscopy, and reconstruction for ligament tears, meniscus damage, and all athletic orthopaedic injuries.",
      checklist: ["ACL & PCL reconstruction", "Meniscus repair", "Rotator cuff repair"],
      link: "/services/sports-injuries",
      delay: 300
    },
    {
      id: "fracture-care",
      Icon: FaBone,
      title: "Fracture Care",
      description: "Prompt, 24/7 emergency fracture management and surgical/conservative fixation for simple, complex, and open bone fractures.",
      checklist: ["Emergency fracture care", "Plate & screw fixation", "Intramedullary nailing"],
      link: "/services/fracture-care",
      delay: 400
    },
    {
      id: "arthroscopy",
      Icon: FaUserDoctor,
      title: "Arthroscopy",
      description: "Minimally invasive keyhole joint surgeries (knee, shoulder, ankle) for rapid recovery, minimal pain, and significantly less scarring.",
      checklist: ["Knee & shoulder arthroscopy", "Ligament reconstruction", "Cartilage repair"],
      link: "/services/arthroscopy",
      delay: 500
    },
    {
      id: "paediatric-orthopaedics",
      Icon: FaChildReaching,
      title: "Paediatric Orthopaedics",
      description: "Specialised developmental and fracture care for children's growing bones, including clubfoot correction, scoliosis, and growth plate injuries.",
      checklist: ["Clubfoot correction", "Scoliosis management", "Growth plate fracture care"],
      link: "/services/paediatric-orthopaedics",
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-surface)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            <span className="scroll-reveal" data-animation="fadeInUp">Our Services</span>
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <SplitText text="Providing Medical Care For The Sickest In Our Community." />
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-primary)] p-10 flex flex-col h-full scroll-reveal card-hover-lift group"
              data-animation="fadeInUp"
              data-delay={service.delay}
            >
              
              <div className="mb-6 scroll-reveal" data-animation="fadeInUp">
                <service.Icon size={56} className="text-white scroll-reveal stroke-[0.5]" data-animation="fadeInUp" />
              </div>

              <h3 className="type-h3 text-2xl text-white mb-6 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.title}</span>
              </h3>
              
              <p className="type-body text-white/70 mb-8 scroll-reveal" data-animation="fadeInUp">
                <span className="scroll-reveal" data-animation="fadeInUp">{service.description}</span>
              </p>

              <ul className="space-y-4 mb-10 flex-grow scroll-reveal" data-animation="fadeInUp">
                {service.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center text-white/90 font-medium scroll-reveal" data-animation="fadeInUp">
                    <FaCheckCircle className="text-[var(--color-accent)] mr-3 flex-shrink-0 scroll-reveal" data-animation="fadeInUp" />
                    <span className="scroll-reveal" data-animation="fadeInUp">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto scroll-reveal" data-animation="fadeInUp">
                <Link href={service.link} className="inline-flex items-center text-[var(--color-accent)] font-semibold border border-[var(--color-accent)] rounded-full px-6 py-2.5 hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 scroll-reveal" data-animation="fadeInUp">
                  <span className="scroll-reveal" data-animation="fadeInUp">Read More</span>
                  <FaArrowAltCircleRight className="ml-2 scroll-reveal" data-animation="fadeInUp" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
