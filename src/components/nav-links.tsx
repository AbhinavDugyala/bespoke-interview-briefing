"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content/meta";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Briefing sections"
      className="flex flex-wrap gap-1.5"
    >
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center rounded-full px-3.5 text-sm transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
