import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: () => (
    <div className="p-6">
      <TugOfWarArena ropePosition={40} />
    </div>
  ),
});
