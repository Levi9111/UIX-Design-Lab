import PreFooterContent from './PreFooterContent';

const MobilePreFooter = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-t from-purple-900/10 via-blue-900/10 to-transparent pointer-events-none' />
      <PreFooterContent />
    </div>
  );
};

export default MobilePreFooter;
