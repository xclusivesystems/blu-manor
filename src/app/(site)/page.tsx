export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-deep flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          Blu Manor
        </h1>
        <p className="text-primary text-lg font-semibold tracking-wide uppercase">
          Second Chance Transitional Housing
        </p>
        <p className="text-muted mt-4 max-w-md mx-auto">
          Safe, felon-friendly housing in the Tampa Bay area. Helping
          individuals reenter the community with dignity.
        </p>
      </div>
    </main>
  );
}
