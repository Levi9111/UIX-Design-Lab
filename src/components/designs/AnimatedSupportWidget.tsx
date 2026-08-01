'use client';

import { MessageCircle, X, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import { WHATSAPP_URL, TELEGRAM_URL } from '@/lib/constants/site';

// Ultra-lightweight inline SVGs (0 extra bundle overhead)
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
        isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'
      }`}
    >
      <div
        className={`relative bg-slate-900/90 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl transition-all duration-300 ease-out overflow-hidden ${
          isMobile
            ? isExpanded
              ? 'h-[135px] w-[190px]'
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
            className={`relative z-10 pt-14 px-3 pb-3 transition-opacity duration-300 ${
              isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className='flex justify-center gap-3'>
              <button
                onClick={handleWhatsApp}
                className='group p-2.5 bg-green-500/20 border border-green-500/30 rounded-xl hover:bg-green-500/30 transition-colors cursor-pointer'
              >
                <WhatsAppIcon />
              </button>
              <button
                onClick={handleTelegram}
                className='group p-2.5 bg-blue-500/20 border border-blue-500/30 rounded-xl hover:bg-blue-500/30 transition-colors cursor-pointer'
              >
                <TelegramIcon />
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
