'use client';

const NebulaBackground = () => {
  return (
    <div className='pointer-events-none fixed inset-0 -z-50 overflow-hidden'>
      <div className='absolute inset-0'>
        <div
          className='absolute -top-40 -left-40 w-[1200px] h-[1200px] bg-pink-500 mix-blend-screen opacity-20 blur-[160px] animate-pulse'
          style={{ borderRadius: '50%' }}
        />
        <div
          className='absolute top-1/3 left-1/2 w-[900px] h-[900px] bg-indigo-500 mix-blend-screen opacity-25 blur-[180px] animate-pulse'
          style={{ borderRadius: '50%' }}
        />
        <div
          className='absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-blue-500 mix-blend-screen opacity-15 blur-[140px] animate-pulse'
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default NebulaBackground;
