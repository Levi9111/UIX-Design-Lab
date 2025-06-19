'use client';
import MobilePlanet from '../designs/MobilePlanet';
import { LinearMovingStar } from '../designs/SpaceBackground/MobileSpaceBackground';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopStories from '../Stories/StoriesDesktop';
import MobileStories from '../Stories/StoriesMobile';
import TabletStories from '../Stories/StoriesTablet';

const Stories = () => {
  const device = useMedia();

  return (
    <section className='pt-[180px] '>
      <div className='uix-center relative '>
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
        <MobilePlanet
          gradientFrom='#104760'
          gradientTo='#3B82F6'
          ringColor1='#213844'
          ringColor2='#35475b'
          className='!-top-4'
        />
        <PlanetText
          btnText='Our clients'
          title='Our Success Stories'
          subtitle='Real transformations from real businesses. See how our solutions drive exceptional results.'
        />
      </div>
      {device === 'desktop' && <DesktopStories />}
      {device === 'tablet' && <TabletStories />}
      {device === 'mobile' && <MobileStories />}
    </section>
  );
};

export default Stories;
