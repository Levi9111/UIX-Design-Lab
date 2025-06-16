'use client';

import Button from './Button';
import { PlanetText } from './PlanetText';
import { motion } from 'framer-motion';

// Navigation link type
type NavigationLink = {
  title: string;
  path: string;
  type: number;
};

// Service detail type
type ServiceDetail = {
  title: string;
  description: string;
};

const navigationLinks: NavigationLink[] = [
  { title: 'All Categories', path: '', type: 2 },
  { title: 'UI/UX Design', path: '', type: 1 },
  { title: 'Dashboard', path: '', type: 1 },
  { title: 'Development', path: '', type: 1 },
];

const serviceDetailsData: ServiceDetail[] = [
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
];

const ProvidedServices = () => {
  return (
    <section className='md:pt-20 pt-10 pb-10 sm:pb-16'>
      <div className='uix-center px-4 sm:px-6'>
        <PlanetText
          title={
            <>
              Let’s Build Something <br className='hidden sm:block' /> Great
              Together
            </>
          }
          subtitle={
            <>
              We combine design, strategy, and technology to help your business
              stand <br className='hidden sm:block' /> out online and create
              lasting impressions on your audience.
            </>
          }
        />

        {/* Navigation buttons */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:mb-20 mb-10'>
          {navigationLinks.map((navigation) => (
            <Button key={navigation.title} type={navigation.type}>
              {navigation.title}
            </Button>
          ))}
        </div>

        {/* Service descriptions */}
        <div className='w-full max-w-[1111px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {serviceDetailsData.map((serviceDetails, index) => (
            <motion.div
              className='w-full rounded-[40px] bg-charcoal-blue relative flex flex-col justify-end overflow-hidden'
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Optional image section (can be made dynamic later) */}
              <div className='flex-1 bg-gradient-to-br from-[#111317] to-[#1a1d22]' />

              {/* Image box */}
              <div className='w-full h-[503px]'></div>

              {/* Text box */}
              <div className='w-full bg-background rounded-b-[40px] inner-shadow border-b border-platinum/15 p-6 sm:p-8 md:p-10'>
                <h3 className='font-normal text-2xl sm:text-[28px] md:text-[33px] leading-[1.3] tracking-wide mb-4 text-cultured'>
                  {serviceDetails.title}
                </h3>
                <p className='font-dm-sans text-base sm:text-lg text-roman-silver leading-relaxed'>
                  {serviceDetails.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className='mt-10 sm:mt-[60px] w-full flex items-center justify-center'>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default ProvidedServices;
