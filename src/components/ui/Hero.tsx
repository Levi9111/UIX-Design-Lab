'use client';

import { motion } from 'framer-motion';
import Button from '../elements/Button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id='home'
      className='relative pt-[110px] pb-[100px] md:pt-[170px] md:pb-[185px]'
    >
      {/* Floating decorative elements  */}
      <div className='pointer-events-none absolute w-40 h-40 bg-purple-500/10 blur-2xl rounded-full top-[10%] left-[5%] z-0 animate-pulse' />
      <div className='pointer-events-none absolute w-32 h-32 bg-yellow-400/10 blur-2xl rounded-full bottom-[15%] right-[10%] z-0 animate-ping' />

      <div className='uix-center relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center'>
        <motion.h1
          className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight sm:leading-[1.2] tracking-tight text-platinum'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A Design & Development Agency <br className='break' />
          Specializing in Powerful UI/UX
        </motion.h1>

        <motion.p
          className='mt-4 sm:mt-6 mb-8 sm:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-normal max-w-xl sm:max-w-4xl text-cadet-gray'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to{' '}
          <span className='text-white font-semibold'>UIX Design Lab</span> — a
          team of passionate designers and developers with 4+ years of hands-on
          experience crafting impactful digital products. From intuitive
          interfaces to full-stack platforms, we focus on creating beautiful,
          functional solutions that drive real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button type={2} onClick={() => router.push('/get-in-touch')}>
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
