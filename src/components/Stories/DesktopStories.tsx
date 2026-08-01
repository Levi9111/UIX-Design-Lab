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
      'Max, the founder of CloudFlow, implemented AI automation that transformed our entire operation. We cut operational costs by half while boosting team productivity by 75%. The AI-driven workflows eliminated manual bottlenecks and created seamless processes that scale effortlessly. The results exceeded every expectation and revolutionized how we approach business automation.',
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
      'Lana revamped her online store UX with a complete design overhaul that focused on user psychology and conversion optimization. The new interface reduced friction points, improved product discovery, and created an intuitive shopping journey. Our conversion rate jumped 33% in just 3 months, with customer satisfaction scores reaching new heights and creating a cleaner, more engaging UI.',
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
      'The fintech startup streamlined their onboarding flow with a focus on reducing user friction and eliminating unnecessary steps. Our new progressive disclosure approach and intelligent form design doubled completion rates from 40% to 82%. User drop-off practically disappeared as we created a seamless, trust-building experience that guides users naturally through account creation.',
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

const DesktopStories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isInView = useInView(containerRef, { margin: '-100px' });

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
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <section className='hidden lg:block py-16 px-8'>
      {/* Main Testimonial Container */}
      <div ref={containerRef} className='relative mb-12'>
        <div className='uix-center mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className='bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl'
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Header Bar */}
              <div className='bg-gradient-to-r from-white/5 to-white/10 border-b border-white/10 px-8 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex gap-2'>
                    <div className='w-3 h-3 rounded-full bg-red-400'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                    <div className='w-3 h-3 rounded-full bg-green-400'></div>
                  </div>
                  <User className='w-5 h-5 text-white/60' />
                  <span className='text-white/80 text-sm font-medium'>
                    {testimonials[activeIndex].title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Zap className='w-5 h-5 text-white/40' />
                </motion.div>
              </div>

              {/* Main Content */}
              <div className='grid grid-cols-[1fr_400px] gap-12 p-8'>
                {/* Left Content */}
                <div className='space-y-8'>
                  {/* Profile Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='flex items-center gap-6'
                  >
                    <motion.div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-2xl shadow-2xl`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonials[activeIndex].image}
                    </motion.div>
                    <div>
                      <h3 className='text-white font-bold text-2xl leading-tight'>
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className='text-gray-300 text-lg'>
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='relative'
                  >
                    <div className='text-8xl text-white/10 font-serif absolute -top-4 -left-2'>
                      "
                    </div>
                    <p className='text-white/90 text-lg leading-relaxed pl-12 relative z-10'>
                      {testimonials[activeIndex].description}
                    </p>
                  </motion.div>

                  {/* Main Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className='grid grid-cols-2 gap-6'
                  >
                    <motion.div
                      className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/20'
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className='flex items-center gap-3 mb-3'>
                        <TrendingUp className='w-6 h-6 text-blue-400' />
                        <span className='text-sm text-blue-300 font-medium'>
                          ROI Increase
                        </span>
                      </div>
                      <p className='text-4xl font-bold text-white'>
                        {testimonials[activeIndex].roi}
                      </p>
                    </motion.div>
                    <motion.div
                      className='bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-6 border border-green-400/20'
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className='flex items-center gap-3 mb-3'>
                        <DollarSign className='w-6 h-6 text-green-400' />
                        <span className='text-sm text-green-300 font-medium'>
                          Revenue Boost
                        </span>
                      </div>
                      <p className='text-4xl font-bold text-white'>
                        {testimonials[activeIndex].revenue}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Right Sidebar - Additional Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className='space-y-6'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10'>
                    <h4 className='text-white font-semibold text-lg mb-6'>
                      Key Metrics
                    </h4>
                    <div className='space-y-6'>
                      {Object.entries(testimonials[activeIndex].stats).map(
                        ([key, value], idx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + idx * 0.1, duration: 0.4 }}
                            className='flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5'
                          >
                            <span className='text-gray-300 text-sm capitalize'>
                              {key.replace('_', ' ')}
                            </span>
                            <span className='text-white font-bold text-xl'>
                              {value}
                            </span>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className='bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10'>
                    <h4 className='text-white font-semibold text-lg mb-4'>
                      Auto-Progress
                    </h4>
                    <div className='relative'>
                      <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                        {isAutoPlaying && (
                          <motion.div
                            className='h-full bg-gradient-to-r from-blue-400 to-purple-400'
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 6, ease: 'linear' }}
                            key={`progress-${activeIndex}`}
                          />
                        )}
                      </div>
                      <p className='text-xs text-gray-400 mt-2'>
                        {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
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

      {/* Enhanced Dot Indicators */}
      <div className='flex justify-center items-center gap-4 mb-8'>
        {testimonials.map((_, i) => (
          <motion.button
            key={`dot-${i}`}
            onClick={() => goToSlide(i)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              i === activeIndex
                ? 'w-12 h-4 bg-white shadow-lg'
                : 'w-4 h-4 bg-white/30 hover:bg-white/50 hover:scale-110'
            }`}
            whileHover={{ scale: i === activeIndex ? 1 : 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {i === activeIndex && isAutoPlaying && (
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Auto-play Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-center'
      >
        <p className='text-sm text-gray-400'>
          {isAutoPlaying
            ? 'Auto-playing • Hover to pause'
            : 'Paused • Move cursor away to resume'}
        </p>
      </motion.div>
    </section>
  );
};

export default DesktopStories;
