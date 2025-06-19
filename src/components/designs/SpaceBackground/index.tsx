import MobileSpaceBackground from './MobileSpaceBackground';
import TabAndDesktopSpaceBackground from './TabAndDesktopSpaceBackground';

const SpaceBackground = ({ device }: { device: string }) => {
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
