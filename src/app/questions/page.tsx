"use client";

import { useMemo, useState } from "react";
import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORY_LABEL, QUESTIONS, type Question } from "@/lib/content/questions";

const FILTERS: Array<"all" | "star" | Question["category"]> = [
  "star",
  "all",
  "opener",
  "design",
  "hacking",
  "eval-rl",
  "behavioral",
  "company",
];

function QuestionCard({ item }: { item: Question }) {
  return (
    <details className="group rounded-2xl border border-border bg-card/50 p-4 open:border-primary/30">
      <summary className="cursor-pointer list-none">
        <div className="flex flex-wrap items-center gap-2">
          {item.star ? <Badge>Star</Badge> : <Badge variant="outline">{CATEGORY_LABEL[item.category]}</Badge>}
          <span className="text-[15px] font-medium leading-snug">{item.q}</span>
        </div>
        <p className="mt-2 text-sm text-primary">{item.firstLine}</p>
      </summary>
      <div className="mt-4 space-y-3">
        <SpeakBlock>{item.spoken}</SpeakBlock>
        <p className="text-xs text-muted-foreground">If you stall: {item.ifStuck}</p>
      </div>
    </details>
  );
}

export default function QuestionsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("star");

  const items = useMemo(() => {
    if (filter === "all") return QUESTIONS;
    if (filter === "star") return QUESTIONS.filter((q) => q.star);
    return QUESTIONS.filter((q) => q.category === filter);
  }, [filter]);

  return (
    <PageShell
      kicker="Question bank"
      title="Answer the first sentence, then go specific."
      lede="Starred questions are the ones a behavioural RL-task interview almost always hits. Open one, say the gold line, then the spoken block. Do not read paragraphs on the call."
    >
      <div className="flex flex-wrap gap-1.5">
        {FILTERS.map((f) => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f)}
          >
            {f === "star" ? "Starred" : f === "all" ? "All" : CATEGORY_LABEL[f]}
          </Button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{items.length} questions</p>
      <div className="grid gap-3">
        {items.map((item) => (
          <QuestionCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}
