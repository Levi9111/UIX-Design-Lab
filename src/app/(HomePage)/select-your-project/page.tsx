import ProjectSelection from '@/components/ProjectSelection/ProjectSelectionContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Select Your Project | Service Selection',
  description:
    'Choose the perfect service for your digital needs. UIX Design Lab offers a range of expert solutions in design and development to help your project succeed.',
  keywords: ['Project Selection', 'Design Services', 'Development Solutions', 'Custom Projects'],
};

const ProjectSelectionPage = () => {
  return <ProjectSelection />;
};

export default ProjectSelectionPage;
