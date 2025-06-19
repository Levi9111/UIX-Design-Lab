'use client';

import { motion } from 'framer-motion';
import Button from '@/components/elements/Button';
import { PlanetText } from '@/components/elements/PlanetText';
import Link from 'next/link';

const allServices = Array(12).fill({
  title: 'My Shell AI',
  description:
    'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
});

const AllProjects = () => {
  return (
    <section className='md:pt-24 pt-12 pb-16 sm:pb-20 bg-rich-black/20'>
      <div className='uix-center px-4 sm:px-6'>
        <PlanetText
          title='Our Full Portfolio'
          subtitle='Browse through a complete collection of our recent work and collaborations.'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10'>
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-[#121417] to-[#1c1f24] rounded-[32px] overflow-hidden border border-white/5 shadow-xl flex flex-col group hover:shadow-platinum/30 transition-shadow duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <div className='relative h-60 bg-gradient-to-tr from-[#2e2e2e] via-[#1f1f1f] to-[#3a3a3a] group-hover:scale-105 transition-transform duration-300' />
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

        <Link
          href='/'
          className='mt-14 sm:mt-[60px] w-full flex items-center justify-center'
        >
          <Button>Back to Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default AllProjects;
