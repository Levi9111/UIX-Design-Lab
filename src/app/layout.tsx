import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { dmSans, spaceGrotesk } from './fonts';

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
