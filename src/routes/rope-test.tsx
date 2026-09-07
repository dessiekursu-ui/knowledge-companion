import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: () => (
    <div className="p-8">
      <TugOfWarArena ropePosition={0} pulse={null} />
      <TugOfWarArena ropePosition={40} pulse={null} />
    </div>
  ),
});
