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

export const serviceData = [
  {
    title: 'Web Design',
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
  },
  {
    title: 'Landing Page Design',
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
  },
  {
    title: 'App Design',
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
  },
  {
    title: 'Dashboard Design',
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
  },
  {
    title: 'Social Media Design',
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
  },
  {
    title: 'Development',
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
  },
];

export type Service = {
  title: string;
  tags: string[];
  icon: React.ElementType;
  gradient: string;
  hoverGradient: string;
};

export type ServiceCardProps = {
  service: Service;
  index: number;
  isVisible: boolean;
};

const Services = () => {
  return <ProvidedServices />;
};

export default Services;
