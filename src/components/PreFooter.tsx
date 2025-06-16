'use client';

import { useEffect, useRef } from 'react';

const PreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight / 2;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    const planets = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 15 + 10,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Planets
      planets.forEach((planet) => {
        planet.x += planet.dx;
        planet.y += planet.dy;
        if (planet.x < 0 || planet.x > width) planet.dx *= -1;
        if (planet.y < 0 || planet.y > height) planet.dy *= -1;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(150, 200, 255, 0.2)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#99ccff';
        ctx.arc(planet.x, planet.y, planet.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight / 2;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='pt-[120px] pb-10 relative'>
      {/* Transparent canvas for animated background */}
      <canvas
        ref={canvasRef}
        className='absolute top-0 left-0 w-full h-full pointer-events-none z-0'
        style={{ background: 'transparent' }}
      />

      <div className='uix-center text-[#e0e0e1] font-dm-sans relative z-10'>
        <h3 className='text-center font-normal text-[40px] md:text-[60px] leading-[100%] tracking-0'>
          support@uixdl.com
        </h3>

        <ul className='max-w-[750px] mx-auto border border-[#232323] rounded-[100vw] py-6 px-6 md:px-12 flex flex-wrap md:flex-nowrap gap-y-6 items-center justify-center md:justify-between mt-8 bg-[#0b0b0b]/30 backdrop-blur-md'>
          {['ASSAI in action', 'Advantages', 'Discover', 'Twitter', 'FAQ'].map(
            (text, idx) => (
              <li
                key={idx}
                className='font-normal text-base md:text-xl leading-[100%] tracking-0 whitespace-nowrap text-center text-white/90'
              >
                {text}
              </li>
            ),
          )}
        </ul>
      </div>

      <div
        className='w-full h-[3px] absolute bottom-0 z-10'
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
        }}
      />
    </section>
  );
};

export default PreFooter;
