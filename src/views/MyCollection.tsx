import { Sell } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const MyCollection: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }} className="people-title" >My Collection</h1>
      <Sell2
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default MyCollection;

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;
