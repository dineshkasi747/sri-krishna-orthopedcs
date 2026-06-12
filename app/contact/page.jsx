import PageHeroBanner from '@/components/shared/PageHeroBanner';
import ContactSection from '@/components/contact/ContactSection';
import AppointmentBanner from '@/components/home/AppointmentBanner';

export const metadata = {
  title: "Contact Us - MediPro",
  description: "Get in touch with our medical professionals.",
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us' }
  ];

  return (
    <main>
      <PageHeroBanner title="Contact Us" breadcrumbItems={breadcrumbItems} />
      <ContactSection />
      {/* Optional: Add a map section here if needed */}
      <AppointmentBanner />
    </main>
  );
}
