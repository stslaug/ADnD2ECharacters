export default function RogueAbilities({ characterData, handleUpdate }: any) {
    return (
      <section className="w-full">
        <h2 className="text-lg w-full font-bold flex flex-row items-center gap-2 mb-2">
          Thieves Stats (Backstab Mult:
          <input
            type="text"
            value={characterData.rogue.backStabMult}
            onChange={(e) => handleUpdate("rogue", e.target.value, "backStabMult")}
            className="w-12 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
          />
          )
        </h2>
        
        {/* Note: I added 'flex-wrap' here just in case the screen gets small, 
          so these 8 boxes don't squish into unreadable slivers! 
        */}
        <section className="flex flex-row flex-wrap lg:flex-nowrap gap-2">
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.pickPocket}
              onChange={(e) => handleUpdate("rogue", e.target.value, "pickPocket")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Pick Pockets</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.openLocks}
              onChange={(e) => handleUpdate("rogue", e.target.value, "openLocks")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Open Locks</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.removeTraps}
              onChange={(e) => handleUpdate("rogue", e.target.value, "removeTraps")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Remove/Find Traps</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.moveSilently}
              onChange={(e) => handleUpdate("rogue", e.target.value, "moveSilently")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Move Silently</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.hideInShadows}
              onChange={(e) => handleUpdate("rogue", e.target.value, "hideInShadows")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Hide in Shadows</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.hearNoise}
              onChange={(e) => handleUpdate("rogue", e.target.value, "hearNoise")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Hear Noise</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.climbNoise}
              onChange={(e) => handleUpdate("rogue", e.target.value, "climbNoise")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Climb Noise</label>
          </div>
          
          <div className="flex flex-col flex-1 min-w-[80px] rounded text-center border border-black p-2">
            <input
              type="text"
              value={characterData.rogue.readLanguages}
              onChange={(e) => handleUpdate("rogue", e.target.value, "readLanguages")}
              className="w-full text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
            />
            <label className="text-xs sm:text-sm mt-1">Read Languages</label>
          </div>
        </section>
      </section>
    );
  }