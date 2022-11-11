import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { OrderDetail } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const SingleOrder: React.FC = () => {
  const { tokenMint } = useParams();

  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop || !tokenMint) return null;

  return (
    <DesContainer>
      <OrderDetail
        tokenMint={tokenMint}
        backUrl={'/marketplace-with-url'}
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
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
