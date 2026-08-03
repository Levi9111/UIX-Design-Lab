'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Zap } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg className='w-7 h-7 fill-current text-green-300' viewBox='0 0 24 24'>
    <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
  </svg>
);

const TelegramIcon = () => (
  <svg className='w-7 h-7 fill-current text-blue-300' viewBox='0 0 24 24'>
    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.128.832.942z' />
  </svg>
);

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
                  <WhatsAppIcon />
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
                  <TelegramIcon />
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
