import { createFileRoute } from "@tanstack/react-router";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";

export const Route = createFileRoute("/rope-test")({
  component: RopeTest,
  head: () => ({
    meta: [
      { title: "Halat testi" },
      { name: "description", content: "Halat hizalama testi" },
    ],
  }),
});

function RopeTest() {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <TugOfWarArena ropePosition={0} />
    </div>
  );
}
