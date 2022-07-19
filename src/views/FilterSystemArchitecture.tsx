import { Stat } from "../public/Stat";
import { OrdersSA } from "../public/OrdersSA";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MetaTagsPage } from "../utils/Metatags";

const SystemArchitectureFilter: React.FC = () => {
  MetaTagsPage("SYSTEM ARCHITECTURE","YOU CAN PLACE VARIOUS HOME DESIGNS “PARTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.","https://www.homeqube.io/system-architecture");
  const wallet = useAnchorWallet();

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/structural-legacies">Structural Legacies</NavLink>
        </li>
        <li>
          <NavLink to="/home-designs">
            Home Designs
          </NavLink>
        </li>
        <li>
          <NavLink to="/system-architecture" className="active">SYSTEM ARCHITECTURE</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
      </nav>
      <DesContainer>
        <Stat
          candyShop={candyShop}
          title={""}
          description={""}
          style={{ paddingBottom: 50 }}
        />
        <OrdersSA
          wallet={wallet}
          candyShop={candyShop}
          defaultFilter={{ collection: "1", shop: "" }}
          walletConnectComponent={<WalletMultiButton />}
          filters={FILTERS}
        />
      </DesContainer>
    </>
  );
};

export default SystemArchitectureFilter;

const FILTERS = [
    {
        name: "Parts",
        collectionId: "1",
        identifier: -16541584,
        qubeClaims :"",
        description:
          "YOU CAN PLACE VARIOUS HOME DESIGNS “PARTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES. ",
      },
      {
        name: "PBU",
        collectionId: "2",
        identifier: 393799738,
        qubeClaims :"",
        description:
          "YOU CAN PLACE VARIOUS HOME DESIGNS “PARTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES. ",
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
