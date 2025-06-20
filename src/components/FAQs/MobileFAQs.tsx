'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { accordionData } from '.';

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    className='relative group'
  >
    {/* Subtle gradient border */}
    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

    <div
      className='relative rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-sm cursor-pointer transition-all duration-200 active:scale-[0.98]'
      onClick={onClick}
    >
      <div className='p-4 sm:p-5'>
        <div className='flex items-center justify-between gap-3'>
          <h4 className='text-sm sm:text-base font-medium text-white leading-relaxed flex-1'>
            {question}
          </h4>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className='flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center'
          >
            <ChevronDown className='w-4 h-4 text-white/60' />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className='overflow-hidden'
            >
              <p className='text-xs sm:text-sm text-white/70 mt-3 leading-relaxed'>
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle inner glow */}
      {isOpen && (
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none' />
      )}
    </div>
  </motion.div>
);

const SupportCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className='relative overflow-hidden'
    >
      {/* Gradient border */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl p-[1px]'>
        <div className='h-full w-full rounded-2xl bg-gray-900/60 backdrop-blur-sm' />
      </div>

      <div className='relative z-10 p-6 text-center'>
        {/* Icon */}
        <div className='w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
          <HelpCircle className='w-6 h-6 text-blue-400' />
        </div>

        <h3 className='text-lg sm:text-xl font-semibold text-white mb-2'>
          Still Have Questions?
        </h3>

        <p className='text-sm text-white/70 mb-6 leading-relaxed max-w-sm mx-auto'>
          Can't find what you're looking for? Our support team is here to help
          you succeed.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className='relative group w-full sm:w-auto'
        >
          {/* Button glow */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60 group-active:opacity-80 transition-opacity' />

          <div className='relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg py-3 px-6 flex items-center justify-center gap-2'>
            <MessageCircle className='w-4 h-4 text-white' />
            <span className='text-sm font-medium text-white'>Get Support</span>
            <ArrowRight className='w-4 h-4 text-white' />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

const MobileFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='block lg:hidden'>
      {/* Subtle background pattern */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className='relative z-10 px-4 pt-8 pb-12'>
        {/* Accordion Items */}
        <div className='space-y-3 mb-8'>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
              index={index}
            />
          ))}
        </div>

        {/* Support Card */}
        <div className='max-w-sm mx-auto'>
          <SupportCard />
        </div>
      </div>
    </div>
  );
};

export default MobileFAQs;
