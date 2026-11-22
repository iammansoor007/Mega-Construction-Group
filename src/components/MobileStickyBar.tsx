import Link from "next/link";
import { businessConfig } from "@/config/business";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/10 px-3 py-2 shadow-2xl safe-area-pb"
    >
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto w-full">
        <a
          href={`tel:${businessConfig.phoneE164}`}
          className="flex-1 min-h-[44px] px-2 flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center"
          aria-label="Call Mega Contracting NY Group"
        >
          <svg className="h-4 w-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call</span>
        </a>

        {businessConfig.emergency247 && (
          <a
            href={`tel:${businessConfig.phoneE164}`}
            className="flex-1 min-h-[44px] px-2 flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center shadow-lg shadow-red-600/30"
            aria-label="24/7 Emergency Dispatch"
          >
            <svg className="h-4 w-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Emergency</span>
          </a>
        )}

        <Link
          href="/contact"
          className="flex-1 min-h-[44px] px-2 flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-950 rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center"
          aria-label="Request Free Estimate"
        >
          <svg className="h-4 w-4 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Free Estimate</span>
        </Link>
      </div>
    </aside>
  );
}
