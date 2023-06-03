"use client";
import React from "react";
import { HiArrowSmUp } from "react-icons/hi";
import styled from "styled-components";

const ScrollTop = () => {
  const scrollup = () => {
    let home = document.getElementById("home");
    home?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const ArrowContainer = styled.div`
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    z-index: 50;
  `;
  return (
    <ArrowContainer>
      <div className=" bg-white shadow-md bg-opacity-90 w-16 h-16 flex cursor-pointer group items-center justify-center rounded-full">
        <HiArrowSmUp
          className="text-4xl text-gray-500 group-hover:scale-110 transition-all ease-in-out"
          onClick={() => scrollup()}
        />
      </div>
    </ArrowContainer>
  );
};

export default ScrollTop;
