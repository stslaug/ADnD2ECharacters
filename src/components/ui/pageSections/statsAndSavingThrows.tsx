import { CharacterData, SavingThrowBonus } from "@/types/character";

export default function StatsAndSavingThrows({
  characterData,
  handleUpdate,
  className,
}: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
  className: string;
}) {
  const statDescriptorStyle =
    "font-bold border-r border-black px-2 py-1 flex items-center min-w-0 break-words leading-tight"; 
  const statValueStyle =
    " md:border-r border-black px-3 py-1 flex items-center justify-center min-w-[55px] last:border-r-0";
  const statStyle = "border border-black flex items-center justify-center min-w-[40px] max-w-[40px] text-lg";
  const statRowStyle = "flex flex-row gap-3 w-full max-md:flex-col";
  const statInputStyle = "w-[60px] min-w-0 bg-transparent text-center outline-none";
  const statDescriptorRowStyle3 = "grid grid-cols-[repeat(3,minmax(0,1fr)_auto)] max-md:grid-cols-2 flex-1 border border-black";
  const statDescriptorRowStyle4 = "grid grid-cols-[repeat(4,minmax(0,1fr)_auto)] max-md:grid-cols-2 flex-1 border border-black";

  const handleAddSavingThrowBonus = () => {
    const newItem: SavingThrowBonus = {
      type: "to Poison",
      value: "+0",
    };
    handleUpdate("savingThrows.bonuses", [
      ...characterData.savingThrows.bonuses,
      newItem,
    ]);
  };

  const handleRemoveSavingThrowBonus = (index: number) => {
    const updated = characterData.savingThrows.bonuses.filter(
      (_, i) => i !== index
    );
    handleUpdate("savingThrows.bonuses", updated);
  };

  return (
    <div className={"flex flex-col lg:flex-row min-w-min " + className}>
      {/* Character Stats and Saving Throws*/}
      {/* Left Column and Character Stats */}
      <section className="flex flex-col p-4 w-full  font-mono text-sm gap-3">
        {/* Strength Row */}
        <div className={statRowStyle}>
          <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.STR.score}
              onChange={(e) => handleUpdate("stats.STR.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            S
          </div>
          <div className={statDescriptorRowStyle4}>
            <div className={statDescriptorStyle}>Hit Adj.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.STR.hitAdj}
                onChange={(e) =>
                  handleUpdate("stats.STR.hitAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Dmg Adj.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.STR.dmgAdj}
                onChange={(e) =>
                  handleUpdate("stats.STR.dmgAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Open Doors</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.STR.openDoors}
                onChange={(e) =>
                  handleUpdate("stats.STR.openDoors", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Bend Bars</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.STR.bendBars}
                onChange={(e) =>
                  handleUpdate("stats.STR.bendBars", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>

        {/* Dexterity Row */}
        <div className={statRowStyle}>
        <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.DEX.score}
              onChange={(e) => handleUpdate("stats.DEX.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            D
          </div>
          <div className={statDescriptorRowStyle3}>
            <div className={statDescriptorStyle}>React Adj.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.DEX.reactAdj}
                onChange={(e) =>
                  handleUpdate("stats.DEX.reactAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Missile Adj.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.DEX.missileAdj}
                onChange={(e) =>
                  handleUpdate("stats.DEX.missileAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Defense Adj.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.DEX.defenseAdj}
                onChange={(e) =>
                  handleUpdate("stats.DEX.defenseAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>

        {/* Constitution Row */}
        <div className={statRowStyle}>
        <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.CON.score}
              onChange={(e) => handleUpdate("stats.CON.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            C
          </div>
          <div className={statDescriptorRowStyle4}>
            <div className={statDescriptorStyle}>Hit Point Adj</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CON.hpAdj}
                onChange={(e) =>
                  handleUpdate("stats.CON.hpAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>System Shock</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CON.systemShock}
                onChange={(e) =>
                  handleUpdate("stats.CON.systemShock", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Res. Survival</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CON.resurrectSurvival}
                onChange={(e) =>
                  handleUpdate("stats.CON.resurrectSurvival", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Poison Save</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CON.poisonSave}
                onChange={(e) =>
                  handleUpdate("stats.CON.poisonSave", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>

        {/* Wisdom Row */}
        <div className={statRowStyle}>
        <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.WIS.score}
              onChange={(e) => handleUpdate("stats.WIS.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            W
          </div>
          <div className={statDescriptorRowStyle3}>
            <div className={statDescriptorStyle}>Magical Atk Adj</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.WIS.magicalAtkAdj}
                onChange={(e) =>
                  handleUpdate("stats.WIS.magicalAtkAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Spell Bonus</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.WIS.spellBonus}
                onChange={(e) =>
                  handleUpdate("stats.WIS.spellBonus", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>% Spell Failure</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.WIS.spellFailure}
                onChange={(e) =>
                  handleUpdate("stats.WIS.spellFailure", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>

        {/* Intelligence Row */}
        <div className={statRowStyle}>
        <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.INT.score}
              onChange={(e) => handleUpdate("stats.INT.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            I
          </div>
          <div className={statDescriptorRowStyle4}>
            <div className={statDescriptorStyle}>Languages</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.INT.addLanguage}
                onChange={(e) =>
                  handleUpdate("stats.INT.addLanguage", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>% to Know Spell</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.INT.knowSpell}
                onChange={(e) =>
                  handleUpdate("stats.INT.knowSpell", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Max Spell Lvl.</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.INT.minSpells}
                onChange={(e) =>
                  handleUpdate("stats.INT.minSpells", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Max # Spells</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.INT.maxSpells}
                onChange={(e) =>
                  handleUpdate("stats.INT.maxSpells", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>

        {/* Charisma Row */}
        <div className={statRowStyle}>
        <div className={statStyle}>
            <input
              type="text"
              value={characterData.stats.CHA.score}
              onChange={(e) => handleUpdate("stats.CHA.score", e.target.value)}
              className={statInputStyle}
            />
          </div>
          <div className="font-bold flex items-center justify-center w-[30px] text-xl">
            CH
          </div>
          <div className={statDescriptorRowStyle3}>
            <div className={statDescriptorStyle}>Max # Henchmen</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CHA.maxHenchmen}
                onChange={(e) =>
                  handleUpdate("stats.CHA.maxHenchmen", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Loyalty Base</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CHA.loyaltyBase}
                onChange={(e) =>
                  handleUpdate("stats.CHA.loyaltyBase", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
            <div className={statDescriptorStyle}>Reaction Adjustment</div>
            <div className={statValueStyle}>
              <input
                type="text"
                value={characterData.stats.CHA.reactionAdj}
                onChange={(e) =>
                  handleUpdate("stats.CHA.reactionAdj", e.target.value)
                }
                className={statInputStyle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Saving Throws  and Saving Throw Adjustmentts*/}
      <section className="flex flex-col md:justify-right  md:min-w-1/4 gap-4 ">
        <section className="gap-4 flex-col flex ">
          <h1 className="font-bold text-left">Saving Throws:</h1>

          <div className="flex flex-row gap-2">
            <label>Paralyzation / Poison</label>
            <div className="border-2 border-black justify-center text-center ml-auto max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
              <input
                type="text"
                value={characterData.savingThrows.base.paralyzationPoison}
                onChange={(e) =>
                  handleUpdate(
                    "savingThrows.base.paralyzationPoison",
                    e.target.value
                  )
                }
                className="w-full h-full text-center bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center  ">
            <label>Petrification & Polymorph</label>
            <div className="border-2 border-black  ml-auto justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
              <input
                type="text"
                value={characterData.savingThrows.base.petrificationPolymorph}
                onChange={(e) =>
                  handleUpdate(
                    "savingThrows.base.petrificationPolymorph",
                    e.target.value
                  )
                }
                className="w-full h-full text-center bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <label>Rods, Staves, or Wands</label>
            <div className="border-2 border-black ml-auto justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
              <input
                type="text"
                value={characterData.savingThrows.base.rodsStavesWands}
                onChange={(e) =>
                  handleUpdate(
                    "savingThrows.base.rodsStavesWands",
                    e.target.value
                  )
                }
                className="w-full h-full text-center bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <label>Breath Weapons</label>
            <div className="border-2 border-black ml-auto justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
              <input
                type="text"
                value={characterData.savingThrows.base.breathWeapons}
                onChange={(e) =>
                  handleUpdate(
                    "savingThrows.base.breathWeapons",
                    e.target.value
                  )
                }
                className="w-full h-full text-center bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2  items-center">
            <label>Spells</label>
            <div className="border-2 border-black ml-auto justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
              <input
                type="text"
                value={characterData.savingThrows.base.spells}
                onChange={(e) =>
                  handleUpdate("savingThrows.base.spells", e.target.value)
                }
                className="w-full h-full text-center bg-transparent outline-none"
              />
            </div>
          </div>
        </section>

        {/* Saving Throw Adjustments */}
        <div className="w-full max-w-full flex  flex-col gap-4">
          {/* Titled Row */}
          <div className="flex flex-row  items-center gap-2 ">
            <h3 className="font-bold text-md">Saving Throw Adjustments</h3>
            <button
              onClick={handleAddSavingThrowBonus}
              className="w-8 h-8 flex flex-grow ml-auto items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-colors font-bold text-xl shadow-sm"
              title="Add Saving Throw Bonus"
            >
              <span className="leading-none">+</span>
            </button>
          </div>

          {/* Saving Throw Adjustments */}
          <div className="grid grid-cols-1 gap-2 ">
            {characterData.savingThrows.bonuses.map(
              (item: SavingThrowBonus, index: number) => (
                <div
                  className="group flex flex-row items-center gap-1 relative pr-7"
                  key={index}
                >
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) =>
                      handleUpdate(
                        `savingThrows.bonuses.${index}.value`,
                        e.target.value
                      )
                    }
                    className="w-10 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center font-medium"
                  />
                  <input
                    type="text"
                    value={item.type}
                    onChange={(e) =>
                      handleUpdate(
                        `savingThrows.bonuses.${index}.type`,
                        e.target.value
                      )
                    }
                    className="flex-1 min-w-0 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
                  />
                  <button
                    onClick={() => handleRemoveSavingThrowBonus(index)}
                    className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-lg"
                    title="Remove Saving Throw Adjustment"
                  >
                    <span className="leading-none mt-[-2px]">-</span>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
