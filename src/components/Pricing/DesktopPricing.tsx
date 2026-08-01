'use client';

import Route from '@/components/elements/Route';
import { motion } from 'framer-motion';
import { serviceData } from '.';
import { Home } from 'lucide-react';

const DesktopPricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='grid md:grid-cols-3 gap-8 lg:gap-12'
      >
        {serviceData.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className='relative group transform-gpu'
          >
            <div className='relative bg-gradient-to-br from-[#121417] to-[#1c1f24] backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/10'>
              {/* Floating orb */}
              <div className='absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity'>
                <div className='absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping' />
              </div>

              {/* Header */}
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30'>
                  <service.icon className='w-7 h-7 text-purple-300' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-purple-200 transition-colors'>
                    {service.title}
                  </h3>
                  <div className='flex items-baseline gap-1 mt-1'>
                    <span className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                      {service.price}
                    </span>
                    <span className='text-sm text-gray-400'>/project</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className='flex-1 mb-8'>
                <ul className='space-y-4'>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-gray-300'
                    >
                      <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0' />
                      <span className='text-sm leading-relaxed'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Route link='/select-your-project'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer'
                >
                  Launch Project
                </motion.button>
              </Route>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='text-center mt-16'
      >
        <p className='text-gray-400 mb-6'>
          Need a custom solution? Let's build something extraordinary together.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Route link='/get-in-touch'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-full border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 cursor-pointer'
            >
              Contact Our Team
            </motion.button>
          </Route>
          <Route link='/'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-full border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2 cursor-pointer'
            >
              <Home className='w-4 h-4' />
              Back to Home
            </motion.button>
          </Route>
        </div>
      </motion.div>
    </div>
  );
};

export default DesktopPricing;
