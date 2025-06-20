'use client';
import { usePathname } from 'next/navigation';
import { useMedia } from '../hooks/useMedia';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const device = useMedia();
  const url = usePathname();

  console.log(url);
  return (
    <>
      {device === 'desktop' ? (
        <DesktopNavbar url={url} />
      ) : (
        <MobileNavbar url={url} />
      )}
    </>
  );
};

export default Navbar;
