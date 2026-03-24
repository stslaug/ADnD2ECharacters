import { WeaponTableRow } from "@/components/ui/Weapon";

export default function Combat({characterData }: any) {
    return (
        <section className="w-full">
                  <h2 className="text-lg w-full font-bold ">Combat</h2>
                  <section className=" flex flex-row gap-8 w-full">
                    {/* AC AND HP */}
                    <div className="w-min min-w-1/3 text-nowrap">
                      <div className="flex flex-row justify-between py-2">
                        <h1 className="font-bold">AC: {characterData.armorClass}</h1>
                        <h1 className="font-bold">
                          Total HP: {characterData.hitPoints}
                        </h1>
                      </div>
                      <div className="w-full">
                        <div className="flex flex-row gap-2 bg-gray-200 w-full">
                          <p className="max-w-1/3 min-w-min w-full bg-gray-300">
                            Armor Worn
                          </p>{" "}
                          <p>{characterData.combat.armorWorn}</p>
                        </div>
                        <div className="flex flex-row gap-2 bg-gray-200 w-full">
                          <p className="max-w-1/3 min-w-min w-full bg-gray-300">
                            Base AC
                          </p>
                          <p>{characterData.combat.acBase}</p>
                        </div>
                        <div className="flex flex-row gap-2 bg-gray-200 w-full">
                          <p className="max-w-1/3 min-w-min w-full bg-gray-300">
                            Dex Adj.{" "}
                          </p>
                          <p>{characterData.combat.dexAdj}</p>
                        </div>
                        <div className="flex flex-row gap-2 bg-gray-200 w-full">
                          <p className="max-w-1/3 min-w-min w-full bg-gray-300">
                            Shieldless AC{" "}
                          </p>
                          <p>{characterData.combat.shieldlessAc}</p>
                        </div>
                        <div className="flex flex-row gap-2 bg-gray-200 w-full">
                          <p className="max-w-1/3 min-w-min w-full bg-gray-300">
                            Rear AC
                          </p>{" "}
                          <p>{characterData.combat.rearAc}</p>
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
                            <th colSpan="2">DAMAGE VS SIZE</th>
                          </tr>
                          <tr>
                            <th colSpan="4"></th>
                            {/* Map over the AC levels 10 to 2 */}
        
                            <th>S-M</th>
                            <th>M-L</th>
                          </tr>
                        </thead>
                        <tbody style={{ border: "1px solid black" }}>
                          {characterData.weapons.map((weapon, index) => (
                            <WeaponTableRow key={index} weapon={weapon} />
                          ))}
                        </tbody>
                      </table>
                      <div className="w-full">
                        <h3>Combat Adjustments</h3>
                        {characterData.combat.adjustments.map((adjustment, idx) => (
                          <div key={idx} className="flex flex-row gap-2">
                            <p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100">
                              {adjustment.bonus}
                            </p>
                            <p className="border-b-2 w-full">
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