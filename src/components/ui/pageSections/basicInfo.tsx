import { CharacterData, SavingThrowBonus } from "@/types/character";

export default function BasicInfo({
  characterData,
  handleUpdate,
}: {
  characterData: CharacterData;
  handleUpdate: (path: string, value: any) => void;
}) {
  const scrollToExperience = () => {
    const element = document.getElementById("experience-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col w-full gap-4">
      {/* Top Row and Character Details Character Meta */}
      <section className="gap-4 flex flex-col w-full">
        <div>
          <input
            type="text"
            value={characterData.identity.name}
            onChange={(e) => handleUpdate("identity.name", e.target.value)}
            className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2 w-full bg-transparent outline-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          />
          <label>Character Name</label>
        </div>

        {/* Character Details */}
        <div className="flex-row flex gap-4 w-full">
          {/* Class */}
          <div>
            <label>Class</label>
            <div className="flex flex-row gap-2 overflow-hidden">
              {characterData.identity.classes &&
              characterData.identity.classes.length > 0 ? (
                characterData.identity.classes.map((item, index: number) => (
                  <button
                    key={index}
                    onClick={scrollToExperience}
                    className="text-sm border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none transition-colors truncate"
                    title="Click to edit in Experience section"
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <button
                  onClick={scrollToExperience}
                  className="text-sm border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-500 sm:text-xl bg-transparent outline-none transition-colors"
                >
                  None
                </button>
              )}
            </div>
          </div>

          {/* Race */}
          <div>
            <label>Race</label>
            <input
              type="text"
              value={characterData.identity.race}
              onChange={(e) => handleUpdate("identity.race", e.target.value)}
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Alignment */}
          <div className="flex-grow w-max max-w-full min-w-min">
            <label>Alignment</label>
            <input
              type="text"
              value={characterData.identity.alignment}
              onChange={(e) =>
                handleUpdate("identity.alignment", e.target.value)
              }
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-nowrap sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Religion */}
          <div>
            <label>Religion</label>
            <input
              type="text"
              value={characterData.identity.deity}
              onChange={(e) => handleUpdate("identity.deity", e.target.value)}
              className="text-md border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none w-full transition-colors"
            />
          </div>

          {/* Level */}
          <div className="w-min max-w-min min-w-min">
            <label>Level</label>
            <div className="flex flex-row gap-2">
              {characterData.identity.classes &&
              characterData.identity.classes.length > 0 ? (
                characterData.identity.classes?.map((item, index: number) => (
                  <button
                    key={index}
                    onClick={scrollToExperience}
                    className="text-sm border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl bg-transparent outline-none transition-colors"
                    title="Click to edit in Experience section"
                  >
                    {item.level}
                  </button>
                ))
              ) : (
                <button
                  onClick={scrollToExperience}
                  className="text-md border-b-2 border-transparent hover:border-zinc-300 font-bold tracking-tight text-zinc-500 sm:text-xl bg-transparent outline-none transition-colors"
                >
                  0
                </button>
              )}
            </div>
          </div>

          <div className="">
            <label>Place of Origin</label>
            <input
              type="text"
              value={characterData.identity.origin}
              onChange={(e) => handleUpdate("identity.origin", e.target.value)}
              className="text-sm border-b-2 border-transparent hover:border-zinc-300 focus:border-zinc-800 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl bg-transparent outline-none w-full transition-colors"
            />
          </div>
        </div>
      </section>

    </section>
  );
}
