import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: () => (
    <main className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-5xl rounded-[var(--radius)] bg-panel p-6 shadow-[var(--shadow-panel)]">
        <TugOfWarArena ropePosition={0} pulse={null} />
      </div>
    </main>
  ),
});
