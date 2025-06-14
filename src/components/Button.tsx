'use client';

import Image from 'next/image';
import arrow from '../../public/icons/arrow.svg';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const bubbleShapes = ['rounded-full', 'rounded-md', 'rounded-[40%]'];

const Button = ({
  children,
  type = 1,
}: {
  children: ReactNode;
  type?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='relative group inline-block min-w-[222px] font-dm-sans'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Enhanced bottom shadow with glow */}
      <motion.div
        className='absolute bottom-0 left-1/2 w-16 h-1.5 bg-white rounded-full blur-sm -translate-x-1/2 translate-y-1 opacity-50'
        animate={{
          width: isHovered ? 80 : 64,
          height: isHovered ? 8 : 6,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <motion.button
        className={clsx(
          'relative z-10 w-full min-w-[180px] h-[66px] sm:h-[60px] md:h-[66px] rounded-[35px] flex items-center justify-between gap-0 px-[2px] border-2 transition-all duration-300 ease-out shadow-lg overflow-hidden cursor-pointer',
          type === 1
            ? 'border-[#282A30] bg-rich-black hover:border-[#404248]'
            : 'border-sky-blue bg-sky-blue hover:border-sky-blue/80',
        )}
        whileHover={{
          boxShadow:
            type === 1
              ? '0 0 25px rgba(135, 206, 235, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 0 25px rgba(255, 255, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Animated background shimmer */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full'
          animate={{
            x: isHovered ? '200%' : '-100%',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Icon container with sophisticated animation */}
        <motion.span
          className={clsx(
            'relative z-30 size-[58px] sm:size-[52px] md:size-[58px] rounded-full flex items-center justify-center shadow-lg',
            type === 1 ? 'bg-sky-blue' : 'bg-rich-black',
          )}
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 8 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {/* Inner icon with micro-animation */}
          <motion.div
            animate={{
              x: isHovered ? 2 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Image
              src={arrow}
              alt='Button Arrow'
              width={29}
              height={23}
              className='sm:w-[26px] sm:h-[20px] md:w-[29px] md:h-[23px]'
            />
          </motion.div>

          {/* Icon glow effect */}
          <motion.div
            className={clsx(
              'absolute inset-0 rounded-full blur-md opacity-0',
              type === 1 ? 'bg-sky-blue' : 'bg-rich-black',
            )}
            animate={{
              opacity: isHovered ? 0.4 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>

        {/* Text with smooth reveal animation */}
        <motion.div
          className={clsx(
            'relative z-20 flex-1 min-w-0 text-xl sm:text-lg md:text-xl font-medium tracking-wide text-center',
            '!text-white',
          )}
          animate={{
            x: isHovered ? 4 : 0,
            color: isHovered
              ? type === 1
                ? 'rgba(135, 206, 235, 0.9)'
                : 'rgba(40, 42, 48, 0.9)'
              : type === 1
              ? 'rgba(255, 255, 255, 1)'
              : 'rgba(40, 42, 48, 1)',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {children}
        </motion.div>

        {/* Elegant particle effects on hover */}
        <AnimatePresence>
          {isHovered && (
            <div className='absolute -inset-x-4 -bottom-2 pointer-events-none overflow-visible z-0'>
              {Array.from({ length: 10 }).map((_, idx) => {
                const left = Math.random() * 100;
                const rise = 80 + Math.random() * 50;
                const delay = Math.random() * 2;
                const shape = bubbleShapes[idx % bubbleShapes.length];

                return (
                  <motion.span
                    key={idx + Math.random()}
                    className={clsx(
                      'absolute w-[8px] h-[8px]',
                      type === 1 ? 'bg-sky-blue/70' : 'bg-white/70',
                      shape,
                    )}
                    style={{ left: `${left}%` }}
                    initial={{ y: 0, scale: 1, opacity: 0 }}
                    animate={{
                      y: -rise,
                      scale: 0.5,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 1.5,
                      delay,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeOut',
                    }}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default Button;
