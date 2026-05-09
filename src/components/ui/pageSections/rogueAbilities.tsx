import { CharacterData } from "@/types/character";

export default function RogueAbilities({ characterData, handleUpdate }: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
  
}) {
  const isThief = characterData.identity.classes.some(cls => (cls?.name === "Thief" || cls?.name === "thief" || cls?.name === "Rogue"));
    return (
      <>
      {isThief  && (
      <section className="w-full">
        
        <h2 className="text-lg w-full font-bold flex flex-row items-center gap-2 mb-2">
          Thieves Stats (Backstab Mult:
          <input
            type="text"
            value={characterData.rogue.backStabMult}
            onChange={(e) => handleUpdate("rogue.backStabMult", e.target.value)}
            className="w-12 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
          />
          )
        </h2>
        
        <section className="flex flex-row flex-wrap lg:flex-nowrap gap-2">
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.pickPocket}
              onChange={(e) => handleUpdate("rogue.pickPocket", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Pick Pockets</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.openLocks}
              onChange={(e) => handleUpdate("rogue.openLocks", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Open Locks</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.removeTraps}
              onChange={(e) => handleUpdate("rogue.removeTraps", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Remove/Find Traps</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.moveSilently}
              onChange={(e) => handleUpdate("rogue.moveSilently", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Move Silently</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.hideInShadows}
              onChange={(e) => handleUpdate("rogue.hideInShadows", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Hide in Shadows</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.hearNoise}
              onChange={(e) => handleUpdate("rogue.hearNoise", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Hear Noise</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.climbWalls}
              onChange={(e) => handleUpdate("rogue.climbWalls", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Climb Walls</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.readLanguages}
              onChange={(e) => handleUpdate("rogue.readLanguages", e.target.value)}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Read Languages</label>
          </div>
        </section>
        
      </section>
    )}
    </>
    );
  }
