"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { useScroll, useWindowScroll } from "react-use";
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
  const { x, y } = useWindowScroll();
  const arrow = useRef<any>(null);
  const [render, setRender] = useState(false);
  useLayoutEffect(() => {
    if (arrow != undefined) {
      if (y > 400) {
        setRender(true);
      } else {
        setRender(false);
      }
    }
  }, [y]);

  return (
    <ArrowContainer>
      <AnimatePresence initial={false}>
        {render && (
          <motion.div
            key="scrollArrow"
            ref={arrow}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
            className=" bg-white shadow-md bg-opacity-90 p-2 lg:w-16 lg:h-16 flex cursor-pointer group items-center justify-center rounded-full"
          >
            <HiArrowSmUp
              className="text-4xl text-gray-500  group-hover:scale-110 transition-all ease-in-out"
              onClick={() => scrollup()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ArrowContainer>
  );
};

export default ScrollTop;
