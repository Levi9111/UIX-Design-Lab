'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/elements/Button';
import { PlanetText } from '@/components/elements/PlanetText';
import Link from 'next/link';
import { serviceDetailsData } from '@/components/ui/Portfolio';

type NavigationLink = {
  title: string;
  path: string;
  type: number;
  category?: string;
};

const navigationLinks: NavigationLink[] = [
  { title: 'All Categories', path: '', type: 2, category: 'all' },
  { title: 'UI/UX Design', path: '', type: 1, category: 'UI/UX Design' },
  { title: 'Dashboard', path: '', type: 1, category: 'Dashboard' },
  { title: 'Development', path: '', type: 1, category: 'Development' },
  { title: 'Landing Page', path: '', type: 1, category: 'Landing Page' },
];

// Add categories to your service data for filtering
const categorizedServiceData = serviceDetailsData.map((service, index) => ({
  ...service,
  id: index,
}));

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects =
    activeCategory === 'all'
      ? categorizedServiceData
      : categorizedServiceData.filter(
          (project) => project.category === activeCategory,
        );

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;

    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 150);
  };

  return (
    <section className='md:pt-24 pt-12 pb-16 sm:pb-20 bg-rich-black/20 min-h-screen'>
      <div className='uix-center px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PlanetText
            title='Recent Work'
            subtitle='A curated selection of projects that reflect our passion and precision.'
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className='mt-6 mb-12 md:mb-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='bg-charcoal-blue/40 px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/10'>
            <div className='grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-6'>
              {navigationLinks.map((nav) => (
                <motion.div
                  key={nav.title}
                  className='w-full sm:w-auto'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    onClick={() => handleCategoryChange(nav.category || 'all')}
                    className='cursor-pointer'
                  >
                    <Button
                      type={activeCategory === (nav.category || 'all') ? 2 : 1}
                    >
                      {nav.title}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Count */}
          <motion.div
            className='text-center mt-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className='text-roman-silver text-sm'>
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && (
                <span className='text-platinum ml-1'>
                  in{' '}
                  {
                    navigationLinks.find(
                      (link) => link.category === activeCategory,
                    )?.title
                  }
                </span>
              )}
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className='relative min-h-[600px]'>
          <AnimatePresence mode='wait'>
            {isLoading ? (
              <motion.div
                key='loading'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='absolute inset-0 flex items-center justify-center'
              >
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-platinum rounded-full animate-pulse'></div>
                  <div
                    className='w-2 h-2 bg-platinum rounded-full animate-pulse'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className='w-2 h-2 bg-platinum rounded-full animate-pulse'
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'
              >
                {filteredProjects.map((service, index) => (
                  <motion.div
                    key={`${activeCategory}-${service.id}`}
                    className='bg-gradient-to-br from-[#121417] to-[#1c1f24] rounded-[32px] overflow-hidden border border-white/5 shadow-xl flex flex-col group hover:shadow-platinum/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer'
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ y: -8 }}
                    layout
                  >
                    {/* Image Container */}
                    <div className='relative h-60 bg-gradient-to-tr from-[#2e2e2e] via-[#1f1f1f] to-[#3a3a3a] overflow-hidden'>
                      <div className='absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out'>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className=''
                          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        />
                      </div>

                      {/* Category Badge */}
                      <div className='absolute top-4 left-4 z-10'>
                        <span className='px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-platinum font-medium border border-white/10'>
                          {navigationLinks.find(
                            (link) => link.category === service.category,
                          )?.title || 'Project'}
                        </span>
                      </div>

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                      {/* Shine Effect */}
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
                    </div>

                    {/* Text Content */}
                    <div className='p-6 sm:p-8 bg-rich-black rounded-b-[32px] border-t border-white/5 flex-1 flex flex-col'>
                      <h3 className='text-xl sm:text-2xl text-platinum font-semibold mb-3 group-hover:text-white transition-colors duration-300'>
                        {service.title}
                      </h3>
                      <p className='text-roman-silver text-sm sm:text-base leading-relaxed flex-1 group-hover:text-platinum/90 transition-colors duration-300'>
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className='mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-platinum/60 font-medium tracking-wider uppercase'>
                            View Project
                          </span>
                          <motion.div
                            className='w-6 h-6 rounded-full bg-platinum/10 flex items-center justify-center'
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                          >
                            <svg
                              className='w-3 h-3 text-platinum'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href='/'
            className='mt-14 sm:mt-[60px] w-full flex items-center justify-center'
          >
            <Button>Back to Home</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
