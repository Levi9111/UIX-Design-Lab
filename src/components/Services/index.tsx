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

    description:
      'Create stunning, responsive websites that engage and convert visitors.',
    features: [
      'Custom Design',
      'Mobile Responsive',
      // 'SEO Optimized',
      'Hight Fidelity Wireframe',
      'Modern UI/UX',
    ],
    cta: 'Get your website designed professionally!',
    timeToDeliver: '3-4 business days',
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
    description:
      'High-converting landing pages that drive results and maximize ROI.',
    features: [
      'Landing Page Designing',
      'Per Section Image Fixing',
      'Custom Design Support',
      'Modern Hero Desing Concept',
    ],
    cta: 'Launch your high-conversion landing page!',
    timeToDeliver: '5-7 business days',
    toolsUsed: ['Webflow', 'Figma', 'Unbounce'],
    portfolioLink: 'https://yourportfolio.com/landing-pages',
    pricingTier: 'Basic',
    audience: 'Marketing teams, startups, product launches',
  },
  {
    title: 'Mobile App Design',
    shortTitle: 'App',
    tags: ['iOS & Android', 'UI/UX', 'Prototyping'],
    icon: Smartphone,
    gradient: 'from-rose-500 to-fuchsia-500',
    hoverGradient: 'from-rose-600 to-fuchsia-600',
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
    description:
      'Eye-catching social media designs that boost engagement and brand awareness.',
    features: [
      'Multi-Platform',
      'Brand Guidelines',
      'Content Calendar',
      // 'Engagement Tracking',
      'Flow Chart Design',
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
    tags: ['React', 'Next.js', 'MERN Stack', 'WordPress', 'Server Development'],
    icon: Code,
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
    toolsUsed: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'React',
      'Express',
      'WordPress',
    ],
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
