'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants, easeInOut } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/logos/logo.svg';
import Button from '../elements/Button';

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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const linkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1 * i + 0.4, ease: 'easeOut' },
    }),
    hover: {
      y: -2,
      color: '#ffffff',
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4 } },
  };

  const hamburgerLineVariants: Variants = {
    closed: { rotate: 0, y: 0 },
    open: (custom: { rotate: number; y: number }) => ({
      rotate: custom.rotate,
      y: custom.y,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <motion.nav
      className='bg-rich-black/40 h-auto py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-800/30 backdrop-blur-sm shadow-lg z-50 relative'
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <motion.div
          className='flex items-center gap-3 flex-shrink-0'
          variants={logoVariants}
          whileHover='hover'
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Image
              src={logo}
              alt='Logo'
              width={56}
              height={56}
              className='w-12 h-12'
            />
          </motion.div>
          <motion.p
            className='text-2xl font-semibold text-platinum'
            variants={logoVariants}
          >
            Design Lab
          </motion.p>
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          className='hidden lg:flex gap-8 items-center'
          initial='hidden'
          animate='visible'
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {links.map((link, i) => (
            <motion.li
              key={link.title}
              custom={i}
              variants={linkVariants}
              className='text-xl text-silver-mist cursor-pointer relative group font-medium'
              whileHover='hover'
            >
              {link.title}
              <motion.div className='absolute left-0 -bottom-1 h-0.5 w-full bg-platinum origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA */}
        <div className='hidden md:block'>
          <Button>Get in touch</Button>
        </div>

        {/* Hamburger */}
        <button
          className='lg:hidden flex flex-col space-y-1 w-8 h-8 focus:outline-none'
          onClick={toggleMenu}
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
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='lg:hidden mt-4 bg-rich-black/95 rounded-md shadow-xl border border-gray-700 px-4 py-6'
            variants={mobileMenuVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <ul className='space-y-4'>
              {links.map((link, i) => (
                <motion.li
                  key={link.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: i * 0.1 } }}
                  className='text-lg text-silver-mist hover:text-platinum font-medium border-b border-gray-700 pb-2'
                >
                  {link.title}
                </motion.li>
              ))}
            </ul>
            <div className='mt-6'>
              <Button>Get in touch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
