export default function SpellCasting({ characterData, handleUpdate }: any) {
    return (
      <section className="w-full">
        <section className="flex flex-row gap-8 w-full">
          {/* Right Column (Spells) */}
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row mb-4">
              <div className="w-15 min-w-min h-min p-4 text-nowrap border-2 border-black font-bold text-2xl">
                SPELLS—KNOWN
              </div>
              <div className="flex flex-col text-center w-full">
                <span className="text-nowrap flex flex-row justify-center gap-2">
                  SCHOOL: 
                  <input
                    type="text"
                    value={characterData.school}
                    onChange={(e) => handleUpdate("school", e.target.value)}
                    className="bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                  />
                </span>
                <span className="text-nowrap flex flex-row justify-center gap-2">
                  FAMILIAR/PET: 
                  <input
                    type="text"
                    value={characterData.familiar}
                    onChange={(e) => handleUpdate("familiar", e.target.value)}
                    className="bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                  />
                </span>
                <span className="text-nowrap flex flex-row justify-center gap-2">
                  SPECIAL ABILITIES: 
                  <input
                    type="text"
                    value={characterData.specialAbilities}
                    onChange={(e) => handleUpdate("specialAbilities", e.target.value)}
                    className="bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors w-1/2"
                  />
                </span>
              </div>
            </div>
  
            {/* Spells Memorized table */}
            <table className="flex flex-col gap-2">
              <tbody>
                {characterData.spells.map((spell: any, index: number) => (
                  <tr
                    className="flex flex-row gap-2 justify-between"
                    key={index}
                  >
                    <td className="whitespace-nowrap min-w-min max-w-[10px]">
                      lvl {spell.level}
                    </td>
                    <td className="font-bold whitespace-nowrap">
                      {spell.name}
                    </td>
                    <td className="whitespace-nowrap">{spell.school}</td>
                    <td className="whitespace-nowrap">{spell.components}</td>
                    <td className="whitespace-nowrap">{spell.range}</td>
                    <td className="whitespace-nowrap">{spell.duration}</td>
                    <td className="whitespace-nowrap">{spell.damage}</td>
                    <td className="whitespace-nowrap">{spell.savingThrow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="max-w-1/8 w-full">
            <h3 className="font-bold">Turn Rate</h3>
            <div className="grid grid-cols-1 gap-2 w-full">
              {Object.keys(characterData.turnRate).map((key, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between gap-2 rounded border border-black p-2"
                >
                  <label className="capitalize">{key}</label>
                  <input
                    type="text"
                    value={characterData.turnRate[key]}
                    onChange={(e) => handleUpdate("turnRate", e.target.value, key)}
                    className="w-8 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <div className="w-full flex flex-row gap-2 mb-2 justify-center mt-4">
          <h3 className="font-bold mx-2 my-auto">Arcane</h3>
          {Object.keys(characterData.arcaneSpellSlots).map(
            (spell, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 rounded text-center border border-black p-2"
              >
                <input
                  type="text"
                  value={characterData.arcaneSpellSlots[spell]}
                  onChange={(e) => handleUpdate("arcaneSpellSlots", e.target.value, spell)}
                  className="w-6 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                />
                <label className="font-bold">
                  {index === 0
                    ? "1st"
                    : index === 1
                    ? "2nd"
                    : index === 2
                    ? "3rd"
                    : index + 1 + "th"}
                </label>
              </div>
            )
          )}
        </div>
        
        <div className="w-full flex flex-row gap-2 justify-center">
          <h3 className="font-bold mx-2 text-center align-middle my-auto">
            Divine
          </h3>
          {Object.keys(characterData.divineSpellSlots).map(
            (spell, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 rounded text-center border border-black p-2"
              >
                <input
                  type="text"
                  value={characterData.divineSpellSlots[spell]}
                  onChange={(e) => handleUpdate("divineSpellSlots", e.target.value, spell)}
                  className="w-6 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                />
                <label className="font-bold">
                  {index === 0
                    ? "1st"
                    : index === 1
                    ? "2nd"
                    : index === 2
                    ? "3rd"
                    : index + 1 + "th"}
                </label>
              </div>
            )
          )}
        </div>
      </section>
    );
  }