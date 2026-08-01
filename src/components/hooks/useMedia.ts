import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Returns the current device breakpoint.
 * Returns `null` until the first client-side measurement is done,
 * preventing hydration mismatches between SSR and client renders.
 */
export const useMedia = (): DeviceType | null => {
  const [device, setDevice] = useState<DeviceType | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice('mobile');
      else if (width < 1024) setDevice('tablet');
      else setDevice('desktop');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device;
};
