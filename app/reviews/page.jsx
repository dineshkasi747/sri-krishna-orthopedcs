import PageHeroBanner from '@/components/shared/PageHeroBanner';
import ReviewsContent from '@/components/reviews/ReviewsContent';
import AppointmentBanner from '@/components/home/AppointmentBanner';

export const metadata = {
  title: 'Patient Reviews & Testimonials - Sri Krishna Orthopaedic Hospital',
  description: 'Read reviews and treatment feedback from our orthopaedic patients. See ratings and submit your own feedback for Sri Krishna Orthopaedic Hospital in Gajuwaka, Visakhapatnam.',
};

export default function ReviewsPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Reviews' }
  ];

  return (
    <main suppressHydrationWarning>
      <PageHeroBanner 
        title="Patient Reviews" 
        breadcrumbItems={breadcrumbItems} 
        decorativeImage="/our_team/PNG/half-circle-img.png"
      />
      <ReviewsContent />
      <AppointmentBanner />
    </main>
  );
}
