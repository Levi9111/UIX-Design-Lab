'use client';
import { PlanetText } from '@/components/elements/PlanetText';
import Route from '@/components/elements/Route';
import { easeInOut, motion } from 'framer-motion';
import { LucideIcon, Monitor, Rocket, ShieldCheck, Home } from 'lucide-react';
import DesktopPricing from './DesktopPricing';
import { useMedia } from '../hooks/useMedia';
import TabletPricing from './TabletPricing';
import MobilePricing from './MobilePricing';

export const serviceData = [
  {
    title: 'Stellar Starter',
    price: '$399',
    icon: Monitor,
    features: [
      'Up to 5 Custom Pages',
      'Mobile-First Responsive Design',
      'Basic SEO Setup',
      'Google Analytics Integration',
      'Simple Contact Form',
      '1 Round of Revisions',
      'Email Support (30 Days)',
    ],
  },
  {
    title: 'Cosmic Pro',
    price: '$799',
    icon: Rocket,
    features: [
      'Up to 10 Pages or Landing Pages',
      'CMS Integration (WordPress or Strapi)',
      'Blog or News Section',
      'Performance & Accessibility Optimization',
      'On-Page SEO Setup',
      'Custom Dashboard (Basic)',
      '3 Rounds of Revisions',
      'Priority Email & Chat Support (60 Days)',
      'Training Session for Content Editors',
    ],
  },
  {
    title: 'Galactic Enterprise',
    price: '$1199',
    icon: ShieldCheck,
    features: [
      'Up to 15 Pages with Custom Features',
      'Full CMS Integration & API Connections',
      'Custom UI/UX Design',
      'E-commerce or Booking System (Basic)',
      'Advanced SEO & Speed Optimization',
      'Cloud Hosting Setup & Deployment',
      'Security Best Practices',
      '6 Months Support & Maintenance',
      'Unlimited Revisions within Scope',
      'Dedicated Account Manager (Optional)',
    ],
  },
];

const PricingSection = () => {
  const device = useMedia();

  return (
    <section className='py-24 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30'
          style={{
            background:
              'radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <PlanetText
          title='Power Up Your Plans'
          subtitle='Choose your journey through the digital cosmos. Each plan is crafted to launch your project into orbit.'
        />

        {device === 'desktop' && <DesktopPricing />}
        {device === 'tablet' && <TabletPricing />}
        {device === 'mobile' && <MobilePricing />}
      </div>
    </section>
  );
};

export default PricingSection;
