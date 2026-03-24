export default function SpellCasting({characterData }: any) {
    return (
        <section className="w-full">
            <section className=" flex flex-row gap-8 w-full">
              {/* Right Column (Spells) */}
              <div className="flex flex-col w-full">
                <div className="w-full flex flex-row mb-4">
                  <div className="w-15 min-w-min h-min p-4 text-nowrap border-2 border-black font-bold text-2xl">
                    SPELLS—KNOWN
                  </div>
                  <div className="flex flex-col text-center w-full">
                    <span className="text-nowrap">
                      SCHOOL: {characterData.school}
                    </span>
                    <span className="text-nowrap">
                      FAMILIAR/PET: {characterData.familiar}
                    </span>
                    <span className="text-nowrap">
                      SPECIAL ABILITIES: {characterData.specialAbilities}
                    </span>
                  </div>
                </div>

                {/* Spells Memorized table */}
                <table className="flex flex-col gap-2  ">
                  <tbody className="">
                    {characterData.spells.map((spell, index) => (
                      <tr
                        className="flex flex-row gap-2 justify-between"
                        key={index}
                      >
                        <td className="whitespace-nowrap  min-w-min max-w-[10px]">
                          lvl {spell.level}
                        </td>
                        <td className="font-bold whitespace-nowrap">
                          {spell.name}
                        </td>

                        <td className="whitespace-nowrap">{spell.school}</td>
                        <td className="whitespace-nowrap">
                          {spell.components}
                        </td>
                        <td className="whitespace-nowrap">{spell.range}</td>
                        <td className="whitespace-nowrap">{spell.duration}</td>
                        <td className="whitespace-nowrap">{spell.damage}</td>
                        <td className="whitespace-nowrap">
                          {spell.savingThrow}
                        </td>
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
                      className="flex flex-row gap-2 rounded text-center border border-black p-2"
                    >
                      {key}
                      <label>{characterData.turnRate[key]}</label>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="w-full flex flex-row gap-2  mb-2 justify-center">
              <h3 className="font-bold mx-2 my-auto">Arcane</h3>
              {Object.keys(characterData.arcaneSpellSlots).map(
                (spell, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 rounded text-center border border-black p-2"
                  >
                    {characterData.arcaneSpellSlots[spell]}
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
                    {characterData.divineSpellSlots[spell]}
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
    );}