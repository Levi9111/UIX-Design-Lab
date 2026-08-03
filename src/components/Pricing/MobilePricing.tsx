'use client';

import Route from '@/components/elements/Route';
import { pricingTiers } from '.';
import { Home } from 'lucide-react';

const MobilePricing = () => {
  return (
    <div className='space-y-12'>
      <div className='grid grid-cols-1 gap-6'>
        {pricingTiers.map((service, index) => {
          const isPopular = index === 1;

          return (
            <div
              key={index}
              className={`relative backdrop-blur-xl rounded-3xl p-6 border transition-all duration-300 flex flex-col ${
                isPopular
                  ? 'bg-gradient-to-br from-[#1b172a] to-[#1c1f24] border-purple-400/60 shadow-xl shadow-purple-900/20'
                  : 'bg-gradient-to-br from-[#121417] to-[#1c1f24] border-purple-500/20'
              }`}
            >
              {/* Popular Badge or Floating Orb */}
              {isPopular ? (
                <div className='absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-purple-300/30'>
                  Most Popular
                </div>
              ) : (
                <div className='absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60'>
                  <div className='absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping' />
                </div>
              )}

              {/* Header */}
              <div className='flex items-center gap-4 mb-4 mt-1'>
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
              <ul className='space-y-3 text-gray-300 text-sm mb-6 flex-1'>
                {service.features.map((feature, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <div className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Route link='/select-your-project'>
                <button
                  className={`w-full py-3.5 px-4 rounded-2xl font-semibold text-base shadow-xl transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white shadow-purple-500/30'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/20'
                  }`}
                >
                  Launch Project
                </button>
              </Route>

              {/* Ambient glow */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-xl -z-10' />
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className='text-center space-y-4 mt-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md'>
        <p className='text-gray-300 text-sm leading-relaxed'>
          Need a custom solution? Let’s build something extraordinary together.
        </p>
        <div className='flex flex-col gap-3 items-center justify-center pt-1'>
          <Route link='/get-in-touch' className='w-full'>
            <button className='w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg active:scale-[0.98] transition-transform'>
              Contact Our Team
            </button>
          </Route>
          <Route link='/'>
            <button className='px-5 py-2.5 rounded-full text-gray-400 active:text-white transition-colors flex items-center justify-center gap-2 text-sm'>
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
