export default function PlayerInfo({characterData }: any) {
    return (
        <section className="w-full flex relative">
            {/* Top Left */}
            <section className=" gap-3 flex flex-col  justify-center">
              <div>
                <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                  {characterData.pname}
                </h1>
                <label className="text-sm">Player Name</label>
              </div>

              <div>
                <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {characterData.dateCreated}
                </h1>
                <label className="text-sm">Began</label>
              </div>
            </section>

            {/* Top Right */}
            <section className="flex flex-col gap-3 align-right absolute right-0 top-0  justify-center">
              <div>
                <h1 className="ml-auto text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  {characterData.campaign}
                </h1>
                <label className="text-sm float-right">Campaign</label>
              </div>
              <div className=" flex flex-row gap-2 items-center">
                <label className=" ml-auto">#</label>
                <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                  1
                </h1>
              </div>
            </section>
          </section>
    );}