'use client';

import React from 'react';
import clsx from 'clsx';

type PlanetProps = {
  gradientFrom: string;
  gradientTo: string;
  ringColor1: string;
  ringColor2: string;
  size?: number; // diameter of the planet
  className?: string;
};

const MobilePlanet: React.FC<PlanetProps> = ({
  gradientFrom,
  gradientTo,
  ringColor1,
  ringColor2,
  size = 120,
  className,
}) => {
  const ring1Size = size + 40;
  const ring2Size = size + 80;

  return (
    <div
      className={clsx(
        'md:hidden z-0 absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        `w-[${size}px] h-[${size}px]`,
        className,
      )}
    >
      <div
        className='rounded-full shadow-[0_0_60px_20px_rgba(139,92,246,0.6)] relative'
        style={{
          width: size,
          height: size,
          backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {/* Inner ring */}
        <div
          className='absolute border rounded-full blur-sm opacity-40 animate-spin-slow -z-10'
          style={{
            width: ring1Size,
            height: ring1Size,
            top: `-${(ring1Size - size) / 2}px`,
            left: `-${(ring1Size - size) / 2}px`,
            borderColor: ringColor1,
          }}
        />
        {/* Outer ring */}
        <div
          className='absolute border rounded-full blur-md opacity-20 animate-spin-slower -z-20'
          style={{
            width: ring2Size,
            height: ring2Size,
            top: `-${(ring2Size - size) / 2}px`,
            left: `-${(ring2Size - size) / 2}px`,
            borderColor: ringColor2,
          }}
        />
      </div>
    </div>
  );
};

export default MobilePlanet;
