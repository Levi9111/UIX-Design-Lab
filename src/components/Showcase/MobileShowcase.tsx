'use client';

import logoShowCase from '../../../public/logos/logo-showcase.svg';
import { motion, Variants, useInView, useReducedMotion } from 'framer-motion';
import { useRef, RefObject, memo } from 'react';
import {
  Shield,
  Target,
  Zap,
  Award,
  Clock,
  CheckCircle,
  Headphones,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import Image from 'next/image';

// Types
interface ProfessionalIconProps {
  Icon: LucideIcon;
  color: string;
  duration?: number;
  reverse?: boolean;
}

interface CardData {
  id: string;
  type: 'stat' | 'feature';
  icon?: LucideIcon;
  color?: string;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
  iconColor?: string;
  duration?: number;
  reverse?: boolean;
}

// Static card data - Moved outside component
const cardData: CardData[] = [
  {
    id: 'projects',
    type: 'stat',
    icon: Shield,
    color: 'blue-400',
    title: '100+',
    subtitle: 'Projects Completed',
    duration: 15,
  },
  {
    id: 'success',
    type: 'stat',
    icon: Target,
    color: 'purple-400',
    title: '98%',
    subtitle: 'Success Rate',
    duration: 18,
    reverse: true,
  },
  {
    id: 'performance',
    type: 'feature',
    icon: Zap,
    title: 'Fast',
    subtitle: 'Performance',
    gradientFrom: 'blue-900/40',
    gradientTo: 'purple-900/40',
    borderColor: 'blue-400/30',
    iconColor: 'white',
  },
  {
    id: 'quality',
    type: 'feature',
    icon: Award,
    title: 'Top',
    subtitle: 'Quality',
    gradientFrom: 'purple-900/40',
    gradientTo: 'pink-900/40',
    borderColor: 'purple-400/30',
    iconColor: 'purple-400',
    reverse: true,
  },
  {
    id: 'availability',
    type: 'feature',
    icon: Clock,
    title: '24/7',
    subtitle: 'Availability',
    gradientFrom: 'teal-900/40',
    gradientTo: 'cyan-900/40',
    borderColor: 'teal-400/30',
    iconColor: 'white',
  },
  {
    id: 'reliability',
    type: 'feature',
    icon: CheckCircle,
    title: 'Reliable',
    subtitle: 'Service',
    gradientFrom: 'emerald-900/40',
    gradientTo: 'green-900/40',
    borderColor: 'emerald-400/30',
    iconColor: 'white',
  },
  {
    id: 'support',
    type: 'stat',
    icon: Headphones,
    color: 'green-400',
    title: 'Support',
    subtitle: 'Lifetime Assistance',
    duration: 12,
  },
  {
    id: 'expertise',
    type: 'stat',
    icon: TrendingUp,
    color: 'blue-400',
    title: 'Expert',
    subtitle: 'Craftsmanship',
    duration: 16,
    reverse: true,
  },
];

// Optimized Logo Showcase - Memoized
const LogoShowcase = memo(() => (
  <motion.div
    className='size-[180px] mx-auto rounded-full border border-blue-300/30 p-1 flex items-center justify-center relative overflow-hidden'
    animate={{ y: [0, -6, 0, 6, 0] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <motion.div
      className='absolute inset-0 rounded-full border border-blue-300/15'
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{
        background:
          'conic-gradient(from 0deg, transparent 80%, rgba(59, 130, 246, 0.05) 100%)',
      }}
    />

    <motion.div
      className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent)',
        boxShadow:
          '2px 2px 40px 0px rgba(59, 130, 246, 0.2) inset, 2px 2px 40px 0px rgba(147, 51, 234, 0.1) inset',
      }}
    >
      <motion.div
        className='relative'
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.08,
          filter:
            'brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={logoShowCase}
          alt='Logo Showcase'
          width={90}
          height={90}
          className='relative z-10'
        />
      </motion.div>
    </motion.div>
  </motion.div>
));

LogoShowcase.displayName = 'LogoShowcase';

// Optimized Professional Icon - Memoized
const ProfessionalIcon = memo<ProfessionalIconProps>(
  ({ Icon, color, duration = 20, reverse = false }) => (
    <div className='relative flex-shrink-0 w-16 h-16 flex items-center justify-center'>
      <motion.div
        className={`absolute inset-0 rounded-full border border-${color}/20`}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent 85%, rgba(var(--${color}), 0.1) 100%)`,
        }}
      />

      <motion.div
        className={`absolute inset-1 rounded-full border border-${color}/30`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className={`relative z-10 p-3 rounded-full bg-gradient-to-br from-${color}/20 to-${color}/5 border border-${color}/20`}
        whileHover={{
          scale: 1.1,
          boxShadow: `0 0 20px rgba(var(--${color}), 0.3)`,
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon className={`w-6 h-6 text-${color}`} />
      </motion.div>
    </div>
  ),
);

ProfessionalIcon.displayName = 'ProfessionalIcon';

// Optimized Card Component - Memoized
const Card = memo<{ data: CardData; shouldReduceMotion: boolean }>(
  ({ data, shouldReduceMotion }) => {
    const shouldAnimate = !shouldReduceMotion;

    if (data.type === 'stat') {
      return (
        <motion.div
          variants={fadeInVariants}
          className='bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex items-center gap-4 min-h-[140px] relative overflow-hidden group'
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-${data.color}/30 via-transparent to-${data.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <ProfessionalIcon
            Icon={data.icon!}
            color={data.color!}
            duration={data.duration}
            reverse={data.reverse}
          />

          <div className='relative z-10'>
            <motion.h3
              className='text-3xl sm:text-4xl font-bold text-white'
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {data.title}
            </motion.h3>
            <p className='text-gray-300 text-base font-medium'>
              {data.subtitle}
            </p>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        variants={fadeInVariants}
        className={`bg-gradient-to-br from-${data.gradientFrom} to-${data.gradientTo} border border-${data.borderColor} rounded-2xl p-6 text-center min-h-[140px] relative overflow-hidden group`}
      >
        {shouldAnimate && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />
        )}

        <div className='relative z-10 flex flex-col items-center gap-3'>
          <motion.div
            whileHover={{ scale: 1.1, rotate: data.reverse ? -10 : 10 }}
            animate={
              shouldAnimate && data.id === 'availability'
                ? { rotate: 360 }
                : shouldAnimate
                ? { y: [0, -3, 0] }
                : {}
            }
            {...(data.id === 'availability' && shouldAnimate
              ? {
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }
              : shouldAnimate
              ? {
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
              : {})}
          >
            {data.icon && (
              <data.icon className={`w-8 h-8 text-${data.iconColor}`} />
            )}
          </motion.div>
          <div>
            <h3 className='text-3xl sm:text-4xl font-bold text-white'>
              {data.title}
            </h3>
            <p className='text-gray-300 text-base font-medium'>
              {data.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    );
  },
);

Card.displayName = 'Card';

// Animation variants - Moved outside component
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const MobileShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    margin: '-50px',
  });

  return (
    <div
      className='lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
      ref={ref}
    >
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className='space-y-8'
      >
        {/* First Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
        >
          {cardData.slice(0, 4).map((card) => (
            <Card
              key={card.id}
              data={card}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          ))}
        </motion.div>

        {/* Central Logo */}
        <motion.div variants={fadeInVariants} className='flex justify-center'>
          <LogoShowcase />
        </motion.div>

        {/* Second Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
        >
          {cardData.slice(4).map((card) => (
            <Card
              key={card.id}
              data={card}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileShowcase;
