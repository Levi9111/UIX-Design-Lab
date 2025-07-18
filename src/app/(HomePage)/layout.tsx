'use client';

import { Suspense, useEffect, useState } from 'react';
import Footer from '@/components/ui/Footer';
import Welcoming from '@/components/ui/Welcoming';
import Navbar from '@/components/Navigation';
import SpaceBackground from '@/components/designs/SpaceBackground/index';
import { useMedia } from '@/components/hooks/useMedia';
import LoadingDesign from '@/components/designs/LoadingDesign';
import AnimatedSupportWidget from '@/components/designs/AnimatedSupportWidget';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const device = useMedia();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Welcoming />;
  }

  return (
    <main className='relative overflow-x-hidden'>
      <Navbar />
      <SpaceBackground device={device} />
      <Suspense fallback={<LoadingDesign />}>{children}</Suspense>
      <Footer />
      <AnimatedSupportWidget />
    </main>
  );
}
