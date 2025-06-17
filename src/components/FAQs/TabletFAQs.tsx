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

const TabletFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className='hidden md:block lg:hidden px-6 py-20'>
      <h2 className='text-white text-2xl font-semibold text-center mb-8'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-3 max-w-2xl mx-auto'>
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
    </section>
  );
};

export default TabletFAQs;
