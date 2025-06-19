'use client';
import MobilePlanet from '../designs/MobilePlanet';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopShowcase from './DesktopShowcase';
import MobileShowcase from './MobileShowcase';

const Showcase = () => {
  const device = useMedia();

  return (
    <section className='pt-10 md:pt-20 px-4 md:px-0 relative'>
      <MobilePlanet
        gradientFrom='#287297'
        gradientTo='#14B8A6'
        ringColor1='#A7F3D0'
        ringColor2='#99F6E4'
      />
      <PlanetText
        title='Why Choose Us'
        subtitle={
          <>
            We make design simple, seamless, and impactful—helping you
            <br className='break' /> bring ideas to life with clarity and
            creativity.
          </>
        }
      />
      {device === 'desktop' ? <DesktopShowcase /> : <MobileShowcase />}
    </section>
  );
};

export default Showcase;
