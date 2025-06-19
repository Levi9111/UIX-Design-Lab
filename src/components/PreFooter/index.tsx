'use client';
import { useMedia } from '../hooks/useMedia';
import MobilePreFooter from './MobilePreFooter';
import TabAndBiggerPreFooter from './TabAndBiggerPreFooter';

const PreFooter = () => {
  const device = useMedia();

  return (
    <>{device === 'mobile' ? <MobilePreFooter /> : <TabAndBiggerPreFooter />}</>
  );
};

export default PreFooter;
