import { GlobalStateProps } from "@/context/globalStates";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Mnkeys",
  description: "Mnkeys NFT landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalStateProps>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </GlobalStateProps>
  );
}
