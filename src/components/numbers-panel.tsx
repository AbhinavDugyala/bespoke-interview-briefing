"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type Stats = {
  submitted: string;
  rtd: string;
  passAt: string;
  taskName: string;
  crux: string;
  pythonYears: string;
};

const KEY = "bespoke-briefing-stats";

const EMPTY: Stats = {
  submitted: "",
  rtd: "",
  passAt: "",
  taskName: "",
  crux: "",
  pythonYears: "",
};

let memory: Stats = EMPTY;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStorage(): Stats {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    return { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    return EMPTY;
  }
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot() {
  return memory;
}

function getServerSnapshot() {
  return EMPTY;
}

function write(next: Stats) {
  memory = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
  emit();
}

if (typeof window !== "undefined") {
  memory = readStorage();
}

export function useBriefingStats() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function NumbersPanel() {
  const stats = useBriefingStats();

  const setField = useCallback((key: keyof Stats, value: string) => {
    write({ ...memory, [key]: value });
  }, []);

  const field = (key: keyof Stats, label: string, placeholder: string) => (
    <label className="grid gap-1.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      {key === "crux" ? (
        <Textarea
          value={stats[key]}
          placeholder={placeholder}
          onChange={(e) => setField(key, e.target.value)}
          className="min-h-20 bg-background/60 text-base"
        />
      ) : (
        <Input
          value={stats[key]}
          placeholder={placeholder}
          onChange={(e) => setField(key, e.target.value)}
          className="min-h-11 bg-background/60 text-base"
        />
      )}
    </label>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your numbers — fill before the call</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        {field("submitted", "Tasks submitted (Dynamo)", "e.g. 6")}
        {field("rtd", "Ready-to-deliver / accepted", "e.g. 3")}
        {field("passAt", "Hardest pass@5 you remember", "e.g. 1/5 valid fails")}
        {field("pythonYears", "Honest years of production Python", "e.g. 1.5")}
        <div className="sm:col-span-2">
          {field(
            "taskName",
            "The one task you will narrate",
            "category + one-line problem, no confidential names needed"
          )}
        </div>
        <div className="sm:col-span-2">
          {field(
            "crux",
            "The crux of that task — why the model failed, fairly",
            "held-out case / wrong-default lure / entangled rule"
          )}
        </div>
        <p className="sm:col-span-2 text-xs text-muted-foreground">
          Stored only in this browser. The resume PDF did not attach in this
          environment — if a number is not in your head, look it up now, do not
          invent it on Meet.
        </p>
      </CardContent>
    </Card>
  );
}
