import teamPullWhite from "@/assets/team-pull-white-clean.png";
import teamPull from "@/assets/team-pull-clean.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition?: number;
  pulse?: 1 | 2 | null;
};

/**
 * Halat tek parça ve kesintisiz: soldaki öğrencilerin arkasından başlar, tüm
 * avuçların içinden geçer ve sağdaki öğrencilerin arkasında biter.
 */
const VISIBLE: Array<[number, number]> = [[0, 100]];

/** Uçlarda halatın öğrencilerin arkasına girerken yumuşak kaybolma payı (%). */
const GRIP_FADE = 2.5;


/** Tek parça halat maskesi — yumruklarda avuç içine doğru yumuşak biçimde kaybolur. */
const ROPE_MASK = (() => {
  const stops: string[] = [];
  let cursor = 0;
  for (const [start, end] of VISIBLE) {
    const inStart = Math.max(cursor, start - GRIP_FADE);
    stops.push(
      `transparent ${cursor}% ${inStart}%`,
      `rgba(0,0,0,0.55) ${start}%`,
      `#000 ${start + GRIP_FADE}% ${end - GRIP_FADE}%`,
      `rgba(0,0,0,0.55) ${end}%`,
    );
    cursor = (end as number) + GRIP_FADE;
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

        {/* TEK PARÇA, kesintisiz gri halat — soldaki öğrencilerin arkasından sağdakilerin arkasına */}
        <div className="pointer-events-none absolute left-[3%] right-[3%] top-[42.3%] z-20 -translate-y-1/2">

          <div
            className="w-full rounded-full"
            style={{
              height: "max(4px, 0.45cqw)",
              background:
                "repeating-linear-gradient(115deg, #9ca3af 0 5px, #e5e7eb 5px 9px, #8b9199 9px 13px)",

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
