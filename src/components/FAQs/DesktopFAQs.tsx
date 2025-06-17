'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import arrow from '../../../public/icons/arrow.svg';
import Image from 'next/image';

const accordionData = [
  {
    question: 'Is the template SEO-friendly?',
    answer:
      'Yes, the template is built with SEO best practices, making it easy to optimize your content for search engines.',
  },
  {
    question: 'What’s included with the template?',
    answer:
      'The template includes reusable UI components, responsive layouts, and a modern design system to build your site faster.',
  },
  {
    question: 'Can I use this template to create a landing page?',
    answer:
      'Absolutely! The template is perfect for building high-converting, responsive landing pages.',
  },
  {
    question: 'Is the template optimized for accessibility?',
    answer:
      'Yes, it follows WCAG guidelines and ensures your site is usable for all visitors.',
  },
  {
    question: 'Does the template include mobile responsiveness?',
    answer:
      'Yes, the template is fully responsive and works seamlessly on all screen sizes.',
  },
];

export const AccordionItem = ({
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
  <div
    className='rounded-lg border border-white/10 p-4 cursor-pointer bg-background/50'
    style={{ boxShadow: '0px 2px 1px 0px #CFE7FF33 inset' }}
    onClick={onClick}
  >
    <div className='flex items-center justify-between'>
      <h4 className='text-base md:text-lg font-medium text-white'>
        {question}
      </h4>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className='w-5 h-5 text-white/80' />
      </motion.span>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.p
          className='text-sm md:text-base text-white/70 mt-2 leading-relaxed'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const DesktopFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='hidden lg:block relative'>
      <div className='uix-center pb-[140px]'>
        <div className='mt-[60px] flex flex-col lg:flex-row items-start justify-center gap-8'>
          <div className='w-full max-w-[368px] bg-background/40 border border-white/10 p-6 rounded-3xl text-white shadow-inner mt-6 md:mt-0 relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/5 to-transparent' />
            <h3 className='text-center text-xl text-[#d5dbe6] leading-6 font-medium'>
              Still Have Questions?
            </h3>
            <p className='text-center font-dm-sans text-base text-roman-silver my-3'>
              Can’t find what you’re looking for? Reach out to our support team
              and we’ll get back to you soon.
            </p>
            <div className='flex justify-center mt-6'>
              <button
                className='relative rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]'
                style={{ boxShadow: '0px 2px 1px 0px #CFE7FF33 inset' }}
              >
                <span className='absolute bottom-0 left-1/2 w-20 h-2 bg-white blur-[6px] rounded-full -translate-x-1/2 translate-y-1 opacity-70 z-10'></span>
                <div className='rounded-lg border border-granite flex items-center justify-center gap-2 bg-background py-3 px-6 relative z-20'>
                  <p className='text-xl text-white font-medium'>Get Started</p>
                  <Image src={arrow} alt='Arrow' width={13} height={13} />
                </div>
              </button>
            </div>
          </div>

          <div className='max-w-[600px] w-full space-y-2'>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
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
// Create TabletFAQs and MobileFAQs similarly with different layout/responsiveness as needed.
