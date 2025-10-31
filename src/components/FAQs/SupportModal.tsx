'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Zap } from 'lucide-react';
import { WhatsApp, Telegram } from 'developer-icons';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+8801759745923', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/SkTahsinAhmed', '_blank');
  };

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
            className='bg-slate-900 border border-slate-700/50 rounded-2xl p-6 w-full max-w-md text-center relative shadow-2xl overflow-hidden'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              className='absolute top-3 right-4 text-white/70 hover:text-white text-xl transition-all duration-300 hover:rotate-90'
              onClick={onClose}
            >
              <X />
            </button>

            {/* Header */}
            <h3 className='text-xl font-semibold text-white mb-2'>
              Contact Us
            </h3>
            <p className='text-sm text-gray-400 mb-6'>
              We're here to help you! Choose your platform.
            </p>

            {/* Buttons Section */}
            <div className='flex flex-col gap-4'>
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className='group w-full flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/20 to-green-600/20 
                border border-green-500/30 rounded-xl hover:scale-[1.02] hover:border-green-400/50 
                transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 relative overflow-hidden'
              >
                {/* Hover glow */}
                <div className='absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300' />

                {/* Icon Section */}
                <div className='relative z-10 p-1 bg-green-500/20 rounded-lg'>
                  <WhatsApp className='w-7 h-7 text-green-300' />
                </div>

                {/* Text Section */}
                <div className='flex-1 text-left relative z-10'>
                  <span className='text-white text-sm font-medium'>
                    WhatsApp Chat
                  </span>
                  <p className='text-white/60 text-xs'>Quick response</p>
                </div>

                {/* Indicator Section */}
                <div className='relative z-10 flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                  <Users className='w-4 h-4 text-green-300/60' />
                </div>
              </button>

              {/* Telegram Button */}
              <button
                onClick={handleTelegram}
                className='group w-full flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 
                border border-blue-500/30 rounded-xl hover:scale-[1.02] hover:border-blue-400/50 
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden'
              >
                {/* Hover glow */}
                <div className='absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300' />

                {/* Icon Section */}
                <div className='relative z-10 p-1 bg-blue-500/20 rounded-lg'>
                  <Telegram className='w-7 h-7 text-blue-300' />
                </div>

                {/* Text Section */}
                <div className='flex-1 text-left relative z-10'>
                  <span className='text-white text-sm font-medium'>
                    Telegram Support
                  </span>
                  <p className='text-white/60 text-xs'>Secure messaging</p>
                </div>

                {/* Indicator Section */}
                <div className='relative z-10 flex items-center gap-2'>
                  <div
                    className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'
                    style={{ animationDelay: '0.5s' }}
                  />
                  <Zap className='w-4 h-4 text-blue-300/60' />
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className='mt-5 text-center'>
              <p className='text-white/50 text-xs'>Average response: 60 min</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
