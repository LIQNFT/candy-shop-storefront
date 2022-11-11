import { message } from 'antd';
import { Blockchain } from '@liqnft/candy-shop-types';

export enum ChainId {
  MATIC = 137,
  MUMBAI = 80001,
  ETH = 1,
  GOERLI = 5,
}

export const CHAINS = {
  [ChainId.MATIC]: {
    chainName: 'Polygon Mainnet',
    chainId: '0x' + ChainId.MATIC.toString(16),
    nativeCurrency: {
      name: 'MATIC',
      decimals: 18,
      symbol: 'MATIC',
    },
    rpcUrls: ['https://polygon-rpc.com/'],
  },
  [ChainId.MUMBAI]: {
    chainName: 'Mumbai',
    chainId: '0x' + ChainId.MUMBAI.toString(16),
    nativeCurrency: {
      name: 'MUMBAI',
      decimals: 18,
      symbol: 'MUMBAI',
    },
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
  },
  [ChainId.ETH]: {
    chainName: 'Ethereum Mainnet',
    chainId: '0x' + ChainId.ETH.toString(16),
    nativeCurrency: {
      name: 'Ethereum Mainnet',
      decimals: 18,
      symbol: 'ETH',
    },
    rpcUrls: ['https://polygontestapi.terminet.io/rpc'],
  },
  [ChainId.GOERLI]: {
    chainName: 'Görli',
    chainId: '0x' + ChainId.GOERLI.toString(16),
    nativeCurrency: {
      name: 'GoerliETH',
      decimals: 18,
      symbol: 'ETH',
    },
    rpcUrls: ['https://goerli.etherscan.io/'],
  },
};

function getInstalledNetworkMetamask(chain: string) {
  return `${chain} network has not been added to the wallet`;
}

export const ChangeMetamaskNetwork: {
  [key in Blockchain]?: () => Promise<void>;
} = {
  [Blockchain.Polygon]: () => {
    return changeNetworkMetamask(ChainId.MATIC).catch(() => {
      message.error(getInstalledNetworkMetamask('Matic'));
    });
  },
  [Blockchain.PolygonTestnet]: () => {
    return changeNetworkMetamask(ChainId.MUMBAI).catch(() => {
      message.error(getInstalledNetworkMetamask('Mumbai'));
    });
  },
  [Blockchain.Eth]: () => {
    return changeNetworkMetamask(ChainId.ETH).catch(() => {
      message.error(getInstalledNetworkMetamask('Ethereum mainnet'));
    });
  },
  [Blockchain.EthTestnet]: () => {
    return changeNetworkMetamask(ChainId.GOERLI).catch(() => {
      message.error(getInstalledNetworkMetamask('Goerli'));
    });
  },
};

export const changeNetworkMetamask = async (chainId: ChainId) => {
  if (window.ethereum.networkVersion !== chainId) {
    window.ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x' + chainId.toString(16) }],
      })
      .catch((err: any) => {
        // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [CHAINS[chainId]],
          });
        }
      });
  }
};

export const getErrorWalletMessage = (wallName: string) => `${wallName} wallet not installed`;
