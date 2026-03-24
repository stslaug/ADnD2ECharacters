export default function PlayerInfo({ characterData, handleUpdate }: any) {
  return (
    <section className="w-full flex relative">
      {/* Top Left */}
      <section className=" w-full gap-3 flex flex-row  justify-between">
        <div>
          <input
            type="text"
            value={characterData.pname}
            onChange={(e) => handleUpdate("pname", e.target.value)}
            className="w-full text-lg border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 bg-transparent outline-none transition-colors"
          />
          <label className="text-sm">Player Name</label>
        </div>

        <div>
          <input  onChange={(e) => handleUpdate("dateCreated", e.target.value)} type="text" value={characterData.dateCreated} onChange={(e) => handleUpdate("dateCreated", e.target.value)} className="w-full text-lg border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 bg-transparent outline-none transition-colors" />
            
          <label className="text-sm">Began</label>
        </div>
      </section>
    </section>
  );
}
