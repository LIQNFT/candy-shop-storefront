import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { CandyShop } from '@liqnft/candy-shop-sdk';
import { ConnectButton } from '@/components/ConnectButton';
import { useCurrency } from '@/components/Currency';
import { CANDY_SHOP_CREATOR_ADDRESS, CANDY_SHOP_PROGRAM_ID, NETWORK } from '@/utils/candy-shop';
import { useGetPromise } from '@/hooks/useGetPromise';
import { useUserWallet } from '@/hooks/useUserWallet';

const DesContainer = styled.div`
  width: 100%;
`;

const MultiCurrencyMarketplace: React.FC = () => {
  const userWallet = useUserWallet();

  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const candyShop = useGetPromise(
    CandyShop.initSolCandyShop({
      shopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
      treasuryMint: settings.treasuryMint,
      programId: CANDY_SHOP_PROGRAM_ID,
      env: NETWORK,
      // pass additional settings param to configure shop display
      settings,
    })
  );
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={
          'Candy Shop is an open source on-chain protocol that empowers DAOs, NFT projects and anyone interested in creating an NFT marketplace to do so within minutes!'
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
      />
    </DesContainer>
  );
};

export default MultiCurrencyMarketplace;
