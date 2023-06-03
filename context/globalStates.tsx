"use client";
import { createContext, useState } from "react";

const GlobalState = createContext<any>("");

export const GlobalStateProps = ({ children }: any) => {
  const [timer, settimer] = useState("");
  return (
    <GlobalState.Provider value={{ timer, settimer }}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
