'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants, easeInOut } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/logos/logo.svg';
import Button from './Button';

const links = [
  { title: 'Home', path: '' },
  { title: 'Portfolio', path: '' },
  { title: 'Services', path: '' },
  { title: 'Review', path: '' },
  { title: 'FAQ', path: '' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        // ease: backOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  interface LinkVariants {
    hidden: {
      y: number;
      opacity: number;
    };
    visible: (i: number) => {
      y: number;
      opacity: number;
      transition: {
        duration: number;
        delay: number;
        ease: string;
      };
    };
    hover: {
      y: number;
      color: string;
      transition: {
        duration: number;
      };
    };
  }

  const linkVariants: LinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1 * i + 0.4,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -2,
      color: '#ffffff',
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 300,
        delay: 0.6,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  interface HamburgerLineCustom {
    rotate: number;
    y: number;
  }

  // Use the Variants type from framer-motion for compatibility

  const hamburgerLineVariants: Variants = {
    closed: { rotate: 0, y: 0 },
    open: (custom: HamburgerLineCustom) => ({
      rotate: custom.rotate,
      y: custom.y,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <motion.nav
      className='bg-rich-black h-[122px] md:h-[122px] sm:h-auto relative z-50 border-b border-gray-800/30 backdrop-blur-sm shadow-lg shadow-black/20'
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Subtle gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black to-gray-900/20 pointer-events-none' />

      <div className='uix-center h-full flex items-center justify-between relative z-10 px-4 sm:px-6 lg:px-8 py-4 md:py-0'>
        {/* Logo Section */}
        <motion.div
          className='flex items-center justify-center gap-3 flex-shrink-0'
          variants={logoVariants}
          whileHover='hover'
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Image
              src={logo}
              alt='UIX Design Lab Logo'
              width={56}
              height={53}
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
            />
          </motion.div>
          <motion.p
            className='text-lg sm:text-xl md:text-[28px] font-semibold leading-140 tracking-2 text-platinum'
            variants={textVariants}
          >
            Design lab
          </motion.p>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className='hidden lg:flex items-center justify-center gap-6 xl:gap-10'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {links.map((link, i) => (
            <motion.li
              key={link.title}
              custom={i}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{
                y: -2,
                color: '#ffffff',
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className='font-medium text-base xl:text-xl leading-160 tracking-2 text-silver-mist cursor-pointer relative group'
            >
              {link.title}

              {/* Smooth underline grow on hover */}
              <motion.div className='absolute -bottom-1 left-0 h-0.5 w-full bg-platinum origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out' />
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA Button */}
        <motion.div
          className='hidden md:block'
          variants={buttonVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button>Get in touch</Button>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <motion.button
          className='lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none'
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className='w-6 h-0.5 bg-platinum block origin-center'
            variants={hamburgerLineVariants}
            animate={isOpen ? 'open' : 'closed'}
            custom={{ rotate: 45, y: 4 }}
          />
          <motion.span
            className='w-6 h-0.5 bg-platinum block'
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className='w-6 h-0.5 bg-platinum block origin-center'
            variants={hamburgerLineVariants}
            animate={isOpen ? 'open' : 'closed'}
            custom={{ rotate: -45, y: -4 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='lg:hidden absolute top-full left-0 right-0 bg-rich-black/95 backdrop-blur-md border-t border-gray-800/30 shadow-xl'
            variants={mobileMenuVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <div className='uix-center px-4 py-6'>
              <motion.ul className='space-y-4 mb-6'>
                {links.map((link, i) => (
                  <motion.li
                    key={link.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: i * 0.1 },
                    }}
                    className='font-medium text-lg leading-160 tracking-2 text-silver-mist hover:text-platinum transition-colors duration-200 cursor-pointer py-2 border-b border-gray-800/20 last:border-b-0'
                  >
                    {link.title}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3 },
                }}
                className='w-full'
              >
                <Button>Get in touch</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
