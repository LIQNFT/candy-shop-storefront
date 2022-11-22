import { PublicKey } from '@solana/web3.js';
import { ethers } from 'ethers';
import { useCallback } from 'react';
import { message } from 'antd';
import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { Blockchain } from '@liqnft/candy-shop-types';
import { WalletName } from '@/constant/wallet';
import { ChangeMetamaskNetwork, getErrorWalletMessage } from '@/utils/evm-networks';
import { getBlockchain, getWeb3Modal } from '@/utils/shop';
import { useWalletStore } from '@/store/useShopStore';

export interface Wallet {
  publicKey: PublicKey | string | null;
  signMessage: (message: any) => Promise<any>;
  signTransaction(transaction: any): Promise<any>;
  signAllTransactions?: (transactions: any[]) => Promise<any[]>;
}

export interface ConnectionType {
  isInstalledWallet(): boolean;
  onConnect(): Promise<Wallet | undefined>;
  onDisconnect(): Promise<any | undefined>;
  autoConnect(): Promise<Wallet | undefined>;
  getWallet(...args: any): Wallet;
  checkWallet(): Promise<void> | undefined;
}

const INTERVAL_CHECK_WALLET = 250;
const TIMEOUT_CHECK_WALLET = 3_000;

/**
 * when website is loading, wallet-adapter will run logic to detect whether extension is installed or not. We are using Strategy 1, 4 follow refer link:
 * https://github.com/solana-labs/wallet-adapter/blob/05e3c3d864831ded29b1100ef2b0e4fd4b936e30/packages/core/base/src/adapter.ts#L137
 *
 */
const checkInstalledWallet = (
  isInstalledWallet: () => boolean,
  onConnect: () => Promise<Wallet | undefined>
): Promise<Wallet | undefined> => {
  return new Promise((resolve) => {
    let checkWalletTimeout: NodeJS.Timeout | undefined = undefined;

    if (isInstalledWallet()) resolve(onConnect());

    const checkWalletInterval = setInterval(async () => {
      if (isInstalledWallet()) {
        clearInterval(checkWalletInterval);
        checkWalletTimeout && clearTimeout(checkWalletTimeout);
        resolve(onConnect());
      }
    }, INTERVAL_CHECK_WALLET);

    checkWalletTimeout = setTimeout(() => {
      clearInterval(checkWalletInterval);
      resolve(undefined);
    }, TIMEOUT_CHECK_WALLET);
  });
};

/** Solana Land */
const phantomConnection: ConnectionType = {
  checkWallet() {
    if (!phantomConnection.isInstalledWallet()) {
      return Promise.reject(new Error(getErrorWalletMessage('Phantom')));
    }
  },
  async onConnect() {
    await phantomConnection.checkWallet();
    await window.phantom.solana.connect();
    return phantomConnection.getWallet();
  },
  async onDisconnect() {
    await phantomConnection.checkWallet();
    return window.phantom.solana.disconnect();
  },
  getWallet() {
    return {
      publicKey: window.phantom.solana.publicKey,
      signMessage: (message: Uint8Array) => {
        return window.phantom.solana.signMessage(message).then((res) => res.signature);
      },
      signTransaction: window.phantom.solana.signTransaction,
      signAllTransactions: window.phantom.solana.signAllTransactions,
    };
  },
  isInstalledWallet(): boolean {
    return Boolean(window.phantom?.solana);
  },
  autoConnect() {
    return checkInstalledWallet(phantomConnection.isInstalledWallet, phantomConnection.onConnect);
  },
};

const solflareConnection: ConnectionType = {
  checkWallet() {
    if (!solflareConnection.isInstalledWallet()) {
      return Promise.reject(new Error(getErrorWalletMessage('Solflare')));
    }
  },

  async onConnect() {
    await solflareConnection.checkWallet();
    await window.solflare.connect();
    return solflareConnection.getWallet();
  },

  async onDisconnect() {
    await solflareConnection.checkWallet();
    return window.solflare.disconnect();
  },

  getWallet() {
    return {
      publicKey: window.solflare.publicKey,
      signMessage: (message: Uint8Array) => {
        return window.solflare.signMessage(message).then((res) => res.signature);
      },
      signTransaction: window.solflare.signTransaction,
      signAllTransactions: window.solflare.signAllTransactions,
    };
  },

  isInstalledWallet: function (): boolean {
    return !!window?.solflare;
  },

  autoConnect() {
    return checkInstalledWallet(solflareConnection.isInstalledWallet, solflareConnection.onConnect);
  },
};

/** EVM Land */
const metamaskConnection: ConnectionType = {
  checkWallet() {
    if (!metamaskConnection.isInstalledWallet()) {
      return Promise.reject(new Error(getErrorWalletMessage('Metamask')));
    }
  },

  async onConnect() {
    await metamaskConnection.checkWallet();
    const providers = await getWeb3Modal().connect();
    const provider = new ethers.providers.Web3Provider(providers);
    const signer = provider.getSigner();
    const publicKey = await signer.getAddress();
    return metamaskConnection.getWallet(publicKey, signer);
  },

  async onDisconnect() {
    await metamaskConnection.checkWallet();
    return Promise.resolve(getWeb3Modal().clearCachedProvider());
  },

  getWallet(publicKey: any, signer: ethers.providers.JsonRpcSigner) {
    return {
      publicKey,
      signMessage: (message: string) => signer.signMessage(message),
      signTransaction: signer.signTransaction,
    };
  },
  isInstalledWallet: function (): boolean {
    return !!window?.web3;
  },
  autoConnect() {
    return checkInstalledWallet(metamaskConnection.isInstalledWallet, metamaskConnection.onConnect);
  },
};

const Connection: Record<WalletName, ConnectionType> = {
  [WalletName.Phantom]: phantomConnection,
  [WalletName.Solflare]: solflareConnection,
  [WalletName.Metamask]: metamaskConnection,
};

export const useConnection = () => {
  const [setWallet, destroy, setNetwork] = useWalletStore((s) => [
    s.setWallet,
    s.destroy,
    s.setNetwork,
  ]);
  const [walletName, setWalletName] = useWalletStore((s) => [s.walletName, s.setWalletName]);

  const autoConnect = useCallback(
    ({ walletName }: { network: string; walletName: WalletName }) => {
      return Connection[walletName].autoConnect().then((wallet) => {
        setWallet(wallet);
        return wallet;
      });
    },
    [setWallet]
  );

  const connect = useCallback(
    async (walletName: WalletName, network: Blockchain) => {
      if (getBlockchain(network) === BlockchainType.EVM) {
        await ChangeMetamaskNetwork[network]?.(); // request change network for metamask
      }
      return Connection[walletName]
        .onConnect()
        .then((wallet) => {
          setWalletName(walletName);
          setWallet(wallet);
          setNetwork(network);
        })
        .catch((error: Error) => {
          message.error(error.message);
          console.log('Connect wallet failed, error=', error);
        });
    },
    [setNetwork, setWallet, setWalletName]
  );

  const disconnect = useCallback(() => {
    if (!walletName) return Promise.reject('Wallet not selected');

    Connection[walletName]
      .onDisconnect()
      .then(() => {
        destroy();
      })
      .catch((error: Error) => {
        message.error('Disconnect wallet failed');
        console.log('Disconnect wallet failed, error=', error);
      });
  }, [destroy, walletName]);

  return { connect, disconnect, autoConnect };
};
