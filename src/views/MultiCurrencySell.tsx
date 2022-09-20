import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Sell } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCurrency } from "../components/Currency";
import styled from "styled-components";
import { useMemo } from "react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

const MultiCurrencySell: React.FC = () => {
  const wallet = useAnchorWallet();
  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const candyShop = useMemo(
    () =>
      new CandyShop({
        candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
        treasuryMint: new PublicKey(
          "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
        ),
        candyShopProgramId: new PublicKey(
          "csbMUULiQfGjT8ezT16EoEBaiarS6VWRevTw1JMydrS"
        ),
        env: NETWORK,
        settings,
      }),
    [settings]
  );

  if (!candyShop) {
    return <></>;
  }

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <Sell
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default MultiCurrencySell;
