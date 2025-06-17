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
          title='Hear Directly from Our Valued Partners'
          subtitle='Discover how businesses and creators... solutions.'
        />
      </div>
      {/* Desktop: lg and above */}
      <DesktopStories />

      {/* Tablet: md only */}
      <TabletStories />

      {/* Mobile: below md */}
      <MobileStories />
    </section>
  );
};

export default Stories;
