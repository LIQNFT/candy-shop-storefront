import { Drops } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const Drop: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Edition Drops</h1>
      <p>
        Edition drops allow you to mint limited edition serialized NFT
        collections from your favourite content creators.
      </p>
      <p style={{ marginBottom: 40 }}>
        Note: Shop owners can create edition drops in the{" "}
        <a
          href="https://candy.liqnft.com/shop/drops"
          target="_blank"
          rel="noreferrer noopener"
        >
          admin panel
        </a>
        .
      </p>
      <Drops
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        filter
        search
      />
    </DesContainer>
  );
};

export default Drop;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
