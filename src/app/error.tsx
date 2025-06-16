'use client';

// app/special/error.tsx
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold'>Something went wrong</h1>
      <button
        onClick={() => reset()}
        className='mt-6 px-4 py-2 bg-white text-black rounded'
      >
        Try Again
      </button>
    </div>
  );
}
