'use client';

import Image from 'next/image';
import personLinesIcon from '../../../public/icons/person-lines.svg';
import userImage from '../../../public/images/demo-user.png';
import { useState, useEffect, useRef } from 'react';

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

const TabletStories = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className='hidden md:block lg:hidden px-6 py-10'>
      <div className='max-w-3xl mx-auto rounded-xl border border-[#cfe7ff]/20 bg-background/80 shadow-xl overflow-hidden'>
        <div className='flex items-center justify-between border-b border-[#cfe7ff]/50 px-6 py-4'>
          <Image src={personLinesIcon} alt='Icon' width={24} height={18} />
          <span className='text-white text-2xl'>⋯</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 px-6 py-8 items-center'>
          <div>
            <h3 className='text-xl font-semibold text-[#dfdbe6]'>
              {testimonial.title}
            </h3>
            <p className='mt-3 text-sm text-[#dfdbe6]/70'>
              {testimonial.description}
            </p>
            <div className='mt-6 grid grid-cols-2 gap-4'>
              <div className='rounded-lg border-t border-[#dfdbe6]/40 p-4 text-center'>
                <h4 className='text-xl text-white'>{testimonial.roi}</h4>
                <p className='text-sm text-[#dfdbe6]'>Increase in ROI</p>
              </div>
              <div className='rounded-lg border-t border-[#dfdbe6]/40 p-4 text-center'>
                <h4 className='text-xl text-white'>{testimonial.revenue}</h4>
                <p className='text-sm text-[#dfdbe6]'>Boost in revenue</p>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <Image
              src={userImage}
              alt='User'
              width={260}
              height={200}
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabletStories;
