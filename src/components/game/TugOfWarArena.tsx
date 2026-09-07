import teamPullWhite from "@/assets/team-pull-white-clean.png";
import teamPull from "@/assets/team-pull-clean.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition?: number;
  pulse?: 1 | 2 | null;
};

/**
 * Yumrukların halat genişliğine göre yatay konumları (%). Halat bu noktalarda
 * parmakların ALTINA girer — böylece avuç içinde tutuluyormuş gibi görünür.
 */
const FISTS: Array<[number, number]> = [
  [8.4, 9.8],
  [14.8, 16.0],
  [20.3, 21.9],
  [27.1, 28.6],
  [71.4, 72.9],
  [78.1, 79.7],
  [84.0, 85.2],
  [90.2, 91.6],
];

/** Uçlarda öğrencilerin arkasına girerken yumuşak kaybolma payı (%). */
const EDGE_FADE = 2.5;

/** Tek parça, kesintisiz halat maskesi — yalnızca yumruk noktalarında parmak altına girer. */
const ROPE_MASK = (() => {
  const stops: string[] = [`transparent 0%`, `#000 ${EDGE_FADE}%`];
  for (const [start, end] of FISTS) {
    stops.push(
      `#000 ${start - 0.5}%`,
      `rgba(0,0,0,0.35) ${start}%`,
      `transparent ${start + 0.35}% ${end - 0.35}%`,
      `rgba(0,0,0,0.35) ${end}%`,
      `#000 ${end + 0.5}%`,
    );
  }
  stops.push(`#000 ${100 - EDGE_FADE}%`, `transparent 100%`);
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

        {/* TEK PARÇA, kesintisiz siyah halat — yumruklarda parmakların altına girer */}
        <div className="pointer-events-none absolute left-[3%] right-[3%] top-[42.3%] z-20 -translate-y-1/2">
          <div
            className="w-full rounded-full"
            style={{
              height: "max(4px, 0.45cqw)",
              background:
                "repeating-linear-gradient(115deg, #000 0 5px, #1f1f1f 5px 9px, #000 9px 13px)",
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
