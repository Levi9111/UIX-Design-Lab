'use client';
import MobilePlanet from '../designs/MobilePlanet';
import { LinearMovingStar } from '../designs/SpaceBackground/MobileSpaceBackground';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopShowcase from './DesktopShowcase';
import MobileShowcase from './MobileShowcase';

const Showcase = () => {
  const device = useMedia();

  return (
    <section id='showcase' className='pt-10 md:pt-20 px-4 md:px-0 relative'>
      <MobilePlanet
        gradientFrom='#18445a'
        gradientTo='#137066'
        ringColor1='#528c71'
        ringColor2='#99F6E4'
        className='!top-5'
      />

      {/* Linear moving stars in random directions */}
      {Array.from({ length: 30 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;

        return (
          <LinearMovingStar
            key={`random-star-${i}`}
            startX={startX}
            startY={startY}
            endX={endX}
            endY={endY}
            delay={Math.random() * 4}
            duration={Math.random() * 5 + 3}
            size={Math.random() * 2 + 1}
          />
        );
      })}
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
