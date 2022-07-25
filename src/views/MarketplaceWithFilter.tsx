import { Orders, Stat } from "@liqnft/candy-shop";
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
        title={"Marketplace"}
        description={
          "Enable users to filter by collections and search for NFTs."
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        filters={FILTERS}
        filterSearch
        search
      />
    </DesContainer>
  );
};

export default MarketplaceWithFilter;

const FILTERS = [
  { name: "Puppies", collectionId: "1", identifier: 2036309415 },
  { name: "Shibas", collectionId: "2", identifier: 1235887132 },
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
