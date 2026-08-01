/**
 * Single source of truth for all social media links.
 * Update here and every consumer (Footer, GetInTouch, JSON-LD) stays in sync.
 */
export const SOCIAL_LINKS = {
  behance: 'https://www.behance.net/sktahsinahmed',
  dribbble: 'https://dribbble.com/sktahsinahmed',
  linkedin:
    'https://www.linkedin.com/in/sktahsinahmed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  instagram: 'https://www.instagram.com/sk.tahmed/',
  twitter: 'https://x.com/UIXDesignLab?t=Nk_18DFhoDwRkck8O-_OCw&s=09',
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
