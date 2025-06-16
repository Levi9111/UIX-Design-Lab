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

const CARD_AUTOPLAY_INTERVAL = 5000;

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic with cleanup
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, CARD_AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplayRef.current!);
  }, [activeIndex]);

  const handleManualNav = (index: number) => {
    setActiveIndex(index); // autoplay handled in useEffect
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const tLen = testimonials.length;
    if (info.offset.x > 50) setActiveIndex((i) => (i - 1 + tLen) % tLen);
    else if (info.offset.x < -50) setActiveIndex((i) => (i + 1) % tLen);
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },
    exit: {
      opacity: 0,
      x: -80,
      scale: 0.96,
      transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },
  };

  const getStats = (t: Testimonial) => [
    { value: t.roi, label: 'Increase in ROI' },
    { value: t.revenue, label: 'Boost in revenue' },
  ];

  return (
    <>
      <section className='md:pt-[180px] overflow-hidden'>
        <div className='uix-center'>
          <PlanetText
            btnText='Our clients'
            title='Hear Directly from Our Valued Partners'
            subtitle='Discover how businesses and creators have achieved measurable results by leveraging our expertise, transforming challenges into opportunities, and driving sustainable growth through innovative solutions.'
          />
        </div>

        {/* Desktop carousel */}
        <div className='hidden md:block relative mt-12 h-[560px]'>
          {testimonials.map((t, i) => {
            const pos =
              (i - activeIndex + testimonials.length) % testimonials.length;
            const isActive = pos === 0;
            const style =
              pos === 0
                ? 'opacity-100 scale-100 z-20'
                : pos === 1 || (pos === -2 && testimonials.length > 2)
                ? 'opacity-50 scale-95 z-10'
                : pos === testimonials.length - 1
                ? 'opacity-50 scale-95 z-10'
                : 'opacity-0 scale-90 z-0 pointer-events-none';

            return (
              <motion.div
                key={i}
                className={`absolute left-1/2 -translate-x-1/2 w-full max-w-[980px] transition-all duration-700 ${style}`}
                style={{
                  filter: isActive ? 'none' : 'blur(0.4px) brightness(0.95)',
                }}
                onClick={() => !isActive && handleManualNav(i)}
                onMouseEnter={() => clearInterval(autoplayRef.current!)}
                onMouseLeave={() => {
                  autoplayRef.current = setInterval(() => {
                    setActiveIndex((i) => (i + 1) % testimonials.length);
                  }, CARD_AUTOPLAY_INTERVAL);
                }}
              >
                <motion.div className='min-h-[500px] rounded-xl border border-[#cfe7ff]/20 bg-background/90 overflow-hidden shadow-xl'>
                  {/* Header */}
                  <div className='w-full border-b border-[#cfe7ff]/50 px-7 py-4 flex items-center justify-between'>
                    <Image
                      src={personLinesIcon}
                      alt='Person icon'
                      width={26}
                      height={19}
                    />
                    <span className='text-granite text-3xl'>⋯</span>
                  </div>
                  {/* Body */}
                  <div className='w-full h-full px-6 md:px-[30px] py-10 md:py-[40px] grid grid-cols-1 md:grid-cols-[1fr_435px] gap-6 md:gap-[60px]'>
                    <div>
                      <h3 className='font-medium font-dm-sans text-[24px] md:text-[28px] leading-140 tracking-[-0.28px] text-[#dfdbe6]'>
                        {t.title}
                      </h3>
                      <p className='mt-3 mb-4 text-base leading-170 tracking-[-0.5px] text-[#dfdbe6]/40'>
                        {t.description}
                      </p>
                      <div
                        className='w-full h-[3px]'
                        style={{
                          background:
                            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
                        }}
                      />
                      <div className='mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 '>
                        {getStats(t).map((stat, idx) => (
                          <div
                            key={idx}
                            className='relative w-full sm:w-[209px] h-[107px] rounded-lg border-t border-t-[#dfdbe6]/40 flex flex-col items-center justify-center overflow-hidden'
                            style={{
                              boxShadow: '0px 2px 1px 0px #CFE7FF33 inset',
                              backdropFilter: 'blur(120px)',
                            }}
                          >
                            {/* Gradient from the right side */}
                            <div className='absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none' />

                            <h4 className='font-dm-sans font-normal text-[32px] leading-8 tracking-0 text-white'>
                              {stat.value}
                            </h4>
                            <p className='mt-1 text-base text-center text-[#dfdbe6]'>
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Image
                        src={userImage}
                        alt='Review user'
                        width={435}
                        height={310}
                        className='rounded-[10px] hidden md:block'
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile carousel */}
        <div className='block md:hidden relative mt-8'>
          <div className='overflow-hidden px-4'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={handleDragEnd}
                className='w-full'
              >
                <div className='w-full rounded-xl border border-[#cfe7ff]/20 bg-background/40 overflow-hidden shadow-xl'>
                  {/* Header */}
                  <div className='w-full border-b border-[#cfe7ff]/50 px-4 py-3 flex items-center justify-between'>
                    <Image
                      src={personLinesIcon}
                      alt='Person icon'
                      width={20}
                      height={15}
                    />
                    <span className='text-white text-sm'>⋯</span>
                  </div>
                  {/* Body */}
                  <div className='p-6'>
                    <div className='w-full mb-6 flex justify-center'>
                      <Image
                        src={userImage}
                        alt='Review user'
                        width={280}
                        height={200}
                        className='rounded-[10px] w-full max-w-[280px] h-auto'
                      />
                    </div>
                    <h3 className='font-medium font-dm-sans text-lg sm:text-xl leading-140 tracking-[-0.28px] text-[#dfdbe6] mb-3'>
                      {testimonials[activeIndex].title}
                    </h3>
                    <p className='text-sm leading-170 tracking-[-0.5px] text-[#dfdbe6]/70 mb-6'>
                      {testimonials[activeIndex].description}
                    </p>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                      {getStats(testimonials[activeIndex]).map((stat, idx) => (
                        <div
                          key={idx}
                          className='w-full sm:w-[140px] h-[70px] rounded-lg border-t border-t-[#dfdbe6]/40 flex flex-col items-center justify-center'
                          style={{
                            boxShadow: '0px 2px 1px 0px #CFE7FF33 inset',
                            backdropFilter: 'blur(120px)',
                          }}
                        >
                          <h4 className='font-dm-sans font-normal text-xl text-white'>
                            {stat.value}
                          </h4>
                          <p className='mt-1 text-xs text-center text-[#dfdbe6]'>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Improved Bullet Navigation */}
      <div className='flex justify-center gap-3 mt-8'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-[10px] h-[10px] rounded-full border transition-all duration-300 ${
              index === activeIndex
                ? 'bg-white border-white scale-110'
                : 'bg-transparent border-white/50 hover:bg-white/20'
            }`}
            onClick={() => handleManualNav(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Stories;
