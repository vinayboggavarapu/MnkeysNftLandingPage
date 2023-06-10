import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-full h-screen bg-green-100 ">
      <Navbar />
      <main className="flex  items-center justify-center h-full ">
        <div className="flex flex-col gap-7 items-center lg:flex-row w-full p-7 max-w-7xl mx-auto justify-around">
          <div className="flex-grow gap-3 w-4/5 mx-auto lg:w-full justify-center flex flex-col">
            <h3 className="text-4xl">Discover A new Era Of Cool</h3>
            <h2 className="text-xl">Special NFTs with Unique Utility</h2>
            <div className="group border-2 w-fit border-black h-fit overflow-hidden rounded-full">
              <button className="bg-black text-white p-2 w-36 rounded-full lg:hover:scale-90 lg:group:hover:shadow-md transition-all ease-in-out">
                Know More
              </button>
            </div>
          </div>
          <Image
            src="/mnky.gif"
            className="w-72 h-72 md:w-3/6 md:h-3/6"
            width={300}
            height={300}
            alt="mnkys nfts"
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
