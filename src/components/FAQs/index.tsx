'use client';
import DesktopFAQs from './DesktopFAQs';
import MobileFAQs from './MobileFAQs';
import { PlanetText } from '../elements/PlanetText';
import { HelpCircle, MessageCircle, Zap } from 'lucide-react';
import { useMedia } from '../hooks/useMedia';
import MobilePlanet from '../designs/MobilePlanet';

export const accordionData = [
  {
    question: 'Is the template SEO-friendly?',
    answer:
      "Yes, the template is built with SEO best practices including semantic HTML, meta tags, structured data, and optimized performance metrics. It includes automatic sitemap generation and follows Google's Core Web Vitals guidelines.",
    icon: <Zap className='w-5 h-5' />,
  },
  {
    question: "What's included with the template?",
    answer:
      'The template includes 50+ reusable UI components, dark/light theme support, responsive layouts, TypeScript support, authentication flows, and comprehensive documentation with code examples.',
    icon: <HelpCircle className='w-5 h-5' />,
  },
  {
    question: 'Can I use this template to create a landing page?',
    answer:
      'Absolutely! The template is perfect for landing pages with conversion-optimized sections, hero components, testimonials, pricing tables, and integrated analytics tracking.',
    icon: <MessageCircle className='w-5 h-5' />,
  },
  {
    question: 'Is the template optimized for accessibility?',
    answer:
      'Yes, it follows WCAG 2.1 AA guidelines with proper ARIA labels, keyboard navigation, screen reader support, color contrast ratios, and semantic HTML structure.',
    icon: <HelpCircle className='w-5 h-5' />,
  },
  {
    question: 'Does the template include mobile responsiveness?',
    answer:
      'Yes, the template is fully responsive with mobile-first design approach, touch-friendly interactions, and optimized performance across all device sizes.',
    icon: <Zap className='w-5 h-5' />,
  },
];

const FAQs = () => {
  const device = useMedia();

  return (
    <section className='md:mt-48 relative'>
      <MobilePlanet
        gradientFrom='#0c4230'
        gradientTo='#106259'
        ringColor1='#A7F3D0'
        ringColor2='#99F6E4'
      />
      <PlanetText
        btnText={`FAQ'S`}
        title='Frequently Asked Questions'
        subtitle={
          <>
            Find quick answers to the most common <br className='break' />
            questions about our platform.
          </>
        }
      />
      {device === 'desktop' ? <DesktopFAQs /> : <MobileFAQs />};
    </section>
  );
};

export default FAQs;
