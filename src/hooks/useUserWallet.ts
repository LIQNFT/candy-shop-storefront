import { AnchorWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';
import { EthWallet } from '@liqnft/candy-shop';
import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { getBlockchain, getWeb3Modal } from '@/utils/shop';
import { useWalletStore } from '@/store/useShopStore';

export const useUserWallet = () => {
  const [wallet, network] = useWalletStore((s) => [s.wallet, s.network]);

  return useMemo<AnchorWallet | EthWallet | undefined>(() => {
    if (!wallet?.publicKey) return undefined;
    if (getBlockchain(network) === BlockchainType.SOL) return wallet as AnchorWallet;
    return {
      publicKey: wallet?.publicKey.toString(),
      web3Modal: getWeb3Modal(),
    } as EthWallet;
  }, [network, wallet]);
};
