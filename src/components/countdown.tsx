"use client";

import { useSyncExternalStore } from "react";
import { INTERVIEW } from "@/lib/content/meta";

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 1000);
  return () => window.clearInterval(id);
}

function now() {
  return Date.now();
}

function serverNow() {
  return 0;
}

function parts(ms: number) {
  if (ms <= 0) return { h: 0, m: 0, s: 0, done: true as const };
  const s = Math.floor(ms / 1000);
  return {
    h: Math.floor(s / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false as const,
  };
}

export function Countdown() {
  const current = useSyncExternalStore(subscribe, now, serverNow);
  const start = new Date(INTERVIEW.isoStart).getTime();

  if (current === 0) {
    return (
      <p className="font-mono text-sm text-muted-foreground">
        {INTERVIEW.when} ({INTERVIEW.tz})
      </p>
    );
  }

  const t = parts(start - current);

  if (t.done) {
    return (
      <p className="font-mono text-sm text-primary">
        It is interview time. Close this tab except Stories.
      </p>
    );
  }

  return (
    <p className="font-mono text-sm text-muted-foreground">
      {INTERVIEW.when} IST ·{" "}
      <span className="text-foreground">
        {t.h}h {String(t.m).padStart(2, "0")}m {String(t.s).padStart(2, "0")}s
      </span>{" "}
      remaining
    </p>
  );
}
