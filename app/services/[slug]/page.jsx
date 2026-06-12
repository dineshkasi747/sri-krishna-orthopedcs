import { servicesData } from '@/data/services';
import ServiceDetailClient from '@/components/service-detail/ServiceDetailClient';

// Pre-render all 6 service pages at build time
export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} - MediPro`,
    description: service.description[0].substring(0, 160)
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <div className="py-32 text-center text-2xl font-bold">Service Not Found</div>;
  }

  return <ServiceDetailClient service={service} />;
}
