'use client';

import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQSection() {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: "Are telemedicine consultations available?", answer: "Yes, we offer telemedicine consultations for certain medical conditions. You can schedule a virtual appointment with one of our healthcare providers." },
    { question: "Do you accept health insurance?", answer: "Yes, we accept most major health insurance plans. Please contact our office to verify if we participate with your specific insurance provider." },
    { question: "How much does a consultation cost?", answer: "Consultation fees vary depending on the doctor and the type of consultation. We offer competitive pricing and can provide an estimate when you book." }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal" data-animation="fadeInUp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal" data-animation="fadeInUp">
          
          {/* Left Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl scroll-reveal" data-animation="paperReveal">
              <img src="/images/JPG/home-faq-img.jpg" alt="FAQ" className="w-full h-auto scroll-reveal" data-animation="paperReveal" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl flex gap-8 scroll-reveal" data-animation="fadeInUp">
              <div className="text-center scroll-reveal" data-animation="fadeInUp">
                <div className="text-4xl font-bold text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">100+</div>
                <div className="text-sm font-semibold text-[var(--color-primary)]/70 mt-1 uppercase tracking-wider scroll-reveal" data-animation="fadeInUp">Doctors</div>
              </div>
              <div className="w-px bg-gray-200 scroll-reveal" data-animation="fadeInUp"></div>
              <div className="text-center scroll-reveal" data-animation="fadeInUp">
                <div className="text-4xl font-bold text-[var(--color-primary)] scroll-reveal" data-animation="fadeInUp">16+</div>
                <div className="text-sm font-semibold text-[var(--color-primary)]/70 mt-1 uppercase tracking-wider scroll-reveal" data-animation="fadeInUp">World Office</div>
              </div>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div className="lg:pl-8 mt-12 lg:mt-0 scroll-reveal" data-animation="fadeInUp">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
              FAQs
            </span>
            <h2 className="type-h2 text-[var(--color-primary)] mt-4 mb-10 scroll-reveal" data-animation="fadeInUp">
              <SplitText text="Consultations with Qualified doctors." />
            </h2>
            
            <div className="space-y-4 scroll-reveal" data-animation="fadeInUp">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 scroll-reveal"
                    data-animation="fadeInUp"
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg transition-colors scroll-reveal ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)] hover:bg-gray-50'}`}
                      data-animation="fadeInUp"
                    >
                      <span className="scroll-reveal" data-animation="fadeInUp">{faq.question}</span>
                      <span className={`flex items-center justify-center w-8 h-8 rounded-full scroll-reveal ${isOpen ? 'bg-white/20' : 'bg-[var(--color-surface)] text-[var(--color-primary)]'}`} data-animation="fadeInUp">
                        {isOpen ? <FaMinus size={14} className="scroll-reveal" data-animation="fadeInUp" /> : <FaPlus size={14} className="scroll-reveal" data-animation="fadeInUp" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out scroll-reveal ${isOpen ? 'max-h-48 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
                      data-animation="fadeInUp"
                    >
                      <div className="p-6 bg-white text-[var(--color-primary)]/70 type-body border-t border-gray-100 scroll-reveal" data-animation="fadeInUp">
                        <span className="scroll-reveal" data-animation="fadeInUp">{faq.answer}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
