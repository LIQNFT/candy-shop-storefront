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
const StructuralLegaciesFilter: React.FC = () => {
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
          <NavLink to="/home-designs">
            Home Generative Designs and Algorithms
          </NavLink>
        </li>
        <li>
          <NavLink to="/home-products" className="active">
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
          <OrdersSL
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

export default StructuralLegaciesFilter;

const FILTERS = [
  {
    name: "With Cantilever",
    collectionId: "1",
    identifier: -1775657236,
    qubeClaims: "",
    description:
      "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS (WITHOUT CANTILEVER) FROM OUR SYSTEMS ARCHITECTURE PLATFORM (SAP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
  },
  {
    name: "Without Cantilver",
    collectionId: "2",
    identifier: -354695101,
    qubeClaims: "(Qube Claims Available)",
    description:
      "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS (WITHOUT CANTILEVER) FROM OUR SYSTEMS ARCHITECTURE PLATFORM (SAP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
  },
  {
    name: "PBUs",
    collectionId: "3",
    identifier: 393799738,
    qubeClaims: "",
    description:
      "INTRODUCING HOMEQUBE'S SPHERE BATHROOM. THIS PRE-FABRICATED BATHROOM UNIT(PBU) ASSEMBLY HAS A BATHTUB, LAVATORY, URINAL, WATER CLOSET, AND SHOWER HEAD COMBINED AND SMARTLY ARRANGED ON A SPHERICAL FASHION, AVOIDING PROBLEMATIC TOP DOWN DESIGN CONSTRUCTION.",
  },
  {
    name: "3D PRINTED PARTS",
    collectionId: "4",
    identifier: -16541584,
    qubeClaims: "",
    description:
      "",
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
