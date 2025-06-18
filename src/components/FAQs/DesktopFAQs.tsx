'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import arrow from '../../../public/icons/arrow.svg';

const accordionData = [
  {
    question: 'Is the template SEO-friendly?',
    answer: 'Yes, the template is built with SEO best practices...',
  },
  {
    question: 'What’s included with the template?',
    answer: 'The template includes reusable UI components...',
  },
  {
    question: 'Can I use this template to create a landing page?',
    answer: 'Absolutely! The template is perfect for landing pages.',
  },
  {
    question: 'Is the template optimized for accessibility?',
    answer: 'Yes, it follows WCAG guidelines...',
  },
  {
    question: 'Does the template include mobile responsiveness?',
    answer: 'Yes, the template is fully responsive...',
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <motion.div
    layout
    onClick={onClick}
    className={`group rounded-xl border border-white/10 p-5 cursor-pointer transition-all duration-300 backdrop-blur-md relative bg-background/50 ${
      isOpen ? 'shadow-[0_0_20px_rgba(207,231,255,0.15)] bg-background/60' : ''
    } hover:shadow-[0_0_20px_rgba(207,231,255,0.1)]`}
    style={{
      boxShadow: isOpen ? '0px 2px 1px 0px #CFE7FF33 inset' : undefined,
    }}
  >
    <div className='flex items-center justify-between'>
      <h4 className='text-lg font-medium text-white group-hover:text-white/90'>
        {question}
      </h4>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className='w-5 h-5 text-white/70 group-hover:text-white' />
      </motion.span>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.p
          className='text-white/70 mt-3 text-base leading-relaxed origin-top'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const DesktopFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='hidden lg:block relative'>
      <div className='uix-center pb-[140px]'>
        <div className='mt-[60px] flex flex-col lg:flex-row items-start justify-center gap-10'>
          {/* Left Info Box */}
          <motion.div
            className='w-full max-w-[368px] relative overflow-hidden border border-white/10 p-6 rounded-3xl text-white bg-background/30 backdrop-blur-md shadow-inner'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-white/10 to-transparent' />
            <h3 className='text-center text-xl text-[#d5dbe6] leading-6 font-medium z-10 relative'>
              Still Have Questions?
            </h3>
            <p className='text-center font-dm-sans text-base text-roman-silver my-3 z-10 relative'>
              Can’t find what you’re looking for? Reach out to our support team
              and we’ll get back to you soon.
            </p>
            <div className='flex justify-center mt-6 z-10 relative'>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='relative rounded-lg overflow-hidden'
              >
                <span className='absolute bottom-0 left-1/2 w-20 h-2 bg-white blur-[6px] rounded-full -translate-x-1/2 translate-y-1 opacity-70 z-10'></span>
                <div className='rounded-lg border border-white/20 flex items-center justify-center gap-2 bg-background py-3 px-6 relative z-20'>
                  <p className='text-xl text-white font-medium'>Get Started</p>
                  <Image src={arrow} alt='Arrow' width={13} height={13} />
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Accordion */}
          <motion.div
            className='max-w-[600px] w-full space-y-4'
            initial='hidden'
            animate='show'
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Glow at Bottom */}
      <div
        className='w-full h-1 absolute bottom-0'
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, transparent 80%)',
        }}
      />
    </div>
  );
};

export default DesktopFAQs;
