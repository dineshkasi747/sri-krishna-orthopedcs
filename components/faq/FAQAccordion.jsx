'use client';

import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQAccordion() {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, and any medical records or medications you are currently taking."
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "While we recommend making an appointment to ensure minimal wait times, we do accept walk-in patients for urgent medical needs."
    },
    {
      question: "How can I request a prescription refill?",
      answer: "You can request a prescription refill by calling our office during regular business hours or through our online patient portal."
    },
    {
      question: "What types of insurance do you accept?",
      answer: "We accept most major insurance plans. Please contact our billing department to verify coverage for your specific provider."
    },
    {
      question: "Can I access my medical records online?",
      answer: "Yes, you can easily access your medical records, test results, and appointment history securely through our online patient portal."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section ref={sectionRef} className="py-[80px] bg-white">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 scroll-reveal" data-animation="fadeInUp">
          <span className="type-h4_label text-[var(--color-accent)] uppercase tracking-[3.6px] mb-2 block">
            Common Questions
          </span>
          <h2 className="type-h2 text-[var(--color-primary)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-[#E5E5E5] rounded-[12px] overflow-hidden transition-all duration-300 scroll-reveal`}
              data-animation="fadeInUp"
              data-delay={index * 100}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-[24px] flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-[var(--color-surface)] text-[var(--color-primary)]' : 'bg-white hover:bg-[#F9F9F9] text-[var(--color-primary)]'
                }`}
              >
                <span className="type-h3 text-[20px] font-semibold">{faq.question}</span>
                <span className={`flex-shrink-0 ml-4 w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-[var(--color-accent)] text-white' : 'bg-[#F2F2F2] text-[#555555]'
                }`}>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-[24px] pt-0 bg-[var(--color-surface)]">
                  <p className="type-body text-[#555555]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
