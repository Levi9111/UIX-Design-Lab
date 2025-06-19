import MobilePreFooter from './MobilePreFooter';
import TabAndBiggerPreFooter from './TabAndBiggerPreFooter';

const PreFooter = () => {
  return (
    <>
      <div className='block md:hidden'>
        <MobilePreFooter />
      </div>
      <div className='hidden md:block'>
        <TabAndBiggerPreFooter />
      </div>
    </>
  );
};

export default PreFooter;
