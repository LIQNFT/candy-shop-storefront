import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders } from "@liqnft/candy-shop";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useCurrency } from "../components/Currency";
import { useMemo } from "react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

const DesContainer = styled.div`
  width: 100%;
`;

const MultiCurrencyMarketplace: React.FC = () => {
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
  console.log("Currency Settings", settings);

  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={""}
        description={""}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default MultiCurrencyMarketplace;
