import styled from 'styled-components';
import { Sell } from '@liqnft/candy-shop';
import { CandyShop } from '@liqnft/candy-shop-sdk';
import { ConnectButton } from '@/components/ConnectButton';
import { useCurrency } from '@/components/Currency';
import { CANDY_SHOP_CREATOR_ADDRESS, CANDY_SHOP_PROGRAM_ID, NETWORK } from '@/utils/candy-shop';
import { useGetPromise } from '@/hooks/useGetPromise';
import { useUserWallet } from '@/hooks/useUserWallet';

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

const MyCollection: React.FC = () => {
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
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <Sell
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default MyCollection;
