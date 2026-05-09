import AllProjects from './AllProjectsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects | Portfolio',
  description:
    'Explore the portfolio of UIX Design Lab. A curated selection of our recent work in UI/UX design, dashboard creation, web development, and more.',
  keywords: ['Design Portfolio', 'UI/UX Case Studies', 'Web Development Projects', 'Showcase'],
};

const AllProjectsPage = () => {
  return <AllProjects />;
};

export default AllProjectsPage;
