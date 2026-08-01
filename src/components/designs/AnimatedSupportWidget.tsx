'use client';

import { MessageCircle, X, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import { Telegram, WhatsApp } from 'developer-icons';
import { WHATSAPP_URL, TELEGRAM_URL } from '@/lib/constants/site';

const AnimatedSupportWidget = () => {
  const device = useMedia();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<'whatsapp' | 'telegram' | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!device || !isVisible) return null;

  const isMobile = device === 'mobile';
  const handleWhatsApp = () => window.open(WHATSAPP_URL, '_blank');
  const handleTelegram = () => window.open(TELEGRAM_URL, '_blank');

  return (
    <div
      className={`fixed z-50 transform-gpu ${
        isMobile
          ? 'bottom-4 right-4 animate-widget-float-mobile'
          : 'bottom-6 right-6 animate-widget-float'
      }`}
    >
      <div
        className={`relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95
        backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ease-out
        overflow-hidden ${
          isMobile
            ? isExpanded
              ? 'h-[140px] w-[200px]'
              : 'h-14 w-14'
            : isExpanded
            ? 'h-[280px] w-[280px]'
            : 'h-16 w-16'
        }`}
        style={{
          boxShadow: isExpanded
            ? '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 8px 20px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Hardware-accelerated background glow */}
        <div className='absolute inset-0 overflow-hidden rounded-2xl pointer-events-none'>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30
            rounded-2xl blur-xl transition-all duration-700 animate-pulse ${
              isExpanded ? 'scale-110 opacity-80' : 'scale-90 opacity-60'
            }`}
          />
          <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl' />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? 'Close support widget' : 'Open support widget'}
          className={`absolute top-0 left-0 z-20 flex items-center justify-center text-white
          hover:text-cyan-300 transition-all duration-300 group cursor-pointer ${
            isMobile ? 'w-14 h-14' : 'w-16 h-16'
          }`}
        >
          <div className='relative flex items-center justify-center'>
            <div
              className={`absolute -left-1 -top-1 inset-0 border-2 border-transparent border-t-cyan-400 border-r-purple-400
              rounded-full transition-all duration-700 ${
                isMobile ? 'w-7 h-7' : 'w-8 h-8'
              } ${isExpanded ? 'animate-spin' : 'animate-pulse'}`}
            />
            <div className='relative z-10 group-hover:scale-110 transition-transform duration-300'>
              <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                {isExpanded ? (
                  <X className={isMobile ? 'w-5 h-5 drop-shadow-lg' : 'w-6 h-6 drop-shadow-lg'} />
                ) : (
                  <MessageCircle className={isMobile ? 'w-5 h-5 drop-shadow-lg' : 'w-6 h-6 drop-shadow-lg'} />
                )}
              </div>
            </div>
            {!isExpanded && (
              <div
                className='absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500
                rounded-full animate-pulse border border-white/30'
              />
            )}
          </div>
        </button>

        {/* Expanded Content */}
        {isMobile ? (
          /* Mobile Expanded View */
          <div
            className={`relative z-10 pt-16 px-3 pb-3 transition-all duration-500 ease-out ${
              isExpanded
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <div className='flex justify-center gap-4'>
              <button
                onClick={handleWhatsApp}
                className='group relative w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/30
                border border-green-500/40 rounded-xl hover:scale-110 active:scale-95 hover:border-green-400/60
                transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 overflow-hidden cursor-pointer'
              >
                <div className='relative z-10 flex items-center justify-center h-full'>
                  <WhatsApp className='w-7 h-7 text-green-300 group-hover:text-green-200 transition-colors duration-300' />
                </div>
                <div className='absolute bottom-1 right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse' />
              </button>

              <button
                onClick={handleTelegram}
                className='group relative w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/30
                border border-blue-500/40 rounded-xl hover:scale-110 active:scale-95 hover:border-blue-400/60
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden cursor-pointer'
              >
                <div className='relative z-10 flex items-center justify-center h-full'>
                  <Telegram className='w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors duration-300' />
                </div>
                <div className='absolute bottom-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse' />
              </button>
            </div>
            <div className='flex justify-center gap-1 mt-3'>
              <div className='w-1 h-1 bg-white/40 rounded-full' />
              <div className='w-1 h-1 bg-white/20 rounded-full' />
              <div className='w-1 h-1 bg-white/40 rounded-full' />
            </div>
          </div>
        ) : (
          /* Desktop Expanded View */
          <div
            className={`relative z-10 pt-7 px-4 pb-4 transition-all duration-500 ease-out ${
              isExpanded
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div className='text-center mb-4'>
              <h3 className='font-bold text-lg mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Need Help?
              </h3>
              <p className='text-white/70 text-sm'>Choose your preferred platform</p>
            </div>

            <div className='space-y-3'>
              <button
                onClick={handleWhatsApp}
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                className='group w-full flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/20 to-green-600/20
                border border-green-500/30 rounded-xl hover:scale-105 hover:border-green-400/50
                transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 relative overflow-hidden cursor-pointer'
              >
                <div
                  className={`absolute inset-0 bg-green-500/10 transition-opacity duration-300 ${
                    hoveredButton === 'whatsapp' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className='relative z-10 p-1 bg-green-500/20 rounded-lg'>
                  <WhatsApp className='w-7 h-7 text-green-300' />
                </div>
                <div className='flex-1 text-left relative z-10'>
                  <span className='text-white text-sm font-medium'>WhatsApp Chat</span>
                  <p className='text-white/60 text-xs'>Quick response</p>
                </div>
                <div className='relative z-10 flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                  <Users className='w-4 h-4 text-green-300/60' />
                </div>
              </button>

              <button
                onClick={handleTelegram}
                onMouseEnter={() => setHoveredButton('telegram')}
                onMouseLeave={() => setHoveredButton(null)}
                className='group w-full flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20
                border border-blue-500/30 rounded-xl hover:scale-105 hover:border-blue-400/50
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden cursor-pointer'
              >
                <div
                  className={`absolute inset-0 bg-blue-500/10 transition-opacity duration-300 ${
                    hoveredButton === 'telegram' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className='relative z-10 p-1 bg-blue-500/20 rounded-lg'>
                  <Telegram className='w-7 h-7 text-blue-300' />
                </div>
                <div className='flex-1 text-left relative z-10'>
                  <span className='text-white text-sm font-medium'>Telegram Support</span>
                  <p className='text-white/60 text-xs'>Secure messaging</p>
                </div>
                <div className='relative z-10 flex items-center gap-2'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
                  <Zap className='w-4 h-4 text-blue-300/60' />
                </div>
              </button>
            </div>

            <div className='mt-4 text-center'>
              <p className='text-white/50 text-xs'>Average response: 60 min</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSupportWidget;
