import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { dmSans, spaceGrotesk } from './fonts';
import { SITE_URL, SITE_NAME } from '@/lib/constants/site';
import { SOCIAL_LINKS } from '@/lib/constants/socials';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Creative Design & Development Agency`,
    template: `%s | ${SITE_NAME}`,
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
    SITE_NAME,
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_NAME} | Creative Design & Development Agency`,
    description:
      'We blend design thinking with technical excellence to build fast, functional, and visually compelling digital experiences.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/logos/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Creative Design & Development Agency`,
    description:
      'Creative design and development agency specializing in platform UI/UX and full-stack web development.',
    images: ['/logos/og-image.png'],
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
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo.svg`,
    description:
      'UIX Design Lab is a creative design and development agency specializing in platform UI/UX and full-stack web development.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BD',
    },
    sameAs: Object.values(SOCIAL_LINKS),
  };

  return (
    <html lang='en' className={clsx(spaceGrotesk.variable, dmSans.variable)}>
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
