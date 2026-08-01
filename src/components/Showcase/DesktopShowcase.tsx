'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import shield from '../../../public/icons/shield.svg';
import showcaseLine from '../../../public/icons/showcase-line.svg';
import logoShowCase from '../../../public/logos/logo-showcase.svg';
import { Award, CheckCircle, Clock, Zap } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const centerImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 80,
      delay: 0.3,
      duration: 0.6,
    },
  },
};

const DeskShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-30px',
  });

  return (
    <div className='md:block hidden uix-center mx-auto' ref={ref}>
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='text-center'
      >
        {/* First Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-8 md:mb-0 md:mt-20'
        >
          {/* Card 1 - Projects Completed */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden transform-gpu group cursor-pointer'
            whileHover={{
              scale: 1.01,
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <div className='relative flex-shrink-0'>
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-blue-400/20 rounded-full origin-center pointer-events-none'
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Image
                src={shield}
                alt='Shield Icon'
                width={60}
                height={60}
                className='md:w-[100px] md:h-[100px] relative z-10'
              />
            </div>

            <div className='text-center md:text-left relative z-10'>
              <h3 className='text-3xl md:text-[60px] text-white font-medium leading-tight group-hover:scale-105 transition-transform duration-200'>
                100+
              </h3>
              <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-blue-300 transition-colors duration-200'>
                Projects completed
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Success Rate */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden transform-gpu group cursor-pointer'
            whileHover={{
              scale: 1.01,
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <div className='relative flex-shrink-0'>
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-purple-400/20 rounded-full origin-center pointer-events-none'
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Image
                src={shield}
                alt='Shield Icon'
                width={60}
                height={60}
                className='md:w-[100px] md:h-[100px] relative z-10'
              />
            </div>

            <div className='text-center md:text-left relative z-10'>
              <h3 className='text-3xl md:text-[60px] text-white font-medium leading-tight group-hover:scale-105 transition-transform duration-200'>
                Result
              </h3>
              <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-purple-300 transition-colors duration-200'>
                98% completed
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Fast Performance */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-400/20 relative overflow-hidden group cursor-pointer transform-gpu'
            whileHover={{
              scale: 1.01,
              y: -4,
              borderColor: 'rgba(59, 130, 246, 0.4)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <div className='flex flex-col items-center justify-center h-full relative z-10'>
              <div className='mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300'>
                <Zap className='w-12 h-12 md:w-16 md:h-16 text-white' />
              </div>

              <h3 className='text-3xl md:text-[60px] font-medium leading-tight text-white group-hover:scale-105 transition-transform duration-200'>
                Fast
              </h3>
              <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-blue-300 transition-colors duration-200'>
                Performance
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Top Quality */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/20 relative overflow-hidden group cursor-pointer transform-gpu'
            whileHover={{
              scale: 1.01,
              y: -4,
              borderColor: 'rgba(168, 85, 247, 0.4)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <div className='flex flex-col items-center justify-center h-full relative z-10'>
              <div className='mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300'>
                <Award className='w-12 h-12 md:w-16 md:h-16 text-purple-400' />
              </div>

              <h3 className='text-3xl md:text-[60px] font-medium leading-tight text-white group-hover:scale-105 transition-transform duration-200'>
                Top
              </h3>
              <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-purple-300 transition-colors duration-200'>
                Quality
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Center Feature Image */}
      <motion.div
        variants={centerImageVariants}
        className='max-w-[300px] md:max-w-[1013px] w-full mx-auto flex items-center justify-center my-10 md:my-20 relative transform-gpu'
      >
        {/* Side decorative lines */}
        <div className='absolute left-0 hidden md:block opacity-60'>
          <Image
            src={showcaseLine}
            alt='Showcase line'
            width={328}
            height={321}
            className='scale-y-75'
          />
        </div>

        {/* Main planetary system */}
        <motion.div
          className='size-[250px] md:size-[328px] rounded-full border border-blue-300/30 p-[14px] flex items-center justify-center relative overflow-hidden cursor-pointer'
          whileHover={{
            scale: 1.05,
            borderColor: 'rgba(59, 130, 246, 0.4)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Orbital ring */}
          <motion.div
            className='absolute inset-0 rounded-full border border-blue-300/15 pointer-events-none'
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, transparent 80%, rgba(59, 130, 246, 0.05) 100%)',
            }}
          />

          {/* Central planet */}
          <div
            className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent)',
              boxShadow:
                '2px 2px 40px 0px rgba(59, 130, 246, 0.2) inset, 2px 2px 40px 0px rgba(147, 51, 234, 0.1) inset',
            }}
          >
            {/* Central logo */}
            <motion.div
              className='relative'
              whileHover={{
                scale: 1.08,
                filter:
                  'brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={logoShowCase}
                alt='Logo Showcase'
                width={90}
                height={90}
                className='md:w-[123px] md:h-[129px] relative z-10'
              />
            </motion.div>
          </div>
        </motion.div>

        <div className='absolute right-0 hidden md:block opacity-60'>
          <Image
            src={showcaseLine}
            alt='Showcase line'
            width={328}
            height={321}
            className='rotate-180 scale-y-75'
          />
        </div>
      </motion.div>

      {/* Second Grid */}
      <motion.div
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'
      >
        {/* Card 5 - 24/7 Availability */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-teal-900/40 to-cyan-900/40 border border-teal-400/20 relative overflow-hidden group cursor-pointer transform-gpu'
          whileHover={{
            scale: 1.01,
            y: -4,
            borderColor: 'rgba(20, 184, 166, 0.4)',
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
              <Clock className='w-12 h-12 md:w-16 md:h-16 text-white' />
            </div>

            <h3 className='text-3xl md:text-[60px] font-medium leading-tight text-white group-hover:scale-105 transition-transform duration-200'>
              24/7
            </h3>
            <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-teal-300 transition-colors duration-200'>
              Availability
            </p>
          </div>
        </motion.div>

        {/* Card 6 - Reliable Service */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-emerald-900/40 to-green-900/40 border border-emerald-400/20 relative overflow-hidden group cursor-pointer transform-gpu'
          whileHover={{
            scale: 1.01,
            y: -4,
            borderColor: 'rgba(52, 211, 153, 0.4)',
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
              <CheckCircle className='w-12 h-12 md:w-16 md:h-16 text-white' />
            </div>

            <h3 className='text-3xl md:text-[60px] font-medium leading-tight text-white group-hover:scale-105 transition-transform duration-200'>
              Reliable
            </h3>
            <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-emerald-300 transition-colors duration-200'>
              Service
            </p>
          </div>
        </motion.div>

        {/* Card 7 - Support */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden transform-gpu group cursor-pointer'
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='relative flex-shrink-0'>
            <motion.div
              className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-green-400/20 rounded-full origin-center pointer-events-none'
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Image
              src={shield}
              alt='Shield Icon'
              width={60}
              height={60}
              className='md:w-[100px] md:h-[100px] relative z-10'
            />
          </div>

          <div className='text-center md:text-left relative z-10'>
            <h3 className='text-3xl md:text-[60px] text-white font-medium leading-tight group-hover:scale-105 transition-transform duration-200'>
              Support
            </h3>
            <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-green-300 transition-colors duration-200'>
              Lifetime Assistance
            </p>
          </div>
        </motion.div>

        {/* Card 8 - Skills */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden transform-gpu group cursor-pointer'
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='relative flex-shrink-0'>
            <motion.div
              className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-orange-400/20 rounded-full origin-center pointer-events-none'
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Image
              src={shield}
              alt='Shield Icon'
              width={60}
              height={60}
              className='md:w-[100px] md:h-[100px] relative z-10'
            />
          </div>

          <div className='text-center md:text-left relative z-10'>
            <h3 className='text-3xl md:text-[60px] text-white font-medium leading-tight group-hover:scale-105 transition-transform duration-200'>
              Skills
            </h3>
            <p className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 group-hover:text-orange-300 transition-colors duration-200'>
              Expert Craft
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeskShowcase;
