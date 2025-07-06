'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, LinkedIn } from 'developer-icons';
import { BsBehance } from 'react-icons/bs';
import { SiX } from 'react-icons/si';
import { PlanetText } from '@/components/elements/PlanetText';
import { useMedia } from '@/components/hooks/useMedia';
import DesktopGetInTouch from './DesktopGetInTouch';
import TabletGetInTouch from './TabletGetInTouch';
import MobileGetInTouch from './MobileGetInTouch';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const socialCards = [
  {
    platform: 'LinkedIn',
    handle: '@uixdl',
    icon: LinkedIn,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-500/5',
    borderColor: 'border-blue-500/20',
    hoverBg: 'hover:bg-blue-500/10',
    href: '#',
    description: 'Professional Network',
  },
  {
    platform: 'Behance',
    handle: '@uixdl',
    icon: BsBehance,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-500/5',
    borderColor: 'border-purple-500/20',
    hoverBg: 'hover:bg-purple-500/10',
    href: '#',
    description: 'Creative Portfolio',
  },
  {
    platform: 'X',
    handle: '@uixdl',
    icon: SiX,
    color: 'from-zinc-700 to-black',
    bgColor: 'bg-zinc-900/15',
    borderColor: 'border-zinc-800/20',
    hoverBg: 'hover:bg-zinc-800/30',
    href: 'https://x.com/uixdl',
    description: 'Latest Updates',
  },
  {
    platform: 'Facebook',
    handle: '@uixdl',
    icon: Facebook,
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-500/5',
    borderColor: 'border-indigo-500/20',
    hoverBg: 'hover:bg-indigo-500/10',
    href: '#',
    description: 'Community Hub',
  },
];

export const contactInfo = [
  {
    label: 'Email',
    value: 'support@uixdl.com',
    icon: Mail,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    description: 'Send us a message anytime',
  },
  {
    label: 'Phone',
    value: '+8801759745923',
    icon: Phone,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    description: 'Available Mon-Fri, 9AM-6PM',
  },
  {
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    icon: MapPin,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    description: 'Visit our office',
  },
];

const GetInTouch = () => {
  const device = useMedia();

  return (
    <section className='relatice uix-center min-h-screen bg-[#04070d]/40'>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Subtle grid pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
      <div className='pt-24'>
        <PlanetText
          title='Get in Touch'
          subtitle="We'd love to hear from you. Fill out the form below and we'll get back to you shortly."
        />

        {device === 'desktop' && <DesktopGetInTouch />}
        {device === 'tablet' && <TabletGetInTouch />}
        {device === 'mobile' && <MobileGetInTouch />}
      </div>
    </section>
  );
};

export default GetInTouch;
