'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function ContactSection() {
  const sectionRef = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
            Fill The Form
          </span>
          <h2 className="type-h2 text-[var(--color-primary)] mt-4 scroll-reveal" data-animation="fadeInUp">
            <SplitText text="Contact Form." />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden scroll-reveal" data-animation="fadeInUp">
          
          {/* Left Side - Info Card */}
          <div className="bg-[var(--color-primary)] text-white p-12 relative overflow-hidden flex flex-col justify-center">
            
            <div className="relative z-10">
              <h3 className="type-h3 mb-8 text-[32px] leading-tight scroll-reveal" data-animation="fadeInUp">
                Book Your Appointment at Sri Krishna Orthopaedic Hospital
              </h3>
              
              <p className="text-white/70 mb-6 scroll-reveal" data-animation="fadeInUp">
                Call us or fill the form and our team will get back to you to confirm your appointment. Walk-ins also welcome.
              </p>
              
              <div className="w-full flex justify-center mt-8 scroll-reveal" data-animation="fadeLeftUp">
                <img src="/images/PNG/contact-us-img.png" alt="Contact Illustration" className="w-3/4 object-contain filter drop-shadow-xl" />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <input type="text" placeholder="Name" required className="w-full bg-[var(--color-background)] border border-transparent focus:border-[var(--color-accent)] rounded-md px-5 py-4 outline-none transition-colors" />
                </div>
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <input type="email" placeholder="Email" required className="w-full bg-[var(--color-background)] border border-transparent focus:border-[var(--color-accent)] rounded-md px-5 py-4 outline-none transition-colors" />
                </div>
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <input type="text" placeholder="Your Phone" required className="w-full bg-[var(--color-background)] border border-transparent focus:border-[var(--color-accent)] rounded-md px-5 py-4 outline-none transition-colors" />
                </div>
                <div className="scroll-reveal" data-animation="fadeInUp">
                  <input type="date" required className="w-full bg-[var(--color-background)] border border-transparent focus:border-[var(--color-accent)] rounded-md px-5 py-4 outline-none transition-colors text-gray-500" />
                </div>
              </div>
              
              <div className="scroll-reveal" data-animation="fadeInUp">
                <textarea rows="5" placeholder="Your Message" required className="w-full bg-[var(--color-background)] border border-transparent focus:border-[var(--color-accent)] rounded-md px-5 py-4 outline-none transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-md hover:bg-[var(--color-accent)] transition-all duration-300 font-semibold w-full sm:w-auto mt-4 scroll-reveal group" data-animation="fadeInUp">
                <span className="scroll-reveal group-hover:text-white" data-animation="fadeInUp">Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
