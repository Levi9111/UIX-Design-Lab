const PreFooterContent = () => {
  return (
    <section className='pt-16 sm:pt-20 md:pt-28 lg:pt-[120px] pb-6 sm:pb-8 md:pb-10 relative max-h-[400px] '>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 text-[#e0e0e1] font-dm-sans relative z-10 '>
        <h3 className='text-center font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight lg:leading-[100%] tracking-tight break-all sm:break-words select-all'>
          sktahsinahmed@gmail.com
        </h3>
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
