'use client';

import { PlanetText } from '@/components/elements/PlanetText';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Sparkles,
  Code,
  Rocket,
  Eye,
  Paintbrush,
  Layers,
  LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  delay: number;
}

const features: Feature[] = [
  {
    title: 'Stellar UI Design',
    description: 'We craft interfaces that feel out of this world.',
    icon: Paintbrush,
    accentColor: 'from-pink-400 to-fuchsia-600',
    delay: 0,
  },
  {
    title: 'Next-Level Animation',
    description: 'GSAP, Framer Motion, and Three.js — perfectly blended.',
    icon: Rocket,
    accentColor: 'from-cyan-400 to-blue-500',
    delay: 0.1,
  },
  {
    title: 'Creative Engineering',
    description: 'Functional code meets creative polish.',
    icon: Code,
    accentColor: 'from-yellow-400 to-orange-500',
    delay: 0.2,
  },
  {
    title: 'Immersive 3D Scenes',
    description: 'Bring your ideas to life with custom 3D experiences.',
    icon: Layers,
    accentColor: 'from-indigo-400 to-violet-600',
    delay: 0.3,
  },
  {
    title: 'Brand Identity',
    description: 'Visuals, tone, and presence aligned with your vision.',
    icon: Sparkles,
    accentColor: 'from-green-400 to-emerald-500',
    delay: 0.4,
  },
  {
    title: 'Creative Direction',
    description: 'From ideation to execution, we guide your narrative.',
    icon: Eye,
    accentColor: 'from-red-400 to-rose-500',
    delay: 0.5,
  },
];

const FeaturesHomePage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className='relative pt-24 px-4 sm:px-8 lg:px-12 text-white overflow-hidden'
    >
      {/* Subtle background */}
      <div className='absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none z-0' />
      <div className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='text-center md:mb-20 mb-10'
        >
          <PlanetText
            title='What Makes Us Stand Out'
            subtitle='Elevating digital experiences with imagination, precision, and soul.'
          />
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: Feature; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: feature.delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className='group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition duration-500 overflow-hidden shadow-xl'
      style={{ rotateX, rotateY }}
    >
      {/* Glow under icon */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${feature.accentColor} opacity-0 group-hover:opacity-10 transition duration-500 blur-2xl rounded-3xl`}
      />

      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg`}
      >
        <feature.icon className='w-7 h-7 text-white' />
      </div>

      <h3 className='text-xl font-bold text-white mb-2'>{feature.title}</h3>
      <p className='text-gray-300 text-sm leading-relaxed'>
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeaturesHomePage;
