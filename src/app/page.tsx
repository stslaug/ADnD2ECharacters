import characterImage from "@/assets/images/image.png";
import Image from "next/image";
import { WeaponTableRow } from "@/components/ui/Weapon";
import { SpellTableRow } from "@/components/ui/Spell";
import MagicComponentItem from "@/components/ui/MagicComponentItem";
import { FiligreeBorder } from "@/components/ui/FiligreeBorder";

const data = {
  pname: "Tyler",
  dateCreated: "05/15/2023",
  campaign: "The Misfits",
  name: "Darkose Rimfire",
  class: "Mage",
  school: "Evocation",
  familiar: "Owl",
  specialAbilities: "Read Magic",
  stats: { STR: 8, DEX: 9, CON: 10, INT: 11, WIS: 12, CHA: 13 },
  race: "Human",
  alignment: "Chaotic Good",
  diety: "None",
  level: 1,
  origin: "None",
  patronDeity: "None",
  hitPoints: 10,
  hitDice: "d10",
  armorClass: 10,
  speed: 60,
  visionType: "Ultra",
  listening: "Acute",
  movementSpeed: 120,
  actMovementSpeed: 60,
  swimMovementSpeed: 60,
  languages: ["Common", "Elvish", "Draconic"],
  detectionSkill: "Can not currently detect",
  resistances: "Poison, Cold, Fire, Lightning, Acid, Magic, Magic",
  immunities: "Poison, Cold, Fire, Lightning, Acid, Magic",
  savingThrowsParalyzationPoison: 10,
  savingThrowsPetrificationPolymorph: 11,
  savingThrowsRodsStavesWands: 12,
  savingThrowsBreathWeapons: 13,
  savingThrowsSpells: 13,
  weapons: [
    {
      name: "Shortsword",
      magAdj: "+1",
      range: "10",
      speed: "2",
      damageSm: "1d6",
      damageMl: "1d8",
    },
  ],
  savingThrowsBonus: [
    { type: "to Poison", value: "+4" },
    { type: "to Fire", value: "-4" },
    { type: "to Poison", value: "+4" },
    { type: "to Fire", value: "-4" },
    { type: "to Poison", value: "+4" },
    { type: "to Fire", value: "-4" },
  ],
  combat: {
    armorWorn: "Robes",
    acBase: 10,
    condition: "Good",
    dexAdj: -2,
    magicalAdj: 0,
    shieldlessAc: 8,
    rearAc: 10,
    constAdj: 0,
    specialAdj: "None",
    wounds: 0,
    surprise: 0,
    dexAdjust: -2,
    rearAttacksAdjust: 0,
    adjustments: [
      { mod: "Slings", bonus: "+4" },
      { mod: "Slings", bonus: "+4" },
      { mod: "Slings", bonus: "+4" },
    ],
  },
  spells: [
    {
      name: "Magic Missile",
      level: 1,
      school: "Evocation",
      components: "S, V, M",
      range: "30 ft.",
      duration: "1 round",
      damage: "1d4 + 1 damage",
      savingThrow: "None",
      description:
        "You create a magical missile that explodes on impact. The missile attempts to meet its target. If the target is a creature, it must succeed on a Dexterity saving throw or take 1d6 force damage. If the target is an object, it must succeed on a Strength saving throw or take 1d6 force damage. If the target is a creature or an object that is Small or smaller, the missile is automatically destroyed. Otherwise, the missile deals half damage to the target, and the missile is destroyed.",
    },
    {
      name: "Magic Missile",
      level: 1,
      school: "Evocation",
      components: "S, V, M",
      range: "30 ft.",
      duration: "1 round",
      damage: "1d4 + 1 damage",
      savingThrow: "None",
      description:
        "You create a magical missile that explodes on impact. The missile attempts to meet its target. If the target is a creature, it must succeed on a Dexterity saving throw or take 1d6 force damage. If the target is an object, it must succeed on a Strength saving throw or take 1d6 force damage. If the target is a creature or an object that is Small or smaller, the missile is automatically destroyed. Otherwise, the missile deals half damage to the target, and the missile is destroyed.",
    },
    {
      name: "Magic Missile",
      level: 1,
      school: "Evocation",
      components: "S, V, M",
      range: "30 ft.",
      duration: "1 round",
      damage: "1d4 + 1 damage",
      savingThrow: "None",
      description:
        "You create a magical missile that explodes on impact. The missile attempts to meet its target. If the target is a creature, it must succeed on a Dexterity saving throw or take 1d6 force damage. If the target is an object, it must succeed on a Strength saving throw or take 1d6 force damage. If the target is a creature or an object that is Small or smaller, the missile is automatically destroyed. Otherwise, the missile deals half damage to the target, and the missile is destroyed.",
    },
    {
      name: "Magic Missile",
      level: 1,
      school: "Evocation",
      components: "S, V, M",
      range: "30 ft.",
      duration: "1 round",
      damage: "1d4 + 1 damage",
      savingThrow: "None",
      description:
        "You create a magical missile that explodes on impact. The missile attempts to meet its target. If the target is a creature, it must succeed on a Dexterity saving throw or take 1d6 force damage. If the target is an object, it must succeed on a Strength saving throw or take 1d6 force damage. If the target is a creature or an object that is Small or smaller, the missile is automatically destroyed. Otherwise, the missile deals half damage to the target, and the missile is destroyed.",
    },
  ],
  rogue: {
    pickPocket: "50%",
    openLocks: "50%",
    removeTraps: "50%",
    moveSilently: "50%",
    hideInShadows: "50%",
    hearNoise: "50%",
    climbNoise: "50%",
    readLanguages: "-5%",
    backStabMult: "2x",
    

  }
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col relative min-h-screen w-full max-w-6xl items-center  gap-4  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src={characterImage}
          alt="character-image"
          width={200}
          height={500}
          className=" absolute ml-auto mr-auto left-[40%] top-33"
        />

        {/* Top/1st Row  (Player Info) */}
        <section className="w-full flex relative">
          {/* Top Left */}
          <section className=" gap-3 flex flex-col  justify-center">
            <div>
              <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                {data.pname}
              </h1>
              <label className="text-sm">Player Name</label>
            </div>

            <div>
              <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {data.dateCreated}
              </h1>
              <label className="text-sm">Began</label>
            </div>
          </section>

          {/* Top Right */}
          <section className="flex flex-col gap-3 align-right absolute right-0 top-0  justify-center">
            <div>
              <h1 className="ml-auto text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                {data.campaign}
              </h1>
              <label className="text-sm float-right">Campaign</label>
            </div>
            <div className=" flex flex-row gap-2 items-center">
              <label className=" ml-auto">#</label>
              <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                1
              </h1>
            </div>
          </section>
        </section>

        {/* 2nd Row (Character Info Personal Info) */}
        <section className=" flex flex-row">
          {/* Left Column and Character Details*/}
          <section className="gap-4 flex flex-col w-full max-w-3/8">
            <div>
              <h1 className=" text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2  w-full">
                {data.name}
              </h1>
              <label>Character Name</label>
            </div>

            {/* Character Details */}
            <div className="flex flex-row gap-4 ">
              {/* Class, Race, Alignment, Religion */}
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <label>Class</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.class}
                  </h1>
                </div>

                <div>
                  <label>Race</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.race}
                  </h1>
                </div>

                <div>
                  <label>Alignment</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.alignment}
                  </h1>
                </div>
                <div>
                  <label>Religion</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.diety}
                  </h1>
                </div>
              </div>

              {/* Level Origin and Patron */}
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <label>Level</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.level}
                  </h1>
                </div>
                <div>
                  <label>Place of Origin</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.origin}
                  </h1>
                </div>
                <div>
                  <label>Patron Deity</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {data.diety}
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column and Character Stats*/}
          <section className=" ml-5 flex flex-row gap-2">
            <div className=" flex flex-col gap-8">
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.STR}
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.DEX}
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.CON}
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.WIS}
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.INT}
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                {data.stats.CHA}
              </div>
            </div>
            <div className=" flex flex-col gap-8">
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                S
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                D
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                C
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                W
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                I
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                CH
              </div>
            </div>

            <div className=" flex flex-col w-full  gap-[10]">
              {" "}
              {/*Strength*/}
              <div className="flex flex-row w-full border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Hit Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Dmg Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Open Doors
                </label>{" "}
                <p className="max-w-10  p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Bend Bars
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Dexterity*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  React Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black h-full w-full max-w-max p-1">
                  Missile Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Defense Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Constitution*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Hit Point Adj
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  System Shock
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Resurrect Survival
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Bend Bars
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Wisdom*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Magical Atk Adj
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Spell Bonus
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max  h-full p-1">
                  % Spell Failure
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Intelligence*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Add Language
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  % Know Spell
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Min # Spells
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Max # Spells
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Charism*/}
              <div className="flex flex-row border-1 border-black w-full max-w-max">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Max # Henchmen
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Loyalty Base
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Reaction Adjustment
                </label>{" "}
                <p className="max-w-10 p-2">0</p>
              </div>
            </div>
          </section>
        </section>

        <hr className="border-1 rounded-full w-full"></hr>

        {/* 3rd Row (Saving Throws and Resistances AND Senses) */}
        <section className=" flex flex-row gap-8 w-full">
          {/* Left Column and Details movement speed*/}
          <div className="flex flex-col gap-4 w-full text-nowrap">
            <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 w-full max-w-full min-w-full">
              <div>
                <label>Vision Type</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {data.visionType}
                </h1>
              </div>
              <div>
                <label>Listening</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {data.listening}
                </h1>
              </div>
              {/* Movement Speed*/}
              <div>
                <label>Move Base</label>
                <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                  {data.movementSpeed}
                </h1>
              </div>
              <div>
                <label>Act. Move</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {data.actMovementSpeed}
                </h1>
              </div>
              <div>
                <label>Swim Move</label>
                <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                  {data.swimMovementSpeed}
                </h1>
              </div>
            </div>
           
           
            <div className=" w-full max-w-full min-w-full">
              <label>Languages</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {data.languages.join(", ")}
              </p>
            </div>
            <div className=" ">
              <label>Detection Skill</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {data.detectionSkill}
              </p>
            </div>
            <div className=" ">
              <label>Resistance</label>
              <p className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                {data.resistances}
              </p>
            </div>
            <div className=" ">
              <label>Immunities</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {data.immunities}
              </p>
            </div>
          </div>

          {/* Right Column and Saving Throws*/}
          <div className="flex gap-4 max-w-2/3 w-full ">
            {/* Saving Throw Adjustments */}
            <div className="w-full max-w-full flex flex-col gap-4">
              <h1 className="font-bold">Saving Throw Adjustments:</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                {data.savingThrowsBonus.map((item, index) => (
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
            {/* Saving Throws */}
            <div className=" flex flex-col align-right justify-right ml-auto gap-3 max-w-1/3 w-full">
              <h1 className="font-bold text-right">Saving Throws:</h1>
              <div className=" flex flex-row gap-2  items-center justify-right ml-auto  ">
                <label>
                  Paralyzation /<br></br> Poison
                </label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  {data.savingThrowsParalyzationPoison}
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>
                  Petrification &<br></br> Polymorph
                </label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  {data.savingThrowsPetrificationPolymorph}
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>
                  {" "}
                  Rods, Staves,<br></br> or Wands
                </label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  {data.savingThrowsRodsStavesWands}
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>Breath Weapons</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  {data.savingThrowsBreathWeapons}
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>Spells</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  {data.savingThrowsSpells}
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-1 rounded-full w-full"></hr>

        {/* 4th Row Combat  */}
        <h2 className="text-lg w-full font-bold ">Combat</h2>
        <section className=" flex flex-row gap-8 w-full">
          {/* AC AND HP */}
          <div className="w-min text-nowrap">
            <h1 className="font-bold">AC: {data.armorClass}</h1>
            <h1 className="font-bold">HP: {data.hitPoints}</h1>
          </div>
          {/* Combat Details */}
          <div className="w-full">
            <p>Armor Worn {data.combat.armorWorn}</p>
            <p>Base AC {data.combat.acBase}</p>
            <p>Dex Adj. {data.combat.dexAdj}</p>
            <p>Shieldless AC {data.combat.shieldlessAc}</p>
            <p>Rear AC {data.combat.rearAc}</p>
            <p>Const Adj. {data.combat.constAdj}</p>
            <p>Hit Die type {data.hitDice}</p>
          </div>
          {/* Combat Adjustments */}
          <div className="w-full">
            <h3>Combat Adjustments</h3>
            {data.combat.adjustments.map((adjustment, idx) => (
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
        </section>

        <hr className="border-1 rounded-full w-full"></hr>

        {/* 5th row Weapons */}
        <section className=" flex flex-row gap-8 w-full">
          {/* Left Column (Combat and Misc) */}
          <div style={{ flex: "1 1 50%" }}>
            {/* WEAPON table section */}
            <div style={{ marginBottom: "20px" }}>
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
                  {data.weapons.map((weapon, index) => (
                    <WeaponTableRow key={index} weapon={weapon} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Misc details block */}
            <div style={{ marginBottom: "20px" }}>
              <p>SCHOOL: {data.school}</p>
              <p>FAMILIAR/PET: {data.familiar}</p>
              <p>SPECIAL ABILITIES: {data.specialAbilities}</p>
            </div>
          </div>

          {/* Right Column (Spells) */}
          <div style={{ flex: "1 1 50%" }}>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "flex-end",
                gap: "1rem",
              }}
            >
              {/* Banner shape placeholder */}
              <div
                style={{
                  width: "15rem",
                  height: "4rem",
                  border: "2px solid black",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                SPELLS—KNOWN
              </div>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  margin: "0",
                }}
              >
                SPELLS MEMORIZED PER LEVEL:
              </p>
            </div>

            {/* Spells Memorized table */}
            <table className="flex flex-col gap-2  ">
              {data.spells.map((spell, index) => (
                <tr className="flex flex-row gap-2" key={index}>
                  
                    <td className="font-bold whitespace-nowrap">{spell.name}</td>
                    <td className="whitespace-nowrap">{spell.level}</td>
                    <td className="whitespace-nowrap">{spell.school}</td>
                    <td className="whitespace-nowrap">{spell.components}</td>
                    <td className="whitespace-nowrap">{spell.range}</td>
                    <td className="whitespace-nowrap">{spell.duration}</td>
                    <td className="whitespace-nowrap">{spell.damage}</td>
                    <td className="whitespace-nowrap">{spell.savingThrow}</td>

                </tr>
               
              
              ))}
            </table>
          </div>
        </section>

        {/* 6th row Thieves Stats */}
        <h2 className="text-lg w-full font-bold ">Thieves Stats (Backstab Mult: {data.rogue.backStabMult})</h2>
        <section className=" flex flex-row gap-2">
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.pickPocket}<label>Pick Pockets</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.openLocks}<label>Open Locks</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.removeTraps}<label>Remove/Find Traps</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.moveSilently}<label>Move Silently</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.hideInShadows}<label>Hide in Shadows</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.hearNoise}<label>Hear Noise</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.climbNoise}<label>Climb Noise</label></div>
         <div className="flex flex-col rounded text-center border border-black p-2">{data.rogue.readLanguages}<label>Read Languages</label></div>
        
          
        </section>
      </main>
    </div>
  );
}
