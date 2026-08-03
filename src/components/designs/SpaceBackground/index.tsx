import { DeviceType } from '@/hooks/useMedia';
import MobileSpaceBackground from './MobileSpaceBackground';
import TabAndDesktopSpaceBackground from './TabAndDesktopSpaceBackground';

const SpaceBackground = ({
  device = 'mobile',
}: {
  device?: DeviceType;
}) => {
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
