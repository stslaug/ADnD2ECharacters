import { WeaponTableRow } from "@/components/ui/Weapon";

export default function Combat({ characterData, handleUpdate }: any) {
  return (
    <section className="w-full">
      <h2 className="text-lg w-full font-bold ">Combat</h2>
      <section className="flex flex-row gap-8 w-full">
        {/* AC AND HP */}
        <div className="w-min min-w-1/3 text-nowrap">
          <div className="flex flex-row justify-between py-2 gap-4">
            <div className="flex flex-row items-center font-bold">
              AC: 
              <input
                type="text"
                value={characterData.armorClass}
                onChange={(e) => handleUpdate("armorClass", e.target.value)}
                className="ml-2 w-12 text-center border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 bg-transparent outline-none transition-colors"
              />
            </div>
            <div className="flex flex-row items-center font-bold">
              Total HP:
              <input
                type="text"
                value={characterData.hitPoints}
                onChange={(e) => handleUpdate("hitPoints", e.target.value)}
                className="ml-2 w-16 text-center border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 bg-transparent outline-none transition-colors"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Armor Worn
              </p>
              <input
                type="text"
                value={characterData.combat.armorWorn}
                onChange={(e) => handleUpdate("combat", e.target.value, "armorWorn")}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Base AC
              </p>
              <input
                type="text"
                value={characterData.combat.acBase}
                onChange={(e) => handleUpdate("combat", e.target.value, "acBase")}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Dex Adj.
              </p>
              <input
                type="text"
                value={characterData.combat.dexAdj}
                onChange={(e) => handleUpdate("combat", e.target.value, "dexAdj")}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Shieldless AC
              </p>
              <input
                type="text"
                value={characterData.combat.shieldlessAc}
                onChange={(e) => handleUpdate("combat", e.target.value, "shieldlessAc")}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Rear AC
              </p>
              <input
                type="text"
                value={characterData.combat.rearAc}
                onChange={(e) => handleUpdate("combat", e.target.value, "rearAc")}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
          </div>
        </div>
        
        {/* Weapons and Adjustments */}
        <div className="w-full">
          <table
            className="w-full text-xs text-left"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr className="w-full">
                <th>WEAPON PROF</th>
                <th>MAG. ADJ.</th>
                <th>RANGE</th>
                <th>SPEED</th>
                <th colSpan={2}>DAMAGE VS SIZE</th>
              </tr>
              <tr>
                <th colSpan={4}></th>
                <th>S-M</th>
                <th>M-L</th>
              </tr>
            </thead>
            <tbody style={{ border: "1px solid black" }}>
              {characterData.weapons.map((weapon: any, index: number) => (
                <WeaponTableRow key={index} weapon={weapon} />
              ))}
            </tbody>
          </table>
          

              

          <div className="w-full mt-4">
            <h3 className="font-bold mb-1">Combat Adjustments</h3>
            {characterData.combat.adjustments.map((adjustment: any, idx: number) => (
              <div key={idx} className="flex flex-row gap-2 mb-1">
                {/* Note: Arrays require a different update strategy. Rendered as static text for now. */}
                <p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 min-w-[30px] text-center">
                  {adjustment.bonus}
                </p>
                <p className="border-b-2 w-full pl-1">
                  To Hit with {adjustment.mod}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}