'use client';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '../hooks/useMedia';
import DesktopStories from '../Stories/StoriesDesktop';
import MobileStories from '../Stories/StoriesMobile';
import TabletStories from '../Stories/StoriesTablet';

const Stories = () => {
  const device = useMedia();

  return (
    <section id='review' className='md:pt-[180px] pt-16'>
      <div className='uix-center relative overflow-hidden'>
        <PlanetText
          btnText='Our clients'
          title='Our Success Stories'
          subtitle='Real transformations from real businesses. See how our solutions drive exceptional results.'
        />
        {device === 'desktop' && <DesktopStories />}
        {device === 'tablet' && <TabletStories />}
        {device === 'mobile' && <MobileStories />}
      </div>
    </section>
  );
};

export default Stories;
