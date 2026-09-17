import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ASK_THEM, CLOSE, GAPS, NIGHT_BEFORE_CHECKLIST } from "@/lib/content/gaps";

export default function GapsPage() {
  return (
    <PageShell
      kicker="Gaps, asks, close"
      title="Name the hole before they do. Then ask a better question than they asked you."
      lede="A behavioural interview is also a taste test. Defensiveness about years of experience will cost you more than the missing years."
    >
      <SpeakBlock label="Closing line if they ask 'anything else?'">{CLOSE}</SpeakBlock>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Gaps — handle, do not hide
        </h2>
        <div className="mt-4 grid gap-3">
          {GAPS.map((g) => (
            <Card key={g.gap}>
              <CardHeader>
                <CardTitle className="text-base">{g.gap}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{g.handle}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Ask them — pick three
        </h2>
        <div className="mt-4 grid gap-3">
          {ASK_THEM.map((a) => (
            <div key={a.q} className="rounded-xl border border-border px-4 py-3">
              <p className="text-[15px] font-medium leading-snug">{a.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{a.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl text-pretty sm:text-2xl">
          Last hour
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {NIGHT_BEFORE_CHECKLIST.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
