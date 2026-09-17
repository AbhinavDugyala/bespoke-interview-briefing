import { PageShell } from "@/components/page-shell";
import { DrillClient } from "@/components/drill-client";

export default function DrillPage() {
  return (
    <PageShell
      kicker="Out-loud drill"
      title="Cover the answer. Say the first line. Then uncover."
      lede="Ten minutes of this beats another hour of reading. Starred questions only."
    >
      <DrillClient />
    </PageShell>
  );
}
