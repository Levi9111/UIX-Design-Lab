'use client';
import { useEffect, useRef } from 'react';
import PreFooterContent from './PreFooterContent';

const TabAndBiggerPreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight / 2;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const planets = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 15 + 10,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      hue: Math.random() * 60 + 180,
    }));

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > width) s.dx *= -1;
        if (s.y < 0 || s.y > height) s.dy *= -1;
        s.opacity += (Math.random() - 0.5) * 0.02;
        s.opacity = Math.max(0.2, Math.min(0.8, s.opacity));
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      planets.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        gradient.addColorStop(0, `hsla(${p.hue}, 70%, 70%, 0.4)`);
        gradient.addColorStop(0.7, `hsla(${p.hue}, 60%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${p.hue}, 50%, 50%, 0.05)`);
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${p.hue}, 70%, 70%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className='relative'>
      <canvas
        ref={canvasRef}
        className='absolute top-0 left-0 w-full h-full pointer-events-none z-0'
      />
      <PreFooterContent />
    </div>
  );
};

export default TabAndBiggerPreFooter;
