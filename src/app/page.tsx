import characterImage from "@/assets/images/image.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col relative min-h-screen w-full max-w-6xl items-center  gap-4  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src={characterImage}
          alt="character-image"
          width={200}
          height={500}
          className=" absolute ml-auto mr-auto left-[40%] top-33"
        />

        {/* Top/1st Row  (Player Info) */}
        <section className="w-full flex relative">
          {/* Top Left */}
          <section className=" gap-3 flex flex-col  justify-center">
            <div>
              <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                Darkose Rimfire
              </h1>
              <label className="text-sm">Player Name</label>
            </div>

            <div>
              <h1 className="text-lg border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                05/15/2023
              </h1>
              <label className="text-sm">Began</label>
            </div>
          </section>

          {/* Top Right */}
          <section className="flex flex-col gap-3 align-right absolute right-0 top-0  justify-center">
            <div>
              <h1 className="ml-auto text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                The Misfits
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

        {/* 2nd Row (Character Info Personal Info) */}
        <section className=" flex flex-row">
          {/* Left Column and Character Details*/}
          <section className="gap-4 flex flex-col w-full max-w-3/8">
            <div>
              <h1 className=" text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl border-black border-2 p-2  w-full">
                Darkose Rimfire
              </h1>
              <label>Character Name</label>
            </div>

            {/* Character Details */}
            <div className="flex flex-row gap-4 ">
              {/* Class, Race, Alignment, Religion */}
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <label>Class</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    Mage
                  </h1>
                </div>

                <div>
                  <label>Race</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    Human
                  </h1>
                </div>

                <div>
                  <label>Alignment</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    Chaotic Good
                  </h1>
                </div>
                <div>
                  <label>Religion</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    None
                  </h1>
                </div>
              </div>

              {/* Level Origin and Patron */}
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <label>Level</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    1
                  </h1>
                </div>
                <div>
                  <label>Place of Origin</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    None
                  </h1>
                </div>
                <div>
                  <label>Patron Deity</label>
                  <h1 className="text-xl border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    None
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column and Character Stats*/}
          <section className=" ml-5 flex flex-row gap-2">
            <div className=" flex flex-col gap-8">
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
              <div className="border-2 border-black justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                0
              </div>
            </div>
            <div className=" flex flex-col gap-8">
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                S
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                D
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                C
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                W
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                I
              </div>
              <div className=" font-bold justify-center text-center align-middle max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                CH
              </div>
            </div>

            <div className=" flex flex-col w-full  gap-[10]">
              {" "}
              {/*Strength*/}
              <div className="flex flex-row w-full border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Hit Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Dmg Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Open Doors
                </label>{" "}
                <p className="max-w-10  p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Bend Bars
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Dexterity*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  React Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black h-full w-full max-w-max p-1">
                  Missile Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Defense Adj.
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Constitution*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Hit Point Adj
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  System Shock
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Resurrect Survival
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max p-1">
                  Bend Bars
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Wisdom*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Magical Atk Adj
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Spell Bonus
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max  h-full p-1">
                  % Spell Failure
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Intelligence*/}
              <div className="flex flex-row border-1 border-black">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Add Language
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  % Know Spell
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Min # Spells
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Max # Spells
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
              </div>
              {/*Charism*/}
              <div className="flex flex-row border-1 border-black w-full max-w-max">
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Max # Henchmen
                </label>{" "}
                <p className="max-w-10 p-2 ">0%</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Loyalty Base
                </label>{" "}
                <p className="max-w-10 p-2 ">0</p>
                <label className="font-bold border-1 border-black w-full max-w-max h-full p-1">
                  Reaction Adjustment
                </label>{" "}
                <p className="max-w-10 p-2">0</p>
              </div>
            </div>
          </section>
        </section>
       
        <hr className="border-1 rounded-full w-full"></hr>
       
       
       
        {/* 3rd Row (Saving Throws and Resistances) */}
        <section className=" flex flex-row gap-8 w-full">
          {/* Left Column and Details movement speed*/}
          <div className="flex flex-col gap-4 max-w-full w-full text-nowrap">
            <div className="flex flex-row gap-6 w-full max-w-full min-w-full">
              <div>
                <label>Vision Type</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Ultra
                </h1>
              </div>
              <div>
                <label>Listening</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Acute
                </h1>
              </div>
              {/* Movement Speed*/}
              <div>
                <label>Move Base</label>
                <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                  60{" "}
                </h1>
              </div>
              <div>
                <label>Act. Move</label>
                <h1 className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  30{" "}
                </h1>
              </div>
              <div>
                <label>Swim Move</label>
                <h1 className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                  30
                </h1>
              </div>
            </div>
            <div className=" w-full max-w-full min-w-full">
              <label>Languages</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                30{" "}
              </p>
            </div>
            <div className=" ">
              <label>Detection Skill</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Can not currently detect
              </p>
            </div>
            <div className=" ">
              <label>Resistance</label>
              <p className="border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
                Poison, Cold, Fire, Lightning, Acid, Magic
              </p>
            </div>
            <div className=" ">
              <label>Immunities</label>
              <p className=" border-b-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Poison, Cold, Fire, Lightning, Acid, Magic
              </p>
            </div>
          </div>

          {/* Right Column and Saving Throws*/}
          <div className="flex gap-4 max-w-2/3 w-full ">
            <div className="w-full max-w-full flex flex-col gap-4">
              <h1 className="font-bold">Saving Throw Adjustments:</h1>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2" >+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to poison</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2">+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to acid</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2">+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to tall folk</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2">+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to poison</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2">+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to poison</p>
              </div>
              <div className="flex flex-row gap-2 ">
                <p className="border-b-2">+4</p><p className="border-b-2 racking-tight text-zinc-800 dark:text-zinc-100 w-full">  to poison</p>
              </div>
            </div>
            <div className=" flex flex-col align-right justify-right ml-auto gap-3 max-w-1/3 w-full">
              <h1 className="font-bold text-right">Saving Throws:</h1>
              <div className=" flex flex-row gap-2  items-center justify-right ml-auto  ">
                <label>Paralyzation /<br></br> Poison</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  0
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>Petrification &<br></br> Polymorph</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  0
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label> Rods, Staves,<br></br> or Wands</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  0
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>Breath Weapons</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  0
                </p>
              </div>
              <div className=" flex flex-row gap-2  items-center text-center ml-auto ">
                <label>Spells</label>{" "}
                <p className="border-2 border-black justify-center text-center items-center max-w-[30px] max-h-[30px] w-[30px] h-[30px]">
                  0
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}
