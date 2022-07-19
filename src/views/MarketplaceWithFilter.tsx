// import {  Stat } from "@liqnft/candy-shop";
import { Orders } from "../public/Orders";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const MarketplaceWithFilter: React.FC = () => {
  const wallet = useAnchorWallet();


  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={""}
        description={
          ""
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        filters={FILTERS}
        defaultFilter = {{ collection: "1", shop: "" }}
      />
    </DesContainer>
  );
};

export default MarketplaceWithFilter;

const FILTERS = [
  {
    name: "Structural Legacies",
    collectionId: "1",
    identifier: [-354695101, -1775657236],
    qubeClaims :"",
    description:
      "INTRODUCING HOMEQUBE’S STRUCTURAL LEGACY SYSTEM. EACH STRUCTURAL IS UNIQUE. WE GENERATED 2500 UNIQUE COMBINATIONS (WITHOUT CANTILEVER) FROM OUR SYSTEMS ARCHITECTURE PLATFORM (SAP). THIS LEGACY SYSTEM CAN BE USED TO BUILD LIMITLESS DESIGN CONFIGURATIONS FOR FLAT TOPOGRAPHIES AND UP TO 3 STORY HOUSING, ALLOWING OPEN ARCHITECTURE. OUR COMPOSITE MIX IS MORE SUSTAINABLE, WEATHER RESILIENT, AND EMITS MUCH LESS CARBON THAN REINFORCED CONCRETE/STEEL, AND CAN BE ERGONOMICALLY ASSEMBLED AT THE SITE.",
  },
  {
    name: "Home Designs",
    collectionId: "2",
    identifier: 1462698944,
    qubeClaims :"",
    description:
      "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
  },
  {
    name: "SYSTEM ARCHITECTURE",
    collectionId: "3",
    identifier: -16541584,
    qubeClaims :"",
    description:
      "YOU CAN PLACE VARIOUS HOME DESIGNS “PARTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES. ",
  },

  {
    name: "PRODUCTS",
    collectionId: "4",
    identifier: [-1434943395, 393799738],
    qubeClaims :"",
    description:
      "YOU CAN PLACE VARIOUS “PRODCUTS” THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
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
