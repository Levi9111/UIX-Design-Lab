import { contactInfo, socialCards } from '.';
const TabletGetInTouch = () => {
  return (
    <div className='relative px-4 py-16 text-silver-mist overflow-hidden'>
      <div className='relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
          <div className='space-y-5'>
            {[...socialCards, ...contactInfo].map((item, idx) => {
              const isSocial = 'platform' in item;
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex items-center gap-5 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl ${
                    isSocial
                      ? `${item.borderColor} ${item.bgColor} ${
                          item.hoverBg
                        } hover:shadow-lg hover:shadow-${item.platform.toLowerCase()}/20`
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                  }`}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards',
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  <div
                    className={`relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      isSocial
                        ? `bg-gradient-to-br ${item.color} shadow-lg`
                        : `${item.bgColor} ${item.color} shadow-md`
                    }`}
                  >
                    <Icon className='w-6 h-6 text-white drop-shadow-sm' />
                  </div>

                  <div className='flex-1'>
                    <h4 className='text-lg font-bold text-white mb-1 group-hover:text-white transition-colors'>
                      {isSocial ? item.platform : item.label}
                    </h4>
                    <p className='text-base text-gray-300 group-hover:text-gray-200 transition-colors'>
                      {isSocial ? item.handle : item.value}
                    </p>
                    <p className='text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors'>
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle arrow indicator */}
                  <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0'>
                    <svg
                      className='w-5 h-5 text-gray-400'
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
              );
            })}
          </div>

          {/* Enhanced Form */}
          <div className='relative group'>
            {/* Form background glow */}
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500' />

            <div className='relative p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl'>
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5' />

              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                    Have an Idea? Let us Know
                  </h3>
                </div>

                <form className='space-y-6'>
                  <div className='relative group'>
                    <input
                      type='text'
                      placeholder='Your Name'
                      className='w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <div className='relative group'>
                    <input
                      type='email'
                      placeholder='Email Address'
                      className='w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <div className='relative group'>
                    <textarea
                      rows={5}
                      placeholder='Tell us about your project...'
                      className='w-full px-5 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 resize-none'
                    />
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>

                  <button
                    type='submit'
                    className='group relative w-full py-4 px-6 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]'
                  >
                    {/* Button background */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300' />
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Button shine effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />

                    <span className='relative flex items-center justify-center gap-2'>
                      Send Your Message
                      <svg
                        className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      ></svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabletGetInTouch;
