'use client';
import Route from '@/components/elements/Route';
import { easeInOut, motion } from 'framer-motion';
import { serviceData } from '.';
import { Home } from 'lucide-react';

const DesktopPricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const glowVariants = {
    initial: {
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.1)',
    },
    hover: {
      boxShadow:
        '0 0 40px rgba(147, 51, 234, 0.3), 0 0 80px rgba(147, 51, 234, 0.1)',
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easeInOut, // use a valid easing string
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
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='relative group'
          >
            <motion.div
              variants={glowVariants}
              initial='initial'
              whileHover='hover'
              className='relative bg-gradient-to-br from-[#121417] to-[#1c1f24] backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full flex flex-col'
            >
              {/* Floating orb */}
              <div className='absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity'>
                <div className='absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping'></div>
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
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      viewport={{ once: true }}
                      className='flex items-start gap-3 text-gray-300'
                    >
                      <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0'></div>
                      <span className='text-sm leading-relaxed'>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-purple-500/25 transition-all duration-300'
              >
                Launch Project
              </motion.button>
            </motion.div>

            {/* Ambient glow */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-xl group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500 -z-10'></div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
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
              className='px-8 py-3 rounded-full border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300'
            >
              Contact Our Team
            </motion.button>
          </Route>
          <Route link='/'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 rounded-full border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2'
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
