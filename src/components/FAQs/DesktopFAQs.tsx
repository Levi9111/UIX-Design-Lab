'use client';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { accordionData } from '.';
import SupportModal from './SupportModal';

const AccordionItem = ({
  question,
  answer,
  icon,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  const borderGradient = isOpen
    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';

  return (
    <motion.div
      layout
      onClick={onClick}
      className='group relative cursor-pointer'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className='absolute inset-0 rounded-2xl p-[1px]'
        style={{ background: borderGradient }}
        animate={{
          background: isOpen
            ? [
                'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)',
                'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)',
              ]
            : borderGradient,
        }}
        transition={{ duration: 2, repeat: isOpen ? Infinity : 0 }}
      >
        <div className='h-full w-full rounded-2xl bg-gray-900/50 backdrop-blur-xl' />
      </motion.div>

      <div className='relative z-10 p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <motion.div
              className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm'
              animate={{ scale: isOpen ? 1.1 : 1, rotate: isOpen ? 360 : 0 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              <div className='text-blue-400'>{icon}</div>
            </motion.div>
            <h4 className='text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300'>
              {question}
            </h4>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            className='flex items-center justify-center w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm'
          >
            <ChevronDown className='w-4 h-4 text-white/70 group-hover:text-white' />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className='overflow-hidden'
            >
              <div className='pt-4 pl-14'>
                <motion.p
                  className='text-gray-300 leading-relaxed'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const DesktopFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowSupportModal(false);
    };
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, []);

  return (
    <div className='hidden lg:block relative overflow-hidden'>
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div className='flex flex-col lg:flex-row items-start justify-center gap-12'>
          {/* Left Info Box */}
          <motion.div
            className='w-full max-w-[400px] relative'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative border border-white/10 p-8 rounded-3xl text-white bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-2xl shadow-2xl overflow-hidden'>
              <motion.div
                className='absolute top-0 left-0 w-full h-full opacity-30'
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className='relative z-10'>
                <motion.div
                  className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center'
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <HelpCircle className='w-8 h-8 text-blue-400' />
                </motion.div>

                <h3 className='text-center text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4'>
                  Still Have Questions?
                </h3>
                <p className='text-center text-gray-300 mb-8'>
                  Can't find what you're looking for? Our expert support team is
                  here to help you succeed.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full relative group'
                  onClick={() => setShowSupportModal(true)}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl py-4 px-8 text-white font-semibold flex items-center justify-center gap-2'>
                    <MessageCircle className='w-5 h-5' />
                    Get Support
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Accordion */}
          <motion.div
            className='max-w-[700px] w-full space-y-4'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onMouseMove={handleMouseMove}
            style={
              {
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
              } as React.CSSProperties
            }
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </div>
  );
};

export default DesktopFAQs;
