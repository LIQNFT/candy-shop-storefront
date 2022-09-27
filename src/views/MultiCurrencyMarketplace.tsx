import { CandyShop } from "@liqnft/candy-shop-sdk";
import { OrdersUSDC } from "../public/OrdersUSDC";
import { CandyShopDataValidator } from "../public/Context";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { useCurrency } from "../components/Currency";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";

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
    <>
       <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/usdcnft" className="active">
           REAL ESTATE
          </NavLink>
        </li>
      </nav>
      <DesContainer>
        <Stat
          candyShop={candyShop}
          title={""}
          description={""}
          style={{ paddingBottom: 50 }}
        />
        <CandyShopDataValidator>
          <OrdersUSDC
            wallet={wallet}
            candyShop={candyShop}
            defaultFilter={{ collection: "1", shop: "" }}
            walletConnectComponent={<WalletMultiButton />}
            filters={FILTERS}
            filterSearch
            search
          />
        </CandyShopDataValidator>
      </DesContainer>
    </>
  );
};

export default MultiCurrencyMarketplace;
const FILTERS = [
  {
    name: "HOTEL",
    collectionId: "1",
    identifier: -0,
    qubeClaims: "",
    description: "",
  },
  {
    name: "Commercial/Residential",
    collectionId: "2",
    identifier: -16541584,
    qubeClaims: "",
    description: "",
  },
];

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;
