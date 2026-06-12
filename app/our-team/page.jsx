import PageHeroBanner from '@/components/shared/PageHeroBanner';
import TeamGridSection from '@/components/our-team/TeamGridSection';

export const metadata = {
  title: 'Our Team - MediPro',
  description: 'Meet our dedicated team of medical professionals.',
};

export default function OurTeamPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Our Team' }
  ];

  return (
    <main>
      <PageHeroBanner title="Our Team" breadcrumbItems={breadcrumbItems} />
      <TeamGridSection />
    </main>
  );
}
