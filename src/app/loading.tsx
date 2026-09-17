export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="h-3 w-40 animate-pulse rounded bg-secondary" />
      <div className="mt-4 h-10 max-w-xl animate-pulse rounded bg-secondary" />
      <div className="mt-3 h-4 max-w-lg animate-pulse rounded bg-secondary/80" />
      <div className="mt-8 space-y-3">
        <div className="h-40 animate-pulse rounded-2xl bg-secondary/70" />
        <div className="h-24 animate-pulse rounded-2xl bg-secondary/50" />
      </div>
    </div>
  );
}
