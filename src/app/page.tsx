"use client";
import adnd2eimage from "@/assets/images/image.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Inventory from "@/components/ui/pageSections/inventory";
import RogueAbilities from "@/components/ui/pageSections/rogueAbilities";
import SpellCasting from "@/components/ui/pageSections/spellCastingAndClericalAbilities";
import Combat from "@/components/ui/pageSections/combat";
import SavingThrowsAndSenses from "@/components/ui/pageSections/proficienciesAndSenses";
import BasicInfo from "@/components/ui/pageSections/basicInfo";
import PlayerInfo from "@/components/ui/pageSections/playerInfo";
import Experience from "@/components/ui/pageSections/experience";
import { CharacterData } from "@/types/character";
import StatsAndSavingThrows from "@/components/ui/pageSections/statsAndSavingThrows";

const defaultData: CharacterData = {
  // Metadata about the sheet
  meta: {
    playerName: "Tyler S",
    campaign: "The Misfits",
    dateCreated: "05/15/2023",
  },

  // Character Identity
  identity: {
    name: "Darkose Rimfire",
    race: "Human",
    alignment: "Chaotic Good",
    deity: "None",
    origin: "None",
    patronDeity: "None",
    classes: [
      { name: "Mage", level: 1, experience: 100 },
      { name: "Rogue", level: 1, experience: 100 },
    ],
    school: "Evocation",
    familiar: "Owl",
    specialAbilities: "Read Magic",
  },

  // Ability Scores
  stats: {
    STR: { score: 8, hitAdj: "0", dmgAdj: "0", openDoors: "0", bendBars: "0%" },
    DEX: { score: 9, reactAdj: "0", missileAdj: "0", defenseAdj: "0" },
    CON: { score: 10, hpAdj: "0", systemShock: "0%", resurrectSurvival: "0%", poisonSave: "0" },
    WIS: { score: 12, magicalAtkAdj: "0", spellBonus: "0", spellFailure: "0%" },
    INT: { score: 11, addLanguage: "0", knowSpell: "0%", minSpells: "0", maxSpells: "0" },
    CHA: { score: 13, maxHenchmen: "0", loyaltyBase: "0", reactionAdj: "0" },
  },

  // Core Vitals and Combat Stats
  vitals: {
    hp: {
      current: 10,
      max: 10,
      die: "d10",
    },
    ac: {
      base: 10,
      current: 10,
      shieldless: 8,
      rear: 10,
    },
    movement: {
      base: 120,
      actual: 60,
      swim: 60,
      speed: 60,
    },
    condition: "Good",
    wounds: 0,
  },

  // Traits and Senses
  traits: {
    visionType: "Ultra",
    listening: "Acute",
    languages: ["Common", "Elvish", "Draconic"],
    detectionSkill: "Can not currently detect",
    resistances: "Poison, Cold, Fire, Lightning, Acid, Magic, Magic",
    immunities: "Poison, Cold, Fire, Lightning, Acid, Magic",
  },

  // Saving Throws
  savingThrows: {
    base: {
      paralyzationPoison: 10,
      petrificationPolymorph: 11,
      rodsStavesWands: 12,
      breathWeapons: 13,
      spells: 13,
    },
    bonuses: [
      { type: "to Poison", value: "+4" },
      { type: "to Fire", value: "-4" },
      { type: "to Poison", value: "+4" },
      { type: "to Fire", value: "-4" },
      { type: "to Poison", value: "+4" },
      { type: "to Fire", value: "-4" },
    ],
  },

  // Combat Adjustments
  combat: {
    armorWorn: "Robes",
    dexAdj: -2,
    magicalAdj: 0,
    specialAdj: "None",
    surprise: 0,
    rearAttacksAdjust: 0,
    adjustments: [{ mod: "Slings", bonus: "+4" }],
  },

  // Magic and Spellcasting
  magic: {
    slots: {
      arcane: {
        first: 0, second: 0, third: 0, fourth: 0, fifth: 0,
        sixth: 0, seventh: 0, eighth: 0, ninth: 0,
      },
      divine: {
        first: 0, second: 0, third: 0, fourth: 0, fifth: 0,
        sixth: 0, seventh: 0,
      },
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
  },

  // Rogue Specifics
  rogue: {
    pickPocket: "50%",
    openLocks: "50%",
    removeTraps: "50%",
    moveSilently: "50%",
    hideInShadows: "50%",
    hearNoise: "50%",
    climbWalls: "50%",
    readLanguages: "-5%",
    backStabMult: "2x",
  },

  // Inventory and Economy
  inventory: {
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
    magic: [
      { name: " +1 Dagger", qty: "1", description: "A finely crafted dagger with a magical bonus to hit and damage." },
      { name: "Shortsword", qty: "1", description: "A standard shortsword, though it feels hums with faint energy." },
    ],
    standard: [
      { name: "Dagger", qty: "1", description: "A simple iron dagger." },
      { name: "Shortsword", qty: "1", description: "A common shortsword." },
      { name: "Dagger", qty: "1", description: "Another iron dagger." },
      { name: "Shortsword", qty: "1", description: "Backup shortsword." },
      { name: "Longsword", qty: "1", description: "A sturdy longsword." },
      { name: "Shortsword", qty: "1", description: "Standard issue." },
    ],
    coins: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
  },

  // Proficiencies
  proficiencies: {
    weapon: ["Short Sword", "Sling", "Dagger"],
    nonWeapon: [
      { name: "Appraising", checkModifier: "0", ram: "W +3", roll: "13" },
      { name: "Performance", checkModifier: "0",  ram: "W +3", roll: "13" },
      { name: "Stealth", checkModifier: "0",  ram: "W +5", roll: "15" },
      { name: "Survival", checkModifier: "0",  ram: "W +4", roll: "14" },
      { name: "Stealth", checkModifier: "0",  ram: "W +5", roll: "15" },
      { name: "Survival", checkModifier: "0",  ram: "W +4", roll: "14" },
      { name: "Stealth", checkModifier: "0",  ram: "W +5", roll: "15" },
      { name: "Survival", checkModifier: "0",  ram: "W +4", roll: "14" },
    ],
  },

  // Priest/Paladin Turn Undead
  turnUndead: {
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
};

export default function Home() {
  const [currFile, setCurrFile] = useState(null);
  const [characterData, setCharacterData] = useState<CharacterData>(defaultData);
  const [isMounted, setIsMounted] = useState(false);
  const [margins, setMargins] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const toggleScreenMode = () => {
    setMargins(!margins);

  };
  // 1. Initial Load from LocalStorage
  useEffect(() => {
    const savedCharacter = localStorage.getItem("characterSave");
    if (savedCharacter) {
      try {
        const parsed = JSON.parse(savedCharacter);
        if (parsed && parsed.meta && parsed.identity) {
          setCharacterData(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved character data:", e);
      }
    }
    // Set isMounted to true after the load attempt is finished
    setIsMounted(true);
  }, []);

  // 2. Auto-Save to LocalStorage on Change
  // This useEffect watches 'characterData'. Whenever it changes, it overwrites the save file.
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("characterSave", JSON.stringify(characterData));
      localStorage.setItem("margins", margins.toString());
    }
  }, [margins, characterData, isMounted]);

  const triggerFileInput = () => {
    if (fileInputRef.current === null) return;
    else fileInputRef.current.click();
  };

  /**
   * Universal path-based update function
   * @param {string} path - Dot-separated path to the field (e.g., 'identity.name', 'stats.STR.score')
   * @param {any} value - The new value to set
   */
  const handleUpdate = (path: string, value: any) => {
    setCharacterData((prev) => {
      const newState = { ...prev };
      const keys = path.split(".");
      let current: any = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        // Create a shallow copy of the next level to ensure immutability
        current[key] = Array.isArray(current[key]) 
          ? [...current[key]] 
          : { ...current[key] };
        current = current[key];
      }

      current[keys[keys.length - 1]] = value;
      return newState;
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
    link.download = `${characterData.identity.name.replace(/\s+/g, "_")}_Sheet.json`;
    document.body.appendChild(link);
    link.click();

    // 5. Clean up the DOM and release the memory
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return; // User canceled the picker

    const reader = new FileReader();

    // This runs asynchronously once the file is read
    reader.onload = (e) => {
      try {
        const text = e?.target?.result;
        const parsedData = JSON.parse(text?.toString() || "");
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
    localStorage.removeItem("margins");
    window.location.reload();
  };

  return (
    <div className=" justify-center bg-zinc-50 min-h-screen font-mono dark:bg-black">
      <main className={"flex flex-col relative w-full  ml-auto  gap-4  py-32 px-16  dark:bg-black sm:items-start" + (margins ? "" : " m-auto max-w-6xl")}> 
        <Image
          src={adnd2eimage}
          alt="advanced-D&D-image"
          width={200}
          height={500}
          className=" absolute md:left-[40%] top-33 max-md:hidden" 
        />

        {/* Top/1st Row  (Player Info) */}
        <PlayerInfo characterData={characterData} handleUpdate={handleUpdate} />

        {/* 2nd Row (Character Info Personal Info) */}
        <BasicInfo characterData={characterData} handleUpdate={handleUpdate} />


        <StatsAndSavingThrows className=" w-full" characterData={characterData} handleUpdate={handleUpdate} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 3rd Row (Saving Throws and Resistances AND Senses) */}
        <SavingThrowsAndSenses
          characterData={characterData}
          handleUpdate={handleUpdate}
        />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 4th Row Combat  */}
        <Combat characterData={characterData} handleUpdate={handleUpdate} />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 5th row Spells */}
        <SpellCasting
          characterData={characterData}
          handleUpdate={handleUpdate}
        />

        <hr className="border-1 rounded-full w-full"></hr>
        {/* 6th row Thieves Stats */}
        <RogueAbilities
          characterData={characterData}
          handleUpdate={handleUpdate}
        />
        {/* 7th row Inventory */}
        <hr className="border-1 rounded-full w-full"></hr>

        <Inventory characterData={characterData} handleUpdate={handleUpdate} />
        <Experience characterData={characterData} handleUpdate={handleUpdate} />

        {/* Load/ Save Character Info */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-end">
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

          <button
            onClick={toggleScreenMode}
            className="px-4 py-2 bg-zinc-100 border  border-black/50  shadow-sm hover:bg-zinc-200  rounded font-bold cursor-pointer"
          >
            Toggle Margins
          </button>
        </section>
      </main>
    </div>
  );
}
