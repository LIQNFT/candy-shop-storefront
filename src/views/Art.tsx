import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Art: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Digital Art'}
        description={'Here you can find hand selected artwork by Klausen Art. This masterpieces are for true art lovers.'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        filters={FILTERS}
        shopFilters = {false}
        

        
      />
    </DesContainer>
  );
};

export default Art;

const FILTERS = [
  { name: 'Fine Deko Art Flowers', collectionId: '1', identifier: -415216279 },
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
