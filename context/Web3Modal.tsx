import React from 'react';

import { WagmiConfig, configureChains, createConfig } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

import { bscTestnet } from 'viem/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = '4806c2e3b940cc1156e8262c2edee971';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bscTestnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

type Props = {
  children: React.ReactNode;
};

export function Web3Modal({ children }: Props) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
