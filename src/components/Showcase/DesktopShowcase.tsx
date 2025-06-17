'use client';

import Image from 'next/image';
import {
  motion,
  Variants,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, RefObject, useEffect, useState } from 'react';
import shield from '../../../public/icons/shield.svg';
import showcaseLine from '../../../public/icons/showcase-line.svg';
import logoShowCase from '../../../public/logos/logo-showcase.svg';
import { PlanetText } from '../elements/PlanetText';

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

// Advanced animation variants with space theme
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 80,
      duration: 0.8,
    },
  },
};

const centerImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 60,
      delay: 0.8,
      duration: 1.2,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      pathLength: { duration: 2, ease: 'easeInOut', delay: 0.5 },
      opacity: { duration: 0.8, delay: 0.3 },
      scale: { duration: 1, delay: 0.6 },
    },
  },
};

const DeskShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: '-50px',
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const centerX = useSpring(mouseX, springConfig);
  const centerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
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
    <div className='md:block hidden max-w-7xl mx-auto' ref={ref}>
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='text-center'
      >
        {/* First Grid - Enhanced with gravitational hover effects */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-8 md:mb-0 md:mt-20'
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              rotateY: 5,
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Animated background particles */}
            <motion.div
              className='absolute inset-0 opacity-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1 h-1 bg-blue-300 rounded-full'
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
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
                scale: 1.1,
                rotateY: 15,
                rotateX: 10,
              }}
              transition={{ duration: 0.4 }}
              className='relative'
            >
              {/* Orbital ring around icon */}
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-blue-400/30 rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
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
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                100+
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#93c5fd' }}
                transition={{ duration: 0.3 }}
              >
                Project completed
              </motion.p>
            </div>
          </motion.div>

          {/* Card 2 - Similar structure but different timing */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              rotateY: -5,
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Different particle pattern */}
            <motion.div
              className='absolute inset-0 opacity-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1.5 h-1.5 bg-purple-300 rounded-full'
                  animate={{
                    x: [0, Math.random() * 150 - 75],
                    y: [0, Math.random() * 150 - 75],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
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
                scale: 1.1,
                rotateY: -15,
                rotateX: -10,
              }}
              transition={{ duration: 0.4 }}
              className='relative'
            >
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-purple-400/30 rounded-full'
                animate={{ rotate: -360 }}
                transition={{
                  duration: 12,
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
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                Result
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#c4b5fd' }}
                transition={{ duration: 0.3 }}
              >
                98% completed
              </motion.p>
            </div>
          </motion.div>

          {/* Gradient Cards */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-400/20 text-center md:text-left relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              backgroundImage:
                'linear-gradient(135deg, rgba(30, 58, 138, 0.6), rgba(88, 28, 135, 0.6))',
              borderColor: 'rgba(59, 130, 246, 0.4)',
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white relative z-10'
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              98%
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 relative z-10'
              whileHover={{ color: '#93c5fd' }}
              transition={{ duration: 0.3 }}
            >
              Project completed
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-400/20 text-center md:text-left relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              backgroundImage:
                'linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(131, 24, 67, 0.6))',
              borderColor: 'rgba(168, 85, 247, 0.4)',
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white relative z-10'
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              98%
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 relative z-10'
              whileHover={{ color: '#c4b5fd' }}
              transition={{ duration: 0.3 }}
            >
              Project completed
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Center Feature Image - Planetary System */}
        <motion.div
          variants={centerImageVariants}
          className='max-w-[300px] md:max-w-[1013px] w-full mx-auto flex items-center justify-center my-10 md:my-20 relative'
          style={{
            x: centerX,
            y: centerY,
          }}
        >
          {/* Side decorative lines */}
          <motion.div
            variants={lineVariants}
            className='absolute left-0 hidden md:block'
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <MockImage
              src={showcaseLine}
              alt='Showcase line'
              width={328}
              height={321}
              className='scale-y-75'
            />
          </motion.div>

          {/* Main planetary system */}
          <motion.div
            className='size-[250px] md:size-[328px] rounded-full border border-blue-300/30 p-[14px] flex items-center justify-center relative overflow-hidden'
            whileHover={{
              scale: 1.1,
              borderColor: 'rgba(59, 130, 246, 0.6)',
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(59, 130, 246, 0.1)',
                '0 0 80px rgba(59, 130, 246, 0.3)',
                '0 0 40px rgba(59, 130, 246, 0.1)',
              ],
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.6 },
            }}
          >
            {/* Multiple orbital rings */}
            <motion.div
              className='absolute inset-0 rounded-full border border-blue-300/20'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.1) 100%)',
              }}
            />
            <motion.div
              className='absolute inset-4 rounded-full border border-purple-300/15'
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{
                background:
                  'conic-gradient(from 180deg, transparent 60%, rgba(168, 85, 247, 0.08) 100%)',
              }}
            />
            <motion.div
              className='absolute inset-8 rounded-full border border-pink-300/10'
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{
                background:
                  'conic-gradient(from 90deg, transparent 80%, rgba(236, 72, 153, 0.05) 100%)',
              }}
            />

            {/* Orbiting satellites */}
            <motion.div
              className='absolute inset-0'
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className='absolute w-3 h-3 bg-blue-400 rounded-full shadow-lg'
                style={{
                  left: '10%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            <motion.div
              className='absolute inset-0'
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className='absolute w-2 h-2 bg-purple-400 rounded-full shadow-lg'
                style={{
                  right: '15%',
                  top: '30%',
                  transform: 'translate(50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </motion.div>

            {/* Central planet */}
            <motion.div
              className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.1), transparent)',
                boxShadow:
                  '2px 2px 60px 0px rgba(59, 130, 246, 0.3) inset, 2px 2px 60px 0px rgba(147, 51, 234, 0.2) inset',
              }}
              animate={{
                boxShadow: [
                  '2px 2px 60px 0px rgba(59, 130, 246, 0.3) inset, 2px 2px 60px 0px rgba(147, 51, 234, 0.2) inset',
                  '2px 2px 100px 0px rgba(59, 130, 246, 0.5) inset, 2px 2px 100px 0px rgba(147, 51, 234, 0.3) inset',
                  '2px 2px 60px 0px rgba(59, 130, 246, 0.3) inset, 2px 2px 60px 0px rgba(147, 51, 234, 0.2) inset',
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Atmospheric particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    i % 3 === 0
                      ? 'bg-blue-300/40'
                      : i % 3 === 1
                      ? 'bg-purple-300/40'
                      : 'bg-pink-300/40'
                  }`}
                  animate={{
                    x: [0, Math.cos((i * 30 * Math.PI) / 180) * 40, 0],
                    y: [0, Math.sin((i * 30 * Math.PI) / 180) * 40, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 6 + (i % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}

              {/* Central logo with sophisticated hover */}
              <motion.div
                className='relative'
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.15,
                  filter:
                    'brightness(1.3) drop-shadow(0 0 30px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.4))',
                  transition: { duration: 0.4 },
                }}
              >
                {/* Energy field behind logo */}
                <motion.div
                  className='absolute inset-0 rounded-full'
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent)',
                    filter: 'blur(20px)',
                  }}
                />

                <MockImage
                  src={logoShowCase}
                  alt='Logo Showcase'
                  width={90}
                  height={90}
                  className='md:w-[123px] md:h-[129px] relative z-10'
                />

                {/* Energy bursts */}
                <motion.div
                  className='absolute -top-3 -right-3 w-4 h-4 bg-blue-400 rounded-full'
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 2,
                  }}
                />
                <motion.div
                  className='absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full'
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.9, 0],
                    rotate: [0, -180],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 1.5,
                    delay: 1,
                  }}
                />
                <motion.div
                  className='absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full'
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 3,
                    delay: 0.5,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={lineVariants}
            className='absolute right-0 hidden md:block'
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
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

        {/* Second Grid - Consistent with first grid styling */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'
        >
          {/* Similar structure as first grid but with different content */}
          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-teal-900/40 to-cyan-900/40 border border-teal-400/20 text-center md:text-left relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              backgroundImage:
                'linear-gradient(135deg, rgba(15, 118, 110, 0.6), rgba(8, 145, 178, 0.6))',
              borderColor: 'rgba(20, 184, 166, 0.4)',
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white relative z-10'
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(20, 184, 166, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              98%
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 relative z-10'
              whileHover={{ color: '#5eead4' }}
              transition={{ duration: 0.3 }}
            >
              Success Rate
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:p-[58px] rounded-[20px] md:rounded-[35px] bg-gradient-to-br from-emerald-900/40 to-green-900/40 border border-emerald-400/20 text-center md:text-left relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              backgroundImage:
                'linear-gradient(135deg, rgba(6, 95, 70, 0.6), rgba(21, 128, 61, 0.6))',
              borderColor: 'rgba(52, 211, 153, 0.4)',
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />

            <motion.h3
              className='text-3xl md:text-[60px] font-medium leading-tight text-white relative z-10'
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(52, 211, 153, 0.8)',
              }}
              transition={{ duration: 0.3 }}
            >
              24/7
            </motion.h3>
            <motion.p
              className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1 relative z-10'
              whileHover={{ color: '#6ee7b7' }}
              transition={{ duration: 0.3 }}
            >
              Availability
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              rotateY: 5,
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Animated background particles */}
            <motion.div
              className='absolute inset-0 opacity-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1 h-1 bg-green-300 rounded-full'
                  animate={{
                    x: [0, Math.random() * 180 - 90],
                    y: [0, Math.random() * 180 - 90],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
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
                scale: 1.1,
                rotateY: 15,
                rotateX: 10,
              }}
              transition={{ duration: 0.4 }}
              className='relative'
            >
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-green-400/30 rounded-full'
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
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
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                Support
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#86efac' }}
                transition={{ duration: 0.3 }}
              >
                Lifetime Assistance
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className='w-full min-h-[200px] md:min-h-[273px] p-6 md:pl-[58px] md:py-[58px] rounded-[20px] md:rounded-[35px] bg-slate-800 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-[29px] relative overflow-hidden'
            whileHover={{
              scale: 1.02,
              y: -8,
              rotateY: -5,
              transition: { duration: 0.4, ease: 'easeOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Different particle pattern */}
            <motion.div
              className='absolute inset-0 opacity-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1.5 h-1.5 bg-orange-300 rounded-full'
                  animate={{
                    x: [0, Math.random() * 160 - 80],
                    y: [0, Math.random() * 160 - 80],
                    opacity: [0, 0.9, 0],
                    scale: [0, 1.3, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 2,
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
                scale: 1.1,
                rotateY: -15,
                rotateX: -10,
              }}
              transition={{ duration: 0.4 }}
              className='relative'
            >
              <motion.div
                className='absolute inset-0 w-20 h-20 md:w-32 md:h-32 border border-orange-400/30 rounded-full'
                animate={{ rotate: -360 }}
                transition={{
                  duration: 14,
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
                  scale: 1.05,
                  textShadow: '0 0 20px rgba(251, 146, 60, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                Skills
              </motion.h3>
              <motion.p
                className='font-medium text-lg md:text-[40px] leading-relaxed text-gray-300 mt-1'
                whileHover={{ color: '#fed7aa' }}
                transition={{ duration: 0.3 }}
              >
                Expert Craft
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeskShowcase;
