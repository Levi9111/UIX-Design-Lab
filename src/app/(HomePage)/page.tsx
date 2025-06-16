import FAQs from '@/components/FAQs';
import Hero from '@/components/Hero';
import NebulaBackground from '@/components/NebulaBackground';
import PreFooter from '@/components/PreFooter';
import ProvidedServices from '@/components/ProvidedServices';
import Showcase from '@/components/Showcase';
import SpaceBackground from '@/components/SpaceBackground';
import Stories from '@/components/Stories';

const HomePage = () => {
  return (
    <div className='relative'>
      <NebulaBackground />
      <SpaceBackground />
      <Hero />
      <ProvidedServices />
      <Showcase />
      <Stories />
      <FAQs />
      <PreFooter />
    </div>
  );
};

export default HomePage;
