"use client";

import Link from "next/link";
import { Phone, Calendar, AlertTriangle } from "lucide-react";
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
          <Phone className="h-4 w-4 text-red-500 shrink-0" />
          <span>Call</span>
        </a>

        {businessConfig.emergency247 && (
          <a
            href={`tel:${businessConfig.phoneE164}`}
            className="flex-1 min-h-[44px] px-2 flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center shadow-lg shadow-red-600/30"
            aria-label="24/7 Emergency Dispatch"
          >
            <AlertTriangle className="h-4 w-4 text-white shrink-0" />
            <span>Emergency</span>
          </a>
        )}

        <Link
          href="/contact"
          className="flex-1 min-h-[44px] px-2 flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-100 text-neutral-950 rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center"
          aria-label="Request Free Estimate"
        >
          <Calendar className="h-4 w-4 text-red-600 shrink-0" />
          <span>Free Estimate</span>
        </Link>
      </div>
    </aside>
  );
}
