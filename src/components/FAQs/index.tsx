import DesktopFAQs from './DesktopFAQs';
import MobileFAQs from './MobileFAQs';
import { PlanetText } from '../elements/PlanetText';

const FAQs = () => {
  return (
    <section className='md:mt-48'>
      <PlanetText
        btnText={`FAQ'S`}
        title='Frequently Asked Questions'
        subtitle={
          <>
            Find quick answers to the most common <br className='break' />
            questions about our platform.
          </>
        }
      />
      <DesktopFAQs />
      <MobileFAQs />
    </section>
  );
};

export default FAQs;
