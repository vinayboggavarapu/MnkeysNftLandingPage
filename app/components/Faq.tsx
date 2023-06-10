"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi";

interface Data {
  title: string;
  description: string;
}

export const FaqTemplate = ({ title, description }: Data) => {
  const [click, setclick] = useState(false);

  return (
    <div className="text-white flex flex-col w-full ">
      <div
        id="Faq"
        className="flex w-[78%] cursor-pointer justify-center items-center mx-auto"
        onClick={() => {
          setclick(!click);
        }}
      >
        <h2 className="w-full">{title}</h2>
        <AnimatePresence>
          {click && (
            <motion.div
              key={"minus"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HiOutlineMinus />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!click && (
            <motion.div
              key={"plus"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut" }}
              exit={{ opacity: 0 }}
            >
              <AiOutlinePlus />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {click && (
          <motion.p
            key={title.slice(0, 4)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="w-[78%] text-gray-200 font-light mt-3 mx-auto"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
      <hr className="mt-3 mx-auto w-[80%]"></hr>
    </div>
  );
};

const Faq = () => {
  const [click, setclick] = useState("");
  const info: Data[] = [
    {
      title: "WHERE CAN I VIEW MY NFTS?",
      description: "You can view your minted nfts on MumbaiScan.",
    },
    {
      title: "HOW CAN I USE MY NFT?",
      description:
        "You will be able to use your NFT as an avatar in the Metaverse and our future social media Dapp.You can also earn staking awards which we have planned in the next quarter.",
    },
    {
      title: "SHOULD WE HAVE TO BE DEVELOPER TO JOIN THE COMMUNITY?",
      description:
        "No you don't need to , we are building developer focued community , it doesn't mean we leave others behind , every contribution counts for a successful proceeding.",
    },
    {
      title: "WHY IS THIS ALL GOOD?",
      description:
        "Mnkeys is no ordinary NFT we believe in the developer focused community who deliver creative solutions to the hidden case studies where we can use web3.Stay tuned for more info!!! ",
    },
  ];
  return (
    <section className="flex bg-black bg-opacity-90 justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-5xl w-full mx-auto gap-32">
        <h2 className="text-white text-5xl text-center underline underline-offset-8 decoration-2">
          FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-5">
          {info.map((data, index) => {
            return (
              <FaqTemplate
                key={index}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
