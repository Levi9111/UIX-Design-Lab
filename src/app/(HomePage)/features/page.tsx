import FeaturesHomePage from '@/components/Features/FeaturesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Features | Why Choose Us',
  description:
    'Discover what makes UIX Design Lab unique. From stellar UI design to creative engineering and immersive 3D experiences, we provide next-level digital solutions.',
  keywords: ['Agency Features', 'UI Design Excellence', 'Modern Animations', 'Creative Engineering', '3D Design'],
};

const FeaturesPage = () => {
  return <FeaturesHomePage />;
};

export default FeaturesPage;
