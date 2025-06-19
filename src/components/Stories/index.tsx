'use client';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopStories from '../Stories/StoriesDesktop';
import MobileStories from '../Stories/StoriesMobile';
import TabletStories from '../Stories/StoriesTablet';

const Stories = () => {
  const device = useMedia();

  return (
    <section className='pt-[180px]'>
      <div className='uix-center'>
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
