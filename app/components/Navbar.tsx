import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type Scroll = {
  id: string;
};
const Navbar = () => {
  const scrollToView = ({ id }: Scroll) => {
    let scroll = document.getElementById(id);
    if (id === "Mint")
      scroll?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    else {
      scroll?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="flex bg-white p-7 border-b-2 border-black shadow-md relative">
      <div
        className="flex justify-between items-center w-[90%] mx-auto
      "
      >
        <h2 className="text-2xl font-mono font-bold">Mnkeys.</h2>
        <section className="hidden md:flex w-2/6 justify-around ">
          <h2
            onClick={() => scrollToView({ id: "Home" })}
            className="cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => scrollToView({ id: "About" })}
            className="cursor-pointer"
          >
            About
          </h2>
          <h2
            onClick={() => scrollToView({ id: "Roadmap" })}
            className="cursor-pointer"
          >
            Roadmap
          </h2>
          <h2
            onClick={() => scrollToView({ id: "Showcase" })}
            className="cursor-pointer"
          >
            Showcase
          </h2>
          <h2
            onClick={() => scrollToView({ id: "Mint" })}
            className="cursor-pointer"
          >
            Mint
          </h2>
          <h2
            onClick={() => scrollToView({ id: "Faq" })}
            className="cursor-pointer"
          >
            Faq
          </h2>
        </section>
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
};

export default Navbar;
