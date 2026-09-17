import Link from "next/link";
import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STORIES } from "@/lib/content/stories";

export default function StoriesPage() {
  return (
    <PageShell
      kicker="Two Dynamo stories, plus a backup"
      title="Go deep on Dynamo. Keep Turing/Deccan in your pocket."
      lede="They asked you to have one or two projects ready. Story 1 is the environment. Story 2 is the verifier. myNoteBook and Deep Gastro Insight are range — they live on Projects, two minutes each, then back here."
    >
      {STORIES.map((story, i) => (
        <article key={story.id} className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{i === 2 ? "Backup" : `Story ${i + 1}`}</Badge>
            <span className="text-sm text-muted-foreground">{story.whenToUse}</span>
          </div>
          <h2 className="font-serif text-xl leading-snug text-pretty sm:text-2xl">
            {story.title}
          </h2>
          <p className="text-sm text-primary">{story.subtitle}</p>
          <SpeakBlock>{story.spoken}</SpeakBlock>
          <div className="grid gap-3 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Situation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {story.situation}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Task</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {story.task}
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>What you actually did</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {story.action.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Result — swap in your numbers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              {story.result}
            </CardContent>
          </Card>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">If they interrupt</h3>
            {story.followups.map((f) => (
              <div key={f.q} className="rounded-xl border border-border px-4 py-3">
                <p className="text-sm font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
      <p className="text-sm text-muted-foreground">
        For range, not the flagship:{" "}
        <Link href="/projects" className="text-primary underline-offset-4 hover:underline">
          myNoteBook and Deep Gastro Insight
        </Link>
        .
      </p>
    </PageShell>
  );
}
