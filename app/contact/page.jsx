import { Suspense } from 'react';
import ContactPageClient from './ContactPageClient.jsx';

export const metadata = {
  title: 'Contact Engineering Team | Plant Quotes & Technical Support',
  description: 'Get in touch with Ryetek engineers for aggregate batching plant quotes, WearGuard™ drum audits, or spare parts support in Australia.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="font-mono text-xs text-ryetek-navy uppercase tracking-widest animate-pulse">
          Loading Engineering Contact Portal...
        </div>
      </div>
    }>
      <ContactPageClient />
    </Suspense>
  );
}
