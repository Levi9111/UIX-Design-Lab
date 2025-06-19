'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

type GalacticModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const GalacticModal: React.FC<GalacticModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Starry background glow */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(109,40,217,0.2),transparent_80%)] z-0 pointer-events-none' />

          <motion.div
            className='relative bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white rounded-2xl shadow-2xl border border-purple-800 p-8 max-w-2xl w-full z-10 overflow-hidden h-[90vh] max-h-[700px]'
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-white/60 hover:text-white transition'
            >
              <X className='w-6 h-6' />
            </button>

            {/* Header */}
            <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text'>
              {title}
            </h2>

            {/* Content */}
            <div
              className='text-white/90 leading-relaxed space-y-4 relative z-10 h-full overflow-y-scroll pr-2 pb-10 2xl:pl-0'
              style={{
                scrollbarWidth: 'thin',
              }}
            >
              {children}
            </div>

            {/* Custom Scrollbar (Tailwind-compatible) */}
            <style jsx>{`
              ::-webkit-scrollbar {
                width: 6px;
              }
              ::-webkit-scrollbar-thumb {
                background: linear-gradient(#a855f7, #6366f1);
                border-radius: 8px;
              }
              ::-webkit-scrollbar-track {
                background: transparent;
              }
            `}</style>

            {/* Bottom glow ring */}
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent blur-sm opacity-50' />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalacticModal;
