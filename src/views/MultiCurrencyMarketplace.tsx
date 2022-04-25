import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useCurrency } from "../components/Currency";
import { useEffect, useState } from "react";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster;

const DesContainer = styled.div`
  width: 100%;
`;

const MultiCurrencyMarketplace: React.FC = () => {
  const wallet = useAnchorWallet();
  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const [candyShop, setCandyShop] = useState<CandyShop>();

  console.log("Currency Settings", settings);

  useEffect(() => {
    setCandyShop(
      new CandyShop(
        CANDY_SHOP_CREATOR_ADDRESS,
        new PublicKey(settings.treasuryMint),
        CANDY_SHOP_PROGRAM_ID,
        NETWORK,
        settings
      )
    );
  }, [settings]);

  if (!candyShop) {
    return <></>;
  }

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={"Marketplace"}
        description={
          "Candy Shop is an open source on-chain protocol that empowers DAOs, NFT projects and anyone interested in creating an NFT marketplace to do so within minutes!"
        }
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
