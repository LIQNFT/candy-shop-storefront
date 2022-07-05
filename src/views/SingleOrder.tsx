import { OrderDetail } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useParams } from "react-router-dom";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const SingleOrder: React.FC = () => {
  const { tokenMint } = useParams();

  const wallet = useAnchorWallet();

  if (!tokenMint) return null;

  return (
    <DesContainer>
      <OrderDetail
        tokenMint={tokenMint}
        backUrl={"/marketplace-with-url"}
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default SingleOrder;

const DesContainer = styled.div`
  width: 100%;

  .candy-value {
    color: #fff;
  }

  .candy-nft-attribute {
    color: #000;
  }

  .buy-modal {
    color: #000;
  }
`;
