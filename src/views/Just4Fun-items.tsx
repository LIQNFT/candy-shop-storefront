import { useRef } from "react";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders } from "../public/Orders";
import { Stat } from "../public/Stat";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Cluster } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

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

const Just4FunItems: React.FC = () => {
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
      <header className="header-site-design">
        <section className="cover-image-div mb-4">
          <img src="/Structural-Legacies.png" />
          <section className="cover-in-site">
            <div className="profile-image-site">
              <img src="/Homeqube-logo-black_small 1.svg" />
              <h1 className="profile-name-2 text-uppercase">Structural Legacies with Cantilever</h1>
              {/* <span id="nikName">(HQ)</span> */}
            </div>
          </section>
        </section>
      </header>
      <div className="item-description text-uppercase">
        <p className="SL-Des">
          <h3 className="des">DESCRIPTION</h3>
          Introducing Homeqube’s Structural Legacy System. Each Structural
          Configuration is unique. We generated 50 unique combinations
          (without Cantilever) from our Systems Architecture Platform (SAP).
          This Legacy System can be used to build limitless design
          configurations for flat topographies and up to 3 story housing,
          allowing open architecture. Our composite mix is more sustainable,
          weather resilient, and emits much less carbon than reinforced
          concrete/steel, and can be ergonomically assembled at site.
        </p>
      </div>
      <DesContainer>
        <Stat
          candyShop={candyShopRef.current}
          title={""}
          description={""}
          style={{ paddingBottom: 50 }}
        />
        <Orders
          wallet={wallet}
          candyShop={candyShopRef.current}
          walletConnectComponent={<WalletMultiButton />}
          // configure filter by collection
          filters={[
            //  { name: 'Homeqube', collectionId: '1', identifier: -354695101 },
            // { name: 'Home-design', collectionId: '2', identifier: 1462698944 },
            { name: "", collectionId: "3", identifier: -1775657236 },
            // { name: 'Other-System-Architecture-Product', collectionId: '4', identifier: -1434943395 }
            // { name: 'Puppies + Shibas', collectionId: '4', identifier: [1235887132, 2036309415] },
            // { name: 'Purple Puppies', collectionId: '4', identifier: 2036309415, attribute: { backgrounds: 'gradient_purple' } }
          ]}
          defaultFilter={{ collection: "3", shop: "" }}
        />
      </DesContainer>
    </>
  );
};

export default Just4FunItems;
