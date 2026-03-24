export default function BasicInfo({ characterData, handleUpdate }: any) {
    return (
      <section className="flex flex-col w-full gap-4">
        {/* Right Column and Character Stats */}
        <section className="gap-4 flex flex-col w-full">
          <div>
            <input
              type="text"
              value={characterData.name}
              onChange={(e) => handleUpdate("name", e.target.value)}
              className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2 w-full bg-transparent outline-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            />
            <label>Character Name</label>
          </div>
  
          {/* Character Details */}
          <div className="grid grid-cols-6 gap-4 w-full">
            <div>
              <label>Class</label>
              <input
                type="text"
                value={characterData.class}
                onChange={(e) => handleUpdate("class", e.target.value)}
                className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
  
            <div>
              <label>Race</label>
              <input
                type="text"
                value={characterData.race}
                onChange={(e) => handleUpdate("race", e.target.value)}
                className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
  
            <div>
              <label>Alignment</label>
              <input
                type="text"
                value={characterData.alignment}
                onChange={(e) => handleUpdate("alignment", e.target.value)}
                className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-nowrap sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
  
            <div>
              <label>Religion</label>
              <input
                type="text"
                value={characterData.diety}
                onChange={(e) => handleUpdate("diety", e.target.value)}
                className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
  
            <div>
              <label>Level</label>
              <input
                type="text"
                value={characterData.level}
                onChange={(e) => handleUpdate("level", e.target.value)}
                className="text-xl border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
  
            <div>
              <label>Place of Origin</label>
              <input
                type="text"
                value={characterData.origin}
                onChange={(e) => handleUpdate("origin", e.target.value)}
                className="text-xl border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
              />
            </div>
          </div>
        </section>
  
        {/* Left Column and Character Details */}
        <div className="flex flex-row">
          <section className="flex flex-col p-4 font-mono text-sm gap-3">
            {/* Strength Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.STR.score} onChange={(e) => handleUpdate("stats", e.target.value, "STR", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">S</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">Hit Adj.</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.STR.hitAdj} onChange={(e) => handleUpdate("stats", e.target.value, "STR", "hitAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">Dmg Adj.</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.STR.dmgAdj} onChange={(e) => handleUpdate("stats", e.target.value, "STR", "dmgAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">Open Doors</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.STR.openDoors} onChange={(e) => handleUpdate("stats", e.target.value, "STR", "openDoors")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">Bend Bars</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.STR.bendBars} onChange={(e) => handleUpdate("stats", e.target.value, "STR", "bendBars")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
  
            {/* Dexterity Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.DEX.score} onChange={(e) => handleUpdate("stats", e.target.value, "DEX", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">D</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">React Adj.</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.DEX.reactAdj} onChange={(e) => handleUpdate("stats", e.target.value, "DEX", "reactAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">Missile Adj.</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.DEX.missileAdj} onChange={(e) => handleUpdate("stats", e.target.value, "DEX", "missileAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">Defense Adj.</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.DEX.defenseAdj} onChange={(e) => handleUpdate("stats", e.target.value, "DEX", "defenseAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
  
            {/* Constitution Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.CON.score} onChange={(e) => handleUpdate("stats", e.target.value, "CON", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">C</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[110px]">Hit Point<br />Adj</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.CON.hpAdj} onChange={(e) => handleUpdate("stats", e.target.value, "CON", "hpAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">System Shock</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.CON.systemShock} onChange={(e) => handleUpdate("stats", e.target.value, "CON", "systemShock")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">Resurrect<br />Survival</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.CON.resurrectSurvival} onChange={(e) => handleUpdate("stats", e.target.value, "CON", "resurrectSurvival")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[100px]">Poison Save</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.CON.poisonSave} onChange={(e) => handleUpdate("stats", e.target.value, "CON", "poisonSave")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
  
            {/* Wisdom Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.WIS.score} onChange={(e) => handleUpdate("stats", e.target.value, "WIS", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">W</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">Magical Atk Adj</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.WIS.magicalAtkAdj} onChange={(e) => handleUpdate("stats", e.target.value, "WIS", "magicalAtkAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[120px]">Spell Bonus</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.WIS.spellBonus} onChange={(e) => handleUpdate("stats", e.target.value, "WIS", "spellBonus")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[150px]">% Spell Failure</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.WIS.spellFailure} onChange={(e) => handleUpdate("stats", e.target.value, "WIS", "spellFailure")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
  
            {/* Intelligence Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.INT.score} onChange={(e) => handleUpdate("stats", e.target.value, "INT", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">I</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">Add Language</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.INT.addLanguage} onChange={(e) => handleUpdate("stats", e.target.value, "INT", "addLanguage")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">% Know Spell</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.INT.knowSpell} onChange={(e) => handleUpdate("stats", e.target.value, "INT", "knowSpell")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[120px]">Min # Spells</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.INT.minSpells} onChange={(e) => handleUpdate("stats", e.target.value, "INT", "minSpells")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">Max # Spells</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.INT.maxSpells} onChange={(e) => handleUpdate("stats", e.target.value, "INT", "maxSpells")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
  
            {/* Charisma Row */}
            <div className="flex flex-row w-full items-stretch gap-3">
              <div className="border border-black flex items-center justify-center w-[40px] text-lg">
                <input type="text" value={characterData.stats.CHA.score} onChange={(e) => handleUpdate("stats", e.target.value, "CHA", "score")} className="w-full text-center bg-transparent outline-none" />
              </div>
              <div className="font-bold flex items-center justify-center w-[30px] text-xl">CH</div>
              <div className="flex flex-row flex-grow border border-black">
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[160px]">Max # Henchmen</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.CHA.maxHenchmen} onChange={(e) => handleUpdate("stats", e.target.value, "CHA", "maxHenchmen")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[130px]">Loyalty Base</div>
                <div className="border-r border-black px-3 py-1 flex items-center justify-center w-[50px]">
                  <input type="text" value={characterData.stats.CHA.loyaltyBase} onChange={(e) => handleUpdate("stats", e.target.value, "CHA", "loyaltyBase")} className="w-full text-center bg-transparent outline-none" />
                </div>
                <div className="font-bold border-r border-black px-2 py-1 flex items-center w-[180px]">Reaction Adjustment</div>
                <div className="px-3 py-1 flex items-center justify-center w-[50px] flex-grow">
                  <input type="text" value={characterData.stats.CHA.reactionAdj} onChange={(e) => handleUpdate("stats", e.target.value, "CHA", "reactionAdj")} className="w-full text-center bg-transparent outline-none" />
                </div>
              </div>
            </div>
          </section>
  
          {/* Saving Throws */}
          <div className="flex flex-col align-right justify-right ml-auto gap-3 max-w-1/3 w-full">
            <h1 className="font-bold text-right">Saving Throws:</h1>
            
            <div className="flex flex-row gap-2 items-center justify-right ml-auto">
              <label>Paralyzation /<br /> Poison</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                <input type="text" value={characterData.savingThrowsParalyzationPoison} onChange={(e) => handleUpdate("savingThrowsParalyzationPoison", e.target.value)} className="w-full h-full text-center bg-transparent outline-none" />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 items-center text-center ml-auto">
              <label>Petrification &<br /> Polymorph</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                 <input type="text" value={characterData.savingThrowsPetrificationPolymorph} onChange={(e) => handleUpdate("savingThrowsPetrificationPolymorph", e.target.value)} className="w-full h-full text-center bg-transparent outline-none" />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 items-center text-center ml-auto">
              <label>Rods, Staves,<br /> or Wands</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                 <input type="text" value={characterData.savingThrowsRodsStavesWands} onChange={(e) => handleUpdate("savingThrowsRodsStavesWands", e.target.value)} className="w-full h-full text-center bg-transparent outline-none" />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 items-center text-center ml-auto">
              <label>Breath Weapons</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                 <input type="text" value={characterData.savingThrowsBreathWeapons} onChange={(e) => handleUpdate("savingThrowsBreathWeapons", e.target.value)} className="w-full h-full text-center bg-transparent outline-none" />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 items-center text-center ml-auto">
              <label>Spells</label>
              <div className="border-2 border-black flex justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                 <input type="text" value={characterData.savingThrowsSpells} onChange={(e) => handleUpdate("savingThrowsSpells", e.target.value)} className="w-full h-full text-center bg-transparent outline-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }