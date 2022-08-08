// import { Orders, Stat } from "@liqnft/candy-shop";
import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersSL } from "../public/OrdersSL";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
import { OrdersALL } from "../public/OrdersALL";
const AllNftFilter: React.FC = () => {
  MetaTagsPage(
    "STRUCTURAL LEGACIES",
    "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS FROM OUR SYSTEMS ARCHITECTURE PLATFORM (DAPP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
    "https://www.homeqube.io/structural-legacies"
  );
  const wallet = useAnchorWallet();

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/all-nfts" className="active">
           ALL
          </NavLink>
        </li>
        <li>
          <NavLink to="/structural-legacies">
            Structural Legacies
          </NavLink>
        </li>
        <li>
          <NavLink to="/home-designs">Home Designs</NavLink>
        </li>
        <li>
          <NavLink to="/system-architecture">SYSTEM ARCHITECTURE</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/algorithm">ALGORITHM</NavLink>
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
          <OrdersALL
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

export default AllNftFilter;

const FILTERS = [
  {
    name: "ALL",
    collectionId: "1",
    identifier: 0,
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
