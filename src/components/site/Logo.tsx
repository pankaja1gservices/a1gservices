import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  title?: string;
};

/**
 * Vector brand mark: globe with meridians and the "A1" monogram.
 * Drawn as SVG so it always renders crisply and never fails to load.
 */
export function Logo({ className, title = "A1 Global Financial Consultant logo" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label={title}
      className={cn("block", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="a1-globe" x1="12" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.55 0.13 245)" />
          <stop offset="55%" stopColor="oklch(0.38 0.12 253)" />
          <stop offset="100%" stopColor="oklch(0.26 0.09 258)" />
        </linearGradient>
        <linearGradient id="a1-rim" x1="14" y1="10" x2="82" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.95 0.02 250)" />
          <stop offset="50%" stopColor="oklch(0.72 0.02 250)" />
          <stop offset="100%" stopColor="oklch(0.92 0.02 250)" />
        </linearGradient>
        <linearGradient id="a1-gold" x1="24" y1="34" x2="52" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.92 0.09 92)" />
          <stop offset="55%" stopColor="oklch(0.79 0.13 82)" />
          <stop offset="100%" stopColor="oklch(0.66 0.11 72)" />
        </linearGradient>
        <linearGradient id="a1-silver" x1="58" y1="34" x2="76" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.99 0 0)" />
          <stop offset="60%" stopColor="oklch(0.85 0.01 250)" />
          <stop offset="100%" stopColor="oklch(0.7 0.02 250)" />
        </linearGradient>
      </defs>

      <circle cx="48" cy="48" r="45" fill="url(#a1-rim)" />
      <circle cx="48" cy="48" r="40.5" fill="url(#a1-globe)" />

      {/* meridians + latitudes */}
      <g
        fill="none"
        stroke="oklch(0.88 0.05 200)"
        strokeOpacity="0.45"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="48" cy="48" r="40.5" />
        <ellipse cx="48" cy="48" rx="16" ry="40.5" />
        <ellipse cx="48" cy="48" rx="31" ry="40.5" />
        <path d="M9.5 34.5h77M9.5 61.5h77M7.5 48h81" />
      </g>

      {/* landmass hints */}
      <g fill="oklch(0.72 0.13 158)" fillOpacity="0.5">
        <path d="M24 30c6-4 13-3 18 1s-4 8-10 8-13-5-8-9Z" />
        <path d="M60 56c7-3 14 1 15 7s-7 11-13 8-9-12-2-15Z" />
        <path d="M30 62c5-2 10 2 9 6s-8 6-12 3-2-7 3-9Z" />
      </g>

      {/* A1 monogram */}
      <g
        stroke="oklch(0.22 0.05 258)"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M20 71 39.5 24h9.5L68.5 71H57.2l-3.9-10.4H35.2L31.3 71H20Zm18.8-19.6h11.1L44.3 36.2 38.8 51.4Z" fill="url(#a1-gold)" />
        <path d="M67.5 33.5 79 27.5h6.5V71H74.6V38.7l-7.1 3.4v-8.6Z" fill="url(#a1-silver)" />
      </g>

      <ellipse cx="36" cy="24" rx="20" ry="10" fill="oklch(1 0 0)" fillOpacity="0.14" />
    </svg>
  );
}
