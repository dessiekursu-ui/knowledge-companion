import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: () => (
    <main className="bg-background p-8">
      <TugOfWarArena ropePosition={0} />
    </main>
  ),
});
