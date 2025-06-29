import React from 'react';
import ProvidedServices from './ProvidedServices';
import {
  Monitor,
  Rocket,
  Smartphone,
  BarChart3,
  Share2,
  Code,
} from 'lucide-react';
import { PlanetText } from '../elements/PlanetText';

export const serviceData = [
  {
    title: 'Web Design',
    shortTitle: 'Web',
    tags: ['Responsive', 'User-Centered', 'Interactive'],
    icon: Monitor,
    gradient: 'from-blue-500 to-purple-600',
    hoverGradient: 'from-blue-600 to-purple-700',
    description:
      'Create stunning, responsive websites that engage and convert visitors.',
    features: [
      'Custom Design',
      'Mobile Responsive',
      'SEO Optimized',
      'Fast Loading',
    ],
    cta: 'Get your website designed professionally!',
    timeToDeliver: '5-7 business days',
    toolsUsed: ['Figma', 'Adobe XD', 'Framer', 'HTML/CSS'],
    portfolioLink: 'https://yourportfolio.com/web-design',
    pricingTier: 'Standard',
    audience: 'Businesses, agencies, personal brands',
  },
  {
    title: 'Landing Page Design',
    shortTitle: 'Landing',
    tags: ['Engaging', 'High Conversion', 'Fast'],
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-600',
    hoverGradient: 'from-emerald-600 to-teal-700',
    description:
      'High-converting landing pages that drive results and maximize ROI.',
    features: [
      'A/B Testing',
      'Analytics Integration',
      'Lead Generation',
      'Conversion Optimization',
    ],
    cta: 'Launch your high-conversion landing page!',
    timeToDeliver: '3-4 business days',
    toolsUsed: ['Webflow', 'Figma', 'Unbounce'],
    portfolioLink: 'https://yourportfolio.com/landing-pages',
    pricingTier: 'Basic',
    audience: 'Marketing teams, startups, product launches',
  },
  {
    title: 'App Design',
    shortTitle: 'App',
    tags: ['iOS & Android', 'UI/UX', 'Prototyping'],
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-600',
    hoverGradient: 'from-orange-600 to-red-700',
    description:
      'Intuitive mobile apps that users love and keep coming back to.',
    features: [
      'Cross-Platform',
      'User Research',
      'Wireframing',
      'Prototype Testing',
    ],
    cta: 'Design your mobile app from scratch!',
    timeToDeliver: '7-10 business days',
    toolsUsed: ['Figma', 'Sketch', 'InVision', 'ProtoPie'],
    portfolioLink: 'https://yourportfolio.com/app-design',
    pricingTier: 'Premium',
    audience: 'Startups, tech companies, SaaS products',
  },
  {
    title: 'Dashboard Design',
    shortTitle: 'Dashboard',
    tags: ['Data Visualization', 'Components', 'Usability'],
    icon: BarChart3,
    gradient: 'from-cyan-500 to-blue-600',
    hoverGradient: 'from-cyan-600 to-blue-700',
    description:
      'Data-driven dashboards that make complex information accessible.',
    features: [
      'Real-time Data',
      'Interactive Charts',
      'Custom Widgets',
      'Export Features',
    ],
    cta: 'Let’s build a powerful dashboard UI!',
    timeToDeliver: '6-8 business days',
    toolsUsed: ['Figma', 'Chart.js', 'D3.js', 'Tableau'],
    portfolioLink: 'https://yourportfolio.com/dashboards',
    pricingTier: 'Standard',
    audience: 'Enterprise tools, analytics platforms, SaaS apps',
  },
  {
    title: 'Social Media Design',
    shortTitle: 'Social',
    tags: ['Visuals', 'Branding', 'Platform Optimized'],
    icon: Share2,
    gradient: 'from-pink-500 to-rose-600',
    hoverGradient: 'from-pink-600 to-rose-700',
    description:
      'Eye-catching social media designs that boost engagement and brand awareness.',
    features: [
      'Multi-Platform',
      'Brand Guidelines',
      'Content Calendar',
      'Engagement Tracking',
    ],
    cta: 'Boost your social media with stunning visuals!',
    timeToDeliver: '2-3 business days',
    toolsUsed: ['Canva', 'Photoshop', 'Illustrator', 'Buffer'],
    portfolioLink: 'https://yourportfolio.com/social-media',
    pricingTier: 'Basic',
    audience: 'Brands, influencers, content creators',
  },
  {
    title: 'Development',
    shortTitle: 'Dev',
    tags: ['Next.js', 'MERN Stack', 'WordPress'],
    icon: Code,
    gradient: 'from-violet-500 to-indigo-600',
    hoverGradient: 'from-violet-600 to-indigo-700',
    description:
      'Full-stack development solutions built with modern technologies.',
    features: [
      'Custom Development',
      'API Integration',
      'Database Design',
      'Performance Optimization',
    ],
    cta: 'Let’s build your product end-to-end!',
    timeToDeliver: '10-15 business days',
    toolsUsed: ['Next.js', 'Node.js', 'MongoDB', 'Strapi', 'WordPress'],
    portfolioLink: 'https://yourportfolio.com/development',
    pricingTier: 'Premium',
    audience: 'Founders, startups, agencies, enterprises',
  },
];

export type Service = {
  title: string;
  shortTitle: string;
  tags: string[];
  gradient: string;
  hoverGradient: string;
  description: string;
  features: string[];
  cta: string;
  timeToDeliver: string;
  toolsUsed: string[];
  portfolioLink: string;
  pricingTier: string;
  audience: string;
  icon: React.ElementType;
};

export type ServiceCardProps = {
  service: Service;
  index: number;
  isVisible: boolean;
  onClick: () => void;
};

const Services = () => {
  return (
    <section id='services' className='relative uix-center'>
      <PlanetText
        btnText='Our Services'
        title='What We Provide'
        subtitle='Crafting digital experiences that captivate, convert, and inspire. From concept to deployment, we bring your vision to life.'
      />
      <ProvidedServices />
    </section>
  );
};

export default Services;
