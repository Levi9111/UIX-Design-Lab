'use client';

import logoShowCase from '../../../public/logos/logo-showcase.svg';
import { motion, Variants, useInView, useReducedMotion } from 'framer-motion';
import { useRef, memo } from 'react';
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

interface ProfessionalIconProps {
  Icon: LucideIcon;
  colorClass: string;
}

interface CardData {
  id: string;
  type: 'stat' | 'feature';
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bgGradient: string;
  borderColor: string;
  iconColor: string;
}

const cardData: CardData[] = [
  {
    id: 'projects',
    type: 'stat',
    icon: Shield,
    title: '100+',
    subtitle: 'Projects Completed',
    bgGradient: 'from-blue-900/30 to-slate-800/90',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-400',
  },
  {
    id: 'success',
    type: 'stat',
    icon: Target,
    title: '98%',
    subtitle: 'Success Rate',
    bgGradient: 'from-purple-900/30 to-slate-800/90',
    borderColor: 'border-purple-400/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 'performance',
    type: 'feature',
    icon: Zap,
    title: 'Fast',
    subtitle: 'Performance',
    bgGradient: 'from-blue-900/40 to-purple-900/40',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-white',
  },
  {
    id: 'quality',
    type: 'feature',
    icon: Award,
    title: 'Top',
    subtitle: 'Quality',
    bgGradient: 'from-purple-900/40 to-pink-900/40',
    borderColor: 'border-purple-400/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 'availability',
    type: 'feature',
    icon: Clock,
    title: '24/7',
    subtitle: 'Availability',
    bgGradient: 'from-teal-900/40 to-cyan-900/40',
    borderColor: 'border-teal-400/30',
    iconColor: 'text-white',
  },
  {
    id: 'reliability',
    type: 'feature',
    icon: CheckCircle,
    title: 'Reliable',
    subtitle: 'Service',
    bgGradient: 'from-emerald-900/40 to-green-900/40',
    borderColor: 'border-emerald-400/30',
    iconColor: 'text-white',
  },
  {
    id: 'support',
    type: 'stat',
    icon: Headphones,
    title: 'Support',
    subtitle: 'Lifetime Assistance',
    bgGradient: 'from-green-900/30 to-slate-800/90',
    borderColor: 'border-green-400/30',
    iconColor: 'text-green-400',
  },
  {
    id: 'expertise',
    type: 'stat',
    icon: TrendingUp,
    title: 'Expert',
    subtitle: 'Craftsmanship',
    bgGradient: 'from-blue-900/30 to-slate-800/90',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-400',
  },
];

const LogoShowcase = memo(() => (
  <div className='size-[180px] mx-auto rounded-full border border-blue-300/30 p-1 flex items-center justify-center relative overflow-hidden'>
    <motion.div
      className='absolute inset-0 rounded-full border border-blue-300/15 pointer-events-none'
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{
        background:
          'conic-gradient(from 0deg, transparent 80%, rgba(59, 130, 246, 0.05) 100%)',
      }}
    />

    <div
      className='size-full rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm'
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.08), transparent)',
        boxShadow:
          '2px 2px 40px 0px rgba(59, 130, 246, 0.2) inset, 2px 2px 40px 0px rgba(147, 51, 234, 0.1) inset',
      }}
    >
      <Image
        src={logoShowCase}
        alt='Logo Showcase'
        width={90}
        height={90}
        className='relative z-10'
      />
    </div>
  </div>
));

LogoShowcase.displayName = 'LogoShowcase';

const ProfessionalIcon = memo<ProfessionalIconProps>(({ Icon, colorClass }) => (
  <div className='relative flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10'>
    <Icon className={`w-6 h-6 ${colorClass}`} />
  </div>
));

ProfessionalIcon.displayName = 'ProfessionalIcon';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const Card = memo<{ data: CardData }>(({ data }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      className={`bg-gradient-to-br ${data.bgGradient} border ${data.borderColor} rounded-2xl p-5 flex items-center gap-4 min-h-[120px] relative overflow-hidden group transform-gpu`}
    >
      <ProfessionalIcon Icon={data.icon} colorClass={data.iconColor} />

      <div className='relative z-10'>
        <h3 className='text-2xl sm:text-3xl font-bold text-white'>
          {data.title}
        </h3>
        <p className='text-gray-300 text-sm font-medium'>
          {data.subtitle}
        </p>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

const MobileShowcase: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: '-30px',
  });

  const activeState = shouldReduceMotion || isInView ? 'visible' : 'hidden';

  return (
    <div
      className='lg:hidden max-w-7xl mx-auto px-4 sm:px-6 py-6'
      ref={ref}
    >
      <motion.div
        initial='hidden'
        animate={activeState}
        variants={staggerContainer}
        className='space-y-6'
      >
        {/* First Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          {cardData.slice(0, 4).map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </motion.div>

        {/* Central Logo */}
        <motion.div variants={fadeInVariants} className='flex justify-center py-2'>
          <LogoShowcase />
        </motion.div>

        {/* Second Grid */}
        <motion.div
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          {cardData.slice(4).map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileShowcase;
