import { CharacterData, CharacterClass } from "@/types/character";

export default function Experience({ characterData, handleUpdate }: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const handleAddClass = () => {
    const newClass: CharacterClass = {
      name: "New Class",
      level: 1,
      experience: 0
    };
    handleUpdate("identity.classes", [...characterData.identity.classes, newClass]);
  };

  const handleRemoveClass = (index: number) => {
    const updated = characterData.identity.classes.filter((_, i) => i !== index);
    handleUpdate("identity.classes", updated);
  };

  return (
    <section className="w-full" id="experience-section">
      <div className="flex flex-row items-center gap-2 mb-4">
        <h2 className="text-lg font-bold ">Experience & Classes</h2>
        <button
          onClick={handleAddClass}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-black border border-black/50 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:border-white/50 cursor-pointer transition-colors font-bold text-xl shadow-sm"
          title="Add Class"
        >
          <span className="leading-none">+</span>
        </button>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {characterData.identity.classes ? (
          characterData.identity.classes.map((item, index: number) => (
            <div key={index} className="group flex flex-row items-center gap-3 relative pr-10">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 border border-black p-3 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-zinc-500">Class Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleUpdate(`identity.classes.${index}.name`, e.target.value)}
                    className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-zinc-500">Level</label>
                  <input
                    type="text"
                    value={item.level}
                    onChange={(e) => handleUpdate(`identity.classes.${index}.level`, parseInt(e.target.value) || 0)}
                    className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-zinc-500">Experience</label>
                  <input
                    type="text"
                    value={item.experience}
                    onChange={(e) => handleUpdate(`identity.classes.${index}.experience`, parseInt(e.target.value) || 0)}
                    className="bg-transparent outline-none border-b border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold"
                  />
                </div>
                <button
                onClick={() => handleRemoveClass(index)}
                className="absolute right-1 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 font-bold text-xl"
                title="Remove Class"
              >
                <span className="leading-none mt-[-2px]">-</span>
              </button>
              </div>
              
            </div>
          ))
        ) : (
          <p className="text-zinc-500 italic">No classes defined.</p>
        )}
      </div>
    </section>
  );
}
