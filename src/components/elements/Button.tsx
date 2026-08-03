'use client';

import Image from 'next/image';
import arrow from '../../../public/icons/arrow.svg';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  type?: 1 | 2;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button = ({ children, type = 1, onClick, className, fullWidth = false }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false); // hover (desktop) OR press (mobile)

  return (
    <motion.div
      className={clsx(
        'relative inline-block font-dm-sans',
        fullWidth ? 'w-full' : 'min-w-[150px] sm:min-w-[180px] md:min-w-[222px]',
        className
      )}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 1 }}
    >
      {/* Ground shadow — same idea as desktop, scaled down for mobile */}
      <motion.div
        className='absolute bottom-0 left-1/2 h-1 sm:h-1.5 bg-white rounded-full blur-sm -translate-x-1/2 translate-y-1 opacity-50'
        animate={{
          width: isActive ? 64 : 48,
          height: isActive ? 6 : 5,
          opacity: isActive ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      <motion.button
        onClick={onClick}
        onTapStart={() => setIsActive(true)}
        onTap={() => setIsActive(false)}
        onTapCancel={() => setIsActive(false)}
        className={clsx(
          'relative z-10 w-full h-[50px] sm:h-[60px] md:h-[66px] rounded-[35px] flex items-center justify-between px-[2px] border-2 transition-colors duration-300 ease-out shadow-lg overflow-hidden cursor-pointer',
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
        whileTap={{
          scale: 0.97,
          boxShadow:
            type === 1
              ? '0 0 20px rgba(135, 206, 235, 0.25), 0 4px 20px rgba(0, 0, 0, 0.3)'
              : '0 0 20px rgba(255, 255, 255, 0.25), 0 4px 20px rgba(0, 0, 0, 0.2)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Shine sweep — fires on hover (desktop) or tap (mobile) via isActive */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full pointer-events-none'
          animate={{ x: isActive ? '200%' : '-100%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />

        <motion.span
          className={clsx(
            'relative z-30 size-[42px] sm:size-[52px] md:size-[58px] rounded-full flex items-center justify-center shadow-lg',
            type === 1 ? 'bg-sky-blue' : 'bg-rich-black',
          )}
          animate={{
            scale: isActive ? 1.05 : 1,
            rotate: isActive ? 8 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            animate={{ x: isActive ? 2 : 0, scale: isActive ? 1.08 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Image
              src={arrow}
              alt='Button Arrow'
              width={20}
              height={16}
              className='w-[18px] h-[14px] sm:w-[24px] sm:h-[19px] md:w-[29px] md:h-[23px]'
            />
          </motion.div>

          <motion.div
            className={clsx(
              'absolute inset-0 rounded-full blur-md pointer-events-none',
              type === 1 ? 'bg-sky-blue' : 'bg-rich-black',
            )}
            animate={{ opacity: isActive ? 0.4 : 0, scale: isActive ? 1.2 : 1 }}
            transition={{ duration: 0.25 }}
          />
        </motion.span>

        <motion.span
          className='relative z-20 flex-1 min-w-0 text-base sm:text-lg md:text-xl font-medium tracking-wide text-center !text-white'
          animate={{
            x: isActive ? 3 : 0,
            color: isActive
              ? type === 1
                ? 'rgba(135, 206, 235, 0.9)'
                : 'rgba(40, 42, 48, 0.9)'
              : type === 1
                ? 'rgba(255, 255, 255, 1)'
                : 'rgba(40, 42, 48, 1)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {children}
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Button;
