'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Shared utilities
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

  // Simplified twinkling star with colors and better visibility
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
        className='absolute rounded-full'
        style={{
          width: size,
          height: size,
          top: `${y}%`,
          left: `${x}%`,
          backgroundColor: color,
          opacity: 0.6,
          boxShadow: `0 0 4px ${color}`,
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.5,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    );
  };

  // Multiple shooting stars with better visibility
  const MobileShootingStar = ({ delay = 0 }: { delay?: number }) => {
    const [visible, setVisible] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const interval = setInterval(() => {
        setStartPos({ x: Math.random() * 80, y: Math.random() * 40 });
        setVisible(true);
        setTimeout(() => setVisible(false), 1200);
      }, 6000 + delay * 1000); // Staggered timing
      return () => clearInterval(interval);
    }, [delay]);

    return visible ? (
      <motion.div
        className='absolute bg-white rounded-full'
        style={{
          width: '8px',
          height: '8px',
          top: `${startPos.y}%`,
          left: `${startPos.x}%`,
          boxShadow: '0 0 8px white',
          opacity: 0.9,
        }}
        initial={{ opacity: 0 }}
        animate={{
          x: ['0%', '40%'],
          y: ['0%', '40%'],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    ) : null;
  };

  const LinearMovingStar = ({
    startX,
    startY,
    endX,
    endY,
    delay = 0,
    duration = 4,
    size = 2,
  }: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delay?: number;
    duration?: number;
    size?: number;
  }) => (
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

  return (
    <>
      {/* Static stars for base layer */}
      {Array.from({ length: 40 }).map((_, i) => (
        <StaticStar
          key={`static-star-${i}`}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 1 + 0.5}
        />
      ))}

      {/* Increased colored twinkling stars */}
      {Array.from({ length: 105 }).map((_, i) => (
        <SimpleTwinklingStar
          key={`twinkle-star-${i}`}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 1.5 + 1}
          delay={Math.random() * 3}
        />
      ))}

      {/* Linear moving stars in random directions */}
      {Array.from({ length: 18 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;

        return (
          <LinearMovingStar
            key={`random-star-${i}`}
            startX={startX}
            startY={startY}
            endX={endX}
            endY={endY}
            delay={Math.random() * 4}
            duration={Math.random() * 5 + 3}
            size={Math.random() * 2 + 1}
          />
        );
      })}

      {/* Multiple shooting stars */}
      <MobileShootingStar delay={0} />
      <MobileShootingStar delay={2} />
      <MobileShootingStar delay={4} />
    </>
  );
};

export default MobileSpaceBackground;
