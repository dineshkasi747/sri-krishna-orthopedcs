import ServicesPageHero from '@/components/services/ServicesPageHero';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import OurCultureSection from '@/components/services/OurCultureSection';

export const metadata = {
  title: 'Services - Sri Krishna Orthopaedic Hospital',
  description: 'Providing Expert Bone and Joint Care for Our Community in Visakhapatnam.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <ServicesGridSection />
      <OurCultureSection />
    </>
  );
}
