'use client';

import { PlanetText } from './PlanetText';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import userImage from '../../public/images/demo-user.png';
import personLinesIcon from '../../public/icons/person-lines.svg';

type Testimonial = {
  title: string;
  description: string;
  roi: string;
  revenue: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Max's SaaS Revolution",
    description:
      'Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.',
    roi: '60%',
    revenue: '45%',
  },
  {
    title: "Lana's E-commerce Leap",
    description:
      'Lana revamped her online store UX with our design system. Within 3 months, conversions increased by 33%, bounce rates dropped 18%, and customer satisfaction soared with a cleaner UI.',
    roi: '33%',
    revenue: '22%',
  },
  {
    title: 'NeoBank UX Optimization',
    description:
      'The fintech startup streamlined their onboarding flow using our UI/UX framework. Completion rate jumped from 40% to 82% and reduced average user drop-off time by 50%.',
    roi: '42%',
    revenue: '30%',
  },
];

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    };

    startAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    } else if (info.offset.x < -swipeThreshold) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const navigateToSlide = (index: number) => {
    stopAutoplay();
    setActiveIndex(index);
    setTimeout(() => {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }, 3000);
  };

  // Mobile animation variants
  const mobileCardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
    }),
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  return (
    <section className='md:pt-[180px] overflow-hidden'>
      <div className='uix-center'>
        <PlanetText
          btnText='Our clients'
          title='Hear Directly from Our Valued Partners'
          subtitle='Discover how businesses and creators have achieved measurable results by leveraging our expertise, transforming challenges into opportunities, and driving sustainable growth through innovative solutions.'
        />
      </div>

      {/* Desktop Carousel - Keep Original Structure with Enhanced Animations */}
      <div className='hidden md:block relative mt-12 h-[640px] sm:h-[600px] md:h-[560px]'>
        {testimonials.map((testimonial, i) => {
          const isActive = i === activeIndex;
          const isPrev =
            i === (activeIndex - 1 + testimonials.length) % testimonials.length;
          const isNext = i === (activeIndex + 1) % testimonials.length;

          let transformStyle = 'opacity-0 scale-90 -translate-y-10 z-0';
          if (isPrev) {
            transformStyle =
              'opacity-50 scale-95 -translate-y-12 -rotate-1 z-10';
          }
          if (isNext) {
            transformStyle = 'opacity-50 scale-95 -translate-y-6 rotate-1 z-10';
          }
          if (isActive) {
            transformStyle = 'opacity-100 scale-100 translate-y-0 z-20';
          }

          return (
            <motion.div
              key={i}
              className={`absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[980px] transition-all duration-700 ease-[cubic-bezier(0.6,0.05,0.28,0.91)] transform ${transformStyle}`}
              style={{
                filter: isActive ? 'none' : 'blur(0.4px) brightness(0.95)',
              }}
              onClick={() => !isActive && navigateToSlide(i)}
              onMouseEnter={stopAutoplay}
              onMouseLeave={() => {
                autoplayRef.current = setInterval(() => {
                  setActiveIndex((prev) => (prev + 1) % testimonials.length);
                }, 5000);
              }}
              whileHover={!isActive ? { scale: 0.98, y: -2 } : { y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.div
                className='min-h-[457px] md:min-h-[500px] rounded-xl border border-[#cfe7ff]/20 bg-background overflow-hidden shadow-xl'
                animate={
                  isActive
                    ? {
                        boxShadow: [
                          '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                          '0 25px 50px -12px rgba(207, 231, 255, 0.1)',
                          '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        ],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Header */}
                <div className='w-full border-b border-[#cfe7ff]/50 px-7 py-4 flex items-center justify-between'>
                  <motion.div
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Image
                      src={personLinesIcon}
                      alt='Person icon'
                      width={26}
                      height={19}
                    />
                  </motion.div>
                  <motion.p
                    className='text-granite text-3xl'
                    animate={isActive ? { rotate: [0, 90, 180, 270, 360] } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    ⋯
                  </motion.p>
                </div>

                {/* Body */}
                <div className='w-full h-full px-6 md:px-[30px] py-10 md:py-[40px] grid grid-cols-1 md:grid-cols-[1fr_435px] gap-6 md:gap-[60px]'>
                  <div className='w-full h-full'>
                    <motion.h3
                      className='font-medium font-dm-sans text-[24px] md:text-[28px] leading-140 tracking-[-0.28px] text-[#dfdbe6]'
                      animate={isActive ? { opacity: [0.7, 1, 0.7] } : {}}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {testimonial.title}
                    </motion.h3>
                    <p className='mt-3 mb-4 text-base leading-170 tracking-[-0.5px] text-[#dfdbe6]/40'>
                      {testimonial.description}
                    </p>

                    <motion.div
                      className='w-full h-[3px]'
                      style={{
                        background:
                          'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
                      }}
                      animate={isActive ? { scaleX: [0.8, 1, 0.8] } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className='mt-4 flex flex-col sm:flex-row items-center justify-center gap-4'>
                      {[
                        { value: testimonial.roi, label: 'Increase in ROI' },
                        {
                          value: testimonial.revenue,
                          label: 'Boost in revenue',
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className='w-full sm:w-[209px] h-[107px] rounded-lg border-t border-t-[#dfdbe6]/40 flex flex-col items-center justify-center'
                          style={{
                            boxShadow: '0px 2px 1px 0px #CFE7FF33 inset',
                            backdropFilter: 'blur(120px)',
                          }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          animate={
                            isActive
                              ? {
                                  y: [0, -2, 0],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                            repeatDelay: 3,
                          }}
                        >
                          <motion.h4
                            className='font-dm-sans font-normal text-[32px] leading-8 tracking-0 text-white'
                            animate={
                              isActive
                                ? {
                                    scale: [1, 1.05, 1],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                              repeatDelay: 4,
                            }}
                          >
                            {stat.value}
                          </motion.h4>
                          <p className='mt-1 text-base text-center text-[#dfdbe6]'>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    animate={
                      isActive
                        ? {
                            scale: [1, 1.01, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Image
                      src={userImage}
                      alt='Review user'
                      width={435}
                      height={310}
                      className='rounded-[10px] hidden md:block'
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Carousel - Enhanced with Framer Motion */}
      <div className='block md:hidden relative mt-8'>
        <div className='overflow-hidden px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              variants={mobileCardVariants}
              initial='enter'
              animate='center'
              exit='exit'
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.98, rotateY: 5 }}
              className='w-full'
            >
              <motion.div
                className='w-full rounded-xl border border-[#cfe7ff]/20 bg-background overflow-hidden shadow-xl'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Header */}
                <motion.div
                  className='w-full border-b border-[#cfe7ff]/50 px-4 py-3 flex items-center justify-between'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={personLinesIcon}
                      alt='Person icon'
                      width={20}
                      height={15}
                    />
                  </motion.div>
                  <motion.p
                    className='text-white text-sm'
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    ⋯
                  </motion.p>
                </motion.div>

                {/* Body */}
                <div className='p-6'>
                  {/* Image - Mobile First */}
                  <motion.div
                    className='w-full mb-6 flex justify-center'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <Image
                      src={userImage}
                      alt='Review user'
                      width={280}
                      height={200}
                      className='rounded-[10px] w-full max-w-[280px] h-auto'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.h3
                      className='font-medium font-dm-sans text-lg sm:text-xl leading-140 tracking-[-0.28px] text-[#dfdbe6] mb-3'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {testimonials[activeIndex].title}
                    </motion.h3>

                    <motion.p
                      className='text-sm leading-170 tracking-[-0.5px] text-[#dfdbe6]/70 mb-6'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {testimonials[activeIndex].description}
                    </motion.p>

                    <motion.div
                      className='w-full h-[2px] mb-6'
                      style={{
                        background:
                          'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 2 }}
                    />

                    <div className='flex gap-3'>
                      {[
                        {
                          value: testimonials[activeIndex].roi,
                          label: 'Increase in ROI',
                        },
                        {
                          value: testimonials[activeIndex].revenue,
                          label: 'Boost in revenue',
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className='flex-1 h-20 rounded-lg border-t border-t-[#dfdbe6]/40 flex flex-col items-center justify-center'
                          style={{
                            boxShadow: '0px 2px 1px 0px #CFE7FF33 inset',
                            backdropFilter: 'blur(120px)',
                          }}
                          variants={statsVariants}
                          initial='hidden'
                          animate='visible'
                          custom={index}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.h4
                            className='font-dm-sans font-normal text-xl sm:text-2xl leading-6 text-white'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 1 + index * 0.1,
                              type: 'spring',
                            }}
                          >
                            {stat.value}
                          </motion.h4>
                          <p className='mt-1 text-xs text-center text-[#dfdbe6]'>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe indicator */}
        <motion.div
          className='text-center mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.p
            className='text-[#dfdbe6]/50 text-xs'
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
          >
            ← Swipe to navigate →
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Carousel Dots */}
      <motion.div
        className='w-full mt-10 flex items-center justify-center gap-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => navigateToSlide(i)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-[#FFD369]' : 'bg-[#ffffff33]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            {i === activeIndex && (
              <motion.div
                className='absolute -inset-1 rounded-full bg-[#FFD369]/30'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default Stories;
