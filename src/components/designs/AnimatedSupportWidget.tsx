'use client';

import { MessageCircle, X, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import { WHATSAPP_URL, TELEGRAM_URL } from '@/lib/constants/site';
import { WhatsAppIcon, TelegramIcon } from '../elements/SocialIcons';

const AnimatedSupportWidget = () => {
  const device = useMedia();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!device || !isVisible) return null;

  const isMobile = device === 'mobile';
  const handleWhatsApp = () => window.open(WHATSAPP_URL, '_blank');
  const handleTelegram = () => window.open(TELEGRAM_URL, '_blank');

  return (
    <div
      className={`fixed z-50 transform-gpu ${
        isMobile ? 'bottom-5 right-4' : 'bottom-6 right-6'
      }`}
    >
      <div
        className={`relative bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl transition-all duration-300 ease-out overflow-hidden ${
          isMobile
            ? isExpanded
              ? 'h-[150px] w-[210px]'
              : 'h-14 w-14'
            : isExpanded
            ? 'h-[260px] w-[260px]'
            : 'h-16 w-16'
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? 'Close support widget' : 'Open support widget'}
          className={`absolute top-0 left-0 z-20 flex items-center justify-center text-white hover:text-cyan-300 transition-colors duration-200 cursor-pointer ${
            isMobile ? 'w-14 h-14' : 'w-16 h-16'
          }`}
        >
          <div className='relative flex items-center justify-center'>
            <div className='relative z-10'>
              {isExpanded ? (
                <X className={isMobile ? 'w-5 h-5' : 'w-6 h-6'} />
              ) : (
                <MessageCircle className={isMobile ? 'w-5 h-5' : 'w-6 h-6'} />
              )}
            </div>
            {!isExpanded && (
              <span className='absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white/40' />
            )}
          </div>
        </button>

        {/* Expanded Content */}
        {isMobile ? (
          /* Mobile Expanded */
          <div
            className={`relative z-10 pt-12 px-3 pb-3 transition-opacity duration-300 ${
              isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <p className='text-center text-[11px] text-gray-400 mb-2 font-medium uppercase tracking-wider'>
              Quick Support
            </p>
            <div className='flex justify-center gap-3'>
              <button
                onClick={handleWhatsApp}
                className='group flex-1 flex flex-col items-center gap-1 p-2 bg-green-500/20 border border-green-500/30 rounded-xl active:bg-green-500/30 transition-colors cursor-pointer'
              >
                <WhatsAppIcon />
                <span className='text-[10px] text-green-300 font-medium'>WhatsApp</span>
              </button>
              <button
                onClick={handleTelegram}
                className='group flex-1 flex flex-col items-center gap-1 p-2 bg-blue-500/20 border border-blue-500/30 rounded-xl active:bg-blue-500/30 transition-colors cursor-pointer'
              >
                <TelegramIcon />
                <span className='text-[10px] text-blue-300 font-medium'>Telegram</span>
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Expanded */
          <div
            className={`relative z-10 pt-6 px-4 pb-4 transition-opacity duration-300 ${
              isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className='text-center mb-3'>
              <h3 className='font-bold text-base bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Need Help?
              </h3>
              <p className='text-white/60 text-xs'>Choose platform</p>
            </div>

            <div className='space-y-2.5'>
              <button
                onClick={handleWhatsApp}
                className='group w-full flex items-center gap-3 p-2.5 bg-green-500/15 border border-green-500/30 rounded-xl hover:bg-green-500/25 transition-colors cursor-pointer'
              >
                <div className='p-1 bg-green-500/20 rounded-lg'>
                  <WhatsAppIcon />
                </div>
                <div className='flex-1 text-left'>
                  <span className='text-white text-xs font-medium block'>WhatsApp Chat</span>
                  <span className='text-white/50 text-[11px] block'>Quick response</span>
                </div>
                <Users className='w-4 h-4 text-green-300/60' />
              </button>

              <button
                onClick={handleTelegram}
                className='group w-full flex items-center gap-3 p-2.5 bg-blue-500/15 border border-blue-500/30 rounded-xl hover:bg-blue-500/25 transition-colors cursor-pointer'
              >
                <div className='p-1 bg-blue-500/20 rounded-lg'>
                  <TelegramIcon />
                </div>
                <div className='flex-1 text-left'>
                  <span className='text-white text-xs font-medium block'>Telegram Support</span>
                  <span className='text-white/50 text-[11px] block'>Secure messaging</span>
                </div>
                <Zap className='w-4 h-4 text-blue-300/60' />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSupportWidget;
