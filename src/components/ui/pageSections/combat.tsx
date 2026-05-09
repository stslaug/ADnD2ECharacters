import { WeaponTableRow } from "@/components/ui/Weapon";
import { CharacterData, Weapon, CombatAdjustment } from "@/types/character";

export default function Combat({ characterData, handleUpdate }: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const handleAddWeapon = () => {
    const newWeapon: Weapon = {
      name: "New Weapon",
      magAdj: "0",
      range: "-",
      speed: "0",
      damageSm: "1d6",
      damageMl: "1d8"
    };
    handleUpdate("inventory.weapons", [...characterData.inventory.weapons, newWeapon]);
  };

  const handleRemoveWeapon = (index: number) => {
    const updated = characterData.inventory.weapons.filter((_, i) => i !== index);
    handleUpdate("inventory.weapons", updated);
  };

  const handleAddAdjustment = () => {
    const newAdj: CombatAdjustment = {
      mod: "New Mod",
      bonus: "+0"
    };
    handleUpdate("combat.adjustments", [...characterData.combat.adjustments, newAdj]);
  };

  const handleRemoveAdjustment = (index: number) => {
    const updated = characterData.combat.adjustments.filter((_, i) => i !== index);
    handleUpdate("combat.adjustments", updated);
  };

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
                value={characterData.vitals.ac.current}
                onChange={(e) => handleUpdate("vitals.ac.current", e.target.value)}
                className="ml-2 w-12 text-center border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 bg-transparent outline-none transition-colors"
              />
            </div>
            <div className="flex flex-row items-center font-bold">
              Total HP:
              <input
                type="text"
                value={characterData.vitals.hp.max}
                onChange={(e) => handleUpdate("vitals.hp.max", e.target.value)}
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
                onChange={(e) => handleUpdate("combat.armorWorn", e.target.value)}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Base AC
              </p>
              <input
                type="text"
                value={characterData.vitals.ac.base}
                onChange={(e) => handleUpdate("vitals.ac.base", e.target.value)}
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
                onChange={(e) => handleUpdate("combat.dexAdj", e.target.value)}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Shieldless AC
              </p>
              <input
                type="text"
                value={characterData.vitals.ac.shieldless}
                onChange={(e) => handleUpdate("vitals.ac.shieldless", e.target.value)}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="flex flex-row gap-2 bg-gray-200 w-full items-center">
              <p className="max-w-1/3 min-w-min w-full bg-gray-300 px-1">
                Rear AC
              </p>
              <input
                type="text"
                value={characterData.vitals.ac.rear}
                onChange={(e) => handleUpdate("vitals.ac.rear", e.target.value)}
                className="w-full bg-transparent outline-none px-1 border-b-2 border-transparent hover:border-zinc-400 focus:border-zinc-600 transition-colors"
              />
            </div>
          </div>
        </div>
        
        {/* Weapons and Adjustments */}
        <div className="w-full">
          <div className="flex flex-row items-center gap-2 mb-2">
            <h3 className="font-bold">Weapons Proficiencies</h3>
            <button
              onClick={handleAddWeapon}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-colors font-bold text-xl"
              title="Add Weapon"
            >
              <span className="leading-none">+</span>
            </button>
          </div>
          <table
            className="w-full text-xs text-left"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr className="w-full">
                <th>WEAPON</th>
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
              {characterData.inventory.weapons.map((weapon: Weapon, index: number) => (
                <WeaponTableRow 
                  key={index} 
                  weapon={weapon} 
                  path={`inventory.weapons.${index}`}
                  handleUpdate={handleUpdate}
                  onRemove={() => handleRemoveWeapon(index)}
                />
              ))}
            </tbody>
          </table>
          

              

          <div className="w-full mt-4">
            <div className="flex flex-row items-center gap-2 mb-1">
              <h3 className="font-bold">Combat Adjustments</h3>
              <button
                onClick={handleAddAdjustment}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-colors font-bold text-xl"
                title="Add Combat Adjustment"
              >
                <span className="leading-none">+</span>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {characterData.combat.adjustments.map((adjustment: CombatAdjustment, idx: number) => (
                <div key={idx} className="group flex flex-row items-center gap-2 relative pr-7">
                  <input
                    type="text"
                    value={adjustment.bonus}
                    onChange={(e) => handleUpdate(`combat.adjustments.${idx}.bonus`, e.target.value)}
                    className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 min-w-[30px] w-12 text-center bg-transparent outline-none border-transparent hover:border-zinc-300 focus:border-zinc-800"
                  />
                  <div className="flex flex-row items-center w-full">
                    <span className="text-nowrap mr-1">To Hit with</span>
                    <input
                      type="text"
                      value={adjustment.mod}
                      onChange={(e) => handleUpdate(`combat.adjustments.${idx}.mod`, e.target.value)}
                      className="border-b-2 w-full pl-1 bg-transparent outline-none border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveAdjustment(idx)}
                    className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-lg"
                    title="Remove Combat Adjustment"
                  >
                    <span className="leading-none mt-[-2px]">-</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
