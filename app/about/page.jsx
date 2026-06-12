import AboutPageHero from '@/components/about/AboutPageHero';
import AboutIntroSection from '@/components/about/AboutIntroSection';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import TestimonialsAboutSection from '@/components/about/TestimonialsAboutSection';
import BlogAboutSection from '@/components/about/BlogAboutSection';

export const metadata = {
  title: 'About Us - Sri Krishna Orthopaedic Hospital',
  description: 'Learn more about Sri Krishna Orthopaedic Hospital and Dr. M. Murali Mohan.',
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero />
      <AboutIntroSection />
      <WhoWeAreSection />
      <TestimonialsAboutSection />
      <BlogAboutSection />
    </>
  );
}
