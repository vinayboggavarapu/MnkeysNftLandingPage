"use client";
import Main from "./components/Main";
import "@rainbow-me/rainbowkit/styles.css";
import merge from "lodash.merge";

import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { polygonZkEvmTestnet } from "viem/chains";
const { chains, publicClient } = configureChains(
  [polygonZkEvmTestnet],
  [alchemyProvider({ apiKey: `${process.env.ALCHEMY_ID}` }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#000000",
  },
  radii: {
    connectButton: "8px",
  },
} as Theme);

export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={myTheme} chains={chains}>
        <main>
          <Main />
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
