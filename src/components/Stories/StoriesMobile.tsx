'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  User,
  TrendingUp,
  DollarSign,
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "Max's SaaS Revolution",
    name: 'Max Chen',
    role: 'Founder, CloudFlow',
    description:
      'Implementing AI automation transformed our entire operation. We cut costs by half while boosting productivity by 75%. The results exceeded every expectation.',
    roi: '60%',
    revenue: '45%',
    image: 'MC',
    color: 'from-blue-500 to-purple-600',
    stats: {
      cost_reduction: '50%',
      productivity: '75%',
      growth_rate: '3x',
    },
  },
  {
    id: 2,
    title: "Lana's E-commerce Leap",
    name: 'Lana Rodriguez',
    role: 'CEO, StyleHub',
    description:
      'The UX redesign was a game-changer. Our conversion rate jumped 33% in just 3 months, and customer satisfaction scores are through the roof.',
    roi: '33%',
    revenue: '22%',
    image: 'LR',
    color: 'from-pink-500 to-rose-600',
    stats: {
      conversions: '33%',
      bounce_rate: '-18%',
      satisfaction: '94%',
    },
  },
  {
    id: 3,
    title: 'NeoBank UX Transformation',
    name: 'Sarah Kim',
    role: 'Product Lead, NeoBank',
    description:
      'Our new onboarding flow is incredible. Completion rates doubled from 40% to 82%, and user drop-off practically disappeared.',
    roi: '42%',
    revenue: '30%',
    image: 'SK',
    color: 'from-green-500 to-teal-600',
    stats: {
      completion: '82%',
      drop_off: '-50%',
      onboarding: '2x',
    },
  },
];

const MobileStories = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isInView = useInView(containerRef, { margin: '-50px' });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className='block md:hidden py-8 px-4 '>
      {/* Main Testimonial Container - Fixed overflow issues */}
      <div
        ref={containerRef}
        className='relative mb-6 overflow-hidden  min-h-[480px]'
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother motion
            }}
            className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl w-full'
          >
            {/* Header with Avatar */}
            <div className='flex items-center gap-4 mb-6'>
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {testimonials[activeIndex].image}
              </motion.div>
              <div className='flex-1 min-w-0'>
                <h3 className='text-white font-semibold text-lg leading-tight truncate'>
                  {testimonials[activeIndex].name}
                </h3>
                <p className='text-gray-300 text-sm truncate'>
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <motion.div
                className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <User className='w-4 h-4 text-white/60' />
              </motion.div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='mb-6'
            >
              <div className='text-4xl text-white/20 font-serif mb-2 leading-none'>
                "
              </div>
              <p className='text-white/90 text-base leading-relaxed -mt-6 pl-6'>
                {testimonials[activeIndex].description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='grid grid-cols-2 gap-4 mb-6'
            >
              <div className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border border-blue-400/20'>
                <div className='flex items-center gap-2 mb-2'>
                  <TrendingUp className='w-4 h-4 text-blue-400 flex-shrink-0' />
                  <span className='text-xs text-blue-300 font-medium'>
                    ROI Increase
                  </span>
                </div>
                <p className='text-2xl font-bold text-white'>
                  {testimonials[activeIndex].roi}
                </p>
              </div>
              <div className='bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-4 border border-green-400/20'>
                <div className='flex items-center gap-2 mb-2'>
                  <DollarSign className='w-4 h-4 text-green-400 flex-shrink-0' />
                  <span className='text-xs text-green-300 font-medium'>
                    Revenue Boost
                  </span>
                </div>
                <p className='text-2xl font-bold text-white'>
                  {testimonials[activeIndex].revenue}
                </p>
              </div>
            </motion.div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='flex justify-between text-center border-t border-white/10 pt-4'
            >
              {Object.entries(testimonials[activeIndex].stats).map(
                ([key, value], idx) => (
                  <div key={key} className='flex-1 min-w-0'>
                    <p className='text-lg font-bold text-white'>{value}</p>
                    <p className='text-xs text-gray-400 capitalize truncate'>
                      {key.replace('_', ' ')}
                    </p>
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className='absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors z-10'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className='w-5 h-5 text-white' />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className='absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors z-10'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className='w-5 h-5 text-white' />
        </motion.button>
      </div>

      {/* Enhanced Dot Indicators */}
      <div className='flex justify-center items-center gap-3'>
        {testimonials.map((_, i) => (
          <motion.button
            key={`dot-${i}`}
            onClick={() => goToSlide(i)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {i === activeIndex && isAutoPlaying && (
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400'
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Auto-play indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAutoPlaying ? 1 : 0 }}
        className='text-center mt-4'
      >
        <p className='text-xs text-gray-400'>Auto-playing • Tap to pause</p>
      </motion.div>
    </section>
  );
};

export default MobileStories;
