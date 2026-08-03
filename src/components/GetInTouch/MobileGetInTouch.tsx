'use client';

import { contactInfo } from '.';
import { useContactForm } from './useContactForm';
import { CALENDLY_URL } from '@/lib/constants/site';

const MobileGetInTouch = () => {
  const { formData, submitted, isLoading, error, form, handleChange, handleSubmit } =
    useContactForm();

  return (
    <div className='relative px-4 py-2 sm:py-6 text-silver-mist overflow-hidden'>
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
                  {submitted && (
                    <div className='p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm text-center font-medium animate-fadeIn'>
                      ✓ Message sent successfully! We'll reply shortly.
                    </div>
                  )}
                  {error && (
                    <div className='p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-sm text-center font-medium animate-fadeIn'>
                      ✕ {error}
                    </div>
                  )}

                  <div className='space-y-1.5'>
                    <label htmlFor='mobile-name' className='block text-xs font-semibold text-gray-300 uppercase tracking-wider'>
                      Your Name
                    </label>
                    <div className='relative group'>
                      <input
                        id='mobile-name'
                        type='text'
                        name='name'
                        placeholder='Jane Doe'
                        autoComplete='name'
                        autoCapitalize='words'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:border-white/30 text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1.5'>
                    <label htmlFor='mobile-email' className='block text-xs font-semibold text-gray-300 uppercase tracking-wider'>
                      Email Address
                    </label>
                    <div className='relative group'>
                      <input
                        id='mobile-email'
                        type='email'
                        name='email'
                        placeholder='jane@company.com'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:border-white/30 text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1.5'>
                    <label htmlFor='mobile-message' className='block text-xs font-semibold text-gray-300 uppercase tracking-wider'>
                      Your Message
                    </label>
                    <div className='relative group'>
                      <textarea
                        id='mobile-message'
                        name='message'
                        rows={4}
                        placeholder='Tell us about your project or idea...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:border-white/30 resize-none text-sm'
                      />
                    </div>
                  </div>

                  <button
                    type='submit'
                    disabled={isLoading}
                    className='group relative w-full py-3.5 px-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 active:scale-[0.97] shadow-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300' />
                    <span className='relative flex items-center justify-center gap-2 text-sm'>
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Free Call Section */}
          <div className='mt-8 p-5 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/20 via-blue-600/15 to-purple-600/20 backdrop-blur-md text-center shadow-xl'>
            <h3 className='text-lg font-bold text-white mb-1.5'>
              Book a Free 15-Minute Call
            </h3>
            <p className='text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed'>
              Have an idea or question? Let's chat and explore how we can help.
            </p>
            <button
              type='button'
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              className='w-full py-3.5 px-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl active:scale-[0.98] transition-all shadow-lg cursor-pointer text-sm'
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
