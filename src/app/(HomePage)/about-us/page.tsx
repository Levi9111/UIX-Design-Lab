import AboutUs from '@/components/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about UIX Design Lab, a creative agency with 4+ years of experience in UI/UX design and full-stack development. Discover our mission to build impactful digital products.',
  keywords: ['About UIX Design Lab', 'Creative Agency Team', 'Design Experience', 'Mission'],
};

const AboutUsPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
