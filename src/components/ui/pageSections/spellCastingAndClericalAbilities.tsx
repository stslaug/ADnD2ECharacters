import { CharacterData, Spell } from "@/types/character";
import SpellRow from "@/components/ui/SpellRow";

export default function SpellCasting({
  characterData,
  handleUpdate,
}: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const handleAddSpell = () => {
    const newSpell: Spell = {
      name: "New Spell",
      level: 1,
      school: "General",
      components: "V, S",
      range: "Touch",
      duration: "Instant",
      damage: "-",
      savingThrow: "None",
      description: "",
    };
    handleUpdate("magic.spells", [...characterData.magic.spells, newSpell]);
  };

  const handleRemoveSpell = (index: number) => {
    const updated = characterData.magic.spells.filter((_, i) => i !== index);
    handleUpdate("magic.spells", updated);
  };

  const handleDuplicateSpell = (index: number) => {
    const spellToDuplicate = characterData.magic.spells[index];
    const duplicatedSpell = { ...spellToDuplicate };
    const updatedSpells = [...characterData.magic.spells];
    // Insert the duplicate right after the original
    updatedSpells.splice(index + 1, 0, duplicatedSpell);
    handleUpdate("magic.spells", updatedSpells);
  };
  const isWizard = characterData.identity.classes.some(
    (cls) =>
      cls?.name.toLowerCase() === "mage" || cls?.name.toLowerCase() === "wizard"
  );
  const isCleric = characterData.identity.classes.some(
    (cls) =>
      cls?.name.toLowerCase() === "cleric" ||
      cls?.name.toLowerCase() === "priest"
  );

  return (
    <>
      {(isWizard || isCleric) && (
        <section className="w-full">
          <section className="flex md:flex-row flex-col gap-8 w-full">
            {/* Left Column (Spells) */}
            <div className="flex flex-col w-full">
              <div className="w-full flex md:flex-row flex-col mb-4">
                <div className="relative group">
                  <div className="w-15 min-w-min h-min p-4 text-nowrap border-2 border-black font-bold text-2xl bg-white dark:bg-zinc-900">
                    SPELLS KNOWN
                  </div>
                  <button
                    onClick={handleAddSpell}
                    className="absolute -right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-all font-bold text-xl shadow-sm z-10"
                    title="Add Spell"
                  >
                    <span className="leading-none">+</span>
                  </button>
                </div>
                <div className="flex flex-col text-center w-full">
                  <span className="text-nowrap flex flex-row justify-center gap-2">
                    SCHOOL:
                    <input
                      type="text"
                      value={characterData.identity.school}
                      onChange={(e) =>
                        handleUpdate("identity.school", e.target.value)
                      }
                      className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                    />
                  </span>
                  <span className="text-nowrap flex flex-row justify-center gap-2">
                    FAMILIAR/PET:
                    <input
                      type="text"
                      value={characterData.identity.familiar}
                      onChange={(e) =>
                        handleUpdate("identity.familiar", e.target.value)
                      }
                      className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
                    />
                  </span>
                  <span className="text-nowrap flex flex-row justify-center gap-2">
                    SPECIAL ABILITIES:
                    <input
                      type="text"
                      value={characterData.identity.specialAbilities}
                      onChange={(e) =>
                        handleUpdate(
                          "identity.specialAbilities",
                          e.target.value
                        )
                      }
                      className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors w-1/2"
                    />
                  </span>
                </div>
              </div>

              {/* Spells Memorized table */}
              <div className="flex flex-col gap-0 border border-black rounded overflow-hidden">
                {characterData.magic.spells.map((spell, index) => (
                  <SpellRow
                    key={index}
                    spell={spell}
                    path={`magic.spells.${index}`}
                    handleUpdate={handleUpdate}
                    onRemove={() => handleRemoveSpell(index)}
                    onDuplicate={() => handleDuplicateSpell(index)}
                  />
                ))}
              </div>
            </div>

            {isCleric && (
              <div className="md:max-w-1/8 w-full">
                <h3 className="font-bold">Turn Rate</h3>
                <div className="grid md:grid-cols-1 grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  {Object.keys(characterData.turnUndead).map((key, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between gap-2 rounded border border-black p-2"
                    >
                      <label className="capitalize text-xs">{key}</label>
                      <input
                        type="text"
                        value={String(characterData.turnUndead[key])}
                        onChange={(e) =>
                          handleUpdate(`turnUndead.${key}`, e.target.value)
                        }
                        className="w-8 text-center bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {isWizard && (
            <div className="w-full grid md:grid-cols-7  lg:grid-cols-10 grid-cols-3 gap-2 mb-2 justify-center mt-4">
              <h3 className="font-bold mx-2 my-auto">Arcane</h3>
              {Object.keys(characterData.magic.slots.arcane).map(
                (spell, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 rounded text-center border border-black p-2"
                  >
                    <input
                      type="text"
                      value={
                        characterData.magic.slots.arcane[
                          spell as keyof typeof characterData.magic.slots.arcane
                        ]
                      }
                      onChange={(e) =>
                        handleUpdate(
                          `magic.slots.arcane.${spell}`,
                          e.target.value
                        )
                      }
                      className="w-6 text-center bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
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
          )}

          {isCleric && (
            <div className="w-full grid md:grid-cols-7 lg:grid-cols-10 grid-cols-3 gap-2 justify-center">
              <h3 className="font-bold mx-2 text-center align-middle my-auto">
                Divine
              </h3>
              {Object.keys(characterData.magic.slots.divine).map(
                (spell, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 rounded text-center border border-black p-2"
                  >
                    <input
                      type="text"
                      value={
                        characterData.magic.slots.divine[
                          spell as keyof typeof characterData.magic.slots.divine
                        ]
                      }
                      onChange={(e) =>
                        handleUpdate(
                          `magic.slots.divine.${spell}`,
                          e.target.value
                        )
                      }
                      className="w-6 text-center bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
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
          )}
        </section>
      )}
    </>
  );
}
