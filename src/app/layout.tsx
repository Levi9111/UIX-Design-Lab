import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';
import clsx from 'clsx';

const spaceGrotesk = localFont({
  src: [
    {
      path: './fonts/space-grotesk/SpaceGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/space-grotesk/SpaceGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/space-grotesk/SpaceGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/space-grotesk/SpaceGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = localFont({
  src: [
    {
      path: './fonts/dm-sans/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/dm-sans/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UIX Design Lab',
  description:
    'We are UIX Design Lab, a creative design and development agency specializing in platform UI/UX, full-stack web development (MERN, Next.js, NestJS), dashboard design, mobile and app design, social media visuals, and WordPress websites. We blend design thinking with technical excellence to build fast, functional, and visually compelling digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={(spaceGrotesk.variable, dmSans.variable)}>
      <body className={clsx('antialiased', spaceGrotesk.className)}>
        {children}
      </body>
    </html>
  );
}
