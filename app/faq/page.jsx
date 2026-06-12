import PageHeroBanner from '@/components/shared/PageHeroBanner';
import FAQAccordion from '@/components/faq/FAQAccordion';
import AppointmentBanner from '@/components/home/AppointmentBanner';

export const metadata = {
  title: "FAQ's - MediPro",
  description: "Frequently Asked Questions about our medical services.",
};

export default function FAQPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: "FAQ's" }
  ];

  return (
    <main>
      <PageHeroBanner title="FAQ's" breadcrumbItems={breadcrumbItems} />
      <FAQAccordion />
      <AppointmentBanner />
    </main>
  );
}
