'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  User,
  TrendingUp,
  DollarSign,
  Star,
  Zap,
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "Max's SaaS Revolution",
    name: 'Max Chen',
    role: 'Founder, CloudFlow',
    description:
      'Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.',
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
      'Lana revamped her online store UX with our design system. Within 3 months, conversions increased by 33%, bounce rates dropped 18%, and customer satisfaction soared with a cleaner UI.',
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
    title: 'NeoBank UX Optimization',
    name: 'Sarah Kim',
    role: 'Product Lead, NeoBank',
    description:
      'The fintech startup streamlined their onboarding flow using our UI/UX framework. Completion rate jumped from 40% to 82% and reduced average user drop-off time by 50%.',
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

const TabletStories = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isInView = useInView(containerRef, { margin: '-50px' });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
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
    <section className='hidden md:block lg:hidden px-6 py-12'>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <div className='flex items-center justify-center gap-2 mb-3'>
          <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
          <h2 className='text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            Success Stories
          </h2>
          <Star className='w-5 h-5 text-yellow-400 fill-yellow-400' />
        </div>
        <p className='text-gray-400 text-base max-w-xl mx-auto'>
          Real transformations from real businesses driving exceptional results.
        </p>
      </motion.div>

      {/* Main Testimonial Container */}
      <motion.div ref={containerRef} className='relative mb-8'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className='max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl'
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Header Bar */}
            <div className='bg-gradient-to-r from-white/5 to-white/10 border-b border-white/10 px-6 py-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-400'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                  <div className='w-3 h-3 rounded-full bg-green-400'></div>
                </div>
                <User className='w-4 h-4 text-white/60' />
                <span className='text-white/80 text-sm font-medium'>
                  {testimonials[activeIndex].title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <Zap className='w-4 h-4 text-white/40' />
              </motion.div>
            </div>

            {/* Main Content */}
            <div className='grid grid-cols-[1fr_280px] gap-8 p-6'>
              {/* Left Content */}
              <div className='space-y-6'>
                {/* Profile Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className='flex items-center gap-4'
                >
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonials[activeIndex].image}
                  </motion.div>
                  <div>
                    <h3 className='text-white font-semibold text-xl leading-tight'>
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className='text-gray-300 text-sm'>
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className='relative'
                >
                  <div className='text-5xl text-white/15 font-serif absolute -top-2 -left-1'>
                    "
                  </div>
                  <p className='text-white/90 text-base leading-relaxed pl-8 relative z-10'>
                    {testimonials[activeIndex].description}
                  </p>
                </motion.div>

                {/* Main Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className='grid grid-cols-2 gap-4'
                >
                  <motion.div
                    className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/20'
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className='flex items-center gap-2 mb-2'>
                      <TrendingUp className='w-4 h-4 text-blue-400' />
                      <span className='text-xs text-blue-300 font-medium'>
                        ROI Increase
                      </span>
                    </div>
                    <p className='text-2xl font-bold text-white'>
                      {testimonials[activeIndex].roi}
                    </p>
                  </motion.div>
                  <motion.div
                    className='bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-4 border border-green-400/20'
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className='flex items-center gap-2 mb-2'>
                      <DollarSign className='w-4 h-4 text-green-400' />
                      <span className='text-xs text-green-300 font-medium'>
                        Revenue Boost
                      </span>
                    </div>
                    <p className='text-2xl font-bold text-white'>
                      {testimonials[activeIndex].revenue}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='space-y-4'
              >
                {/* User Avatar Placeholder */}
                <div className='bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 border border-white/10 aspect-[4/3] flex items-center justify-center'>
                  <div className='text-center'>
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 shadow-lg`}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.3)',
                          '0 0 30px rgba(147, 51, 234, 0.4)',
                          '0 0 20px rgba(59, 130, 246, 0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {testimonials[activeIndex].image}
                    </motion.div>
                    <p className='text-white/70 text-sm'>Profile Image</p>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className='bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 border border-white/10'>
                  <h4 className='text-white font-semibold text-sm mb-3'>
                    Key Metrics
                  </h4>
                  <div className='space-y-3'>
                    {Object.entries(testimonials[activeIndex].stats).map(
                      ([key, value], idx) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                          className='flex justify-between items-center p-2 bg-white/5 rounded-lg'
                        >
                          <span className='text-white/70 text-xs capitalize'>
                            {key.replace(/_/g, ' ')}
                          </span>
                          <span className='text-white text-sm font-medium'>
                            {value}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className='absolute inset-y-1/2 -translate-y-1/2 w-full flex justify-between px-2'>
          <motion.button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className='w-6 h-6 text-white' />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className='w-6 h-6 text-white' />
          </motion.button>
        </div>
      </motion.div>

      {/* Dot Indicators */}
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
    </section>
  );
};

export default TabletStories;
