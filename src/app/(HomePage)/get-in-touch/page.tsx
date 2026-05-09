import GetInTouch from '@/components/GetInTouch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get In Touch | Contact Us',
  description:
    'Ready to start your project? Contact UIX Design Lab today for a consultation on your design and development needs.',
  keywords: ['Contact Design Agency', 'Hire UI/UX Designer', 'Web Development Inquiry', 'Start Project'],
};

const GetInTouchHomePage = () => {
  return <GetInTouch />;
};

export default GetInTouchHomePage;
