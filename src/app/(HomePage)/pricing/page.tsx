import PricingSection from '@/components/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Plans',
  description:
    'Transparent pricing for our UI/UX design and development services. Choose a plan that fits your business needs, from startups to enterprises.',
  keywords: ['UI/UX Design Pricing', 'Web Development Cost', 'Design Agency Plans', 'Affordable Design Services'],
};

const PricingHomePage = () => {
  return <PricingSection />;
};

export default PricingHomePage;
