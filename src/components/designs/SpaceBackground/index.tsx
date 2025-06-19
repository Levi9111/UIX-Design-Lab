'use client';
import { useMedia } from '@/components/hooks/useMedia';
import MobileSpaceBackground from './MobileSpaceBackground';
import TabAndDesktopSpaceBackground from './TabAndDesktopSpaceBackground';

const SpaceBackground = () => {
  const device = useMedia();

  return (
    <>
      {device === 'mobile' ? (
        <MobileSpaceBackground />
      ) : (
        <TabAndDesktopSpaceBackground />
      )}
    </>
  );
};

export default SpaceBackground;
