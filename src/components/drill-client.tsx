"use client";

import { useMemo, useState } from "react";
import { SpeakBlock } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { QUESTIONS } from "@/lib/content/questions";
import { NINETY_SECOND_OPENER } from "@/lib/content/opener";

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function DrillClient() {
  const deck = useMemo(() => shuffle(QUESTIONS.filter((q) => q.star)), []);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [opener, setOpener] = useState(false);
  const current = deck[index];

  const next = () => {
    setRevealed(false);
    setIndex((i) => (i + 1) % deck.length);
  };

  return (
    <>
      <div className="rounded-2xl border border-border bg-card/60 p-5 sm:p-8">
        <p className="font-mono text-xs text-primary">
          {index + 1} / {deck.length}
        </p>
        <h2 className="font-serif mt-3 text-2xl leading-snug sm:text-3xl">
          {current.q}
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          First line, if you remember it: a single sentence, then examples.
        </p>
        {revealed ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm font-medium text-primary">{current.firstLine}</p>
            <SpeakBlock>{current.spoken}</SpeakBlock>
            <p className="text-xs text-muted-foreground">Stall line: {current.ifStuck}</p>
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
            Answer out loud, then reveal.
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={() => setRevealed(true)} disabled={revealed}>
            Reveal
          </Button>
          <Button variant="outline" onClick={next}>
            Next
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-lg">Opener timer</h3>
          <Button variant="secondary" onClick={() => setOpener((v) => !v)}>
            {opener ? "Hide script" : "Show script"}
          </Button>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Speak for about 90 seconds. If you go past two minutes, you are listing internships.
        </p>
        {opener ? (
          <div className="mt-4">
            <SpeakBlock label="Opener">{NINETY_SECOND_OPENER}</SpeakBlock>
          </div>
        ) : null}
      </div>
    </>
  );
}
