'use client';
import { PlanetText } from '@/components/elements/PlanetText';
import Route from '@/components/elements/Route';
import { easeInOut, motion } from 'framer-motion';
import { Monitor, Rocket, ShieldCheck } from 'lucide-react';
import DesktopPricing from './DesktopPricing';
import { useMedia } from '@/hooks/useMedia';
import TabletPricing from './TabletPricing';
import MobilePricing from './MobilePricing';

export const pricingTiers = [
  {
    title: 'Stellar Starter',
    price: '$249',
    icon: Monitor,
    features: [
      'Single Landing Page or Home Page Design',
      'Wireframe Layout',
      'Mobile-First Responsive Design',
      'Basic SEO Setup',
      'Simple Contact Form',
      'Free Revisions(1 week)',
      'User Friendly Design',
      'Full UX Support',
    ],
  },
  {
    title: 'Cosmic Pro',
    price: '$649',
    icon: Rocket,
    features: [
      'Up to 5 Pages with Landing Pages',
      'Wireframe Layout',
      'Fully Functional Website',
      'Performance & Accessibility Optimization',
      'On-Page SEO Setup (Basic)',
      'Custom Dashboard (Basic)',
      'Free Revisions(2 weeks)',
      'Cloud Hosting Setup & Deployment',
      'Concept Changing Opportunity',
      'Full UX Support',
    ],
  },
  {
    title: 'Galactic Enterprise',
    price: '$849',
    icon: ShieldCheck,
    features: [
      'Up to 12 Pages with Custom Features',
      'Full API Connections',
      'Custom UI/UX Design',
      'E-commerce or Booking System (Basic)',
      'Advanced SEO & Speed Optimization(Wordpress)',
      'Cloud Hosting Setup & Deployment',
      'Security Best Practices',
      '1 Months Support & Maintenance',
      'Unlimited Revisions within Scope(3 weeks)',
      'Dashboard Design Support',
      'Full UX with Server Support',
    ],
  },
];

const PricingSection = () => {
  const device = useMedia();

  if (!device) return null;

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
