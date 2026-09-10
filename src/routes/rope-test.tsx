import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: () => (
    <main className="min-h-screen bg-background p-6">
      <TugOfWarArena ropePosition={0} pulse={null} />
    </main>
  ),
});
