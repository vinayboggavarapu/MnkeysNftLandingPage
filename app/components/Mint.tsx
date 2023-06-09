import React, { useContext, useState } from "react";
import Timers from "../Timers";
import GlobalState from "@/context/globalStates";
import Image from "next/image";

enum NFT {
  vampire = "vampire",
  aquaKing = "aquaking",
  jungleKing = "jungleking",
  countryKong = "countrykong",
  stoneCyclop = "stoneCyclop",
  heKong = "heKong",
}

let mnkeyNFT = [
  "vampire",
  "aquaking",
  "jungleKing",
  "countryKong",
  "stoneCyclop",
  "heKong",
];

const Mint = () => {
  // const [timer] = useContext(GlobalState);
  // console.log(timer);
  const [selected, setSelected] = useState("");
  return (
    <section className="min-h-screen max-w-7xl w-full mx-auto flex flex-col gap-6 mt-8 overflow-hidden">
      <h2 className="text-3xl mt-10 text-center">Countdown</h2>
      <Timers />
      <div
        id="Mint"
        className="flex flex-col md:flex-row w-4/5 mx-auto md:mx-0 lg:self-end md:self-center mt-28"
      >
        <form className="flex gap-6 flex-col w-full justify-around">
          <h3 className="text-3xl">
            Get Yourself a Mnkey before the timer runs out
          </h3>
          <h3 className="text-[0.9rem] text-gray-600 font-semibold">
            Note : only one per wallet
          </h3>
          <label>Choose Your NFT</label>
          <select
            className="w-1/2"
            onChange={(val) => {
              if (val.target.value !== "none") {
                setSelected("/" + val.target.value + ".png");
              } else {
                setSelected("none");
              }
            }}
          >
            <option value="none">Not selected</option>
            {mnkeyNFT.map((e) => {
              return (
                <option value={e} key={e} className="focus:bg-green-200">
                  {e}
                </option>
              );
            })}
          </select>
          <button className="bg-black text-white p-3 rounded-md w-2/6">
            Free Mint
          </button>
        </form>
        <div className="flex items-center w-full">
          <div
            className={`${
              selected ? "bg-yellow-300" : ""
            }  rounded-full w-3/4 mx-auto lg:mx-0 lg:w-2/4`}
          >
            {selected == "none" || selected == "" ? (
              <div className="w-full lg:w-2/2 h-60 hidden">Not selected</div>
            ) : (
              <Image
                src={selected}
                className="w-full lg:w-2/2 h-full"
                width={300}
                height={300}
                alt="Mnkey Nft Minting"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
