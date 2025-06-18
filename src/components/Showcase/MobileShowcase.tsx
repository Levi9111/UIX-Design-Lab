'use client';

import {
  motion,
  Variants,
  useInView,
  useReducedMotion,
  easeInOut,
} from 'framer-motion';
import Image from 'next/image';
import { useRef, RefObject, useState, useEffect } from 'react';
import logoShowCase from '../../../public/logos/logo-showcase.svg';

// Mock SVG components for demo
const MockShield = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 100 100' className={className} fill='currentColor'>
    <path d='M50 10 L80 25 L80 65 Q80 80 50 90 Q20 80 20 65 L20 25 Z' />
  </svg>
);

const MockLogoShowcase = ({ className }: { className?: string }) => (
  <motion.div
    className={`size-[180px] mx-auto rounded-full border border-blue-300/30 p-1 flex items-center justify-center relative overflow-hidden ${className}`}
    animate={{
      y: [0, -6, 0, 6, 0], // Float up and down
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {/* Single orbital ring */}
    <motion.div
      className='absolute inset-0 rounded-full border border-blue-300/15'
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{
        background:
          'conic-gradient(from 0deg, transparent 80%, rgba(59, 130, 246, 0.05) 100%)',
      }}
    />

    {/* Central planet */}
    <motion.div
      className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent)',
        boxShadow:
          '2px 2px 40px 0px rgba(59, 130, 246, 0.2) inset, 2px 2px 40px 0px rgba(147, 51, 234, 0.1) inset',
      }}
    >
      {/* Logo with hover pop */}
      <motion.div
        className='relative'
        animate={{
          y: [0, -2, 0], // Gentle bounce inside
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.08,
          filter:
            'brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={logoShowCase}
          alt='Logo Showcase'
          width={90}
          height={90}
          className='relative z-10'
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

// Minimal animation variants for better performance
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const MobileShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop',
  );
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: '-20px',
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Conditional animations based on screen size and motion preference
  const getHoverEffect = () => {
    if (screenSize === 'mobile' || shouldReduceMotion) return {};
    return {
      scale: 1.02,
      transition: { duration: 0.2 },
    };
  };

  const getRotationEffect = (duration = 20) => {
    if (screenSize === 'mobile' || shouldReduceMotion) return {};
    return {
      rotate: 360,
      transition: { duration, repeat: Infinity, ease: easeInOut },
    };
  };

  return (
    <div
      className='md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
      ref={ref}
    >
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className='space-y-8'
      >
        {/* First Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
        >
          {/* Card 1 - Projects */}
          <motion.div
            variants={fadeInVariants}
            className='bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center gap-4 min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {/* Subtle background only on desktop */}
            {screenSize === 'desktop' && (
              <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent' />
            )}

            <div className='relative flex-shrink-0'>
              {/* Simplified rotating border - only on desktop */}
              {screenSize === 'desktop' && !shouldReduceMotion && (
                <motion.div
                  className='absolute inset-0 w-16 h-16 border border-blue-400/30 rounded-full'
                  animate={getRotationEffect(15)}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
              <MockShield className='w-12 h-12 text-blue-400 relative z-10' />
            </div>

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                100+
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Projects Completed
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Results */}
          <motion.div
            variants={fadeInVariants}
            className='bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center gap-4 min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {screenSize === 'desktop' && (
              <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent' />
            )}

            <div className='relative flex-shrink-0'>
              {screenSize === 'desktop' && !shouldReduceMotion && (
                <motion.div
                  className='absolute inset-0 w-16 h-16 border border-purple-400/30 rounded-full'
                  animate={getRotationEffect(18)}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDirection: 'reverse',
                  }}
                />
              )}
              <MockShield className='w-12 h-12 text-purple-400 relative z-10' />
            </div>

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                98%
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>Success Rate</p>
            </div>
          </motion.div>

          {/* Card 3 - Performance */}
          <motion.div
            variants={fadeInVariants}
            className='bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-400/20 rounded-xl p-6 text-center min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {/* Simple shimmer effect - only on desktop */}
            {screenSize === 'desktop' && !shouldReduceMotion && (
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />
            )}

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                Fast
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>Performance</p>
            </div>
          </motion.div>

          {/* Card 4 - Quality */}
          <motion.div
            variants={fadeInVariants}
            className='bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-400/20 rounded-xl p-6 text-center min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {screenSize === 'desktop' && !shouldReduceMotion && (
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              />
            )}

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                Top
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>Quality</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Central logo */}
        <MockLogoShowcase />

        {/* Second Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
        >
          {/* Card 5 - Availability */}
          <motion.div
            variants={fadeInVariants}
            className='bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border border-teal-400/20 rounded-xl p-6 text-center min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                24/7
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>Availability</p>
            </div>
          </motion.div>

          {/* Card 6 - Reliability */}
          <motion.div
            variants={fadeInVariants}
            className='bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-400/20 rounded-xl p-6 text-center min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                Reliable
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>Service</p>
            </div>
          </motion.div>

          {/* Card 7 - Support */}
          <motion.div
            variants={fadeInVariants}
            className='bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center gap-4 min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {screenSize === 'desktop' && (
              <div className='absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent' />
            )}

            <div className='relative flex-shrink-0'>
              {screenSize === 'desktop' && !shouldReduceMotion && (
                <motion.div
                  className='absolute inset-0 w-16 h-16 border border-green-400/30 rounded-full'
                  animate={getRotationEffect(12)}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
              <MockShield className='w-12 h-12 text-green-400 relative z-10' />
            </div>

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                Support
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Lifetime Assistance
              </p>
            </div>
          </motion.div>

          {/* Card 8 - Expertise */}
          <motion.div
            variants={fadeInVariants}
            className='bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center gap-4 min-h-[120px] relative overflow-hidden'
            whileHover={getHoverEffect()}
          >
            {screenSize === 'desktop' && (
              <div className='absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent' />
            )}

            <div className='relative flex-shrink-0'>
              {screenSize === 'desktop' && !shouldReduceMotion && (
                <motion.div
                  className='absolute inset-0 w-16 h-16 border border-orange-400/30 rounded-full'
                  animate={getRotationEffect(16)}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDirection: 'reverse',
                  }}
                />
              )}
              <MockShield className='w-12 h-12 text-orange-400 relative z-10' />
            </div>

            <div className='relative z-10'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white'>
                Expert
              </h3>
              <p className='text-gray-300 text-sm sm:text-base'>
                Craftsmanship
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileShowcase;
