import { useState } from "react";
import { CharacterData, InventoryItem } from "@/types/character";

function InventoryItemRow({ 
  item, 
  path, 
  handleUpdate,
  onRemove
}: { 
  item: InventoryItem; 
  path: string;
  handleUpdate: (path: string, value: any) => void;
  onRemove: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-2 rounded border border-black p-2 h-min transition-all">
      <div className="flex flex-row gap-2 items-center w-full overflow-hidden">
        <input
          type="text"
          value={item.name}
          onChange={(e) => handleUpdate(`${path}.name`, e.target.value)}
          className="flex-1 min-w-0 bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-medium text-xs truncate"
          placeholder="Item Name"
        />
        <div className="flex flex-row items-center gap-1 flex-shrink-0">
          <label className="text-xs font-bold text-zinc-500 uppercase">Qty:</label>
          <input
            type="text"
            value={item.qty}
            onChange={(e) => handleUpdate(`${path}.qty`, e.target.value)}
            className="w-8 text-center text-xs bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
          />
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 text-[10px] sm:text-xs bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 px-2 py-1 cursor-pointer rounded-sm transition-colors whitespace-nowrap"
        >
          {isExpanded ? "Collapse" : "Details"}
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-2 mt-2">
          <textarea
            value={item.description || ""}
            onChange={(e) => handleUpdate(`${path}.description`, e.target.value)}
            className="w-full p-2 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded outline-none resize-y min-h-[60px]"
            placeholder="Add description..."
          />
          <div className="flex justify-end">
            <button
              onClick={onRemove}
              className="text-xs text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors font-bold"
            >
              Remove Item
            </button>
          </div>
        </div>
      )}
      
      {!isExpanded && item.description && (
        <p className="text-xs text-zinc-500 truncate mt-1 italic">
          {item.description}
        </p>
      )}
    </div>
  );
}

export default function Inventory({ characterData, handleUpdate }: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const handleAddItem = (type: "magic" | "standard") => {
    const currentItems = type === "magic" 
      ? characterData.inventory.magic 
      : characterData.inventory.standard;
    
    const newItem: InventoryItem = {
      name: "New Item",
      qty: "1",
      description: ""
    };

    handleUpdate(`inventory.${type}`, [...currentItems, newItem]);
  };

  const handleRemoveItem = (type: "magic" | "standard", index: number) => {
    const currentItems = type === "magic" 
      ? characterData.inventory.magic 
      : characterData.inventory.standard;
    
    const updatedItems = currentItems.filter((_, i) => i !== index);
    handleUpdate(`inventory.${type}`, updatedItems);
  };

  return (
    <section className="w-full">
      {/* Page Section and Money*/}
      <div className="flex flex-row gap-2 w-full items-center mb-4 flex-wrap">
        <h2 className="text-lg font-bold mr-auto">Inventory</h2>
        
        <p className="font-bold">Copper</p>
        <input
          type="text"
          value={characterData.inventory.coins.cp}
          onChange={(e) => handleUpdate("inventory.coins.cp", e.target.value)}
          className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
        />
        
        <p className="font-bold">Silver</p>
        <input
          type="text"
          value={characterData.inventory.coins.sp}
          onChange={(e) => handleUpdate("inventory.coins.sp", e.target.value)}
          className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
        />
        
        <p className="font-bold">Electrum</p>
        <input
          type="text"
          value={characterData.inventory.coins.ep}
          onChange={(e) => handleUpdate("inventory.coins.ep", e.target.value)}
          className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
        />
        
        <p className="font-bold">Gold</p>
        <input
          type="text"
          value={characterData.inventory.coins.gp}
          onChange={(e) => handleUpdate("inventory.coins.gp", e.target.value)}
          className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
        />
        
        <p className="font-bold">Platinum</p>
        <input
          type="text"
          value={characterData.inventory.coins.pp}
          onChange={(e) => handleUpdate("inventory.coins.pp", e.target.value)}
          className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
        />
      </div>

      <section className="gap-2 w-full">
        <div className="flex flex-row items-center gap-2 mb-2">
          <h3 className="font-bold">Magic Items</h3>
          <button
            onClick={() => handleAddItem("magic")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-colors font-bold text-xl shadow-sm"
            title="Add Magic Item"
          >
            <span className="leading-none">+</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {characterData.inventory.magic.map((item, index: number) => (
            <InventoryItemRow 
              key={index} 
              item={item} 
              path={`inventory.magic.${index}`} 
              handleUpdate={handleUpdate} 
              onRemove={() => handleRemoveItem("magic", index)}
            />
          ))}
        </div>

        <br />
        <div className="flex flex-row items-center gap-2 mb-2">
          <h3 className="font-bold">Base</h3>
          <button
            onClick={() => handleAddItem("standard")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-colors font-bold text-xl shadow-sm"
            title="Add Base Item"
          >
            <span className="leading-none">+</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {characterData.inventory.standard.map((item, index: number) => (
            <InventoryItemRow 
              key={index} 
              item={item} 
              path={`inventory.standard.${index}`} 
              handleUpdate={handleUpdate} 
              onRemove={() => handleRemoveItem("standard", index)}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
