import { MessageSquareText, Search, TrendingUp } from "lucide-react";

// Bars rise left to right, echoing the bars in the logo.
const bars = [
  { x: 34, height: 58, opacity: 0.22 },
  { x: 104, height: 84, opacity: 0.36 },
  { x: 174, height: 112, opacity: 0.52 },
  { x: 244, height: 146, opacity: 0.74 },
  { x: 314, height: 182, opacity: 1 },
];

/**
 * Decorative hero artwork built from HTML and SVG only: a growth chart whose
 * rising bars and gradient arrow echo the logo, with floating "search" and
 * "enquiry" cards. It carries no data or claims, so it is hidden from
 * assistive technology.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Gradient frame behind the card */}
      <div className="bg-brand absolute -inset-3 rotate-2 rounded-[2.5rem] opacity-90 sm:-inset-4" />
      <div className="bg-dots absolute -inset-3 rotate-2 rounded-[2.5rem] text-white/25 sm:-inset-4" />

      {/* Main chart card */}
      <div className="relative rounded-[2rem] bg-white p-5 shadow-lift sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-950 text-white">
              <TrendingUp className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Enquiries</p>
              <p className="text-xs text-muted">Growing month on month</p>
            </div>
          </div>
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold whitespace-nowrap text-primary-800">
            Organic + Paid
          </span>
        </div>

        <svg viewBox="0 0 400 230" className="mt-6 h-auto w-full" fill="none">
          <defs>
            <linearGradient id="hero-bar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-primary-600)" />
              <stop offset="1" stopColor="var(--color-primary-950)" />
            </linearGradient>
            <linearGradient id="hero-arrow" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="var(--color-primary-600)" />
              <stop offset="0.55" stopColor="var(--color-violet)" />
              <stop offset="1" stopColor="var(--color-accent-500)" />
            </linearGradient>
          </defs>

          {[60, 110, 160, 210].map((y) => (
            <line
              key={y}
              x1="0"
              x2="400"
              y1={y}
              y2={y}
              stroke="var(--color-line)"
              strokeDasharray="4 6"
            />
          ))}

          {bars.map((bar) => (
            <rect
              key={bar.x}
              x={bar.x}
              y={212 - bar.height}
              width="50"
              height={bar.height}
              rx="10"
              fill="url(#hero-bar)"
              opacity={bar.opacity}
            />
          ))}

          {/* Rising arrow, as in the logo */}
          <path
            d="M18 178 L112 128 L170 152 L262 84 L300 100 L360 42"
            stroke="#fff"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 178 L112 128 L170 152 L262 84 L300 100 L360 42"
            stroke="url(#hero-arrow)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M388 14 L340 28 L372 60 Z"
            fill="var(--color-accent-500)"
            stroke="#fff"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {["SEO", "Social", "Ads"].map((channel, index) => (
            <div key={channel} className="rounded-2xl bg-surface p-3">
              <p className="text-xs font-medium text-muted">{channel}</p>
              <div className="mt-2 h-1.5 rounded-full bg-line">
                <div
                  className="bg-brand h-full rounded-full"
                  style={{ width: `${[82, 64, 73][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating search card */}
      <div className="absolute -top-11 -left-3 flex animate-float items-center gap-3 rounded-2xl border border-line bg-white py-3 pr-5 pl-3 shadow-lift sm:-left-8">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <Search className="size-4" />
        </span>
        <div>
          <p className="text-xs text-muted">Found on Google</p>
          <p className="text-sm font-semibold text-ink">Top of local search</p>
        </div>
      </div>

      {/* Floating enquiry card */}
      <div className="absolute -right-2 -bottom-7 flex animate-float items-center gap-3 rounded-2xl bg-primary-950 py-3 pr-5 pl-3 text-white shadow-lift [animation-delay:-3.5s] sm:-right-6">
        <span className="bg-brand flex size-9 items-center justify-center rounded-full text-white">
          <MessageSquareText className="size-4" />
        </span>
        <div>
          <p className="text-xs text-primary-200">New enquiry</p>
          <p className="text-sm font-semibold">&ldquo;Please share a quote&rdquo;</p>
        </div>
      </div>
    </div>
  );
}
