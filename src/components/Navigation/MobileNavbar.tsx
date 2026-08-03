'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/logos/logo.svg';
import Button from '../elements/Button';
import Route from '../elements/Route';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants/navLinks';

const LINE_CLASS =
  'w-full h-[2px] bg-platinum rounded transition-all duration-300';

const MobileNavbar = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className='block lg:hidden bg-rich-black/90 px-4 py-3 border-b border-gray-800/30 backdrop-blur-sm shadow-md relative z-50'>
      <div className='flex items-center justify-between'>
        <Route className='flex items-center gap-2' link='/'>
          <Image src={logo} alt='Logo' width={40} height={40} />
          <p className='text-lg text-platinum font-semibold'>Design Lab</p>
        </Route>

        {/* Animated Hamburger/X Icon - 44x44px touch target */}
        <button
          className='w-11 h-11 p-2.5 flex flex-col justify-center items-center gap-1.5 relative z-50 cursor-pointer rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors'
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <motion.span
            className={LINE_CLASS}
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
          <motion.span
            className={LINE_CLASS}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={LINE_CLASS}
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className='mt-3 space-y-1 bg-rich-black/90 p-4 rounded-2xl border border-gray-800 backdrop-blur-xl overflow-hidden shadow-2xl'
          >
            {url === '/' ? (
              <>
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.title}
                    className='text-silver-mist text-base font-medium border-b border-gray-800/80 min-h-[48px] py-3 px-2 flex items-center justify-between cursor-pointer active:bg-white/5 active:text-white transition-colors rounded-lg'
                    onClick={() => {
                      setIsOpen(false);
                      const el = document.getElementById(link.id);
                      if (el) {
                        el.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                  >
                    <span>{link.title}</span>
                    <span className='text-xs text-gray-500'>›</span>
                  </li>
                ))}
              </>
            ) : (
              <li className='py-2 border-b border-gray-800/80'>
                <Link
                  href='/'
                  onClick={() => setIsOpen(false)}
                  className='inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-sky-blue/30 bg-sky-blue/10 text-sky-blue text-sm font-medium active:scale-95 transition-all'
                >
                  ← Back to Home
                </Link>
              </li>
            )}

            <li className='text-silver-mist text-base font-medium border-b border-gray-800/80 min-h-[48px] py-3 px-2 flex items-center justify-between cursor-pointer active:bg-white/5 active:text-white transition-colors rounded-lg'>
              <Link
                href='/about-us'
                onClick={() => setIsOpen(false)}
                className='w-full flex items-center justify-between'
              >
                <span className={url === '/about-us' ? 'text-sky-blue font-semibold' : ''}>
                  About Us
                </span>
                <span className='text-xs text-gray-500'>›</span>
              </Link>
            </li>
            <li className='pt-4 pb-2' onClick={() => setIsOpen(false)}>
              <Route link='/get-in-touch'>
                <Button>Get in touch</Button>
              </Route>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
