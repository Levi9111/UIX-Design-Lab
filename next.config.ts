import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ─── Security ─────────────────────────────────────────────────────────────
  poweredByHeader: false,

  // ─── Compression ──────────────────────────────────────────────────────────
  compress: true,

  // ─── Image Optimisation ───────────────────────────────────────────────────
  images: {
    // Prefer modern formats; browsers that support AVIF/WebP get them
    // automatically — PNGs are served to legacy browsers as a fallback.
    formats: ['image/avif', 'image/webp'],

    // Cache optimised images on the CDN/edge for 30 days.
    // Without this, Next.js defaults to 60 seconds, meaning every cold
    // edge node re-transcodes the image on the next request.
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days in seconds

    // Responsive breakpoints for src-set generation.
    // Matches common viewport widths used in the project.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Explicit fixed-width sizes for components that use width/height props
    // (e.g. logos, icons, avatar images).
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ─── Bundle Optimisation ──────────────────────────────────────────────────
  experimental: {
    // Tree-shake these packages at the named-export level so only the icons
    // and motion components actually imported end up in the JS bundle.
    // Particularly important for react-icons and developer-icons which ship
    // thousands of symbols we never use.
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      'react-icons',
      'developer-icons',
    ],
  },
};

export default nextConfig;
