import { PageShell, SpeakBlock } from "@/components/page-shell";
import { WalkthroughSlots } from "@/components/walkthrough-slots";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DYNAMO_STEPS,
  FILL_IN,
  HARBOR_RUNTIME,
  SIXTY_SECOND_DYNAMO,
  TWO_MINUTE_TB2,
  WALKTHROUGH_RULES,
} from "@/lib/content/walkthrough";

export default function WalkthroughPage() {
  return (
    <PageShell
      kicker="How a TB2 task actually gets made"
      title="Thirty seconds for a Dynamo task you shipped. Two minutes for any Terminal-Bench 2 task."
      lede="Both scripts follow the TB2 tasking guide: oracle first, hidden tests, absolute /app paths, oracle=1 and nop=0, then difficulty. Fill Tonight so the 60-second version is your task, not a generic one."
    >
      <div className="flex flex-wrap gap-2">
        <Badge>30–60s · one Dynamo task</Badge>
        <Badge variant="secondary">1–2 min · any TB2 task</Badge>
      </div>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{SIXTY_SECOND_DYNAMO.duration}</Badge>
          <span className="text-sm text-muted-foreground">{SIXTY_SECOND_DYNAMO.whenToUse}</span>
        </div>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">{SIXTY_SECOND_DYNAMO.title}</h2>
        <SpeakBlock>{SIXTY_SECOND_DYNAMO.spoken}</SpeakBlock>
        <ol className="grid gap-2 sm:grid-cols-2">
          {DYNAMO_STEPS.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-border bg-card/50 px-4 py-3"
            >
              <p className="font-mono text-xs text-primary">
                {step.n} · {step.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.say}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">{FILL_IN.heading}</h2>
        <WalkthroughSlots />
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{TWO_MINUTE_TB2.duration}</Badge>
          <span className="text-sm text-muted-foreground">{TWO_MINUTE_TB2.whenToUse}</span>
        </div>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">{TWO_MINUTE_TB2.title}</h2>
        <SpeakBlock>{TWO_MINUTE_TB2.spoken}</SpeakBlock>
      </section>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          If they ask how the exam actually runs
        </h2>
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Ten seconds. Harbor is the hall. The agent is the candidate. tests/ is the rubric they cannot see until they stop writing.
        </p>
        <ol className="grid gap-2">
          {HARBOR_RUNTIME.map((row) => (
            <li
              key={row.n}
              className="flex gap-3 rounded-xl border border-border px-4 py-3"
            >
              <span className="font-mono text-xs text-primary">{row.n}</span>
              <p className="min-w-0 text-sm leading-relaxed">
                <span className="font-medium">{row.who}. </span>
                <span className="text-muted-foreground">{row.line}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Do not do this on the call</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {WALKTHROUGH_RULES.map((line) => (
              <li key={line} className="border-l-2 border-destructive/50 pl-3">
                {line}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </PageShell>
  );
}
