import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <p className="font-mono text-[11px] tracking-[0.14em] text-primary uppercase sm:tracking-[0.22em]">
        {kicker}
      </p>
      <h1 className="font-serif mt-2 max-w-3xl text-pretty text-[1.65rem] leading-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
        {lede}
      </p>
      <div className="mt-8 min-w-0 space-y-8">{children}</div>
    </div>
  );
}

export function SpeakBlock({
  label = "Say this",
  children,
  className,
}: {
  label?: string;
  children: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "min-w-0 overflow-hidden rounded-2xl border border-primary/25 bg-primary/8 p-4 sm:p-6",
        className
      )}
    >
      <figcaption className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        {label}
      </figcaption>
      <blockquote className="mt-3 whitespace-pre-wrap break-words text-[15px] leading-relaxed text-foreground">
        {children}
      </blockquote>
    </figure>
  );
}
