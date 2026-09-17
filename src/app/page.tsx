import Link from "next/link";
import { Countdown } from "@/components/countdown";
import { NumbersPanel } from "@/components/numbers-panel";
import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DO_NOT_SAY,
  INSTEAD_SAY,
  MUST_MEMORIZE,
  NINETY_SECOND_OPENER,
  TONIGHT_PLAN,
} from "@/lib/content/opener";
import { INTERVIEW } from "@/lib/content/meta";

export default function HomePage() {
  return (
    <PageShell
      kicker={`${INTERVIEW.company} · ${INTERVIEW.role}`}
      title="This interview is the job you already do, pointed at training."
      lede="Conversational and behavioural. They want one or two projects in detail, and they will steer into RL task design. Lead with Dynamo. Do not lead with internships."
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Google Meet</Badge>
        <Badge variant="secondary">{INTERVIEW.format}</Badge>
        <Badge variant="outline">25–35 hrs/week · 10 spots</Badge>
      </div>
      <Countdown />

      <SpeakBlock label="90-second opener — memorize this">{NINETY_SECOND_OPENER}</SpeakBlock>

      <div className="grid gap-4 md:grid-cols-3">
        {TONIGHT_PLAN.map((block) => (
          <Card key={block.when}>
            <CardHeader>
              <CardTitle className="text-sm text-primary">{block.when}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {block.what}
            </CardContent>
          </Card>
        ))}
      </div>

      <NumbersPanel />

      <section>
        <h2 className="font-serif text-2xl">
          Six sentences you should be able to say without notes
        </h2>
        <div className="mt-4 grid gap-3">
          {MUST_MEMORIZE.map((item) => (
            <div
              key={item.term}
              className="rounded-xl border border-border bg-card/60 px-4 py-3"
            >
              <p className="font-mono text-xs tracking-wide text-primary">
                {item.term}
              </p>
              <p className="mt-1 text-sm leading-relaxed">{item.line}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Do not say</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {DO_NOT_SAY.map((line) => (
                <li key={line} className="border-l-2 border-destructive/50 pl-3">
                  {line}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Say instead</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {INSTEAD_SAY.map((line) => (
                <li key={line} className="border-l-2 border-primary/50 pl-3">
                  {line}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        Next:{" "}
        <Link href="/match" className="text-primary underline-offset-4 hover:underline">
          map the JD to Dynamo
        </Link>
        , then{" "}
        <Link href="/stories" className="text-primary underline-offset-4 hover:underline">
          rehearse the two stories
        </Link>
        .
      </p>
    </PageShell>
  );
}
