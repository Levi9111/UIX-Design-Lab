import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { dmSans, spaceGrotesk } from './fonts';

const siteUrl = 'https://uixdesignlab.com'; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'UIX Design Lab | Creative Design & Development Agency',
    template: '%s | UIX Design Lab',
  },
  description:
    'UIX Design Lab is a creative design and development agency specializing in platform UI/UX, full-stack web development (MERN, Next.js, NestJS), dashboard design, mobile and app design, and WordPress websites.',
  keywords: [
    'UI/UX Design',
    'Web Development',
    'MERN Stack',
    'Next.js Development',
    'Agency',
    'Dashboard Design',
    'Mobile App Design',
    'Creative Agency',
    'WordPress Development',
    'UIX Design Lab',
  ],
  authors: [{ name: 'UIX Design Lab' }],
  creator: 'UIX Design Lab',
  publisher: 'UIX Design Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'UIX Design Lab | Creative Design & Development Agency',
    description:
      'We blend design thinking with technical excellence to build fast, functional, and visually compelling digital experiences.',
    url: siteUrl,
    siteName: 'UIX Design Lab',
    images: [
      {
        url: '/logos/logo.svg', // Ideally a PNG/JPG for better social preview support
        width: 1200,
        height: 630,
        alt: 'UIX Design Lab Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UIX Design Lab | Creative Design & Development Agency',
    description:
      'Creative design and development agency specializing in platform UI/UX and full-stack web development.',
    images: ['/logos/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UIX Design Lab',
    url: siteUrl,
    logo: `${siteUrl}/logos/logo.svg`,
    description:
      'UIX Design Lab is a creative design and development agency specializing in platform UI/UX and full-stack web development.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US', // Adjust as necessary
    },
    sameAs: [
      'https://twitter.com/uixdesignlab', // Replace with actual social links
      'https://linkedin.com/company/uixdesignlab',
      'https://github.com/uixdesignlab',
    ],
  };

  return (
    <html lang='en' className={(spaceGrotesk.variable, dmSans.variable)}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={clsx('antialiased', spaceGrotesk.className)}>
        {children}
      </body>
    </html>
  );
}
