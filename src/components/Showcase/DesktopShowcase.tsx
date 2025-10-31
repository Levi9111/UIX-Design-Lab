'use client';

import Image from 'next/image';
import { motion, Variants, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, RefObject, useEffect, useState } from 'react';
import shield from '../../../public/icons/shield.svg';
import showcaseLine from '../../../public/icons/showcase-line.svg';
import logoShowCase from '../../../public/logos/logo-showcase.svg';
import { Award, CheckCircle, Clock, Zap } from 'lucide-react';

// Mock components for the example
const MockImage = ({ src, alt, width, height, className }: any) => (
  <Image
    src={src}
    width={width}
    height={height}
    alt={alt}
    className={className}
  />
);

//  animation variants
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
      duration: 0.6,
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
      delay: 0.4,
      duration: 0.8,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 0.6,
    pathLength: 1,
    transition: {
      pathLength: { duration: 1.5, ease: 'easeInOut', delay: 0.3 },
      opacity: { duration: 0.6, delay: 0.2 },
    },
  },
};

const DeskShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: '-30px',
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const centerX = useSpring(mouseX, springConfig);
  const centerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 10); // Reduced from 20
        mouseY.set(y * 10);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div className='md:block hidden uix-center mx-auto' ref={ref}>
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='text-center'
      >
        {/* First Grid - Simplified hover effects */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-8 md:mb-0 md:mt-20'
        >
          {/* Card 1 - Reduced particle count and simpler animations */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.01,
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 opacity-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1 h-1 bg-blue-300 rounded-full'
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0, 0.6, 0],
                    scale: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: 'easeInOut',
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className='relative'
            >
              {/* Single orbital ring, slower rotation */}
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-blue-400/20 rounded-full' // Reduced opacity
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} // Slower
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <MockImage
                src={shield}
                alt='Shield Icon'
                width={60}
                height={60}
                className='md:w-[100px] md:h-[100px] relative z-10'
              />
            </motion.div>

            <div className='text-center md:text-left relative z-10'>
              <motion.h3
                className='text-3xl md:text-[60px] text-white font-medium leading-tight'
                whileHover={{
                  scale: 1.02, // Reduced from 1.05
                }}
                transition={{ duration: 0.2 }}
              >
                100+
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#93c5fd' }}
                transition={{ duration: 0.2 }}
              >
                Project completed
              </motion.p>
            </div>
          </motion.div>

          {/* Card 2 - Similar reduction in complexity */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.01,
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            {/* Simplified particles */}
            <motion.div
              className='absolute inset-0 opacity-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {[...Array(3)].map(
                (
                  _,
                  i, // Reduced count
                ) => (
                  <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-purple-300 rounded-full'
                    animate={{
                      x: [0, Math.random() * 80 - 40],
                      y: [0, Math.random() * 80 - 40],
                      opacity: [0, 0.5, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 4,
                      ease: 'easeInOut',
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ),
              )}
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className='relative'
            >
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-purple-400/20 rounded-full'
                animate={{ rotate: -360 }}
                transition={{
                  duration: 16, // Slower
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <MockImage
                src={shield}
                alt='Shield Icon'
                width={60}
                height={60}
                className='md:w-[100px] md:h-[100px] relative z-10'
              />
            </motion.div>

            <div className='text-center md:text-left relative z-10'>
              <motion.h3
                className='text-3xl md:text-[60px] text-white font-medium leading-tight'
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
              >
                Result
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#c4b5fd' }}
                transition={{ duration: 0.2 }}
              >
                98% completed
              </motion.p>
            </div>
          </motion.div>

          {/* Gradient Cards - Simplified shimmer effect */}

          {/* Card 3 - Fast Performance (Updated) */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-400/20 relative overflow-hidden group'
            whileHover={{
              scale: 1.01,
              y: -4,
              borderColor: 'rgba(59, 130, 246, 0.3)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0'
              whileHover={{ opacity: 1 }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                x: { duration: 2, repeat: Infinity, repeatDelay: 3 },
              }}
            />

            <div className='flex flex-col items-center justify-center h-full relative z-10'>
              <motion.div
                className='mb-4'
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Zap className='w-12 h-12 md:w-16 md:h-16 text-white' />
              </motion.div>

              <motion.h3
                className='text-3xl md:text-[60px] font-medium leading-tight text-white'
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
              >
                Fast
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#93c5fd' }}
                transition={{ duration: 0.2 }}
              >
                Performance
              </motion.p>
            </div>
          </motion.div>

          {/* Card 4 - Top Quality (Updated) */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/20 relative overflow-hidden group'
            whileHover={{
              scale: 1.01,
              y: -4,
              borderColor: 'rgba(168, 85, 247, 0.3)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0'
              whileHover={{ opacity: 1 }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                x: { duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 },
              }}
            />

            <div className='flex flex-col items-center justify-center h-full relative z-10'>
              <motion.div
                className='mb-4'
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Award className='w-12 h-12 md:w-16 md:h-16 text-purple-400' />
              </motion.div>

              <motion.h3
                className='text-3xl md:text-[60px] font-medium leading-tight text-white'
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
              >
                Top
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#c4b5fd' }}
                transition={{ duration: 0.2 }}
              >
                Quality
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Center Feature Image - Significantly simplified */}
      <motion.div
        variants={centerImageVariants}
        className='max-w-[300px] md:max-w-[1013px] w-full mx-auto flex items-center justify-center my-10 md:my-20 relative'
        style={{
          x: centerX,
          y: centerY,
        }}
      >
        {/* Side decorative lines - simplified */}
        <motion.div
          variants={lineVariants}
          className='absolute left-0 hidden md:block'
        >
          <MockImage
            src={showcaseLine}
            alt='Showcase line'
            width={328}
            height={321}
            className='scale-y-75'
          />
        </motion.div>

        {/* Main planetary system - much simpler */}
        <motion.div
          className='size-[250px] md:size-[328px] rounded-full border border-blue-300/30 p-[14px] flex items-center justify-center relative overflow-hidden'
          whileHover={{
            scale: 1.05, // Reduced from 1.1
            borderColor: 'rgba(59, 130, 246, 0.4)',
          }}
          transition={{
            scale: { duration: 0.4 },
          }}
        >
          {/* Single orbital ring */}
          <motion.div
            className='absolute inset-0 rounded-full border border-blue-300/15'
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} // Much slower
            style={{
              background:
                'conic-gradient(from 0deg, transparent 80%, rgba(59, 130, 246, 0.05) 100%)',
            }}
          />

          {/* Single orbiting satellite */}
          <motion.div
            className='absolute inset-0'
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} // Slower
          >
            <motion.div
              className='absolute w-2 h-2 bg-blue-400/60 rounded-full shadow-sm' // Smaller, less opacity
              style={{
                left: '15%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4], // Gentler pulsing
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Central planet - simplified */}
          <motion.div
            className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent)',
              boxShadow:
                '2px 2px 40px 0px rgba(59, 130, 246, 0.2) inset, 2px 2px 40px 0px rgba(147, 51, 234, 0.1) inset',
            }}
          >
            {/* Reduced atmospheric particles */}
            {[...Array(6)].map(
              (
                _,
                i, // Reduced from 12
              ) => (
                <motion.div
                  key={i}
                  className={`absolute w-0.5 h-0.5 rounded-full ${
                    i % 2 === 0 ? 'bg-blue-300/30' : 'bg-purple-300/30'
                  }`} // Smaller, less opacity
                  animate={{
                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 25, 0], // Smaller range
                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 25, 0],
                    opacity: [0.1, 0.4, 0.1], // Much gentler
                    scale: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 8 + (i % 2), // Slower
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4, // Longer delays
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ),
            )}

            {/* Central logo - simplified hover */}
            <motion.div
              className='relative'
              animate={{
                y: [0, -2, 0], // Reduced from -4
              }}
              transition={{
                duration: 6, // Slower
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.08, // Reduced from 1.15
                filter:
                  'brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
                transition: { duration: 0.3 },
              }}
            >
              <MockImage
                src={logoShowCase}
                alt='Logo Showcase'
                width={90}
                height={90}
                className='md:w-[123px] md:h-[129px] relative z-10'
              />

              {/* Single energy burst - much more subtle */}
              <motion.div
                className='absolute -top-2 -right-2 w-2 h-2 bg-blue-400/50 rounded-full'
                animate={{
                  scale: [0, 0.8, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 4,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={lineVariants}
          className='absolute right-0 hidden md:block'
        >
          <MockImage
            src={showcaseLine}
            alt='Showcase line'
            width={328}
            height={321}
            className='rotate-180 scale-y-75'
          />
        </motion.div>
      </motion.div>

      {/* Second Grid - Consistent simplified styling */}
      <motion.div
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'
      >
        {/* Simplified cards following same pattern */}
        {/* Card 5 - 24/7 Availability (Updated) */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-teal-900/40 to-cyan-900/40 border border-teal-400/20 relative overflow-hidden group'
          whileHover={{
            scale: 1.01,
            y: -4,
            borderColor: 'rgba(20, 184, 166, 0.3)',
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <motion.div
              className='mb-4'
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Clock className='w-12 h-12 md:w-16 md:h-16 text-white' />
            </motion.div>

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              24/7
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
              whileHover={{ color: '#5eead4' }}
              transition={{ duration: 0.2 }}
            >
              Availability
            </motion.p>
          </div>
        </motion.div>

        {/* Card 6 - Reliable Service (Updated) */}
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-emerald-900/40 to-green-900/40 border border-emerald-400/20 relative overflow-hidden group'
          whileHover={{
            scale: 1.01,
            y: -4,
            borderColor: 'rgba(52, 211, 153, 0.3)',
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <div className='flex flex-col items-center justify-center h-full relative z-10'>
            <motion.div
              className='mb-4'
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.1 }}
            >
              <CheckCircle className='w-12 h-12 md:w-16 md:h-16 text-white' />
            </motion.div>

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Reliable
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
              whileHover={{ color: '#6ee7b7' }}
              transition={{ duration: 0.2 }}
            >
              Service
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden'
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='relative'
          >
            <motion.div
              className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-green-400/20 rounded-full'
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <MockImage
              src={shield}
              alt='Shield Icon'
              width={60}
              height={60}
              className='md:w-[100px] md:h-[100px] relative z-10'
            />
          </motion.div>

          <div className='text-center md:text-left relative z-10'>
            <motion.h3
              className='text-3xl md:text-[60px] text-white font-medium leading-tight'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Support
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
              whileHover={{ color: '#86efac' }}
              transition={{ duration: 0.2 }}
            >
              Lifetime Assistance
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden'
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='relative'
          >
            <motion.div
              className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-orange-400/20 rounded-full'
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <MockImage
              src={shield}
              alt='Shield Icon'
              width={60}
              height={60}
              className='md:w-[100px] md:h-[100px] relative z-10'
            />
          </motion.div>

          <div className='text-center md:text-left relative z-10'>
            <motion.h3
              className='text-3xl md:text-[60px] text-white font-medium leading-tight'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Skills
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
              whileHover={{ color: '#fed7aa' }}
              transition={{ duration: 0.2 }}
            >
              Expert Craft
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeskShowcase;
