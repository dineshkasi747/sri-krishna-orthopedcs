import AboutPageHero from '@/components/about/AboutPageHero';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import StatsBar from '@/components/about/StatsBar';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import FacilitiesSection from '@/components/about/FacilitiesSection';
import TimelineSection from '@/components/about/TimelineSection';
import TestimonialsAboutSection from '@/components/about/TestimonialsAboutSection';

export const metadata = {
  title: 'About Us - Sri Krishna Orthopaedic Hospital',
  description: 'Learn more about Sri Krishna Orthopaedic Hospital, our facilities, core value pillars, and lead surgeon Dr. M. Murali Mohan with 25+ years of clinical excellence.',
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <AboutIntroSection />
      <StatsBar />
      <WhoWeAreSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <TimelineSection />
      <TestimonialsAboutSection />
    </>
  );
}
