// DesktopStories.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import userImage from '../../../public/images/demo-user.png';
import personLinesIcon from '../../../public/icons/person-lines.svg';

const testimonials = [
  {
    title: "Max's SaaS Revolution",
    description:
      'Max, the founder of CloudFlow, implemented AI automation... faster.',
    roi: '60%',
    revenue: '45%',
  },
  {
    title: "Lana's E-commerce Leap",
    description: 'Lana revamped her online store UX... cleaner UI.',
    roi: '33%',
    revenue: '22%',
  },
  {
    title: 'NeoBank UX Optimization',
    description:
      'The fintech startup streamlined their onboarding flow... drop-off.',
    roi: '42%',
    revenue: '30%',
  },
];

const CARD_AUTOPLAY_INTERVAL = 5000;

export default function DesktopStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, CARD_AUTOPLAY_INTERVAL);
    return () => clearInterval(autoplayRef.current!);
  }, [activeIndex]);

  const getStats = (t: any) => [
    { value: t.roi, label: 'Increase in ROI' },
    { value: t.revenue, label: 'Boost in revenue' },
  ];

  return (
    <div className=' overflow-visible hidden lg:block'>
      <div className='relative mt-12 h-[560px]'>
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
              onClick={() => !isActive && setActiveIndex(i)}
              onMouseEnter={() => clearInterval(autoplayRef.current!)}
              onMouseLeave={() => {
                autoplayRef.current = setInterval(() => {
                  setActiveIndex((i) => (i + 1) % testimonials.length);
                }, CARD_AUTOPLAY_INTERVAL);
              }}
            >
              <div className='min-h-[500px] rounded-xl border border-[#cfe7ff]/20 bg-background/90 overflow-hidden shadow-xl'>
                <div className='w-full border-b border-[#cfe7ff]/50 px-7 py-4 flex items-center justify-between'>
                  <Image
                    src={personLinesIcon}
                    alt='icon'
                    width={26}
                    height={19}
                  />
                  <span className='text-granite text-3xl'>⋯</span>
                </div>
                <div className='px-6 md:px-[30px] py-10 md:py-[40px] grid grid-cols-[1fr_435px] gap-[60px]'>
                  <div>
                    <h3 className='font-medium text-[28px] text-[#dfdbe6]'>
                      {t.title}
                    </h3>
                    <p className='mt-3 mb-4 text-base text-[#dfdbe6]/40'>
                      {t.description}
                    </p>
                    <div
                      className='w-full h-1 '
                      style={{
                        background:
                          'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
                      }}
                    />
                    <div className='mt-4 flex gap-4'>
                      {getStats(t).map((stat, idx) => (
                        <div
                          key={idx}
                          className='w-[209px] h-[107px] rounded-lg border-t border-[#dfdbe6]/40 flex flex-col items-center justify-center backdrop-blur-xl'
                        >
                          <h4 className='text-[32px] text-white'>
                            {stat.value}
                          </h4>
                          <p className='text-base text-[#dfdbe6]'>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image
                      src={userImage}
                      alt='user'
                      width={435}
                      height={310}
                      className='rounded-[10px]'
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className='flex justify-center gap-3 mt-8'>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-[10px] h-[10px] rounded-full border ${
              i === activeIndex
                ? 'bg-white border-white scale-110'
                : 'bg-transparent border-white/50 hover:bg-white/20'
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
