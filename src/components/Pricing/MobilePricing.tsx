'use client';
import Route from '@/components/elements/Route';
import { serviceData } from '.';
import { Home } from 'lucide-react';

const MobilePricing = () => {
  return (
    <div className='space-y-12'>
      <div className='grid grid-cols-1 gap-6'>
        {serviceData.map((service, index) => (
          <div
            key={index}
            className='relative bg-gradient-to-br from-[#121417] to-[#1c1f24] backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 transition-all duration-300 flex flex-col'
          >
            {/* Floating orb */}
            <div className='absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60'>
              <div className='absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping'></div>
            </div>

            {/* Header */}
            <div className='flex items-center gap-4 mb-4'>
              <div className='p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30'>
                <service.icon className='w-6 h-6 text-purple-300' />
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>
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
            <ul className='space-y-3 text-gray-300 text-sm mb-6'>
              {service.features.map((feature, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0'></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className='w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shadow-xl hover:shadow-purple-500/25 transition-all duration-300'>
              Launch Project
            </button>

            {/* Ambient glow */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-xl -z-10'></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='text-center space-y-4 mt-4'>
        <p className='text-gray-400 text-sm'>
          Need a custom solution? Let’s build something extraordinary together.
        </p>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <Route link='/get-in-touch'>
            <button className='px-6 py-3 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300'>
              Contact Our Team
            </button>
          </Route>
          <Route link='/'>
            <button className='px-6 py-3 rounded-full border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2'>
              <Home className='w-4 h-4' />
              Back to Home
            </button>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default MobilePricing;
