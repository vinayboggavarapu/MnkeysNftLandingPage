"use client";
import React, { useLayoutEffect, useRef } from "react";
import Arrow from "./Arrow";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Data {
  name: string;
  description: string;
}
const ArrowContainer = styled.div`
  overflow: hidden;
  width: fit-content;
  display: flex;
  position: absolute;
  top: 4.1rem;
  transform: translateX(-15%);
  @media (min-width: 1024px) {
    top: 9.38rem;
    height: 100vh;
  }
`;

const Cards = styled.div`
  @media (min-width: 1024px) {
    div:nth-child(1) {
      top: 3rem;
    }
    div:nth-child(2) {
      top: 14rem;
    }
    div:nth-child(3) {
      top: -3rem;
    }
    div:nth-child(4) {
      top: 8rem;
    }
  }
`;
gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  let element = useRef(null);

  const Data: Data[] = [
    {
      name: "Q2 2023",
      description: "Community Building",
    },
    {
      name: "Q3 2023",
      description:
        "Bootcampskickoff and IRL Events and meetups for token holders",
    },
    {
      name: "Q4 2023",
      description: "DAO Launch and deep diving to unknown use Cases of Web3",
    },
    {
      name: "Q1 2024",
      description:
        "Building a cross chain infra to leverage the loop holes in the adoption of the web3",
    },
  ];
  useLayoutEffect(() => {
    const arrow: any = document.getElementById("arrowpath");
    const arrowElementLength = arrow.getTotalLength();
    console.log(arrowElementLength);
    arrow.style.strokeDasharray = arrowElementLength;
    arrow.style.strokeDashoffset = arrowElementLength;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.current,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (state) => {
          const draw = arrowElementLength * state.progress;
          arrow.style.strokeDashoffset = arrowElementLength - draw;
        },
      },
    });
  });

  return (
    <section
      id="Roadmap"
      className="relative flex flex-col
     items-center justify-center"
    >
      <h3 className="lg:hidden text-center w-2/4  lg:self-center border-2 p-5 border-black">
        Roadmap
      </h3>
      <div className="absolute lg:relative flex flex-col max-w-7xl lg:min-h-screen h-full p-8 w-full mx-auto overflow-hidden">
        <h3 className="hidden lg:flex lg:text-4xl text-center w-fit self-center border-2 p-5 border-black">
          Roadmap
        </h3>
        <div className=" h-5 w-5 md:mx-auto bg-black border-2 mt-4 border-black rounded-full translate-x-[70%] md:translate-x-[-25%] "></div>
        <ArrowContainer className="lg:self-center" ref={element}>
          <Arrow />
        </ArrowContainer>
      </div>
      <Cards className="relative mt-8 lg:mt-0 lg:absolute top-0 w-3/4 mx-auto grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 h-screen items-center lg:justify-items-center justify-items-end">
        {Data.map((card, index) => {
          return (
            <div
              key={index}
              className="p-3 relative rounded-md w-3/4 h-full lg:w-72 lg:h-32 border-2 border-black"
            >
              <h2 className="  absolute font-bold bottom-3 ">{card.name}</h2>
              <p>{card.description}</p>
            </div>
          );
        })}
      </Cards>
    </section>
  );
};

export default Roadmap;
