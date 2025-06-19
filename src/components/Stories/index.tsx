import { PlanetText } from '../elements/PlanetText';
import DesktopStories from '../Stories/StoriesDesktop';
import MobileStories from '../Stories/StoriesMobile';
import TabletStories from '../Stories/StoriesTablet';

const Stories = () => {
  return (
    <section className='pt-[180px]'>
      <div className='uix-center'>
        <PlanetText
          btnText='Our clients'
          title='Our Success Stories'
          subtitle='Real transformations from real businesses. See how our solutions drive exceptional results.'
        />
      </div>
      <DesktopStories />
      <TabletStories />
      <MobileStories />
    </section>
  );
};

export default Stories;
