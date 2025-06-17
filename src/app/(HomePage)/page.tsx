import Stories from '@/components/Stories';
import FAQs from '@/components/ui/FAQs';
import Hero from '@/components/ui/Hero';
import PreFooter from '@/components/ui/PreFooter';
import ProvidedServices from '@/components/ui/ProvidedServices';
import Showcase from '@/components/ui/Showcase';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProvidedServices />
      <Showcase />
      <Stories />
      <FAQs />
      <PreFooter />
    </>
  );
};

export default HomePage;
