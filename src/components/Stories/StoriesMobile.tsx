'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import personLinesIcon from '../../../public/icons/person-lines.svg';
import userImage from '../../../public/images/demo-user.png';

const testimonials = [
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

const CARD_INTERVAL = 6000;

const MobileStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, CARD_INTERVAL);

    return () => clearInterval(autoplayRef.current!);
  }, [activeIndex]);

  return (
    <section className='block md:hidden mt-16 px-4 overflow-x-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className='rounded-xl border border-white/20 bg-background/60 backdrop-blur-md p-6 shadow-lg'
        >
          <div className='flex items-center justify-between mb-4'>
            <Image src={personLinesIcon} alt='icon' width={20} height={15} />
            <span className='text-white text-sm'>⋯</span>
          </div>

          <div className='flex justify-center mb-5'>
            <Image
              src={userImage}
              alt='user'
              width={260}
              height={180}
              className='rounded-md'
            />
          </div>

          <h3 className='text-white text-lg font-medium mb-2'>
            {testimonials[activeIndex].title}
          </h3>
          <p className='text-sm text-white/70 mb-4'>
            {testimonials[activeIndex].description}
          </p>

          <div className='flex justify-between text-center'>
            <div>
              <p className='text-xl font-bold text-white'>
                {testimonials[activeIndex].roi}
              </p>
              <p className='text-xs text-white/70'>Increase in ROI</p>
            </div>
            <div>
              <p className='text-xl font-bold text-white'>
                {testimonials[activeIndex].revenue}
              </p>
              <p className='text-xs text-white/70'>Boost in revenue</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default MobileStories;
