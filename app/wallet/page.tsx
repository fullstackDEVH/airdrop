"use client";

import { useAccount } from "wagmi";

// components
import { Account, WalletOptions } from "@/components/wallet";

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}
