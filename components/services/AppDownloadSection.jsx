'use client';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import SplitText from '@/components/shared/SplitText';

export default function AppDownloadSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden bg-[var(--color-primary)]">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="type-label text-[var(--color-accent)] scroll-reveal" data-animation="fadeInUp">
              <span className="scroll-reveal" data-animation="fadeInUp">App Download</span>
            </span>
            
            <h2 className="type-h2 text-white scroll-reveal" data-animation="fadeInUp" data-delay="200">
              <SplitText text="Download MediPro App & Get 100$ Healthcare." />
            </h2>
            
            <p className="type-body text-white/70 scroll-reveal" data-animation="fadeInUp" data-delay="400">
              <span className="scroll-reveal" data-animation="fadeInUp">
                Welcome to the convenient world of our Medical Website App, where taking control of your health has never been easier. Download our user-friendly app now to access a wide range of medical services and resources right at your fingertips.
              </span>
            </p>
            
            <div className="flex flex-row flex-wrap gap-4 pt-6 scroll-reveal" data-animation="fadeInUp" data-delay="600">
              <a href="#" className="inline-block transition-transform duration-300 hover:scale-105 scroll-reveal" data-animation="fadeInUp">
                <img 
                  src="/services/PNG/google-play-img.png" 
                  alt="Get it on Google Play" 
                  className="w-[231px] h-[68px] object-contain scroll-reveal" 
                  data-animation="fadeInUp" 
                />
              </a>
              <a href="#" className="inline-block transition-transform duration-300 hover:scale-105 scroll-reveal" data-animation="fadeInUp" data-delay="100">
                <img 
                  src="/services/PNG/app-store-img.png" 
                  alt="Download on the App Store" 
                  className="w-[231px] h-[68px] object-contain scroll-reveal" 
                  data-animation="fadeInUp" 
                />
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end relative scroll-reveal" data-animation="fadeInUp" data-delay="200">
            <div className="relative">
              <img 
                src="/services/PNG/app-download-1.png" 
                alt="MediPro App Mockup" 
                className="w-full max-w-[459px] h-auto object-contain scroll-reveal drop-shadow-2xl" 
                data-animation="slideInLeft" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
