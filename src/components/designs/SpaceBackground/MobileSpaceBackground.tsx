'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { getStarColor } from './constants';
import LinearMovingStar from './LinearMovingStar';

export { LinearMovingStar };

// Lightweight twinkling star using CSS keyframes for zero JS overhead
export const SimpleTwinklingStar = ({
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
    <div
      className='absolute rounded-full animate-pulse'
      style={{
        width: size,
        height: size,
        top: `${y}%`,
        left: `${x}%`,
        backgroundColor: color,
        boxShadow: `0 0 4px ${color}`,
        animationDelay: `${delay}s`,
        animationDuration: '2.5s',
      }}
    />
  );
};

// Pre-generated static positions for mobile background to avoid hydration mismatch & Math.random() re-calculation
const STATIC_STARS = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: (i * 23 + 12) % 100,
  y: (i * 37 + 5) % 100,
  size: (i % 2) + 1,
}));

const TWINKLE_STARS = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: (i * 17 + 8) % 100,
  y: (i * 29 + 14) % 100,
  size: (i % 3 === 0 ? 2 : 1),
  delay: (i * 0.3) % 3,
}));

const MOVING_STARS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  startX: (i * 25 + 5) % 100,
  startY: (i * 15 + 10) % 100,
  endX: (i * 25 + 20) % 100,
  endY: (i * 30 + 50) % 100,
  delay: (i * 1.2) % 4,
  duration: 4 + (i % 3),
  size: 1.5,
}));

const MobileSpaceBackground = () => {
  return (
    <div className='fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-transparent'>
      {/* Base layer static stars */}
      {STATIC_STARS.map((s) => (
        <div
          key={`static-${s.id}`}
          className='absolute rounded-full bg-white opacity-60'
          style={{
            width: s.size,
            height: s.size,
            top: `${s.y}%`,
            left: `${s.x}%`,
          }}
        />
      ))}

      {/* CSS-animated colored twinkling stars */}
      {TWINKLE_STARS.map((s) => (
        <SimpleTwinklingStar
          key={`twinkle-${s.id}`}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
        />
      ))}

      {/* Lightweight linear moving stars */}
      {MOVING_STARS.map((s) => (
        <LinearMovingStar
          key={`moving-${s.id}`}
          startX={s.startX}
          startY={s.startY}
          endX={s.endX}
          endY={s.endY}
          delay={s.delay}
          duration={s.duration}
          size={s.size}
        />
      ))}
    </div>
  );
};

export default MobileSpaceBackground;
