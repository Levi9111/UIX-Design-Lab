import Button from './Button';

const Hero = () => {
  return (
    <section className='relative pt-[80px] pb-[100px] md:pt-[140px] md:pb-[185px]'>
      <div className=' uix-center flex flex-col items-center justify-center px-4 sm:px-6 '>
        <h1 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight sm:leading-[1.2] tracking-tight text-platinum'>
          A Design & Development Agency <br className='hidden sm:block' />
          Specializing in Powerful UI/UX
        </h1>

        <p className='mt-4 sm:mt-6 mb-8 sm:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-normal max-w-xl sm:max-w-2xl text-center text-cadet-gray'>
          Welcome to UIX Design Lab — a team of passionate designers and
          developers with 4+ years of hands-on experience crafting impactful
          digital products. From intuitive interfaces to full-stack platforms,
          we focus on creating beautiful, functional solutions that drive real
          results.
        </p>

        <Button type={2}>Get in touch</Button>
      </div>
      <div
        className='w-full h-1 absolute bottom-0'
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(216, 231, 242, 0.3) 0%, #04070D 100%)',
        }}
      ></div>
    </section>
  );
};

export default Hero;
