import { CharacterData } from "@/types/character";

export default function PlayerInfo({ characterData, handleUpdate }: { 
  characterData: CharacterData; 
  handleUpdate: (path: string, value: any) => void; 
}) {
  return (
    <section className="w-full flex relative">
      {/* Top Left */}
      <section className=" w-full gap-3 flex flex-row  justify-between">
        <div>
          <input
            type="text"
            value={characterData.meta.playerName}
            onChange={(e) => handleUpdate("meta.playerName", e.target.value)}
            className="w-full text-lg border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 bg-transparent outline-none transition-colors"
          />
          <label className="text-sm">Player Name</label>
        </div>

        <div>
          <input
            type="text"
            value={characterData.meta.dateCreated}
            onChange={(e) => handleUpdate("meta.dateCreated", e.target.value)}
            className="w-full text-lg border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 bg-transparent outline-none transition-colors"
          />
          <label className="text-sm">Began</label>
        </div>
      </section>
    </section>
  );
}
