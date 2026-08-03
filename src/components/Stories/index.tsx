'use client';
import { PlanetText } from '../elements/PlanetText';
import { useMedia } from '@/hooks/useMedia';
import DesktopStories from './DesktopStories';
import MobileStories from './MobileStories';
import TabletStories from './TabletStories';

const Stories = () => {
  const device = useMedia();

  if (!device) return null;

  return (
    <section id='review' className='md:pt-[180px] pt-16'>
      <div className='uix-center relative '>
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
