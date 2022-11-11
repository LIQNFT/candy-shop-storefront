import { useEffect, useRef, useState } from 'react';
import { notification } from 'antd';
import { BlockchainType, CandyShop, EthCandyShop } from '@liqnft/candy-shop-sdk';
import { useShopStore, useWalletStore } from '../store/useShopStore';
import { useConnection } from './useConnection';
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  CANDY_SHOP_TREASURY_MINT,
  NETWORK,
} from '@/utils/candy-shop';
import { getBlockchain } from '@/utils/shop';

export const useUpdateShop = () => {
  const [loading, setLoading] = useState(false);
  const [walletName] = useWalletStore((s) => [s.walletName]);
  const setCandyShop = useShopStore((s) => s.setCandyShop);

  const { autoConnect } = useConnection();
  const cachedConnectionRef = useRef({ network: NETWORK, walletName });

  // check for the 1st user access website
  useEffect(() => {
    if (!cachedConnectionRef.current.network || !cachedConnectionRef.current.walletName) {
      return;
    }

    const autoConnectWallet = {
      network: cachedConnectionRef.current.network,
      walletName: cachedConnectionRef.current.walletName,
    };

    setLoading(true);
    autoConnect(autoConnectWallet)
      .catch((error: Error) => {
        console.log('autoConnect failed, error=', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [autoConnect]);

  useEffect(() => {
    if (getBlockchain(NETWORK) === BlockchainType.EVM) {
      const params: Parameters<typeof EthCandyShop.initEthCandyShop>[0] = {
        shopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
        treasuryMint: CANDY_SHOP_TREASURY_MINT,
        programId: CANDY_SHOP_PROGRAM_ID,
        env: NETWORK,
        settings: {},
      };

      EthCandyShop.initEthCandyShop(params)
        .then((ethCandyShop) => {
          setCandyShop(ethCandyShop);
        })
        .catch((error: Error) => {
          notification.error({ message: 'Create EVM shop failed.' });
          console.log('EthCandyShop.initEthCandyShop failed, error=', error);
        });
    } else {
      const params: Parameters<typeof CandyShop.initSolCandyShop>[0] = {
        shopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
        treasuryMint: CANDY_SHOP_TREASURY_MINT,
        programId: CANDY_SHOP_PROGRAM_ID,
        env: NETWORK,
        settings: {} as any,
        isEnterprise: false,
      };
      CandyShop.initSolCandyShop(params)
        .then((candyShop) => {
          setCandyShop(candyShop);
        })
        .catch((error: Error) => {
          notification.error({ message: 'Create Solana shop failed.' });
          console.log('CandyShop.initSolCandyShop failed, error=', error);
        });
    }
  }, [setCandyShop]);

  return loading;
};
