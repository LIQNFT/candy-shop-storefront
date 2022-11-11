import create from 'zustand';
import { persist } from 'zustand/middleware';
import { BaseShop } from '@liqnft/candy-shop-sdk';
import { Blockchain } from '@liqnft/candy-shop-types';
import { WalletName } from '@/constant/wallet';
import { NETWORK } from '@/utils/candy-shop';
import { LS_NETWORK } from '@/utils/shop';
import { Wallet } from '@/hooks/useConnection';

export interface ShopProps {
  candyShop?: BaseShop;
  setCandyShop: (candyShop?: BaseShop) => void;
  resetShop: () => void;
}

const initialStore = {
  candyShop: undefined,
};

export const useShopStore = create<ShopProps>((set) => ({
  ...initialStore,
  setCandyShop: (candyShop) => set(() => ({ candyShop })),
  resetShop: () => set(() => ({ ...initialStore })),
}));

export interface ConnectionProps {
  network?: Blockchain;
  setNetwork: (network: Blockchain) => void;
  walletName?: WalletName;
  setWalletName: (walletName?: WalletName) => void;
  wallet?: Wallet;
  setWallet: (wallet?: Wallet) => void;
  destroy: () => void;
}

export const useWalletStore = create<ConnectionProps>()(
  persist(
    (set) => ({
      network: NETWORK,
      setNetwork: (network) => set(() => ({ network })),
      setWalletName: (walletName) => set(() => ({ walletName })),
      setWallet: (wallet) => set(() => ({ wallet })),
      destroy: () =>
        set(() => ({
          network: undefined,
          walletName: undefined,
          wallet: undefined,
        })),
    }),
    {
      name: LS_NETWORK,
      partialize: (s) => ({ walletName: s.walletName }),
    }
  )
);
