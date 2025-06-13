import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'
import clsx from "clsx";

const spaceGrotesk = localFont({
  src: [
    {
      path: './fonts/SpaceGrotesk-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SpaceGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
})




export const metadata: Metadata = {
  title: "UIX Design Lab",
  description: "We are UIX Design Lab, a creative design and development agency specializing in platform UI/UX, full-stack web development (MERN, Next.js, NestJS), dashboard design, mobile and app design, social media visuals, and WordPress websites. We blend design thinking with technical excellence to build fast, functional, and visually compelling digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body
        className={clsx('antialiased',spaceGrotesk.className)}
      >
        {children}
      </body>
    </html>
  );
}
