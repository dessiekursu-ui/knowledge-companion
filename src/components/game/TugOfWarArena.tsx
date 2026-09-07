import teamPullWhite from "@/assets/team-pull-white-clean.png";
import teamPull from "@/assets/team-pull-clean.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition: number;
  pulse?: 1 | 2 | null;
};


/**
 * Ana oyun alanı: solda ve sağda ikişer öğrenci (aynı görsel, sağ taraf aynalanmış),
 * kırmızı bayrak ve orta çizgi.
 */
export function TugOfWarArena({ ropePosition, pulse }: Props) {
  // Bayrağın merkezden kayması: -100..100 -> -22%..22%
  const shift = (ropePosition / 100) * 22;

  return (
    <div className="@container relative w-full select-none overflow-hidden">
      <div className="relative flex items-center justify-between gap-2 px-1 sm:px-4">
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

        {/* Yeni halat ipi — öğrencilerin yumruklarının tam üzerinden geçer (z-20 > z-10) */}
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-[42.3%] z-20 -translate-y-1/2 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${shift * 0.2}%, -50%)` }}
        >
          <div
            className="w-full rounded-full"
            style={{
              height: "max(5px, 0.75cqw)",
              background:
                "repeating-linear-gradient(115deg, #b07a3c 0 6px, #d9a463 6px 11px, #8a5a26 11px 16px)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.35), inset 0 -1px 1px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.25)",
            }}
          />
        </div>

        {/* Kırmızı bayrak — öğrencilerin ortasında */}

        <div className="pointer-events-none absolute inset-x-0 top-[42.6%] z-40 flex -translate-y-1/2 items-center">

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
