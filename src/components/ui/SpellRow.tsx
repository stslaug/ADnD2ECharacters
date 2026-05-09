import { useState } from "react";
import Image from "next/image";
import { Spell } from "@/types/character";
import duplicateIcon from "@/assets/icons/duplicate.svg";
export default function SpellRow({ 
  spell, 
  path, 
  handleUpdate, 
  onRemove,
  onDuplicate
}: { 
  spell: Spell; 
  path: string;
  handleUpdate: (path: string, value: any) => void;
  onRemove: () => void;
  onDuplicate: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="group flex flex-col border-b border-black/10 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative">
      <div className="flex flex-row gap-2 items-center p-1 overflow-hidden">
        <div className="flex flex-row items-center gap-1 w-12 shrink-0">
          <label className="text-[9px] uppercase font-bold text-zinc-400">Lvl</label>
          <input
            type="text"
            value={spell.level}
            onChange={(e) => handleUpdate(`${path}.level`, parseInt(e.target.value) || 0)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center text-xs"
          />
        </div>
        
        <input
          type="text"
          value={spell.name}
          onChange={(e) => handleUpdate(`${path}.name`, e.target.value)}
          className="flex-1 min-w-[100px] bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold truncate text-sm"
          placeholder="Spell Name"
        />

        {/* Dynamic Quick Stats - Only visible when NOT expanded */}
        {!isExpanded && (
          <div className="hidden lg:flex flex-row gap-3 text-[10px] items-center  bg-zinc-600text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <span className="font-bold uppercase text-zinc-400">Dmg:</span>
              <input
                type="text"
                value={spell.damage}
                onChange={(e) => handleUpdate(`${path}.damage`, e.target.value)}
                className="w-16 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold uppercase text-zinc-400">Rng:</span>
              <input
                type="text"
                value={spell.range}
                onChange={(e) => handleUpdate(`${path}.range`, e.target.value)}
                className="w-14 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold uppercase text-zinc-400">Dur:</span>
              <input
                type="text"
                value={spell.duration}
                onChange={(e) => handleUpdate(`${path}.duration`, e.target.value)}
                className="w-16 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold uppercase text-zinc-400">Save:</span>
              <input
                type="text"
                value={spell.savingThrow}
                onChange={(e) => handleUpdate(`${path}.savingThrow`, e.target.value)}
                className="w-16 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
              />
            </div>
          </div>
        )}
        
        <div className="flex flex-row items-center gap-1 shrink-0 ml-auto mr-1">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 px-2 py-1 cursor-pointer rounded-sm transition-colors whitespace-nowrap"
          >
            {isExpanded ? "Hide" : "Details"}
          </button>
          
          <button
            onClick={onDuplicate}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-5 h-5 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            title="Duplicate Spell"
          >
            <Image src="/duplicate.svg" alt="Duplicate" width={12} height={12} className="dark:invert" />
          </button>

          <button
            onClick={onRemove}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-sm"
            title="Remove Spell"
          >
            <span className="leading-none mt-[-2px]">-</span>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-3 p-3  dark:bg-zinc-900/30 rounded-b">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">School</label>
              <input
                type="text"
                value={spell.school}
                onChange={(e) => handleUpdate(`${path}.school`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">Comp.</label>
              <input
                type="text"
                value={spell.components}
                onChange={(e) => handleUpdate(`${path}.components`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">Range</label>
              <input
                type="text"
                value={spell.range}
                onChange={(e) => handleUpdate(`${path}.range`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">Duration</label>
              <input
                type="text"
                value={spell.duration}
                onChange={(e) => handleUpdate(`${path}.duration`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">Damage</label>
              <input
                type="text"
                value={spell.damage}
                onChange={(e) => handleUpdate(`${path}.damage`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-bold text-zinc-500">Save</label>
              <input
                type="text"
                value={spell.savingThrow}
                onChange={(e) => handleUpdate(`${path}.savingThrow`, e.target.value)}
                className="bg-transparent outline-none border-b border-zinc-200 hover:border-zinc-400 focus:border-zinc-800 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] uppercase font-bold text-zinc-500">Description</label>
            <textarea
              value={spell.description || ""}
              onChange={(e) => handleUpdate(`${path}.description`, e.target.value)}
              className="w-full mt-1 p-2 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded outline-none resize-y min-h-[80px]"
              placeholder="Spell description..."
            />
          </div>
        </div>
      )}
    </div>
  );
}