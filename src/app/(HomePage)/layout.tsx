'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/ui/Footer';
import NebulaBackground from '@/components/designs/NebulaBackground';
import Welcoming from '@/components/ui/Welcoming';
import Navbar from '@/components/Navigation';
import LoadingPage from './loading';
import SpaceBackground from '@/components/designs/SpaceBackground/index';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Welcoming />;
  }

  return (
    <main className='relative'>
      <Navbar />
      {/* <NebulaBackground /> */}
      <SpaceBackground />
      {children}
      <Footer />
    </main>
  );
}
