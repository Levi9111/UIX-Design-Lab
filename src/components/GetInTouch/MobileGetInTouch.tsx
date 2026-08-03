'use client';

import { contactInfo } from '.';
import { useContactForm } from './useContactForm';
import { CALENDLY_URL } from '@/lib/constants/site';

const MobileGetInTouch = () => {
  const { formData, submitted, isLoading, error, form, handleChange, handleSubmit } =
    useContactForm();

  return (
    <div className='relative px-4 py-10 text-silver-mist overflow-hidden'>
      <div className='relative z-10 max-w-sm mx-auto'>
        <div className='mt-8 space-y-4'>
          {/* Enhanced Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <div
              key={info.label}
              className='group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 active:bg-white/15 active:border-white/30 backdrop-blur-sm transition-all duration-200 active:scale-[0.98]'
              style={{
                animationDelay: `${idx * 150}ms`,
                animation: 'slideInUp 0.6s ease-out forwards',
              }}
            >
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-200' />

              <div
                className={`relative p-3 rounded-xl transition-transform duration-200 group-active:scale-105 ${info.bgColor} ${info.color} shadow-md`}
              >
                <info.icon className='w-5 h-5 text-white drop-shadow-sm' />
              </div>

              <div className='flex-1'>
                <p className='text-base font-semibold text-white transition-colors'>
                  {info.label}
                </p>
                <p className='text-sm text-gray-300 transition-colors mt-0.5'>
                  {info.value}
                </p>
              </div>

              <div className='opacity-60 group-active:opacity-100 transition-opacity duration-200'>
                <svg
                  className='w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Contact Form — wired to emailjs via useContactForm hook */}
          <div className='relative mt-8 group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-40 group-focus-within:opacity-60 transition-opacity duration-500' />
            <div className='relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl'>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5' />
              <div className='relative z-10'>
                <div className='flex items-center gap-2 mb-5'>
                  <div className='w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse' />
                  <h3 className='text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                    Send us a Message
                  </h3>
                </div>

                <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
                  <div className='relative group'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 text-sm'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <div className='relative group'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 text-sm'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <div className='relative group'>
                    <textarea
                      name='message'
                      rows={4}
                      placeholder='Your message...'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 resize-none text-sm'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <button
                    type='submit'
                    disabled={isLoading}
                    className='group relative w-full py-3.5 px-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.96] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300' />
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-active:opacity-100 transition-opacity duration-150' />
                    <span className='relative flex items-center justify-center gap-2 text-sm'>
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>

                  {submitted && (
                    <p className='text-sm text-emerald-400 text-center'>
                      Message sent successfully!
                    </p>
                  )}
                  {error && (
                    <p className='text-sm text-red-400 text-center'>{error}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Free Call Section */}
          <div className='mt-10 p-5 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md text-center shadow-xl'>
            <h3 className='text-lg font-bold text-white mb-2'>
              Book a Free 15-Minute Call
            </h3>
            <p className='text-sm text-gray-300 mb-4'>
              Have an idea or question? Let's chat and explore how we can help.
            </p>
            <button
              type='button'
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              className='w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-500 transition-all duration-300'
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGetInTouch;
