"use client";
import adnd2eimage from "@/assets/images/image.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Inventory from "@/components/ui/pageSections/inventory";
import RogueAbilities from "@/components/ui/pageSections/rogueAbilities";
import SpellCasting from "@/components/ui/pageSections/spellCasting";
import Combat from "@/components/ui/pageSections/combat";
import SavingThrowsAndSenses from "@/components/ui/pageSections/savingThrowsAndSenses";
import BasicInfo from "@/components/ui/pageSections/basicInfo";
import PlayerInfo from "@/components/ui/pageSections/playerInfo";

const defaultData = {
  pname: "Tyler S",
  dateCreated: "05/15/2023",
  campaign: "The Misfits",
  name: "Darkose Rimfire",
  class: "Mage",
  school: "Evocation",
  familiar: "Owl",
  specialAbilities: "Read Magic",
  stats: {
    STR: { score: 8, hitAdj: "0", dmgAdj: "0", openDoors: "0", bendBars: "0%" },
    DEX: { score: 9, reactAdj: "0", missileAdj: "0", defenseAdj: "0" },
    CON: { score: 10, hpAdj: "0", systemShock: "0%", resurrectSurvival: "0%", poisonSave: "0" },
    WIS: { score: 12, magicalAtkAdj: "0", spellBonus: "0", spellFailure: "0%" },
    INT: { score: 11, addLanguage: "0", knowSpell: "0%", minSpells: "0", maxSpells: "0" },
    CHA: { score: 13, maxHenchmen: "0", loyaltyBase: "0", reactionAdj: "0" },
  },
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
    skeleton: 80,
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
};

export default function Home() {
  const [currFile, setCurrFile] = useState(null);
  const [characterData, setCharacterData] = useState(() => {
    // Check if a save exists on this device
    const savedCharacter = localStorage.getItem("characterSave");

    if (savedCharacter) {
      // If it exists, parse it and use it
      return JSON.parse(savedCharacter);
    }
    // If it doesn't exist (first time visiting), use the default data
    return defaultData;
  });
  const fileInputRef = useRef(null);

  // 2. Auto-Save to LocalStorage
  // This useEffect watches 'characterData'. Whenever it changes, it overwrites the save file.
  useEffect(() => {
    localStorage.setItem("characterSave", JSON.stringify(characterData));
  }, [characterData]);

  const triggerFileInput = () => {
    if(fileInputRef.current === null) return;
    fileInputRef.current.click();
  };

  const handleUpdate = (field, value, nestedCategory = null, subField = null) => {
    setCharacterData((prev) => {
      // 3 levels deep (e.g., stats -> STR -> score)
      if (nestedCategory && subField) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [nestedCategory]: {
              ...prev[field][nestedCategory],
              [subField]: value
            }
          }
        };
      }
      
      // 2 levels deep (e.g., combat -> armorWorn)
      if (nestedCategory && !subField) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [nestedCategory]: value
          }
        };
      }
      
      // 1 level deep (e.g., armorClass, name)
      return {
        ...prev,
        [field]: value
      };
    });
  };

  // --- UNIVERSAL SAVE CHARACTER ---
  const handleSaveFile = () => {
    // 1. Convert state to a formatted JSON string
    const jsonString = JSON.stringify(characterData, null, 2);

    // 2. Create a "Blob" (a file-like object of immutable, raw data)
    const blob = new Blob([jsonString], { type: "application/json" });

    // 3. Create a temporary URL pointing to that Blob
    const url = URL.createObjectURL(blob);
    // 4. Create an invisible anchor <a> tag, click it to trigger the download, and remove it
    const link = document.createElement("a");
    link.href = url;
    // Suggest a filename based on the character's name
    link.download = `${characterData.name.replace(/\s+/g, "_")}_Sheet.json`;
    document.body.appendChild(link);
    link.click();

    // 5. Clean up the DOM and release the memory
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; // User canceled the picker

    const reader = new FileReader();

    // This runs asynchronously once the file is read
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const parsedData = JSON.parse(text);
        setCharacterData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        alert(
          "Failed to load character. Please ensure it is a valid JSON file."
        );
      }
    };

    // Start reading the file as text
    reader.readAsText(file);

    // Clear the input value so the user can upload the exact same file again later if needed
    event.target.value = null;
  };
  const eraseLocalStorage = () => {
    localStorage.removeItem("characterSave");
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
      <main className="flex flex-col relative min-h-screen w-full max-w-6xl items-center  gap-4  py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Image
          src={adnd2eimage}
          alt="advanced-D&D-image"
          width={200}
          height={500}
          className=" absolute lg:left-[40%] top-33 "  
        />
        
        
        
        {/* Top/1st Row  (Player Info) */}
        <PlayerInfo characterData={characterData} handleUpdate={handleUpdate} />

        {/* 2nd Row (Character Info Personal Info) */}
        <BasicInfo characterData={characterData} handleUpdate={handleUpdate} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 3rd Row (Saving Throws and Resistances AND Senses) */}
        <SavingThrowsAndSenses characterData={characterData} handleUpdate={handleUpdate} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 4th Row Combat  */}
        <Combat characterData={characterData} handleUpdate={handleUpdate} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 5th row Spells */}
        <SpellCasting characterData={characterData} handleUpdate={handleUpdate}/>

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 6th row Thieves Stats */}
        <RogueAbilities characterData={characterData} handleUpdate={handleUpdate} />
        {/* 7th row Inventory */}
        <hr className="border-1 rounded-full w-full"></hr>

        <Inventory characterData={characterData} handleUpdate={handleUpdate} />


        {/* Load/ Save Character Info */}
        <section className="flex flex-row gap-4 w-full justify-end">
         
          {/* The hidden file input */}
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} // Keeps it invisible!
          />

          {/* Your styled Load button that triggers the hidden input */}
          <button
            onClick={triggerFileInput}
            className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-white rounded font-bold cursor-pointer"
          >
            Load Character (.json)
          </button>

          {/* The Save button */}
          <button
            onClick={handleSaveFile}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold cursor-pointer"
          >
            Save to Device
          </button>

          <button
            onClick={eraseLocalStorage}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold cursor-pointer"
          >
            Reset
          </button>
        
        
        </section>
      </main>
    </div>
  );
}
