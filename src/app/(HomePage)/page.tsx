import Hero from '@/components/Hero';
import NebulaBackground from '@/components/NebulaBackground';
import ProvidedServices from '@/components/ProvidedServices';
import Showcase from '@/components/Showcase';
import SpaceBackground from '@/components/SpaceBackground';

const HomePage = () => {
  return (
    <>
      <NebulaBackground />
      <SpaceBackground />
      <Hero />
      <ProvidedServices />
      <Showcase />
    </>
  );
};

export default HomePage;
