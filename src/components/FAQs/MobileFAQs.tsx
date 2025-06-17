'use client';

import { useState } from 'react';
import { AccordionItem } from './DesktopFAQs';

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

import arrow from '../../../public/icons/arrow.svg';
import Image from 'next/image';

const SupportCard = () => {
  return (
    <div className='w-full bg-background/60 border border-white/10 p-4 rounded-3xl text-white shadow-inner relative overflow-hidden'>
      {/* Angled top */}
      <div className='absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/5 to-transparent' />

      <h3 className='text-center text-lg text-[#d5dbe6] leading-5 font-medium'>
        Still Have Questions?
      </h3>
      <p className='text-center font-dm-sans text-[14px] text-roman-silver my-2'>
        Can’t find what you’re looking for? Reach out to our support team and
        we’ll get back to you soon.
      </p>

      <div className='flex justify-center mt-2'>
        <button
          className='relative rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]'
          style={{ boxShadow: '0px 2px 1px 0px #CFE7FF33 inset' }}
        >
          <span className='absolute bottom-0 left-1/2 w-20 h-2 bg-white blur-[6px] rounded-full -translate-x-1/2 translate-y-1 opacity-70 z-10'></span>

          <div className='rounded-md border border-granite flex items-center justify-center gap-2 bg-background py-2 px-3 relative z-20'>
            <p className='text-base text-white font-medium'>Get Started</p>
            <Image src={arrow} alt='Arrow' width={10} height={10} />
          </div>
        </button>
      </div>
    </div>
  );
};

const MobileFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className='block lg:hidden px-4 pt-4'>
      <div className='space-y-3'>
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
      <div className='mt-12 max-w-2xl mx-auto'>
        <SupportCard />
      </div>
    </div>
  );
};

export default MobileFAQs;
