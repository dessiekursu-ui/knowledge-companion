import teamPullWhite from "@/assets/team-pull-white-clean.png";
import teamPull from "@/assets/team-pull-clean.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition: number;
  pulse?: 1 | 2 | null;
};

/** Tek halat dokusu: baştan sona aynı renk ve aynı kalınlık. */
const ROPE_STYLE: React.CSSProperties = {
  backgroundColor: "#d9b382",
  backgroundImage:
    "linear-gradient(to bottom, rgba(255,255,255,0.55) 0 22%, rgba(255,255,255,0.10) 45%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.28) 100%), repeating-linear-gradient(60deg, rgba(140,96,54,0.55) 0 1px, rgba(255,255,255,0.30) 1px 3px, rgba(140,96,54,0.35) 3px 5px, rgba(255,255,255,0.10) 5px 7px)",
  backgroundSize: "100% 100%, 7px 100%",
};

/**
 * Ana oyun alanı: solda ve sağda ikişer öğrenci (aynı görsel, sağ taraf aynalanmış),
 * ortadan geçen tek parça eşit kalınlıkta halat, kırmızı bayrak ve orta çizgi.
 */
export function TugOfWarArena({ ropePosition, pulse }: Props) {
  // Halatın merkezden kayması: -100..100 -> -22%..22%
  const shift = (ropePosition / 100) * 22;

  return (
    <div className="@container relative w-full select-none overflow-hidden">
      <div className="relative flex items-center justify-between gap-2 px-1 sm:px-4">
        {/* Halat — öğrencilerin arkasında kalır, böylece halat elleri kesmez */}
        <div className="pointer-events-none absolute inset-x-0 top-[42.6%] z-0 flex -translate-y-1/2 items-center">
          <div
            className="relative flex w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
            <div
              className="absolute left-1/2 h-[clamp(6px,0.7vw,10px)] w-[300%] -translate-x-1/2"
              style={ROPE_STYLE}
            />
          </div>
        </div>

        <img
          src={teamPull}
          alt="Takım 1 öğrencileri halatı çekiyor"
          width={1200}
          height={896}
          className="relative z-10 w-[34%] max-w-[420px] origin-center transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${shift * 0.6}%) scale(${pulse === 1 ? 1.04 : 1})`,
          }}
        />

        {/* Kırmızı bayrak — halatın ortasında, halatın üstünde durur */}
        <div className="pointer-events-none absolute inset-x-0 top-[42.6%] z-20 flex -translate-y-1/2 items-center">
          <div
            className="relative flex w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
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
          className="relative z-10 w-[34%] max-w-[420px] origin-center transition-transform duration-700 ease-out"
          style={{
            transform: `scaleX(-1) translateX(${-shift * 0.6}%) scale(${pulse === 2 ? 1.04 : 1})`,
          }}
        />
      </div>
    </div>
  );
}
