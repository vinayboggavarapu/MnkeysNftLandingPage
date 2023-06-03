import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="flex relative p-8 flex-col min-h-screen h-screen justify-center "
    >
      <div className="bg-blue-100 rounded-full w-28 h-28 absolute z-[-1] top-6 right-3 md:right-24 md:top-20"></div>
      <div className="bg-blue-100 rounded-full w-80 h-80 absolute z-[-1]  left-3  bottom-36 md:bottom-0 md:top-64 md:left-32"></div>
      <div className="max-w-7xl relative border p-4 px-9 border-black rounded-md bg-white shadow-lg w-full mx-auto gap-4 flex flex-col ">
        <h3 className="text-3xl md:text-4xl">Welcome To The Mnkeys Club.</h3>
        <h3 className="text-9xl font-mono absolute hidden lg:flex md:right-16 z-20">
          GM
        </h3>
        <p className="flex text-xl md:text-2xl text-gray-600 md:w-3/4">
          The Mnkeys CLUB is a token gated community also a collection of NFTs
          digital collectibles. The Mnkeys are stored as ERC-1155 tokens on the
          Ethereum blockchain and hosted on IPFS. Join an ambitious ever-growing
          development focused community with multiple benefits and utilities.
        </p>
        <button className="self-start">Join Our Community</button>
      </div>
    </div>
  );
};

export default About;
