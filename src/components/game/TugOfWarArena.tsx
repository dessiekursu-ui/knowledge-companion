import teamPullWhite from "@/assets/team-pull-white-clean.png";
import teamPull from "@/assets/team-pull-clean.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition?: number;
  pulse?: 1 | 2 | null;
};

/**
 * Halatın görünür olduğu bölümler (halat genişliğine göre %): yumruklardan çıkıp
 * öğrenciler arasında ve ortada uzanır; gövde/boyun/baş üzerinden geçmez.
 */
const VISIBLE = [
  [13.4, 17.8],
  [29.2, 70.8],
  [82.2, 86.6],
];

/** Tek parça halat maskesi — sadece yukarıdaki bölümlerde görünür. */
const ROPE_MASK = (() => {
  const stops: string[] = [];
  let cursor = 0;
  for (const [start, end] of VISIBLE) {
    stops.push(`transparent ${cursor}% ${start}%`, `#000 ${start}% ${end}%`);
    cursor = end as number;
  }
  stops.push(`transparent ${cursor}% 100%`);
  return `linear-gradient(to right, ${stops.join(", ")})`;
})();


/**
 * Ana oyun alanı: solda ve sağda ikişer öğrenci (aynı görsel, sağ taraf aynalanmış),
 * tek parça yatay halat ve ortada kırmızı bayrak. Statik — karakterler oynamaz.
 */
export function TugOfWarArena(_props: Props) {
  return (
    <div className="@container relative w-full select-none overflow-hidden bg-panel">
      <div className="relative flex items-center justify-between gap-2 px-1 sm:px-4">
        <img
          src={teamPull}
          alt="Takım 1 öğrencileri halatı çekiyor"
          width={1200}
          height={896}
          className="relative z-10 w-[34%] max-w-[420px]"
        />

        {/* TEK PARÇA, ince ve düz halat — öğrencilerin önünde (z-20), sadece yumruklarda kaybolur */}
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-[42.3%] z-20 -translate-y-1/2">
          <div
            className="w-full rounded-full"
            style={{
              height: "max(4px, 0.5cqw)",
              background:
                "repeating-linear-gradient(115deg, #b07a3c 0 5px, #d9a463 5px 9px, #8a5a26 9px 13px)",
              WebkitMaskImage: ROPE_MASK,
              maskImage: ROPE_MASK,
            }}
          />
        </div>

        {/* Kırmızı bayrak — halatın ortasında */}
        <div className="pointer-events-none absolute inset-x-0 top-[42.6%] z-30 flex -translate-y-1/2 items-center">
          <div className="relative flex w-full items-center">
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="relative h-2 w-2 rounded-full bg-foreground/80">
                <div className="absolute -top-8 left-1/2 h-8 w-[2px] bg-foreground/80" />
                <div className="absolute -top-8 left-1/2 h-5 w-8 bg-flag [clip-path:polygon(0_0,100%_28%,0_58%)]" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={teamPullWhite}
          alt="Takım 2 öğrencileri beyaz gömlekle halatı çekiyor"
          width={1200}
          height={896}
          className="relative z-10 w-[34%] max-w-[420px] [transform:scaleX(-1)]"
        />
      </div>
    </div>
  );
}
