export const STAR_COLORS = [
  '#ffffff',
  '#93c5fd',
  '#f472b6',
  '#facc15',
  '#a855f7',
  '#5eead4',
] as const;

export const getStarColor = () =>
  STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
