export default function SavingThrowsAndSenses({characterData, handleUpdate }: any) {
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
            value={characterData.visionType}
            onChange={(e) => handleUpdate("visionType", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Listening</label>
        <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          <input
            type="text"
            value={characterData.listening}
            onChange={(e) => handleUpdate("listening", e.target.value)}
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
            value={characterData.movementSpeed}
            onChange={(e) => handleUpdate("movementSpeed", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Act. Move</label>
        <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          <input
            type="text"
            value={characterData.actMovementSpeed}
            onChange={(e) => handleUpdate("actMovementSpeed", e.target.value)}
            className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
          />
        </h1>
      </div>
      <div>
        <label>Swim Move</label>
        <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
          <input
            type="text"
            value={characterData.swimMovementSpeed}
            onChange={(e) => handleUpdate("swimMovementSpeed", e.target.value)}
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
          value={characterData.languages.join(", ")}
          onChange={(e) => handleUpdate("languages", e.target.value.split(",").map(s => s.trimStart()))}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Detection Skill</label>
      <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <input
          type="text"
          value={characterData.detectionSkill}
          onChange={(e) => handleUpdate("detectionSkill", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Resistance</label>
      <p className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
        <input
          type="text"
          value={characterData.resistances}
          onChange={(e) => handleUpdate("resistances", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
    <div className=" ">
      <label>Immunities</label>
      <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <input
          type="text"
          value={characterData.immunities}
          onChange={(e) => handleUpdate("immunities", e.target.value)}
          className="w-full bg-transparent outline-none hover:text-zinc-600 focus:text-zinc-500 transition-colors"
        />
      </p>
    </div>
  </div>

  {/* Right Column and Saving Throws*/}
  <div className="flex flex-col gap-4 max-w-2/3 w-full ">
    {/* Saving Throw Adjustments */}
    <div className="w-full max-w-full flex flex-col gap-4">
      <h1 className="font-bold">Saving Throw Adjustments:</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        {characterData.savingThrowsBonus.map((item, index) => (
          <div className="flex flex-row gap-2" key={index}>
            <p className="border-b-2 w-min">{item.value}</p>
            <p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">
              {" "}
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h1 className="font-bold">Non-Weapon Proficiencies</h1>
      <div className="grid grid-cols-1 gap-2 w-full">
        {characterData.nonWeaponProficiencies.map((item, index) => (
          <div
            key={index}
            className="flex gap-1 justify-between rounded px-2 text-center border border-black p-1"
          >
            <span>RAM: {item.ram}</span> <strong>{item.name}</strong>{" "}
            Roll Needed: {item.roll}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
</section>
    );}