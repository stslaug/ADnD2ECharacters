import { CharacterData, NonWeaponProficiency } from "@/types/character";

export default function SavingThrowsAndSenses({characterData, handleUpdate }: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const handleAddProficiency = () => {
    const newItem: NonWeaponProficiency = {
      name: "New Proficiency",
      checkModifier: "0",
      ram: "W +0",
      roll: "10"
    };
    handleUpdate("proficiencies.nonWeapon", [...characterData.proficiencies.nonWeapon, newItem]);
  };

  const handleRemoveProficiency = (index: number) => {
    const updated = characterData.proficiencies.nonWeapon.filter((_, i) => i !== index);
    handleUpdate("proficiencies.nonWeapon", updated);
  };



    return (
      <section className="w-full">
<section className=" flex flex-row gap-8 w-full">
  {/* Left Column and Details movement speed*/}
{/* Left Column and Details movement speed*/}
<div className="flex flex-col gap-4 w-full text-nowrap">
    <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 w-full max-w-full min-w-full">
      <div>
        <label>Vision Type</label>
        <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          <input
            type="text"
            value={characterData.traits.visionType}
            onChange={(e) => handleUpdate("traits.visionType", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Listening</label>
        <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          <input
            type="text"
            value={characterData.traits.listening}
            onChange={(e) => handleUpdate("traits.listening", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      {/* Movement Speed*/}
      <div>
        <label>Move Base</label>
        <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
          <input
            type="text"
            value={characterData.vitals.movement.base}
            onChange={(e) => handleUpdate("vitals.movement.base", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Act. Move</label>
        <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          <input
            type="text"
            value={characterData.vitals.movement.actual}
            onChange={(e) => handleUpdate("vitals.movement.actual", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Swim Move</label>
        <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
          <input
            type="text"
            value={characterData.vitals.movement.swim}
            onChange={(e) => handleUpdate("vitals.movement.swim", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
    </div>

    <div className=" w-full max-w-full min-w-full">
      <label>Languages</label>
      <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <input
          type="text"
          value={characterData.traits.languages.join(", ")}
          onChange={(e) => handleUpdate("traits.languages", e.target.value.split(",").map(s => s.trimStart()))}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Detection Skill</label>
      <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <input
          type="text"
          value={characterData.traits.detectionSkill}
          onChange={(e) => handleUpdate("traits.detectionSkill", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Resistance</label>
      <p className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
        <input
          type="text"
          value={characterData.traits.resistances}
          onChange={(e) => handleUpdate("traits.resistances", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Immunities</label>
      <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <input
          type="text"
          value={characterData.traits.immunities}
          onChange={(e) => handleUpdate("traits.immunities", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
  </div>

  {/* Right Column and Saving Throws*/}
  <div className="flex flex-col gap-4 max-w-2/3 w-full ">
    <div>
      <div className="flex flex-row items-center gap-2 mb-2">
        <h1 className="font-bold text-lg">Non-Weapon Proficiencies</h1>
        <button
          onClick={handleAddProficiency}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-colors font-bold text-xl shadow-sm"
          title="Add Proficiency"
        >
          <span className="leading-none">+</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full">
        {characterData.proficiencies.nonWeapon.map((item: NonWeaponProficiency, index: number) => (
          <div
            key={index}
            className="group flex flex-row items-center rounded border border-black p-1 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative"
          >
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleUpdate(`proficiencies.nonWeapon.${index}.name`, e.target.value)}
              className="flex-1 min-w-0 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
            />
            <div className="flex flex-row items-center gap-1">
              <label className="text-xs uppercase">Check Mod:</label>
              <input
                type="text"
                value={item.checkModifier || ""}
                onChange={(e) => handleUpdate(`proficiencies.nonWeapon.${index}.checkModifier`, e.target.value)}
                className="w-12 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center font-medium"
              />
            </div>
            <div className="flex flex-row items-center gap-1">
              <label className="text-xs uppercase">RAM:</label>
              <input
                type="text"
                value={item.ram}
                onChange={(e) => handleUpdate(`proficiencies.nonWeapon.${index}.ram`, e.target.value)}
                className="w-16 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center font-medium"
              />
            </div>
            <div className="flex flex-row items-center gap-1 mr-8">
              <label className="text-xs uppercase">Roll:</label>
              <input
                type="text"
                value={item.roll}
                onChange={(e) => handleUpdate(`proficiencies.nonWeapon.${index}.roll`, e.target.value)}
                className="w-10 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center font-medium"
              />
            </div>
            <button
              onClick={() => handleRemoveProficiency(index)}
              className="absolute right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-lg"
              title="Remove Proficiency"
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
    );}
