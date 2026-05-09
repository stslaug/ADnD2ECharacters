import { CharacterData, SavingThrowBonus } from "@/types/character";

export default function BasicInfo({
  characterData,
  handleUpdate,
}: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const scrollToExperience = () => {
    const element = document.getElementById("experience-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddSavingThrowBonus = () => {
    const newItem: SavingThrowBonus = {
      type: "to Poison",
      value: "+0"
    };
    handleUpdate("savingThrows.bonuses", [...characterData.savingThrows.bonuses, newItem]);
  };

  const handleRemoveSavingThrowBonus = (index: number) => {
    const updated = characterData.savingThrows.bonuses.filter((_, i) => i !== index);
    handleUpdate("savingThrows.bonuses", updated);
  };

  return (
    <section className="flex flex-col w-full gap-4">
      {/* Right Column and Character Stats */}
      <section className="gap-4 flex flex-col w-full">
        <div>
          <input
            type="text"
            value={characterData.identity.name}
            onChange={(e) => handleUpdate("identity.name", e.target.value)}
            className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2 w-full bg-transparent outline-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          />
          <label>Character Name</label>
        </div>

        {/* Character Details */}
        <div className="flex-row flex gap-4 w-full">
          {/* Class */}
          <div>
            <label>Class</label>
            <div className="flex flex-row gap-2 overflow-hidden">
              {characterData.identity.classes &&
              characterData.identity.classes.length > 0 ? (
                characterData.identity.classes.map((item, index: number) => (
                  <button
                    key={index}
                    onClick={scrollToExperience}
                    className="text-sm border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none transition-colors truncate"
                    title="Click to edit in Experience section"
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <button
                  onClick={scrollToExperience}
                  className="text-sm border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-500 sm:text-xl bg-transparent outline-none transition-colors"
                >
                  None
                </button>
              )}
            </div>
          </div>

          {/* Race */}
          <div>
            <label>Race</label>
            <input
              type="text"
              value={characterData.identity.race}
              onChange={(e) => handleUpdate("identity.race", e.target.value)}
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Alignment */}
          <div className="flex-grow w-max max-w-full min-w-min">
            <label>Alignment</label>
            <input
              type="text"
              value={characterData.identity.alignment}
              onChange={(e) =>
                handleUpdate("identity.alignment", e.target.value)
              }
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-nowrap sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Religion */}
          <div>
            <label>Religion</label>
            <input
              type="text"
              value={characterData.identity.deity}
              onChange={(e) => handleUpdate("identity.deity", e.target.value)}
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Level */}
          <div className="w-min max-w-min min-w-min">
            <label>Level</label>
            <div className="flex flex-row gap-2">
              {characterData.identity.classes &&
              characterData.identity.classes.length > 0 ? (
                characterData.identity.classes?.map((item, index: number) => (
                  <button
                    key={index}
                    onClick={scrollToExperience}
                    className="text-md border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none transition-colors"
                    title="Click to edit in Experience section"
                  >
                    {item.level}
                  </button>
                ))
              ) : (
                <button
                  onClick={scrollToExperience}
                  className="text-md border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-500 sm:text-xl bg-transparent outline-none transition-colors"
                >
                  0
                </button>
              )}
            </div>
          </div>

          <div className="">
            <label>Place of Origin</label>
            <input
              type="text"
              value={characterData.identity.origin}
              onChange={(e) => handleUpdate("identity.origin", e.target.value)}
              className="text-sm border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Character Stats and Saving Throws*/}
      <div className="flex flex-row">
        {/* Left Column and Character Stats */}
        <section className="flex flex-col p-4 font-mono text-sm gap-3">
          {/* Strength Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.STR.score}
                onChange={(e) =>
                  handleUpdate("stats.STR.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              S
            </div>
            <div className="flex flex-row flex-grow max-w-[500px] border border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-[100px]">
                Hit Adj.
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-min min-w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.STR.hitAdj}
                  onChange={(e) =>
                    handleUpdate("stats.STR.hitAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex  flex-grow items-center w-[100px]">
                Dmg Adj.
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-min min-w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.STR.dmgAdj}
                  onChange={(e) =>
                    handleUpdate("stats.STR.dmgAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Open Doors
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-min min-w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.STR.openDoors}
                  onChange={(e) =>
                    handleUpdate("stats.STR.openDoors", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Bend Bars
              </div>
              <div className="px-3 py-1 flex items-center justify-center w-min min-w-[65px] flex-grow">
                <input
                  type="text"
                  value={characterData.stats.STR.bendBars}
                  onChange={(e) =>
                    handleUpdate("stats.STR.bendBars", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dexterity Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.DEX.score}
                onChange={(e) =>
                  handleUpdate("stats.DEX.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              D
            </div>
            <div className="flex flex-row flex-grow max-w-[500px] border border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                React Adj.
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-min min-w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.DEX.reactAdj}
                  onChange={(e) =>
                    handleUpdate("stats.DEX.reactAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Missile Adj.
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-min min-w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.DEX.missileAdj}
                  onChange={(e) =>
                    handleUpdate("stats.DEX.missileAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Defense Adj.
              </div>
              <div className="px-3 py-1 flex items-center justify-center w-min min-w-[50px] ">
                <input
                  type="text"
                  value={characterData.stats.DEX.defenseAdj}
                  onChange={(e) =>
                    handleUpdate("stats.DEX.defenseAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Constitution Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.CON.score}
                onChange={(e) =>
                  handleUpdate("stats.CON.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              C
            </div>
            <div className="flex flex-row flex-grow max-w-[500px] border border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Hit Point Adj
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[60px]">
                <input
                  type="text"
                  value={characterData.stats.CON.hpAdj}
                  onChange={(e) =>
                    handleUpdate("stats.CON.hpAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                System Shock
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[75px]">
                <input
                  type="text"
                  value={characterData.stats.CON.systemShock}
                  onChange={(e) =>
                    handleUpdate("stats.CON.systemShock", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex  flex-growitems-center w-min">
                Res. Survival
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[65px]">
                <input
                  type="text"
                  value={characterData.stats.CON.resurrectSurvival}
                  onChange={(e) =>
                    handleUpdate("stats.CON.resurrectSurvival", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-[100px]">
                Poison Save
              </div>
              <div className="px-3 py-1 flex items-center justify-center w-[65px] flex-grow">
                <input
                  type="text"
                  value={characterData.stats.CON.poisonSave}
                  onChange={(e) =>
                    handleUpdate("stats.CON.poisonSave", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Wisdom Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.WIS.score}
                onChange={(e) =>
                  handleUpdate("stats.WIS.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              W
            </div>
            <div className="flex flex-row flex-grow max-w-[500px] border border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Magical Atk Adj
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.WIS.magicalAtkAdj}
                  onChange={(e) =>
                    handleUpdate("stats.WIS.magicalAtkAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Spell Bonus
              </div>
              <div className="border-r border-black px-3 py-1 flex  items-center justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.WIS.spellBonus}
                  onChange={(e) =>
                    handleUpdate("stats.WIS.spellBonus", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                % Spell Failure
              </div>
              <div className="px-3 py-1 flex items-center text-center justify-center w-[50px] flex-grow">
                <input
                  type="text"
                  value={characterData.stats.WIS.spellFailure}
                  onChange={(e) =>
                    handleUpdate("stats.WIS.spellFailure", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Intelligence Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.INT.score}
                onChange={(e) =>
                  handleUpdate("stats.INT.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              I
            </div>
            <div className="flex flex-row flex-grow border max-w-[500px] border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex  flex-grow items-center w-min">
                Languages
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.INT.addLanguage}
                  onChange={(e) =>
                    handleUpdate("stats.INT.addLanguage", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                % to Know Spell
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[65px]">
                <input
                  type="text"
                  value={characterData.stats.INT.knowSpell}
                  onChange={(e) =>
                    handleUpdate("stats.INT.knowSpell", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Max Spell Lvl.
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[65px]">
                <input
                  type="text"
                  value={characterData.stats.INT.minSpells}
                  onChange={(e) =>
                    handleUpdate("stats.INT.minSpells", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Max # Spells
              </div>
              <div className="px-3 py-1 flex items-center justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.INT.maxSpells}
                  onChange={(e) =>
                    handleUpdate("stats.INT.maxSpells", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Charisma Row */}
          <div className="flex flex-row w-full items-stretch gap-3">
            <div className="border border-black flex items-center justify-center w-[40px] text-lg">
              <input
                type="text"
                value={characterData.stats.CHA.score}
                onChange={(e) =>
                  handleUpdate("stats.CHA.score", e.target.value)
                }
                className="w-full text-center bg-transparent outline-none"
              />
            </div>
            <div className="font-bold flex items-center justify-center w-[30px] text-xl">
              CH
            </div>
            <div className="flex flex-row flex-grow max-w-[500px] border border-black">
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min ">
                Max # Henchmen
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.CHA.maxHenchmen}
                  onChange={(e) =>
                    handleUpdate("stats.CHA.maxHenchmen", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Loyalty Base
              </div>
              <div className="border-r border-black px-3 py-1 flex items-center  justify-center w-[50px]">
                <input
                  type="text"
                  value={characterData.stats.CHA.loyaltyBase}
                  onChange={(e) =>
                    handleUpdate("stats.CHA.loyaltyBase", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
              <div className="font-bold border-r border-black px-2 py-1 flex flex-grow items-center w-min">
                Reaction Adjustment
              </div>
              <div className="px-3 py-1 flex items-center justify-center w-[50px] ">
                <input
                  type="text"
                  value={characterData.stats.CHA.reactionAdj}
                  onChange={(e) =>
                    handleUpdate("stats.CHA.reactionAdj", e.target.value)
                  }
                  className="w-full text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Saving Throws */}
        <div className="flex flex-col ">
          <div className="flex flex-col align-right justify-right gap-3 w-full">
            <h1 className="font-bold text-left">Saving Throws:</h1>

            <div className="flex flex-row gap-2 items-center text-right justify-right ml-auto">
              <label>Paralyzation / Poison</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
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

            <div className="flex flex-row gap-2 items-center text-right ml-auto">
              <label>Petrification & Polymorph</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
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

            <div className="flex flex-row gap-2 items-center text-right ml-auto">
              <label>Rods, Staves, or Wands</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
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

            <div className="flex flex-row gap-2 items-center text-right ml-auto">
              <label>Breath Weapons</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
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

            <div className="flex flex-row gap-2 items-center text-right ml-auto">
              <label>Spells</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
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
          </div>

          {/* Saving Throw Adjustments */}
              <div className="w-full max-w-full flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2 ">
                  <h3 className="font-bold text-md">Saving Throw Adjustments</h3>
                  <button
                    onClick={handleAddSavingThrowBonus}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-colors font-bold text-xl"
                    title="Add Saving Throw Bonus"
                  >
                    <span className="leading-none">+</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-2 ">
                  {characterData.savingThrows.bonuses.map((item: SavingThrowBonus, index: number) => (
                    <div className="group flex flex-row items-center gap-1 relative pr-7" key={index}>
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => handleUpdate(`savingThrows.bonuses.${index}.value`, e.target.value)}
                        className="w-10 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center font-medium"
                      />
                      <input
                        type="text"
                        value={item.type}
                        onChange={(e) => handleUpdate(`savingThrows.bonuses.${index}.type`, e.target.value)}
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
                  ))}
                </div>
              </div>

        </div>
      </div>
    </section>
  );
}
