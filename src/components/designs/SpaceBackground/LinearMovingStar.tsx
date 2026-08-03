'use client';

import { motion } from 'framer-motion';

export interface LinearMovingStarProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  duration?: number;
  size?: number;
}

export const LinearMovingStar = ({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
  duration = 4,
  size = 2,
}: LinearMovingStarProps) => (
  <motion.div
    className='absolute bg-white rounded-full'
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top: `${startY}vh`,
      left: `${startX}vw`,
      boxShadow: '0 0 8px white',
      opacity: 0.7,
    }}
    initial={{ opacity: 0 }}
    animate={{
      x: `${endX - startX}vw`,
      y: `${endY - startY}vh`,
      opacity: [0, 1, 0],
    }}
    transition={{
      delay,
      duration,
      repeat: Infinity,
      repeatDelay: 2,
      ease: 'linear',
    }}
  />
);

export default LinearMovingStar;
