import { CAPABILITIES_DATA } from '../../../lib/capabilitiesData.js';
import ServiceDetailClient from './ServiceDetailClient.jsx';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return CAPABILITIES_DATA.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }) {
  const service = CAPABILITIES_DATA.find((s) => s.id === params.id);
  if (!service) return { title: 'Service Not Found | Ryetek Engineering' };

  return {
    title: `${service.title} | Heavy Industrial Plant Engineering Specs`,
    description: `Detailed technical specifications, Australian Standards compliance, and engineering options for Ryetek's ${service.title}.`,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = CAPABILITIES_DATA.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
