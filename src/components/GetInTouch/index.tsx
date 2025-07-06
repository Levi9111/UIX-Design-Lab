'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Instagram, LinkedIn } from 'developer-icons';
import { BsBehance, BsDribbble } from 'react-icons/bs';
import { SiX } from 'react-icons/si';
import { PlanetText } from '@/components/elements/PlanetText';
import { useMedia } from '@/components/hooks/useMedia';
import DesktopGetInTouch from './DesktopGetInTouch';
import TabletGetInTouch from './TabletGetInTouch';
import MobileGetInTouch from './MobileGetInTouch';
import Route from '../elements/Route';
import Button from '../elements/Button';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const socialCards = [
  {
    platform: 'Behance',
    handle: '@uixdl',
    icon: BsBehance,
    color: 'from-[#1769ff] to-[#0039cb]',
    bgColor: 'bg-[#1769ff]/10',
    borderColor: 'border-[#1769ff]/20',
    hoverBg: 'hover:bg-[#1769ff]/20',
    href: '#',
    description: 'Creative Portfolio',
  },
  {
    platform: 'Dribbble',
    handle: '@uixdl',
    icon: BsDribbble,
    color: 'from-[#ea4c89] to-[#c51d6b]',
    bgColor: 'bg-[#ea4c89]/10',
    borderColor: 'border-[#ea4c89]/20',
    hoverBg: 'hover:bg-[#ea4c89]/20',
    href: '#',
    description: 'Creative Portfolio',
  },
  {
    platform: 'LinkedIn',
    handle: '@uixdl',
    icon: LinkedIn,
    color: 'from-[#0A66C2] to-[#004182]',
    bgColor: 'bg-[#0A66C2]/10',
    borderColor: 'border-[#0A66C2]/20',
    hoverBg: 'hover:bg-[#0A66C2]/20',
    href: '#',
    description: 'Professional Network',
  },
  {
    platform: 'Instagram',
    handle: '@uixdl',
    icon: Instagram,
    color: 'from-[#f58529] via-[#dd2a7b] to-[#8134af]',
    bgColor: 'bg-[#dd2a7b]/10',
    borderColor: 'border-[#dd2a7b]/20',
    hoverBg: 'hover:bg-[#dd2a7b]/20',
    href: 'https://x.com/uixdl',
    description: 'Latest Updates',
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

      <Route link='/' className='w-full flex justify-center'>
        <Button>Back to Home</Button>
      </Route>
    </section>
  );
};

export default GetInTouch;
