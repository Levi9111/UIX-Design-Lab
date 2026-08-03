'use client';

import { motion } from 'framer-motion';

const ShootingStar = () => (
  <div className='absolute inset-0 pointer-events-none overflow-hidden'>
    <div className='shooting-star shooting-star-1' />
    <div className='shooting-star shooting-star-2' />
    <div className='shooting-star shooting-star-3' />
  </div>
);

const Comet = ({
  startX,
  startY,
  delay,
  size = 2,
}: {
  startX: number;
  startY: number;
  delay: number;
  size?: number;
}) => (
  <motion.div
    className='absolute'
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: 'white',
      borderRadius: '50%',
      top: `${startY}%`,
      left: `${startX}%`,
      boxShadow: '0 0 12px white, 0 0 24px white',
      filter: 'blur(0.5px)',
    }}
    initial={{ opacity: 0 }}
    animate={{
      x: ['0%', '100%'],
      y: ['0%', '50%', '100%'],
      rotate: [0, 30],
      opacity: [0, 1, 0],
    }}
    transition={{
      delay,
      duration: 3,
      repeat: Infinity,
      repeatDelay: 5,
      ease: 'easeOut',
    }}
  />
);

const NebulaBackground = () => {
  return (
    <div className='pointer-events-none fixed inset-0 -z-50 overflow-hidden'>
      {/* Subtle glowing nebula with reduced intensity */}
      <div className='absolute inset-0'>
        <div
          className='absolute -top-40 -left-40 w-[900px] h-[900px] bg-pink-400 mix-blend-screen opacity-5 blur-[60px]'
          style={{ borderRadius: '50%' }}
        />
        <div
          className='absolute top-1/2 left-[70%] w-[200px] h-[200px] bg-indigo-300 mix-blend-screen opacity-30 blur-[70px]'
          style={{ borderRadius: '50%' }}
        />
        <div
          className='absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-400 mix-blend-screen opacity-[0.04] blur-[50px]'
          style={{ borderRadius: '50%' }}
        />
      </div>

      {/* Shooting stars */}
      <ShootingStar />
      <ShootingStar />

      {/* Comets */}
      <Comet startX={-10} startY={20} delay={2} />
      <Comet startX={-20} startY={40} delay={5} />
      <Comet startX={-30} startY={60} delay={7} />
    </div>
  );
};

export default NebulaBackground;
