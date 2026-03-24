
export default function BasicInfo({characterData }: any) {
    return (
        <section className=" flex flex-col w-full gap-4">
            {/*Right Column and Character Stats*/}
            <section className="gap-4 flex flex-col w-full">
              <div>
                <h1 className=" text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2  w-full">
                  {characterData.name}
                </h1>
                <label>Character Name</label>
              </div>
              {/* Character Details */}
              <div className="grid grid-cols-6 gap-4 w-full  ">
                {/* Class, Race, Alignment, Religion */}

                <div>
                  <label>Class</label>
                  <h1 className="text-md border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {characterData.class}
                  </h1>
                </div>

                <div>
                  <label>Race</label>
                  <h1 className="text-md border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {characterData.race}
                  </h1>
                </div>

                <div className="">
                  <label>Alignment</label>
                  <h1 className="text-md border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-nowrap sm:text-2xl">
                    {characterData.alignment}
                  </h1>
                </div>
                <div>
                  <label>Religion</label>
                  <h1 className="text-md border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {characterData.diety}
                  </h1>
                </div>
                <div>
                  <label>Level</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {characterData.level}
                  </h1>
                </div>

                <div>
                  <label>Place of Origin</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {characterData.origin}
                  </h1>
                </div>
              </div>
            </section>
            {/* Left Column and Character Details*/}
            <div className="flex flex-row">
              <section className="flex flex-col p-4 font-mono text-sm gap-3">
                {/* Strength Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.STR}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    S
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">
                      Hit Adj.
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">
                      Dmg Adj.
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">
                      Open Doors
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">
                      Bend Bars
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>

                {/* Dexterity Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.DEX}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    D
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">
                      React Adj.
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      Missile Adj.
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      Defense Adj.
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>

                {/* Constitution Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.CON}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    C
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">
                      Hit Point
                      <br />
                      Adj
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      System Shock
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">
                      Resurrect
                      <br />
                      Survival
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">
                      Bend Bars
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>

                {/* Wisdom Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.WIS}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    W
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">
                      Magical Atk Adj
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[120px]">
                      Spell Bonus
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">
                      % Spell Failure
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>

                {/* Intelligence Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.INT}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    I
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      Add Language
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      % Know Spell
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[120px]">
                      Min # Spells
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      Max # Spells
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>

                {/* Charisma Row */}
                <div className="flex flex-row w-full items-stretch gap-3">
                  <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                    {characterData.stats.CHA}
                  </div>
                  <div className="font-bold flex items-center justify-center w-[30px] text-xl">
                    CH
                  </div>
                  <div className="flex flex-row flex-grow border border-black">
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[160px]">
                      Max # Henchmen
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0%
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">
                      Loyalty Base
                    </div>
                    <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                      0
                    </div>
                    <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[180px]">
                      Reaction Adjustment
                    </div>
                    <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                      0
                    </div>
                  </div>
                </div>
              </section>

              {/* Saving Throws */}
              <div className=" flex flex-col align-right justify-right ml-auto gap-3 max-w-1/3 w-full">
                <h1 className="font-bold text-right">Saving Throws:</h1>
                <div className=" flex flex-row gap-2  items-center justify-right ml-auto  ">
                  <label>
                    Paralyzation /<br></br> Poison
                  </label>{" "}
                  <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                    {characterData.savingThrowsParalyzationPoison}
                  </p>
                </div>
                <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                  <label>
                    Petrification &<br></br> Polymorph
                  </label>{" "}
                  <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                    {characterData.savingThrowsPetrificationPolymorph}
                  </p>
                </div>
                <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                  <label>
                    {" "}
                    Rods, Staves,<br></br> or Wands
                  </label>{" "}
                  <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                    {characterData.savingThrowsRodsStavesWands}
                  </p>
                </div>
                <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                  <label>Breath Weapons</label>{" "}
                  <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                    {characterData.savingThrowsBreathWeapons}
                  </p>
                </div>
                <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                  <label>Spells</label>{" "}
                  <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                    {characterData.savingThrowsSpells}
                  </p>
                </div>
              </div>
            </div>
          </section>
    );}