import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { Blockchain } from '@liqnft/candy-shop-types';
import { networkIcon, walletIcon } from '@/assets/img/wallet';

export enum WalletName {
  Phantom = 'Phantom',
  Solflare = 'Solflare',
  Metamask = 'Metamask',
}

enum Network {
  SolDevnet = 'Devnet',
  SolMainnetBeta = 'Mainnet Beta',
  Eth = 'Eth',
  EthTestnet = 'Goerli',
  Polygon = 'Polygon Matic',
  PolygonTestnet = 'Polygon Mumbai',
}
export interface WalletAdapter {
  name: WalletName;
  icon: string;
  networks: {
    name: Network;
    network: Blockchain;
    icon: string;
  }[];
}

export const Wallets: WalletAdapter[] = [
  {
    name: WalletName.Phantom,
    icon: walletIcon.phantom,
    networks: [
      {
        name: Network.SolMainnetBeta,
        network: Blockchain.SolMainnetBeta,
        icon: networkIcon.solana.mainnet,
      },
      {
        name: Network.SolDevnet,
        network: Blockchain.SolDevnet,
        icon: networkIcon.solana.devnet,
      },
    ],
  },
  {
    name: WalletName.Solflare,
    icon: walletIcon.solflare,
    networks: [
      {
        name: Network.SolMainnetBeta,
        network: Blockchain.SolMainnetBeta,
        icon: networkIcon.solana.mainnet,
      },
      {
        name: Network.SolDevnet,
        network: Blockchain.SolDevnet,
        icon: networkIcon.solana.devnet,
      },
    ],
  },
  {
    name: WalletName.Metamask,
    icon: walletIcon.metamask,
    networks: [
      {
        name: Network.Eth,
        network: Blockchain.Eth,
        icon: networkIcon.evm.mainnet,
      },
      {
        name: Network.EthTestnet,
        network: Blockchain.EthTestnet,
        icon: networkIcon.evm.mumbai,
      },
      {
        name: Network.Polygon,
        network: Blockchain.Polygon,
        icon: networkIcon.evm.mainnet,
      },
      {
        name: Network.PolygonTestnet,
        network: Blockchain.PolygonTestnet,
        icon: networkIcon.evm.mumbai,
      },
    ],
  },
];

export const WalletsSupport: Record<BlockchainType, Array<{ name: WalletName; icon: string }>> = {
  [BlockchainType.SOL]: [
    { name: WalletName.Phantom, icon: walletIcon.phantom },
    { name: WalletName.Solflare, icon: walletIcon.solflare },
  ],
  [BlockchainType.EVM]: [{ name: WalletName.Metamask, icon: walletIcon.metamask }],
};

export const Networks = Wallets.map((wallet) => wallet.networks).flat(Infinity) as Array<{
  name: Network;
  network: Blockchain;
  icon: string;
}>;

export const InferWalletName: { [key in Blockchain]?: WalletName } = {
  [Blockchain.SolDevnet]: WalletName.Phantom,
  [Blockchain.SolMainnetBeta]: WalletName.Phantom,
  [Blockchain.Eth]: WalletName.Metamask,
  [Blockchain.EthTestnet]: WalletName.Metamask,
  [Blockchain.Polygon]: WalletName.Metamask,
  [Blockchain.PolygonTestnet]: WalletName.Metamask,
};
