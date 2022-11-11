import { WalletContextState } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

declare global {
  interface Window {
    ethereum: any;
    phantom: {
      solana: {
        isPhantom?: boolean;
        publicKey: PublicKey | null;
        isConnected: boolean;
        signTransaction(transaction: Transaction): Promise<Transaction>;
        signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
        signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
        connect(): Promise<WalletContextState>;
        disconnect(): Promise<void>;
        _handleDisconnect(...args: unknown[]): unknown;
      };
    };

    solflare: {
      isSolflare?: boolean;
      publicKey: PublicKey | null;
      connect(): Promise<void>;
      disconnect(): Promise<void>;
      signTransaction(transaction: Transaction): Promise<Transaction>;
      signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
      signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
    };
  }
}

export interface BaseShopContextType<T, U> {
  getShops: () => void;
  setCandyShops: React.Dispatch<React.SetStateAction<U[]>>;
  candyShop?: T;
  candyShops: U[];
  selectedShop?: U;
}
