'use client';

import { motion, Variants, easeInOut, AnimatePresence } from 'framer-motion';
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

const DesktopNavbar = ({ url }: { url: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll
  const logoOpacity = Math.max(0, 1 - scrollY / 100);
  const logoScale = Math.max(0.5, 1 - scrollY / 200);
  const buttonOpacity = Math.max(0, 1 - scrollY / 80);
  const buttonScale = Math.max(0.8, 1 - scrollY / 150);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, type: 'spring' as const, stiffness: 300 },
    },
  };

  const linkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1 * i + 0.4,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 120,
        damping: 10,
      },
    }),
    hover: {
      y: -3,
      color: '#ffffff',
      scale: 1.05,
      transition: { duration: 0.2, type: 'spring', stiffness: 300 },
    },
  };

  const navListVariants = {
    default: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
    },
    scrolled: {
      backgroundColor: '#04070d',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: 0.8,
        type: 'spring' as const,
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, type: 'spring' as const, stiffness: 300 },
    },
  };

  return (
    <motion.nav
      className='fixed left-0 right-0 top-0 z-50 hidden lg:flex  transition-all duration-300 py-3 h-[100px] items-center'
      style={{
        background: scrolled
          ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)`
          : `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)`,
        backdropFilter: scrolled
          ? 'blur(0px)'
          : `blur(${Math.min(10, scrollY / 5)}px)`,
        borderBottom: scrolled
          ? 'none'
          : `1px solid rgba(128, 128, 128, ${Math.min(0.3, scrollY / 100)})`,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex items-center justify-center uix-center relative'>
        {/* Logo with smooth fade */}
        <Route link='/' className='absolute left-0'>
          <motion.div
            className='flex items-center gap-3 flex-shrink-0'
            variants={logoVariants}
            whileHover='hover'
            style={{
              opacity: logoOpacity,
              scale: logoScale,
            }}
            animate={{
              x: scrolled ? -20 : 0,
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Image
                src={logo}
                alt='Logo'
                width={56}
                height={56}
                className='w-12 h-12'
                style={{
                  filter: `brightness(${1 + scrollY / 500})`,
                }}
              />
            </motion.div>

            <AnimatePresence>
              {logoOpacity > 0.3 && (
                <motion.p
                  className='text-2xl font-semibold text-platinum'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    opacity: Math.max(0, logoOpacity - 0.2),
                  }}
                >
                  Design Lab
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </Route>

        {/* Desktop Nav with smooth background transition */}

        {url === '/' && (
          <motion.ul
            className='flex gap-8 items-center justify-center px-10 py-6 rounded-full h-full border w-[50%]'
            initial='hidden'
            animate={scrolled ? 'scrolled' : 'default'}
            //@ts-expect-error
            variants={navListVariants}
            style={{
              transform: `translateY(${scrolled ? '0px' : '0px'})`,
            }}
          >
            {links.map((link, i) => (
              <motion.li
                key={link.title}
                custom={i}
                variants={linkVariants}
                className='text-xl text-silver-mist cursor-pointer relative group font-medium'
                whileHover='hover'
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById(link.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <motion.span
                  animate={{
                    fontSize: scrolled ? '18px' : '20px',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  {link.title}
                </motion.span>

                {/* Enhanced underline animation */}
                <motion.div
                  className='absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-platinum to-white origin-left scale-x-0 group-hover:scale-x-100'
                  style={{
                    background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%)`,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />

                {/* Hover glow effect */}
                <motion.div
                  className='absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 -z-10'
                  transition={{ duration: 0.2 }}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Desktop CTA with smooth fade */}
        <Route link='/get-in-touch' className='absolute right-0'>
          <motion.div
            variants={buttonVariants}
            whileHover='hover'
            style={{
              opacity: buttonOpacity,
              scale: buttonScale,
            }}
            animate={{
              x: scrolled ? 20 : 0,
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            <AnimatePresence>
              {buttonOpacity > 0.2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button>
                    <motion.span
                      animate={{
                        fontSize: scrolled ? '14px' : '16px',
                        transition: { duration: 0.3, ease: 'easeOut' },
                      }}
                    >
                      Get in touch
                    </motion.span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Route>
      </div>
    </motion.nav>
  );
};

export default DesktopNavbar;
