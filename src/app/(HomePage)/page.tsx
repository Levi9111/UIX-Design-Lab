import FAQs from '@/components/ui/FAQs';
import Hero from '@/components/ui/Hero';
import PreFooter from '@/components/ui/PreFooter';
import ProvidedServices from '@/components/ui/ProvidedServices';
import Showcase from '@/components/ui/Showcase';
import Stories from '@/components/ui/Stories';

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
