'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm'>
      {/* Orbiting Planet */}
      <motion.div
        className='relative w-[120px] h-[120px]'
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: [0.7, 1, 0.95, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        {/* Central planet */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 shadow-lg shadow-purple-500/30' />

        {/* Orbit ring */}
        <div className='absolute w-full h-full border border-dashed border-white/10 rounded-full animate-spin-slow' />

        {/* Glowing particle */}
        <motion.div
          className='absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-md'
          animate={{
            rotate: 360,
            x: '50%',
            y: '-50%',
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 6,
          }}
        />
      </motion.div>

      {/* Optional Text */}
      <motion.p
        className='absolute bottom-10 text-sm text-white/60 font-mono tracking-wide'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        Initializing galaxy...
      </motion.p>

      {/* Background floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className='absolute w-1 h-1 bg-white/10 rounded-full'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default LoadingPage;
