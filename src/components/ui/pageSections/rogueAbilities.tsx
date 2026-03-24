export default function RogueAbilities({characterData }: any) {
    return (
        <section className="w-full">
          <h2 className="text-lg w-full font-bold ">
            Thieves Stats (Backstab Mult: {characterData.rogue.backStabMult})
          </h2>
          <section className=" flex flex-row gap-2">
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.pickPocket}
              <label>Pick Pockets</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.openLocks}
              <label>Open Locks</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.removeTraps}
              <label>Remove/Find Traps</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.moveSilently}
              <label>Move Silently</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.hideInShadows}
              <label>Hide in Shadows</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.hearNoise}
              <label>Hear Noise</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.climbNoise}
              <label>Climb Noise</label>
            </div>
            <div className="flex flex-col rounded text-center border border-black p-2">
              {characterData.rogue.readLanguages}
              <label>Read Languages</label>
            </div>
          </section>
        </section>
    );}