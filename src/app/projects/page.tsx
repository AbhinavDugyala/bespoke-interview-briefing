import { PageShell, SpeakBlock } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS, PROJECTS_RULE } from "@/lib/content/projects";

export default function ProjectsPage() {
  return (
    <PageShell
      kicker="Personal projects — range, not the flagship"
      title="Notebook proves you ship. GERD proves you can train and evaluate."
      lede={PROJECTS_RULE}
    >
      {PROJECTS.map((project) => (
        <article key={project.id} className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.kind === "fullstack" ? "Full stack" : "ML research"}</Badge>
            <span className="text-sm text-muted-foreground">{project.when}</span>
          </div>
          <h2 className="font-serif text-2xl leading-snug">{project.title}</h2>
          <p className="text-sm text-primary">{project.whenToUse}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.oneLiner}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
          <SpeakBlock>{project.spoken}</SpeakBlock>
          <Card>
            <CardHeader>
              <CardTitle>Facts to keep straight</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="rounded-xl border border-border px-4 py-3 text-sm leading-relaxed">
            <span className="font-medium text-primary">Why Bespoke cares. </span>
            <span className="text-muted-foreground">{project.mapToRole}</span>
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">If they interrupt</h3>
            {project.followups.map((f) => (
              <div key={f.q} className="rounded-xl border border-border px-4 py-3">
                <p className="text-sm font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </PageShell>
  );
}
