import { Auctions } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const AuctionsView: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Auctions</h1>
      <p style={{ marginBottom: 40 }}>Note: Shop owners can create auctions in the <a href="https://candy.liqnft.com/shop/auctions" target="_blank" rel="noreferrer noopener">admin panel</a>.</p>
      <Auctions candyShop={candyShop} wallet={wallet} walletConnectComponent={<WalletMultiButton />} />
    </DesContainer>
  );
};

export default AuctionsView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
