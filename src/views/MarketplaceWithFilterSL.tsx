import { useRef } from "react";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders } from "../public/Orders";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Orders2 } from "../public/Orders2";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster;

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #000;
  }
`;

const MarketplaceWithFilterSL: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(
    new CandyShop(
      CANDY_SHOP_CREATOR_ADDRESS,
      CANDY_SHOP_TREASURY_MINT,
      CANDY_SHOP_PROGRAM_ID,
      NETWORK
    )
  );

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/structural-legacies" className='active'>Structural Legacies</NavLink>
        </li>
        <li>
          <NavLink to="/home-design">Home Designs</NavLink>
        </li>
        <li>
        <NavLink to="/system-architecture">SYSTEM ARCHITECTURE</NavLink></li>
        <li>
        <NavLink to="/products">PRODUCTS</NavLink></li>
      </nav>
      <DesContainer>
        <Stat candyShop={candyShopRef.current} title={""} description={""} />
        <Orders2
          wallet={wallet}
          candyShop={candyShopRef.current}
          walletConnectComponent={<WalletMultiButton />}
          // configure filter by collection
          filters={[
            {
              name: "With Cantilever",
              collectionId: "1",
              identifier: [-354695101],
              description:
                "Introducing Homeqube’s Structural Legacy System. Each Structural is unique. We generated 2450 unique combinations (without Cantilever) from our Systems Architecture Platform (SAP). This Legacy System can be used to build limitless design configurations for flat topographies and up to 3 story housing, allowing open architecture. Our composite mix is more sustainable,0 weather resilient, and emits much less carbon than reinforced concrete/steel, and can be ergonomically assembled at site.",
            },
            {
              name: "Without Cantilever",
              collectionId: "2",
              identifier: [-1775657236],
              description:
                "Introducing Homeqube’s Structural Legacy System. Each Structural is unique. We generated 2450 unique combinations (without Cantilever) from our Systems Architecture Platform (SAP). This Legacy System can be used to build limitless design configurations for flat topographies and up to 3 story housing, allowing open architecture. Our composite mix is more sustainable,0 weather resilient, and emits much less carbon than reinforced concrete/steel, and can be ergonomically assembled at site.",
            },
            // { name: 'Puppies + Shibas', collectionId: '4', identifier: [1235887132, 2036309415] },
            // { name: 'Purple Puppies', collectionId: '4', identifier: 2036309415, attribute: { backgrounds: 'gradient_purple' } }
          ]}
          defaultFilter={{ collection: "1", shop: "" }}
        />
      </DesContainer>
    </>
  );
};

export default MarketplaceWithFilterSL;
