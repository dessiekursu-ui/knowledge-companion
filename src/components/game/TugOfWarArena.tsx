import tugOfWarGame from "@/assets/tug-of-war-full.jpeg.asset.json";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition?: number;
  pulse?: 1 | 2 | null;
};

export function TugOfWarArena(_props: Props) {
  return (
    <div className="w-full select-none overflow-hidden bg-panel">
      <img
        src={tugOfWarGame.url}
        alt="Dört öğrenci ortasında kırmızı bayrak bulunan halatı çekiyor"
        width={1260}
        height={540}
        draggable={false}
        className="block h-auto w-full"
      />
    </div>
  );
}
