import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid grid-rows-3 w-full min-h-screen h-screen">
      <section className="flex bg-[#353535] bg-no-repeat items-center justify-center flex-col w-full mx-auto">
        <div className=" p-8 flex flex-col gap-4 md:gap-0 md:flex-row max-w-7xl mx-auto w-full justify-around items-center text-white">
          <h2 className="text-4xl md:text-5xl w-64 md:w-[78%] text-center md:text-start ">
            Join the Mnkys. Club
          </h2>
          <button className="text-lg border bg-white text-black p-2 md:p-4 rounded-full w-40 border-black">
            Join Now
          </button>
        </div>
      </section>
      <div className="p-8 row-span-2 mt-3 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between mt-3 mb-3">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <h3 className="text-4xl mb-2">Mnkeys.</h3>
            <div className="flex text-3xl gap-1">
              <AiOutlineTwitter />
              <AiFillInstagram />
              <AiFillLinkedin />
              <BsDiscord />
            </div>
          </div>
          <div className=" hidden md:grid grid-cols-2 w-2/4 gap-4">
            <p>Home</p>
            <p>About</p>
            <p>Roadmap</p>
            <p>Showcase</p>
            <p>Team</p>
            <p>Faq</p>
          </div>
        </div>

        <hr className="border border-black" />
        <p className="mt-3 text-center md:text-start">
          © 2023 All rights reserved by Mnkeys Club.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
