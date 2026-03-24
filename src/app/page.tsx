"use client";
import adnd2eimage from "@/assets/images/image.png";
import Image from "next/image";
import { WeaponTableRow } from "@/components/ui/Weapon";
import { useState } from "react";
import Inventory from "@/components/ui/pageSections/inventory";
import RogueAbilities from "@/components/ui/pageSections/rogueAbilities";
import SpellCasting from "@/components/ui/pageSections/spellCasting";
import Combat from "@/components/ui/pageSections/combat";
import SavingThrowsAndSenses from "@/components/ui/pageSections/savingThrowsAndSenses";
import BasicInfo from "@/components/ui/pageSections/basicInfo";
import PlayerInfo from "@/components/ui/pageSections/playerInfo";

export default function Home() {
  const [characterData, setCharacterData] = useState({
    pname: "Tyler S",
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
      adjustments: [{ mod: "Slings", bonus: "+4" }],
    },
    arcaneSpellSlots: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
      eighth: 0,
      ninth: 0,
    },
    divineSpellSlots: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
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
        description: "You create a magical missile that explodes on impact...",
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
    },
    magicInventory: [
      { name: " +1 Dagger", qty: "1" },
      { name: "Shortsword", qty: "1" },
    ],
    inventory: [
      { name: "Dagger", qty: "1" },
      { name: "Shortsword", qty: "1" },
      { name: "Dagger", qty: "1" },
      { name: "Shortsword", qty: "1" },
      { name: "Longsword", qty: "1" },
      { name: "Shortsword", qty: "1" },
    ],
    coins: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
    turnRate: {
      skeleton: 7,
      zombie: 10,
      ghoul: 13,
      shadow: 15,
      wight: 16,
      ghast: 17,
      wraith: 19,
      mummy: 20,
      spectre: "N/A",
      vampire: "N/A",
      ghost: "N/A",
      lich: "N/A",
      special: "N/A",
    },
    weaponProficiencies: ["Short Sword", "Sling", "Dagger"],
    nonWeaponProficiencies: [
      { name: "Appraising", ram: "+3", roll: "13" },
      { name: "Performance", ram: "W +3", roll: "13" },
      { name: "Stealth", ram: "W +5", roll: "15" },
      { name: "Survival", ram: "W +4", roll: "14" },
      { name: "Stealth", ram: "W +5", roll: "15" },
      { name: "Survival", ram: "W +4", roll: "14" },
      { name: "Stealth", ram: "W +5", roll: "15" },
      { name: "Survival", ram: "W +4", roll: "14" },
    ],
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col relative min-h-screen w-full max-w-6xl items-center  gap-4  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src={adnd2eimage}
          alt="advanced-D&D-image"
          width={200}
          height={500}
          className=" absolute ml-auto mr-auto left-[40%] top-33"
        />

        {/* Top/1st Row  (Player Info) */}
        <PlayerInfo characterData={characterData} />
      

        {/* 2nd Row (Character Info Personal Info) */}
        <BasicInfo characterData={characterData} />
        

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 3rd Row (Saving Throws and Resistances AND Senses) */}
        <SavingThrowsAndSenses characterData={characterData} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 4th Row Combat  */}
        <Combat characterData={characterData} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 5th row Spells */}
        <SpellCasting characterData={characterData} />
        

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 6th row Thieves Stats */}
        <RogueAbilities characterData={characterData} />
        {/* 7th row Inventory */}
        <hr className="border-1 rounded-full w-full"></hr>

        <Inventory  characterData={characterData} />
      </main>
    </div>
  );
}
