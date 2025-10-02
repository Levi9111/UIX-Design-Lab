'use client';

import { Code, Crown, Palette, TrendingUp, User, Users } from 'lucide-react';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopAboutUs from './DesktopAboutUs';
import MobileAboutUs from './MobileAboutUs';

export const aboutUsData = [
  {
    name: 'Tahsin Ahmad',
    designation: 'Founder & Designer',
    role: 'founder',
    description: 'Visionary leader driving creative excellence',
  },
  {
    name: 'A. Hossain',
    designation: 'Co-Founder & Designer',
    role: 'co-founder',
    description: 'Strategic designer with innovative mindset',
  },
  {
    name: 'Asher Elahi',
    designation: 'Designer',
    role: 'designer',
    description: 'Crafting beautiful user experiences',
  },
  {
    name: 'Tanvir Ahmed',
    designation: 'Wordpress Developer & Marketing',
    role: 'developer',
    description: 'Full-stack expertise meets marketing strategy',
  },
  {
    name: 'Shanjid Ahmad',
    designation: 'Full Stack Web Developer',
    role: 'developer',
    description: 'Building robust digital solutions',
  },
];

export const getIconForRole = (designation: string) => {
  if (designation.toLowerCase().includes('founder')) return Crown;
  if (designation.toLowerCase().includes('co-founder')) return Users;
  if (designation.toLowerCase().includes('designer')) return Palette;
  if (designation.toLowerCase().includes('developer')) return Code;
  if (designation.toLowerCase().includes('marketing')) return TrendingUp;
  return User;
};

const AboutUs = () => {
  const device = useMedia();
  return (
    <section className='py-24'>
      <PlanetText
        title='Meet Our Team'
        subtitle='Behind every great project stands an exceptional team. Meet the creative minds and technical experts who bring innovation to life through passion, expertise, and collaboration.'
      />
      {device === 'desktop' ? <DesktopAboutUs /> : <MobileAboutUs />}
    </section>
  );
};

export default AboutUs;
