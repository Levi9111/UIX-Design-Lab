'use client';
import { useMedia } from '../hooks/useMedia';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const device = useMedia();
  return <>{device === 'desktop' ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
