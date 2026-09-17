import { notFound } from "next/navigation";
import { FILTERS, QuestionsView, isFilter } from "@/components/questions-view";

export function generateStaticParams() {
  return FILTERS.filter((filter) => filter !== "star").map((filter) => ({ filter }));
}

export default async function QuestionsFilterPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = await params;
  if (!isFilter(filter) || filter === "star") notFound();
  return <QuestionsView filter={filter} />;
}
