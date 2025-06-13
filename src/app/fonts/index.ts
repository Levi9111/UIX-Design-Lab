import localFont from 'next/font/local';

export const spaceGrotesk = localFont({
  src: [
    {
      path: './space-grotesk/SpaceGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './space-grotesk/SpaceGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './space-grotesk/SpaceGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './space-grotesk/SpaceGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const dmSans = localFont({
  src: [
    {
      path: './dm-sans/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './dm-sans/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './dm-sans/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});
