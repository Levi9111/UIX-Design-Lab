'use client';

import { motion, Variants, easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logos/logo.svg';
import Button from '../elements/Button';
import Route from '../elements/Route';

const links = [
  { title: 'Home', id: 'home' },
  { title: 'Services', id: 'services' },
  { title: 'Portfolio', id: 'portfolio' },
  { title: 'Review', id: 'review' },
  { title: 'FAQ', id: 'faq' },
];

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 hidden lg:block h-auto py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-rich-black/80 backdrop-blur-md shadow-xl border-b border-white/10'
          : 'bg-rich-black/40 backdrop-blur-sm shadow-sm border-b border-gray-800/30'
      }`}
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Route link='/'>
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
        </Route>

        {/* Desktop Nav */}
        <motion.ul
          className='flex gap-8 items-center'
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
              onClick={() => {
                const el = document.getElementById(link.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {link.title}
              <motion.div className='absolute left-0 -bottom-1 h-0.5 w-full bg-platinum origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA */}
        <Route link='/get-in-touch'>
          <Button>Get in touch</Button>
        </Route>
      </div>
    </motion.nav>
  );
};

export default DesktopNavbar;
