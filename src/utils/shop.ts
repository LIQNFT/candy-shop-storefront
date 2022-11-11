import Web3Modal from 'web3modal';
import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { Blockchain } from '@liqnft/candy-shop-types';

export function getBlockchain(network?: Blockchain): BlockchainType | null {
  if (!network) return null;
  switch (network) {
    case Blockchain.SolDevnet:
    case Blockchain.SolMainnetBeta:
      return BlockchainType.SOL;
    default:
      return BlockchainType.EVM;
  }
}

export const getWeb3Modal = () => {
  return new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: {},
  });
};

export const LS_NETWORK = 'LS_NETWORK';
