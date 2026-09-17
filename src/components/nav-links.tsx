"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content/meta";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 lg:mx-0 lg:px-0 lg:pb-0">
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
              "shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
