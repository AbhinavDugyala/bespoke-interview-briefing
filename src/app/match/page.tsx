import Link from "next/link";
import { PageShell, SpeakBlock } from "@/components/page-shell";
import { StackTable } from "@/components/stack-table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MUST_HAVES, NICE_TO_HAVES, TRANSLATION } from "@/lib/content/match";
import { PROFILE } from "@/lib/content/profile";
import type { JdItem } from "@/lib/content/match";

function Strength({ strength }: { strength: JdItem["strength"] }) {
  if (strength === "strong")
    return <Badge className="h-auto max-w-full whitespace-normal py-1">Strong</Badge>;
  if (strength === "partial")
    return (
      <Badge variant="secondary" className="h-auto max-w-full whitespace-normal py-1">
        Partial — be precise
      </Badge>
    );
  return (
    <Badge variant="destructive" className="h-auto max-w-full whitespace-normal py-1">
      Gap — do not fake
    </Badge>
  );
}

function JdList({ items }: { items: JdItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={item.jd}>
          <CardHeader className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
            <CardTitle className="min-w-0 text-base leading-snug text-pretty">{item.jd}</CardTitle>
            <Strength strength={item.strength} />
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{item.you}</p>
            <SpeakBlock label="If they poke this line">{item.say}</SpeakBlock>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function MatchPage() {
  return (
    <PageShell
      kicker="JD → your work"
      title="They wrote a Terminal-Bench author job. That is Dynamo."
      lede="The resume PDF did not attach here, so this map uses your public Handshake bullets plus the Dynamo high-level guide. Correct any title or date on the call if the resume differs."
    >
      <Card>
        <CardHeader>
          <CardTitle>{PROFILE.headline}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            {PROFILE.education}. Based in {PROFILE.location}.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {PROFILE.publicSkills.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
          {PROFILE.roles.map((role) => (
            <div key={role.title} className="border-t border-border pt-3">
              <p className="font-medium">
                {role.title} · {role.org}
              </p>
              <p className="text-xs text-muted-foreground">{role.when}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          {PROFILE.projects.map((project) => (
            <div key={project.title} className="border-t border-border pt-3">
              <p className="font-medium">{project.title}</p>
              <p className="text-xs text-muted-foreground">{project.when}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="border-t border-border pt-3 text-sm text-muted-foreground">
            Spoken scripts:{" "}
            <Link href="/projects" className="text-primary underline-offset-4 hover:underline">
              Projects
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Must-haves
        </h2>
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Seven of seven are talkable. One is a years-of-experience mismatch — handle it, do not hide it.
        </p>
        <JdList items={MUST_HAVES} />
      </section>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Good-to-haves
        </h2>
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Partial is fine. Fake hands-on on OpenEnv or SLURM is not.
        </p>
        <JdList items={NICE_TO_HAVES} />
      </section>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Speak Bespoke, not only Dynamo
        </h2>
        <div className="mt-4">
          <StackTable
            minWidthClass="min-w-[32rem]"
            columns={[
              {
                key: "dynamo",
                header: "You already say",
                cellClassName: "font-mono text-xs text-primary",
              },
              {
                key: "bespoke",
                header: "Say it this way tonight",
                cellClassName: "text-muted-foreground",
              },
            ]}
            rows={TRANSLATION.map((row) => ({
              id: row.dynamo,
              dynamo: row.dynamo,
              bespoke: row.bespoke,
            }))}
          />
        </div>
      </section>
    </PageShell>
  );
}
