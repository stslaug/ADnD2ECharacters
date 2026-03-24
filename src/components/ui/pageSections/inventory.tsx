
export default function Inventory({characterData }: any) {
return (
<section className="w-full">
          <div className={"flex flex-row gap-2 w-full"}>
            <h2 className="text-lg w-full font-bold ">Inventory</h2>
            <p className="font-bold">Copper</p>{" "}
            <label>{characterData.coins.cp}</label>
            <p className="font-bold">Silver</p>{" "}
            <label>{characterData.coins.sp}</label>
            <p className="font-bold">Electrum</p>{" "}
            <label>{characterData.coins.ep}</label>
            <p className="font-bold">Gold</p>{" "}
            <label>{characterData.coins.gp}</label>
            <p className="font-bold">Platinum</p>{" "}
            <label>{characterData.coins.pp}</label>
          </div>

          <section className=" gap-2 w-full">
            <h3 className="font-bold">Magic Items</h3>
            <div className="grid grid-cols-2 gap-2  w-full">
              {characterData.magicInventory.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 rounded text-center border border-black p-2 h-min"
                >
                  {item.name}
                  <label>{item.qty}</label>
                </div>
              ))}
            </div>

            <br></br>
            <h3 className="font-bold">Base</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  w-full">
              {characterData.inventory.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 rounded text-center border border-black p-2"
                >
                  {item.name}
                  <label>{item.qty}</label>
                </div>
              ))}
            </div>
          </section>
        </section>
        );
    }