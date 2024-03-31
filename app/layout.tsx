"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiProvider } from "wagmi";

import { http, createConfig } from "wagmi";
import { mainnet, sepolia, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const queryClient = new QueryClient() 
const projectId = '4806c2e3b940cc1156e8262c2edee971'

 const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}> 

          {children}
          </QueryClientProvider> 
          </WagmiProvider>
      </body>
    </html>
  );
}
