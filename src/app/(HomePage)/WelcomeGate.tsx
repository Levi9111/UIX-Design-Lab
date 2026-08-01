'use client';

import { Suspense, useEffect, useState } from 'react';
import Footer from '@/components/ui/Footer';
import Welcoming from '@/components/ui/Welcoming';
import Navbar from '@/components/Navigation';
import SpaceBackground from '@/components/designs/SpaceBackground';
import { useMedia } from '@/components/hooks/useMedia';
import LoadingDesign from '@/components/designs/LoadingDesign';
import AnimatedSupportWidget from '@/components/designs/AnimatedSupportWidget';

/**
 * WelcomeGate — client component that handles the 4-second splash screen.
 * Extracted from layout.tsx so that the layout itself can remain a Server Component,
 * preserving SSR, metadata streaming, and correct hydration.
 */
export default function WelcomeGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const device = useMedia();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Welcoming />;

  return (
    <main className='relative overflow-x-hidden'>
      <Navbar />
      <SpaceBackground device={device ?? 'desktop'} />
      <Suspense fallback={<LoadingDesign />}>{children}</Suspense>
      <Footer />
      <AnimatedSupportWidget />
    </main>
  );
}
