'use client';

import Button from '../elements/Button';
import { PlanetText } from '../elements/PlanetText';
import { motion } from 'framer-motion';

type NavigationLink = {
  title: string;
  path: string;
  type: number;
};

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

const serviceDetailsData: ServiceDetail[] = Array(6).fill({
  title: 'My Shell AI',
  description:
    'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
});

const Portfolio = () => {
  return (
    <section className='md:pt-24 pt-12 pb-16 sm:pb-20 bg-rich-black/20'>
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

        {/* Category Filters */}
        <div className='mt-6 mb-12 md:mb-20'>
          <div className='bg-charcoal-blue/40 px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/10'>
            <div className='grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-6'>
              {navigationLinks.map((nav) => (
                <div key={nav.title} className='w-full sm:w-auto'>
                  <Button type={nav.type}>{nav.title}</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {serviceDetailsData.map((service, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-[#121417] to-[#1c1f24] rounded-[32px] overflow-hidden border border-white/5 shadow-xl flex flex-col group hover:shadow-platinum/30 transition-shadow duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              {/* Image or preview area */}
              <div className='relative h-60 bg-gradient-to-tr from-[#2e2e2e] via-[#1f1f1f] to-[#3a3a3a] group-hover:scale-105 transition-transform duration-300'>
                {/* Later replace with real image */}
              </div>

              {/* Text Content */}
              <div className='p-6 sm:p-8 bg-rich-black rounded-b-[32px] border-t border-white/5'>
                <h3 className='text-xl sm:text-2xl text-platinum font-semibold mb-3'>
                  {service.title}
                </h3>
                <p className='text-roman-silver text-sm sm:text-base leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className='mt-14 sm:mt-[60px] w-full flex items-center justify-center'>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
