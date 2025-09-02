const PreFooterContent = () => {
  return (
    <section className='pt-16 sm:pt-20 md:pt-28 lg:pt-[120px] pb-6 sm:pb-8 md:pb-10 relative max-h-[400px] '>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 text-[#e0e0e1] font-dm-sans relative z-10 '>
        <h3 className='text-center font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight lg:leading-[100%] tracking-tight break-words'>
          {/* support@uixdl.com */}
          sktahsinahmed@gmail.com
        </h3>
        {/* <div className='max-w-[750px] mx-auto mt-6 sm:mt-8'>
          <ul className='border border-[#232323] rounded-full py-4 sm:py-5 md:py-7 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-7 gap-y-3 sm:gap-y-4 md:gap-y-6 md:justify-between bg-[rgb(4,3,13)]/30 backdrop-blur-md'>
            {[
              'ASSAI in action',
              'Advantages',
              'Discover',
              'Twitter',
              'FAQ',
            ].map((text, idx) => (
              <li
                key={idx}
                className='font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-tight whitespace-nowrap text-center text-white/90 hover:text-white transition-colors duration-200 cursor-pointer'
              >
                {text}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div
        className='w-full h-[2px] sm:h-[3px] absolute bottom-0 z-10'
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, transparent 80%)',
        }}
      />
    </section>
  );
};

export default PreFooterContent;
