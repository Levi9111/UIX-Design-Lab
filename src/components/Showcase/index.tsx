import { PlanetText } from '../elements/PlanetText';
import DesktopShowcase from './DesktopShowcase';

const Showcase = () => {
  return (
    <section className='pt-10 md:pt-20 px-4 md:px-0'>
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
      <DesktopShowcase />
    </section>
  );
};

export default Showcase;
