import tugOfWarGame from "@/assets/tug-of-war-full.jpeg.asset.json";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition?: number;
  pulse?: 1 | 2 | null;
};

export function TugOfWarArena({ ropePosition = 0, pulse = null }: Props) {
  const clamped = Math.max(-100, Math.min(100, ropePosition));
  // Halat gerginliği: merkeze uzaklık arttıkça daha gergin (daha hızlı zorlanma)
  const tension = Math.abs(clamped) / 100;
  const strainDuration = 2.4 - tension * 1.2;

  const animation = pulse
    ? `tug-pull-${pulse} 0.7s cubic-bezier(0.22, 1, 0.36, 1)`
    : `tug-strain ${strainDuration}s ease-in-out infinite`;

  return (
    <div className="relative w-full select-none overflow-hidden bg-panel">
      <div
        className="relative"
        style={{
          transform: `translateX(${clamped * 0.06}%)`,
          transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ animation, transformOrigin: "50% 50%", willChange: "transform" }}>
          <img
            src={tugOfWarGame.url}
            alt="Dört öğrenci ortasında kırmızı bayrak bulunan halatı çekiyor"
            width={1260}
            height={540}
            draggable={false}
            className="block h-auto w-full"
          />
        </div>
      </div>

    </div>
  );
}
