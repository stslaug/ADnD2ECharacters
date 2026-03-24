export default function Inventory({ characterData, handleUpdate }: any) {
    return (
      <section className="w-full">
        <div className="flex flex-row gap-2 w-full items-center mb-4 flex-wrap">
          <h2 className="text-lg font-bold mr-auto">Inventory</h2>
          
          <p className="font-bold">Copper</p>
          <input
            type="text"
            value={characterData.coins.cp}
            onChange={(e) => handleUpdate("coins", e.target.value, "cp")}
            className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
          />
          
          <p className="font-bold">Silver</p>
          <input
            type="text"
            value={characterData.coins.sp}
            onChange={(e) => handleUpdate("coins", e.target.value, "sp")}
            className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
          />
          
          <p className="font-bold">Electrum</p>
          <input
            type="text"
            value={characterData.coins.ep}
            onChange={(e) => handleUpdate("coins", e.target.value, "ep")}
            className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
          />
          
          <p className="font-bold">Gold</p>
          <input
            type="text"
            value={characterData.coins.gp}
            onChange={(e) => handleUpdate("coins", e.target.value, "gp")}
            className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
          />
          
          <p className="font-bold">Platinum</p>
          <input
            type="text"
            value={characterData.coins.pp}
            onChange={(e) => handleUpdate("coins", e.target.value, "pp")}
            className="w-10 text-center bg-transparent outline-none border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 transition-colors"
          />
        </div>
  
        <section className="gap-2 w-full">
          <h3 className="font-bold mb-2">Magic Items</h3>
          <div className="grid grid-cols-2 gap-2 w-full">
            {characterData.magicInventory.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-row justify-between gap-2 rounded border border-black p-2 h-min"
              >
                <span className="truncate">{item.name}</span>
                <label className="font-bold">x{item.qty}</label>
              </div>
            ))}
          </div>
  
          <br />
          <h3 className="font-bold mb-2">Base</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full">
            {characterData.inventory.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-row justify-between gap-2 rounded border border-black p-2"
              >
                <span className="truncate">{item.name}</span>
                <label className="font-bold">x{item.qty}</label>
              </div>
            ))}
          </div>
        </section>
      </section>
    );
  }