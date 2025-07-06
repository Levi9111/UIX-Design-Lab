'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='bg-gray-900 border border-slate-700/50 rounded-2xl p-6 w-full max-w-md text-center relative'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className='absolute top-3 right-4 text-white/70 hover:text-white text-xl'
              onClick={onClose}
            >
              <X />
            </button>

            <h3 className='text-xl font-semibold text-white mb-2'>
              Contact Us
            </h3>
            <p className='text-sm text-gray-400 mb-6'>
              We're here to help you!
            </p>

            <div className='flex justify-center gap-6'>
              <a
                href='https://wa.me/your-number'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-500 text-2xl border border-green-500 p-4 rounded-full transition-all hover:scale-110 hover:bg-green-500/10'
              >
                <FaWhatsapp />
              </a>
              <a
                href='https://t.me/your-username'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 text-2xl border border-blue-400 p-4 rounded-full transition-all hover:scale-110 hover:bg-blue-400/10'
              >
                <FaTelegramPlane />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
