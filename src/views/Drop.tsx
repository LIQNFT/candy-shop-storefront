import styled from 'styled-components';
import { Drops } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Drop: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Edition Drops</h1>
      <p>
        Edition drops allow you to mint limited edition serialized NFT collections from your
        favourite content creators.
      </p>
      <p style={{ marginBottom: 40 }}>
        Note: Shop owners can create edition drops in the{' '}
        <a href="https://candy.liqnft.com/shop/drops" target="_blank" rel="noreferrer noopener">
          admin panel
        </a>
        .
      </p>
      {candyShop && (
        <Drops
          candyShop={candyShop}
          wallet={userWallet}
          walletConnectComponent={<ConnectButton />}
          filter
          search
        />
      )}
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
