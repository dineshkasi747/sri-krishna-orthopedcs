import { teamData } from '@/data/team';
import PageHeroBanner from '@/components/shared/PageHeroBanner';
import DoctorProfileSection from '@/components/our-team/DoctorProfileSection';
import DoctorDetailTabsSection from '@/components/our-team/DoctorDetailTabsSection';
import DoctorContactSection from '@/components/our-team/DoctorContactSection';

// Pre-render the 4 specific detailed doctor pages at build time
export async function generateStaticParams() {
  return teamData
    .filter(doctor => doctor.has_detail)
    .map(doctor => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = teamData.find(d => d.slug === slug);
  if (!doctor || !doctor.has_detail) return { title: 'Not Found' };
  
  return {
    title: `${doctor.name} - MediPro`,
    description: doctor.tagline
  };
}

export default async function DoctorDetailPage({ params }) {
  const { slug } = await params;
  const doctor = teamData.find(d => d.slug === slug);

  if (!doctor || !doctor.has_detail) {
    return (
      <div className="py-40 text-center text-2xl font-bold text-[var(--color-primary)] min-h-screen flex items-center justify-center">
        Doctor Profile Not Found
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Our Team', link: '/our-team' },
    { label: doctor.name }
  ];

  return (
    <main>
      <PageHeroBanner title={doctor.name} breadcrumbItems={breadcrumbItems} />
      <DoctorProfileSection doctor={doctor} />
      <DoctorDetailTabsSection doctor={doctor} />
      <DoctorContactSection />
    </main>
  );
}
