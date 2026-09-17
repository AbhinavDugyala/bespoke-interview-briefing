import Link from "next/link";
import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_LABEL, QUESTIONS, type Question } from "@/lib/content/questions";

export const FILTERS: Array<"all" | "star" | Question["category"]> = [
  "star",
  "all",
  "opener",
  "design",
  "hacking",
  "eval-rl",
  "behavioral",
  "company",
];

export function isFilter(value: string | undefined): value is (typeof FILTERS)[number] {
  return !!value && (FILTERS as string[]).includes(value);
}

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

function hrefFor(filter: (typeof FILTERS)[number]) {
  return filter === "star" ? "/questions" : `/questions/${filter}`;
}

export function QuestionsView({ filter }: { filter: (typeof FILTERS)[number] }) {
  const items =
    filter === "all"
      ? QUESTIONS
      : filter === "star"
        ? QUESTIONS.filter((q) => q.star)
        : QUESTIONS.filter((q) => q.category === filter);

  return (
    <PageShell
      kicker="Question bank"
      title="Answer the first sentence, then go specific."
      lede="Starred questions are the ones a behavioural RL-task interview almost always hits. Open one, say the gold line, then the spoken block. Do not read paragraphs on the call."
    >
      <div className="flex flex-wrap gap-1.5">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <Link
              key={f}
              href={hrefFor(f)}
              prefetch
              className={
                active
                  ? "inline-flex h-7 items-center rounded-lg bg-primary px-2.5 text-[0.8rem] font-medium text-primary-foreground"
                  : "inline-flex h-7 items-center rounded-lg border border-border px-2.5 text-[0.8rem] font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              }
            >
              {f === "star" ? "Starred" : f === "all" ? "All" : CATEGORY_LABEL[f]}
            </Link>
          );
        })}
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
