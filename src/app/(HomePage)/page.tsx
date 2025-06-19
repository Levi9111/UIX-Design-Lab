import FAQs from '@/components/FAQs';
import PreFooter from '@/components/PreFooter';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import Stories from '@/components/Stories';
import Hero from '@/components/ui/Hero';
import Portfolio from '@/components/ui/Portfolio';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Showcase />
      <Stories />
      <FAQs />
      <PreFooter />
    </>
  );
};

export default HomePage;
