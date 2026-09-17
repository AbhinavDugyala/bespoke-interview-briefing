import Link from "next/link";
import { NavLinks } from "@/components/nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="min-w-0" prefetch>
          <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
            Briefing · ER000009
          </p>
          <p className="truncate text-sm text-muted-foreground">
            Abhinav × Bespoke Labs · 17 Sep 2026, 8:00 PM IST
          </p>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
