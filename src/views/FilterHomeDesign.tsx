import { Stat } from "../public/Stat";
import { CandyShopDataValidator } from "../public/Context";
import { OrdersHD } from "../public/OrdersHD";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";
const HomeDesignFilter: React.FC = () => {
  MetaTagsPage(
    "HOME DESIGNS",
    "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
    "https://www.homeqube.io/home-designs"
  );
  const wallet = useAnchorWallet();

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
      <li>
          <NavLink to="/home-designs" className="active">
            Home Generative Designs and Algorithms
          </NavLink>
        </li>
        <li>
          <NavLink to="/home-products">
            Home Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/just-for-fun" >JFF Just-for-Fun</NavLink>
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
          <OrdersHD
            wallet={wallet}
            candyShop={candyShop}
            walletConnectComponent={<WalletMultiButton />}
            filters={FILTERS}
            defaultFilter={{ collection: "1", shop: "" }}
            filterSearch
            search
          />
        </CandyShopDataValidator>
      </DesContainer>
    </>
  );
};

export default HomeDesignFilter;

const FILTERS = [
  {
    name: "Highlighted Projects",
    collectionId: "1",
    identifier: 1462698944,
    qubeClaims: "",
    description:
      "THESE ARE OUR COMMUNITY COLLECTIONS OF HOME DESIGNS, THAT WILL GENERATE BOTTOM-UP ARCHITECTURE.",
  },
  {
    name: "Community Projects",
    collectionId: "2",
    identifier: -16541584,
    qubeClaims: "",
    description:
      "THESE ARE OUR COMMUNITY COLLECTIONS OF HOME DESIGNS, THAT WILL GENERATE BOTTOM-UP ARCHITECTURE.",
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
