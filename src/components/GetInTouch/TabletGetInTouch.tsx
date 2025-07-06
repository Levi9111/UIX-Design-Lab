'use client';

import { contactInfo, socialCards } from '.';
import { ExternalLink, Sparkles, ShieldCheck, Clock } from 'lucide-react';

const TabletGetInTouch = () => {
  return (
    <div className='relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-silver-mist overflow-hidden'>
      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Grid Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8 lg:mt-10'>
          {/* Left: Contact & Social Cards */}
          <div className='space-y-3 sm:space-y-4 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2'>
            {[...socialCards, ...contactInfo].map((item, idx) => {
              const isSocial = 'platform' in item;
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={isSocial ? item.href : undefined}
                  className={`group flex items-start justify-between p-4 sm:p-5 rounded-xl border ${
                    isSocial
                      ? `${item.borderColor} ${item.bgColor} ${item.hoverBg}`
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  } transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                >
                  <div className='flex items-center gap-3 sm:gap-4 flex-1 min-w-0'>
                    <div
                      className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 ${
                        isSocial
                          ? `bg-gradient-to-r ${item.color}`
                          : `${item.bgColor} ${item.color}`
                      }`}
                    >
                      <Icon className='w-4 h-4 sm:w-5 sm:h-5 text-silver-mist' />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <h4 className='text-sm sm:text-base font-semibold text-silver-mist truncate'>
                        {isSocial ? item.platform : item.label}
                      </h4>
                      <p className='text-xs sm:text-sm text-gray-400 truncate'>
                        {isSocial ? item.handle : item.value}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-2 sm:line-clamp-none'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {isSocial && (
                    <ExternalLink className='w-4 h-4 text-gray-400 flex-shrink-0 ml-2' />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className='lg:sticky lg:top-6 lg:self-start'>
            <div className='p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm'>
              <h3 className='text-lg sm:text-xl font-bold text-silver-mist mb-4 sm:mb-6'>
                Have an Idea? Let us Know
              </h3>
              <form className='space-y-4 sm:space-y-5'>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                  <input
                    type='text'
                    placeholder='Name'
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm sm:text-base'
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm sm:text-base'
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder='Project Details'
                  className='w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 resize-none transition-all duration-200 text-sm sm:text-base'
                ></textarea>
                <button
                  type='submit'
                  className='w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 hover:from-purple-600 to-purple-600 hover:to-blue-500 text-silver-mist font-semibold rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-sm sm:text-base'
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className='mt-16 sm:mt-20 block lg:hidden'>
          <h2 className='text-xl sm:text-2xl font-bold text-silver-mist mb-6 text-center'>
            Why Work With Us?
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
            <div className='flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-transform'>
              <Sparkles className='w-6 h-6 text-purple-400 mb-3' />
              <h4 className='text-sm sm:text-base font-semibold text-white'>
                Creative Solutions
              </h4>
              <p className='text-xs text-gray-400 mt-1'>
                We think outside the box to bring your vision to life.
              </p>
            </div>
            <div className='flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-transform'>
              <ShieldCheck className='w-6 h-6 text-blue-400 mb-3' />
              <h4 className='text-sm sm:text-base font-semibold text-white'>
                Trusted & Reliable
              </h4>
              <p className='text-xs text-gray-400 mt-1'>
                We ensure secure and professional handling of your project.
              </p>
            </div>
            <div className='flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-transform'>
              <Clock className='w-6 h-6 text-pink-400 mb-3' />
              <h4 className='text-sm sm:text-base font-semibold text-white'>
                Fast Turnaround
              </h4>
              <p className='text-xs text-gray-400 mt-1'>
                On-time delivery without sacrificing quality.
              </p>
            </div>
          </div>
        </div>

        {/* Book a Call Section  */}
        <div className='mt-10 p-6 rounded-xl border border-white/10 bg-white/5 text-center'>
          <h3 className='text-xl font-bold text-silver-mist mb-2'>
            Book a Free 15-Minute Call
          </h3>
          <p className='text-sm text-gray-400 mb-4'>
            Have a concept or question? Let’s jump on a quick call to discuss
            and validate your ideas.
          </p>
          <button
            type='button'
            onClick={
              () => window.open('https://calendly.com/yourname/10min', '_blank') // Replace with your actual link
            }
            className='inline-block px-6 py-3 bg-gradient-to-r from-purple-500 hover:from-blue-600 to-blue-600 hover:to-purple-500 text-silver-mist font-semibold rounded-md transition duration-300'
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabletGetInTouch;
