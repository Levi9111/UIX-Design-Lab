import React, { useEffect, useRef } from 'react';

interface StarElement extends HTMLDivElement {
  remove(): void;
}

const Welcoming: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<StarElement[]>([]);

  useEffect(() => {
    const createStars = (): void => {
      const container = containerRef.current;
      if (!container) return;

      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div') as StarElement;
        star.className =
          'absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;

        // Different star colors using Tailwind-inspired colors
        const colorClasses = [
          'bg-white',
          'bg-blue-300',
          'bg-purple-300',
          'bg-cyan-300',
        ];
        const randomColor =
          colorClasses[Math.floor(Math.random() * colorClasses.length)];
        star.className = star.className.replace('bg-white', randomColor);

        container.appendChild(star);
        starsRef.current.push(star);
      }
    };

    createStars();

    return () => {
      starsRef.current.forEach((star) => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
      starsRef.current = [];
    };
  }, []);

  return (
    <div className='relative w-full h-screen overflow-hidden bg-background'>
      {/* Animated background container */}
      <div ref={containerRef} className='absolute inset-0 overflow-hidden'>
        {/* Cosmic nebula effect */}
        <div className='absolute inset-0 opacity-20'>
          <div className='cosmic-cloud cosmic-cloud-1'></div>
          <div className='cosmic-cloud cosmic-cloud-2'></div>
          <div className='cosmic-cloud cosmic-cloud-3'></div>
        </div>

        {/* Shooting stars */}
        <div className='shooting-star shooting-star-1'></div>
        <div className='shooting-star shooting-star-2'></div>
        <div className='shooting-star shooting-star-3'></div>

        {/* Orbital rings */}
        <div className='orbital-ring orbital-ring-1'>
          <div className='orbit-dot'></div>
        </div>
        <div className='orbital-ring orbital-ring-2'>
          <div className='orbit-dot'></div>
          <div className='orbit-dot orbit-dot-2'></div>
        </div>
      </div>

      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white'>
        {/* Logo/Brand area with planet effect */}
        <div className='mb-8 relative'>
          <div className='planet-container'>
            <div className='planet'>
              <div className='planet-ring'></div>
              <div className='planet-ring planet-ring-2'></div>
            </div>
          </div>
        </div>

        {/* Main heading with stagger animation */}
        <div className='text-center mb-6 space-y-4'>
          <h1 className='text-6xl md:text-8xl font-thin tracking-[0.2em] text-white'>
            <span className='text-reveal text-reveal-1'>E</span>
            <span className='text-reveal text-reveal-2'>X</span>
            <span className='text-reveal text-reveal-3'>P</span>
            <span className='text-reveal text-reveal-4'>L</span>
            <span className='text-reveal text-reveal-5'>O</span>
            <span className='text-reveal text-reveal-6'>R</span>
            <span className='text-reveal text-reveal-7'>E</span>
          </h1>
          <p className='text-xl md:text-2xl font-light tracking-wide text-cyan-200 fade-in-up'>
            The Infinite Possibilities
          </p>
        </div>

        {/* Loading indicator */}
        <div className='mt-8 flex flex-col items-center space-y-4'>
          <div className='loading-orbit'>
            <div className='loading-planet'></div>
          </div>
          <p className='text-sm tracking-widest text-gray-400 pulse-text font-light uppercase'>
            Designing Tomorrow’s Trajectory
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcoming;
