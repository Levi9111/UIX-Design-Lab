'use client';

import Route from '@/components/elements/Route';
import { motion } from 'framer-motion';
import { serviceData } from '.';
import { Home } from 'lucide-react';

const TabletPricing = () => {
  return (
    <div className='px-4 py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className='relative group'
          >
            <div className='relative bg-gradient-to-br from-[#121417] to-[#1c1f24] backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full flex flex-col'>
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
                  <h3 className='text-xl font-bold text-white group-hover:text-purple-200 transition-colors'>
                    {service.title}
                  </h3>
                  <div className='flex items-baseline gap-1 mt-1'>
                    <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                      {service.price}
                    </span>
                    <span className='text-sm text-gray-400'>/project</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className='space-y-4 mb-6'>
                {service.features.map((feature, i) => (
                  <li key={i} className='flex items-start gap-3 text-gray-300'>
                    <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0'></div>
                    <span className='text-sm leading-relaxed'>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className='w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shadow-xl hover:shadow-purple-500/25 transition-all duration-300'>
                Launch Project
              </button>
            </div>

            {/* Ambient glow */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-xl group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500 -z-10'></div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='text-center mt-16 px-4'
      >
        <p className='text-gray-400 mb-6'>
          Need a custom solution? Let’s build something extraordinary together.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Route link='/get-in-touch'>
            <button className='px-6 py-3 rounded-full border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300'>
              Contact Our Team
            </button>
          </Route>
          <Route link='/'>
            <button className='px-6 py-3 rounded-full border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center gap-2'>
              <Home className='w-4 h-4' />
              Back to Home
            </button>
          </Route>
        </div>
      </motion.div>
    </div>
  );
};

export default TabletPricing;
