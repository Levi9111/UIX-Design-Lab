'use client';

import {
  motion,
  Variants,
  easeInOut,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logos/logo.svg';
import Button from '../elements/Button';
import Route from '../elements/Route';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants/navLinks';

const links = NAV_LINKS;

// Static Variants declared outside the component to prevent recreation on re-renders
const navVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const logoVariants: Variants = {
  hidden: { scale: 0, rotate: -180, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, type: 'spring', stiffness: 300 },
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

const navListVariants: Variants = {
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
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.2, type: 'spring', stiffness: 300 },
  },
};

const DesktopNavbar = ({ url }: { url: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogoText, setShowLogoText] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const { scrollY } = useScroll();

  // Hardware-accelerated MotionValues (DOM updates bypass React re-renders)
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.5]);
  const logoBrightness = useTransform(scrollY, (y) => `brightness(${1 + y / 500})`);

  const buttonOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const buttonScale = useTransform(scrollY, [0, 150], [1, 0.8]);

  const navBackground = useTransform(scrollY, (y) =>
    y > 10
      ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)'
  );

  const navBackdropBlur = useTransform(scrollY, (y) =>
    y > 10 ? 'blur(0px)' : `blur(${Math.min(10, y / 5)}px)`
  );

  const navBorderBottom = useTransform(scrollY, (y) =>
    y > 10 ? 'none' : `1px solid rgba(128, 128, 128, ${Math.min(0.3, y / 100)})`
  );

  // Threshold event listener — triggers React state update ONLY when threshold is crossed
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isScrolled = latest > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }

    const isLogoTextVisible = latest < 70; // 1 - 70/100 = 0.3 opacity threshold
    if (isLogoTextVisible !== showLogoText) {
      setShowLogoText(isLogoTextVisible);
    }

    const isButtonVisible = latest < 64; // 1 - 64/80 = 0.2 opacity threshold
    if (isButtonVisible !== showButton) {
      setShowButton(isButtonVisible);
    }
  });

  return (
    <motion.nav
      className='fixed left-0 right-0 top-0 z-50 hidden lg:flex py-3 h-[100px] items-center'
      style={{
        background: navBackground,
        backdropFilter: navBackdropBlur,
        borderBottom: navBorderBottom,
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
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ filter: logoBrightness }}
            >
              <Image
                src={logo}
                alt='Logo'
                width={56}
                height={56}
                className='w-12 h-12'
              />
            </motion.div>

            <AnimatePresence>
              {showLogoText && (
                <motion.p
                  className='text-2xl font-semibold text-platinum'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  Design Lab
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </Route>

        {/* Desktop Nav links with smooth background transition */}
        <motion.ul
          className='flex gap-8 items-center justify-center px-10 py-6 rounded-full h-full border w-[55%]'
          initial='hidden'
          animate={scrolled ? 'scrolled' : 'default'}
          variants={navListVariants}
        >
          {url === '/' ? (
            <>
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

                  <motion.div
                    className='absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 -z-10'
                    transition={{ duration: 0.2 }}
                  />
                </motion.li>
              ))}
            </>
          ) : (
            <motion.li
              key='BackToHome'
              variants={linkVariants}
              className='text-xl text-silver-mist cursor-pointer relative group font-medium'
              whileHover='hover'
              whileTap={{ scale: 0.95 }}
            >
              <Link href='/'>
                <motion.span
                  animate={{
                    fontSize: scrolled ? '18px' : '20px',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  ← Back to Home
                </motion.span>
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
                <motion.div
                  className='absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 -z-10'
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.li>
          )}

          <motion.li
            key='About Us'
            variants={linkVariants}
            className='text-xl text-silver-mist cursor-pointer relative group font-medium'
            whileHover='hover'
            whileTap={{ scale: 0.95 }}
          >
            <Link href='/about-us'>
              <motion.span
                animate={{
                  fontSize: scrolled ? '18px' : '20px',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                About Us
              </motion.span>

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
              <motion.div
                className='absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 -z-10'
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.li>
        </motion.ul>

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
              {showButton && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button>Get in touch</Button>
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
