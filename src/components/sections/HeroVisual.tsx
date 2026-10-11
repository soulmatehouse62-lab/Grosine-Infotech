import { MessageSquareText, Search, TrendingUp } from "lucide-react";

/**
 * Decorative hero artwork built from HTML and SVG only: a stylised growth
 * dashboard with floating "search" and "enquiry" cards. It carries no data
 * or claims, so it is hidden from assistive technology.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Background shapes */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-100 via-primary-50 to-accent-100 sm:-inset-6" />
      <div className="bg-dots absolute -inset-4 rounded-[2.5rem] text-primary-700/15 sm:-inset-6" />
      <div className="absolute -top-8 -right-2 size-24 rounded-full bg-accent-400/70 blur-2xl" />

      {/* Main dashboard card */}
      <div className="relative rounded-3xl border border-white bg-white p-5 shadow-lift sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary-700 text-white">
              <TrendingUp className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Enquiries</p>
              <p className="text-xs text-muted">Growing month on month</p>
            </div>
          </div>
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            Organic + Paid
          </span>
        </div>

        <svg viewBox="0 0 400 190" className="mt-5 h-auto w-full" fill="none">
          <defs>
            <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
              <stop offset="1" stopColor="var(--color-primary-500)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 85, 130, 175].map((y) => (
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
          <path
            d="M0 160 C40 150 60 140 95 132 S150 128 185 100 S250 92 285 62 S350 44 400 18 V190 H0 Z"
            fill="url(#hero-area)"
          />
          <path
            d="M0 160 C40 150 60 140 95 132 S150 128 185 100 S250 92 285 62 S350 44 400 18"
            stroke="var(--color-primary-700)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="285" cy="62" r="7" fill="#fff" stroke="var(--color-accent-500)" strokeWidth="4" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {["SEO", "Social", "Ads"].map((channel, index) => (
            <div key={channel} className="rounded-2xl bg-surface p-3">
              <p className="text-xs font-medium text-muted">{channel}</p>
              <div className="mt-2 h-1.5 rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-primary-600"
                  style={{ width: `${[82, 64, 73][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating search card */}
      <div className="absolute -top-11 -left-3 flex animate-float items-center gap-3 rounded-2xl border border-line bg-white py-3 pr-5 pl-3 shadow-lift sm:-left-8">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent-100 text-accent-700">
          <Search className="size-4" />
        </span>
        <div>
          <p className="text-xs text-muted">Found on Google</p>
          <p className="text-sm font-semibold text-ink">Top of local search</p>
        </div>
      </div>

      {/* Floating enquiry card */}
      <div className="absolute -right-2 -bottom-6 flex animate-float items-center gap-3 rounded-2xl bg-primary-900 py-3 pr-5 pl-3 text-white shadow-lift [animation-delay:-3.5s] sm:-right-6">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent-500 text-ink">
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
