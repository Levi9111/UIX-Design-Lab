'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import person from '../../public/icons/person.svg';
import Image from 'next/image';

type PlanetTextProps = {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  btnText?: string | ReactNode;
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -80, rotate: -5, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' },
  },
};

type FloatingPlanetProps = {
  x: string;
  y: string;
  size: string;
  delay?: number;
  color?: string;
};

// ✨ Animated floating dot (planet)
const FloatingPlanet: React.FC<FloatingPlanetProps> = ({
  x,
  y,
  size,
  delay = 0,
  color = 'white',
}) => (
  <motion.div
    className='absolute rounded-full blur-sm opacity-60'
    style={{
      top: y,
      left: x,
      width: size,
      height: size,
      background: `radial-gradient(circle at center, ${color}, transparent)`,
    }}
    animate={{
      y: ['0px', '10px', '-10px', '0px'],
      x: ['0px', '5px', '-5px', '0px'],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

export const PlanetText: React.FC<PlanetTextProps> = ({
  title,
  subtitle,
  btnText,
}) => {
  return (
    <div className='relative z-10 mx-auto w-full max-w-3xl px-4 py-12 text-center'>
      {/* 🌌 Floating planet dots */}
      <FloatingPlanet x='10%' y='10%' size='8px' delay={0} />
      <FloatingPlanet x='80%' y='5%' size='10px' delay={1.2} />
      <FloatingPlanet x='20%' y='80%' size='6px' delay={2} />
      <FloatingPlanet x='70%' y='60%' size='7px' delay={0.8} />
      <FloatingPlanet x='45%' y='20%' size='5px' delay={1.6} />
      <FloatingPlanet x='60%' y='35%' size='9px' delay={1} />
      <motion.svg
        className='absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2'
        width={300}
        height={300}
        viewBox='0 0 300 300'
        fill='none'
      >
        <motion.circle
          cx={150}
          cy={150}
          r={100}
          stroke='rgba(255,255,255,0.05)'
          strokeWidth={1}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </motion.svg>
      {btnText && (
        <div className='w-full flex items-center justify-center'>
          <motion.button
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.6 }}
            variants={titleVariants}
            className='w-[129px] h-[34px] rounded-[100vw] border border-[#d8e7e2]  flex items-center justify-center gap-1'
          >
            <Image src={person} alt='Person' width={16} height={12} />
            <p className='text-[13px] text-roman-silver font-normal leading-170 tracking-0 font-dm-sans uppercase'>
              {btnText}
            </p>
          </motion.button>
        </div>
      )}
      {/* 🪐 Animated text */}
      <motion.h3
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.6 }}
        variants={titleVariants}
        className='uix-title'
      >
        {title}
      </motion.h3>
      <motion.p
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.6 }}
        variants={subtitleVariants}
        className='uix-text-title'
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
