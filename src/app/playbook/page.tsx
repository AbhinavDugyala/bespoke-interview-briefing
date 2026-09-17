import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FIVE_REJECTS,
  FRAMEWORKS,
  HARBOR_ANATOMY,
  PIPELINE_STEPS,
  RL_GLOSSARY,
  STUMP_PATTERNS,
} from "@/lib/content/playbook";

export default function PlaybookPage() {
  return (
    <PageShell
      kicker="Task-design playbook"
      title="The vocabulary they will test without calling it a quiz."
      lede="You do not need to lecture these lists. You need to recognize the question and answer with one pattern plus one mitigation."
    >
      <section>
        <h2 className="font-serif text-2xl">
          Anatomy of a Harbor task
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-secondary/60 text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">File</th>
                <th className="px-4 py-2 font-medium">Agent sees?</th>
                <th className="px-4 py-2 font-medium">Job</th>
              </tr>
            </thead>
            <tbody>
              {HARBOR_ANATOMY.map((row) => (
                <tr key={row.file} className="border-t border-border">
                  <td className="px-4 py-2 font-mono text-xs text-primary">{row.file}</td>
                  <td className="px-4 py-2">
                    {row.agentSees ? <Badge>Yes</Badge> : <Badge variant="secondary">Hidden</Badge>}
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{row.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">
          The pipeline you already live in
        </h2>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {PIPELINE_STEPS.map((step, i) => (
            <li
              key={step}
              className="rounded-xl border border-border bg-card/50 px-4 py-3 text-sm leading-relaxed"
            >
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-serif text-2xl">
          Stump patterns (fair difficulty)
        </h2>
        <p className="mt-1 mb-4 text-sm text-muted-foreground">
          Through-line: the agent does 90% correctly, then fails one determinate point it cannot pattern-match. If spelling out the rule makes the task easy, it is a defect.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {STUMP_PATTERNS.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <CardTitle className="text-base">
                  {p.id}. {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>{p.line}</p>
                <p className="text-foreground/80">{p.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">
          Five ways a low pass rate is fake
        </h2>
        <div className="mt-4 grid gap-3">
          {FIVE_REJECTS.map((r) => (
            <div key={r.name} className="rounded-xl border border-border px-4 py-3">
              <p className="font-medium">{r.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.line}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">
          Frameworks — what you can claim
        </h2>
        <div className="mt-4 grid gap-3">
          {FRAMEWORKS.map((f) => (
            <Card key={f.name}>
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <CardTitle>{f.name}</CardTitle>
                <Badge variant="outline">{f.you}</Badge>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.blurb}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">
          RL words, in one line each
        </h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {RL_GLOSSARY.map((g) => (
            <div key={g.term} className="rounded-xl border border-border px-4 py-3">
              <p className="font-mono text-xs text-primary">{g.term}</p>
              <p className="mt-1 text-sm text-muted-foreground">{g.def}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
