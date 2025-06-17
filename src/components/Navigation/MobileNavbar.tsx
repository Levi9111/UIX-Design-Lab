'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

const lineProps =
  'w-full h-[2px] bg-platinum rounded transition-all duration-300';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='block lg:hidden bg-rich-black/90 px-4 py-3 border-b border-gray-800/30 backdrop-blur-sm shadow-md relative z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src={logo} alt='Logo' width={40} height={40} />
          <p className='text-lg text-platinum font-semibold'>Design Lab</p>
        </div>

        {/* Animated Hamburger/X Icon */}
        <button
          className='w-8 h-8 flex flex-col justify-center items-center gap-1 relative z-50'
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className={lineProps}
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
          <motion.span
            className={lineProps}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={lineProps}
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='mt-3 space-y-3 bg-rich-black/70 px-3 py-3 rounded-md border border-gray-700'
          >
            {links.map((link) => (
              <p
                key={link.title}
                className='text-silver-mist text-base font-medium border-b border-gray-700 pb-1'
              >
                {link.title}
              </p>
            ))}
            <Button>Contact</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
