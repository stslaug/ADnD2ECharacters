import { Weapon } from "@/types/character";

// Component for a single weapon row in the table
export function WeaponTableRow({ 
  weapon, 
  path, 
  handleUpdate, 
  onRemove 
}: { 
  weapon: Weapon; 
  path: string;
  handleUpdate: (path: string, value: any) => void;
  onRemove: () => void;
}) {
    return (
      <tr className="group border-b border-black/10 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative">
        <td className="p-1">
          <input
            type="text"
            value={weapon.name}
            onChange={(e) => handleUpdate(`${path}.name`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
          />
        </td>
        <td className="p-1">
          <input
            type="text"
            value={weapon.magAdj}
            onChange={(e) => handleUpdate(`${path}.magAdj`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
          />
        </td>
        <td className="p-1">
          <input
            type="text"
            value={weapon.range}
            onChange={(e) => handleUpdate(`${path}.range`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
          />
        </td>
        <td className="p-1">
          <input
            type="text"
            value={weapon.speed}
            onChange={(e) => handleUpdate(`${path}.speed`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
          />
        </td>
        <td className="p-1">
          <input
            type="text"
            value={weapon.damageSm}
            onChange={(e) => handleUpdate(`${path}.damageSm`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
          />
        </td>
        <td className="p-1 relative pr-8">
          <input
            type="text"
            value={weapon.damageMl}
            onChange={(e) => handleUpdate(`${path}.damageMl`, e.target.value)}
            className="w-full bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 text-center"
          />
          <button
            onClick={onRemove}
            className="absolute right-1 top-1/2 translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-sm"
            title="Remove Weapon"
          >
            <span className="leading-none mt-[-2px]">-</span>
          </button>
        </td>
      </tr>
    );
  };