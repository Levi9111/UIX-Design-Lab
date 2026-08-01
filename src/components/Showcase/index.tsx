'use client';

import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '@/hooks/useMedia';
import DesktopShowcase from './DesktopShowcase';
import MobileShowcase from './MobileShowcase';

const Showcase = () => {
  const device = useMedia();

  if (!device) return null;

  return (
    <section id='showcase' className='pt-10 md:pt-20 px-4 md:px-0 relative'>
      <PlanetText
        title='Why Choose Us'
        subtitle={
          <>
            We make design simple, seamless, and impactful—helping you
            <br className='hidden sm:inline' /> bring ideas to life with clarity and
            creativity.
          </>
        }
      />
      {device === 'mobile' ? <MobileShowcase /> : <DesktopShowcase />}
    </section>
  );
};

export default Showcase;
