'use client';

import logoShowCase from '../../../public/logos/logo-showcase.svg';
import shield from '../../../public/icons/shield.svg';
import { motion, Variants, useInView, useReducedMotion } from 'framer-motion';
import { useRef, memo } from 'react';
import {
  Zap,
  Award,
  Clock,
  CheckCircle,
  Headphones,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Central Orbital Logo Component
const LogoOrb = memo(() => (
  <div className='relative flex items-center justify-center my-4 py-2'>
    {/* Background ambient glow */}
    <div className='absolute w-44 h-44 bg-sky-500/10 rounded-full blur-2xl pointer-events-none' />

    {/* Outer Orbit Ring */}
    <div className='relative size-[150px] rounded-full border border-white/10 p-2 flex items-center justify-center bg-white/[0.02] backdrop-blur-md shadow-2xl'>
      <motion.div
        className='absolute inset-0 rounded-full border border-sky-400/20 pointer-events-none'
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'conic-gradient(from 0deg, transparent 75%, rgba(56, 189, 248, 0.15) 100%)',
        }}
      />

      {/* Inner orb core */}
      <div className='size-full rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/10 shadow-inner'>
        <Image
          src={logoShowCase}
          alt='UIX Design Lab Showcase Logo'
          width={75}
          height={75}
          className='relative z-10 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]'
        />
      </div>
    </div>
  </div>
));

LogoOrb.displayName = 'LogoOrb';

const primaryStats = [
  {
    id: 'projects',
    value: '100+',
    label: 'Projects Completed',
    icon: shield,
    isCustomIcon: true,
    accentGlow: 'from-blue-500/10 via-sky-500/5 to-transparent',
    borderColor: 'border-blue-500/20',
    textColor: 'text-sky-400',
  },
  {
    id: 'success',
    value: '98%',
    label: 'Success Rate',
    icon: shield,
    isCustomIcon: true,
    accentGlow: 'from-purple-500/10 via-fuchsia-500/5 to-transparent',
    borderColor: 'border-purple-500/20',
    textColor: 'text-purple-400',
  },
  {
    id: 'performance',
    value: 'Fast',
    label: 'Performance',
    LucideIcon: Zap,
    accentGlow: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderColor: 'border-amber-500/20',
    textColor: 'text-amber-400',
  },
  {
    id: 'quality',
    value: 'Top',
    label: 'Quality',
    LucideIcon: Award,
    accentGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
  },
];

const secondaryFeatures = [
  {
    id: 'availability',
    title: '24/7 Availability',
    icon: Clock,
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
  {
    id: 'reliability',
    title: 'Reliable Service',
    icon: CheckCircle,
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
  {
    id: 'support',
    title: 'Lifetime Support',
    icon: Headphones,
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    id: 'craft',
    title: 'Expert Craftsmanship',
    icon: Sparkles,
    color: 'text-amber-400',
    border: 'border-amber-500/20',
  },
];

const MobileShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: '-30px',
  });

  const activeState = shouldReduceMotion || isInView ? 'visible' : 'hidden';

  return (
    <div className='lg:hidden max-w-md mx-auto px-4 py-8' ref={ref}>
      <motion.div
        initial='hidden'
        animate={activeState}
        variants={containerVariants}
        className='space-y-6'
      >
        {/* Central Logo Orb */}
        <motion.div variants={fadeInVariants}>
          <LogoOrb />
        </motion.div>

        {/* Primary 2x2 Glass Stat Cards */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-2 gap-3'
        >
          {primaryStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInVariants}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br ${stat.accentGlow} bg-slate-900/60 border ${stat.borderColor} backdrop-blur-xl shadow-lg flex flex-col justify-between min-h-[115px] group`}
            >
              {/* Subtle top light bar */}
              <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent' />

              {/* Icon Header */}
              <div className='flex items-center justify-between mb-2'>
                {stat.isCustomIcon ? (
                  <div className='relative size-7 flex items-center justify-center rounded-lg bg-white/5 border border-white/10'>
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={18}
                      height={18}
                    />
                  </div>
                ) : (
                  stat.LucideIcon && (
                    <div className='size-7 flex items-center justify-center rounded-lg bg-white/5 border border-white/10'>
                      <stat.LucideIcon className={`size-4 ${stat.textColor}`} />
                    </div>
                  )
                )}
                <span className='size-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors' />
              </div>

              {/* Stat Text */}
              <div>
                <h3 className='text-2xl font-bold text-white tracking-tight leading-none mb-1'>
                  {stat.value}
                </h3>
                <p className='text-xs text-gray-400 font-medium leading-tight'>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Feature Badges (2x2 Grid) */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-2 gap-2.5 pt-1'
        >
          {secondaryFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                variants={fadeInVariants}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-900/40 border ${feat.border} backdrop-blur-md transition-all active:bg-white/5`}
              >
                <div className='size-6 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0'>
                  <Icon className={`size-3.5 ${feat.color}`} />
                </div>
                <span className='text-xs text-gray-300 font-medium truncate'>
                  {feat.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileShowcase;
