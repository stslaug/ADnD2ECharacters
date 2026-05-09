export interface CharacterClass {
  name: string;
  level: number;
  experience: number;
}

export interface AbilityScore {
  score: number;
  hitAdj?: string;
  dmgAdj?: string;
  openDoors?: string;
  bendBars?: string;
  reactAdj?: string;
  missileAdj?: string;
  defenseAdj?: string;
  hpAdj?: string;
  systemShock?: string;
  resurrectSurvival?: string;
  poisonSave?: string;
  magicalAtkAdj?: string;
  spellBonus?: string;
  spellFailure?: string;
  addLanguage?: string;
  knowSpell?: string;
  minSpells?: string;
  maxSpells?: string;
  maxHenchmen?: string;
  loyaltyBase?: string;
  reactionAdj?: string;
}

export interface SavingThrowBonus {
  type: string;
  value: string;
}

export interface CombatAdjustment {
  mod: string;
  bonus: string;
}

export interface Spell {
  name: string;
  level: number;
  school: string;
  components: string;
  range: string;
  duration: string;
  damage: string;
  savingThrow: string;
  description: string;
}

export interface Weapon {
  name: string;
  magAdj: string;
  range: string;
  speed: string;
  damageSm: string;
  damageMl: string;
}

export interface InventoryItem {
  name: string;
  qty: string;
  description?: string;
}

export interface NonWeaponProficiency {
  name: string;
  ram: string;
  checkModifier: string;
  roll: string;
}

export interface CharacterData {
  meta: {
    playerName: string;
    campaign: string;
    dateCreated: string;
  };
  identity: {
    name: string;
    race: string;
    alignment: string;
    deity: string;
    origin: string;
    patronDeity: string;
    classes: CharacterClass[];
    school: string;
    familiar: string;
    specialAbilities: string;
  };
  stats: {
    STR: AbilityScore;
    DEX: AbilityScore;
    CON: AbilityScore;
    WIS: AbilityScore;
    INT: AbilityScore;
    CHA: AbilityScore;
  };
  vitals: {
    hp: {
      current: number;
      max: number;
      die: string;
    };
    ac: {
      base: number;
      current: number;
      shieldless: number;
      rear: number;
    };
    movement: {
      base: number;
      actual: number;
      swim: number;
      speed: number;
    };
    condition: string;
    wounds: number;
  };
  traits: {
    visionType: string;
    listening: string;
    languages: string[];
    detectionSkill: string;
    resistances: string;
    immunities: string;
  };
  savingThrows: {
    base: {
      paralyzationPoison: number;
      petrificationPolymorph: number;
      rodsStavesWands: number;
      breathWeapons: number;
      spells: number;
    };
    bonuses: SavingThrowBonus[];
  };
  combat: {
    armorWorn: string;
    dexAdj: number;
    magicalAdj: number;
    specialAdj: string;
    surprise: number;
    rearAttacksAdjust: number;
    adjustments: CombatAdjustment[];
  };
  magic: {
    slots: {
      arcane: {
        first: number;
        second: number;
        third: number;
        fourth: number;
        fifth: number;
        sixth: number;
        seventh: number;
        eighth: number;
        ninth: number;
      };
      divine: {
        first: number;
        second: number;
        third: number;
        fourth: number;
        fifth: number;
        sixth: number;
        seventh: number;
      };
    };
    spells: Spell[];
  };
  rogue: {
    pickPocket: string;
    openLocks: string;
    removeTraps: string;
    moveSilently: string;
    hideInShadows: string;
    hearNoise: string;
    climbWalls: string;
    readLanguages: string;
    backStabMult: string;
  };
  inventory: {
    weapons: Weapon[];
    magic: InventoryItem[];
    standard: InventoryItem[];
    coins: {
      cp: number;
      sp: number;
      ep: number;
      gp: number;
      pp: number;
    };
  };
  proficiencies: {
    weapon: string[];
    nonWeapon: NonWeaponProficiency[];
  };
  turnUndead: {
    [key: string]: number | string;
  };
}
