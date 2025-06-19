'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const getStarColor = () =>
  ['#ffffff', '#93c5fd', '#f472b6', '#facc15', '#a855f7', '#5eead4'][
    Math.floor(Math.random() * 6)
  ];

const MobileSpaceBackground = () => {
  const StaticStar = ({
    x,
    y,
    size = 1,
  }: {
    x: number;
    y: number;
    size?: number;
  }) => (
    <div
      className='absolute rounded-full bg-white'
      style={{
        width: size,
        height: size,
        top: `${y}%`,
        left: `${x}%`,
        opacity: 0.6,
      }}
    />
  );

  // Simplified twinkling star with reduced animation complexity
  const SimpleTwinklingStar = ({
    x,
    y,
    size = 1,
    delay = 0,
  }: {
    x: number;
    y: number;
    size?: number;
    delay?: number;
  }) => {
    const [color] = useState(getStarColor());

    return (
      <motion.div
        className='absolute rounded-full bg-white'
        style={{
          width: size,
          height: size,
          top: `${y}%`,
          left: `${x}%`,
          backgroundColor: color,
          opacity: 0.8,
          boxShadow: `0 0 6px ${color}`,
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    );
  };

  // Simplified planet without complex gradients
  const SimplePlanet = ({
    x,
    y,
    size,
    color,
    duration,
  }: {
    x: string;
    y: string;
    size: string;
    color: string;
    duration: number;
  }) => (
    <motion.div
      className='absolute rounded-full'
      style={{
        width: size,
        height: size,
        background: color,
        top: y,
        left: x,
        opacity: 0.6,
      }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );

  // Single orbit ring
  const SimpleOrbitRing = () => (
    <motion.div
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
      style={{ width: 300, height: 300 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      <div className='w-full h-full rounded-full border border-white/5' />
    </motion.div>
  );

  // Occasional shooting star
  const OccasionalShootingStar = () => {
    const [visible, setVisible] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const interval = setInterval(() => {
        setStartPos({ x: Math.random() * 100, y: Math.random() * 50 });
        setVisible(true);
        setTimeout(() => setVisible(false), 1000);
      }, 12000); // Less frequent
      return () => clearInterval(interval);
    }, []);

    return visible ? (
      <motion.div
        className='absolute bg-white rounded-full'
        style={{
          width: '1px',
          height: '1px',
          top: `${startPos.y}%`,
          left: `${startPos.x}%`,
          opacity: 0.8,
        }}
        initial={{ opacity: 0 }}
        animate={{
          x: ['0%', '25%'],
          y: ['0%', '25%'],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    ) : null;
  };

  return (
    <>
      {/* Static stars for base layer */}
      {Array.from({ length: 30 }).map((_, i) => (
        <StaticStar
          key={`static-star-${i}`}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 0.5 + 0.5}
        />
      ))}

      {/* Reduced twinkling stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <SimpleTwinklingStar
          key={`twinkle-star-${i}`}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 0.5 + 1}
          delay={Math.random() * 4}
        />
      ))}

      {/* Simplified planets */}
      <SimplePlanet x='15%' y='75%' size='40px' color='#38bdf8' duration={45} />
      <SimplePlanet x='75%' y='15%' size='35px' color='#facc15' duration={55} />

      {/* Single orbit ring */}
      <SimpleOrbitRing />

      {/* Occasional shooting star */}
      <OccasionalShootingStar />
    </>
  );
};

export default MobileSpaceBackground;
