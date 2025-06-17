'use client';

import { useEffect, useRef, useState } from 'react';

const PreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/tablet for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight / 2;

    // Set canvas resolution based on device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    // Reduce particle count on mobile for better performance
    const starCount = isMobile ? 30 : 60;
    const planetCount = isMobile ? 2 : 3;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (isMobile ? 1 : 1.2) + 0.5,
      dx: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2),
      dy: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.2),
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const planets = Array.from({ length: planetCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (isMobile ? 12 : 15) + (isMobile ? 8 : 10),
      dx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
      dy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
      hue: Math.random() * 60 + 180, // Blue-cyan range
    }));

    let animationId: number;
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60; // Lower FPS on mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Stars with varying opacity
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        // Bounce off edges
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;

        // Subtle opacity animation
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.2, Math.min(0.8, star.opacity));

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Enhanced planets with gradient effect
      planets.forEach((planet) => {
        planet.x += planet.dx;
        planet.y += planet.dy;

        if (planet.x < 0 || planet.x > width) planet.dx *= -1;
        if (planet.y < 0 || planet.y > height) planet.dy *= -1;

        // Create radial gradient for each planet
        const gradient = ctx.createRadialGradient(
          planet.x,
          planet.y,
          0,
          planet.x,
          planet.y,
          planet.r,
        );
        gradient.addColorStop(0, `hsla(${planet.hue}, 70%, 70%, 0.4)`);
        gradient.addColorStop(0.7, `hsla(${planet.hue}, 60%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${planet.hue}, 50%, 50%, 0.05)`);

        ctx.fillStyle = gradient;
        ctx.shadowBlur = isMobile ? 8 : 15;
        ctx.shadowColor = `hsl(${planet.hue}, 70%, 70%)`;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.r, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight / 2;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);

      // Reposition particles within new bounds
      stars.forEach((star) => {
        star.x = Math.min(star.x, width);
        star.y = Math.min(star.y, height);
      });
      planets.forEach((planet) => {
        planet.x = Math.min(planet.x, width);
        planet.y = Math.min(planet.y, height);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isMobile]);

  return (
    <section className='pt-16 sm:pt-20 md:pt-28 lg:pt-[120px] pb-6 sm:pb-8 md:pb-10 relative max-h-[400px] '>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className='absolute top-0 left-0 w-full h-full pointer-events-none z-0'
        style={{ background: 'transparent' }}
      />

      <div className='container mx-auto px-4 sm:px-6 md:px-8 text-[#e0e0e1] font-dm-sans relative z-10'>
        {/* Main heading with better mobile typography */}
        <h3 className='text-center font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight lg:leading-[100%] tracking-tight break-words'>
          support@uixdl.com
        </h3>

        {/* Navigation pills with improved mobile layout */}
        <div className='max-w-[750px] mx-auto mt-6 sm:mt-8'>
          <ul className='border border-[#232323] rounded-full py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6 md:justify-between bg-[#0b0b0b]/30 backdrop-blur-md'>
            {[
              'ASSAI in action',
              'Advantages',
              'Discover',
              'Twitter',
              'FAQ',
            ].map((text, idx) => (
              <li
                key={idx}
                className='font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-tight whitespace-nowrap text-center text-white/90 hover:text-white transition-colors duration-200 cursor-pointer'
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className='w-full h-[2px] sm:h-[3px] absolute bottom-0 z-10'
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, transparent 80%)',
        }}
      />
    </section>
  );
};

export default PreFooter;
