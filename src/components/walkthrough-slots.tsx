"use client";

import { useBriefingStats } from "@/components/numbers-panel";
import { SpeakBlock } from "@/components/page-shell";
import { FILL_IN } from "@/lib/content/walkthrough";

export function WalkthroughSlots() {
  const stats = useBriefingStats();
  const ready = Boolean(stats.taskName.trim() || stats.crux.trim() || stats.passAt.trim());

  return (
    <div className="space-y-4 rounded-2xl border border-border bg-card/50 p-4 sm:p-5">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        Your slots from Tonight
      </p>
      {ready ? (
        <dl className="grid gap-3 text-sm">
          <div>
            <dt className="text-xs text-muted-foreground">The task you will narrate</dt>
            <dd className="mt-1 text-pretty">{stats.taskName || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">The crux</dt>
            <dd className="mt-1 text-pretty">{stats.crux || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">pass@5 you remember</dt>
            <dd className="mt-1 text-pretty">{stats.passAt || "—"}</dd>
          </div>
        </dl>
      ) : (
        <p className="text-sm text-muted-foreground">
          Empty until you fill the Numbers panel on Tonight. Do not invent a task on the call.
        </p>
      )}
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {FILL_IN.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <SpeakBlock label="Close the 60-second answer with this">{FILL_IN.spokenTemplate}</SpeakBlock>
    </div>
  );
}
