import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { CandyShop } from '@liqnft/candy-shop-sdk';
import { ConnectButton } from '@/components/ConnectButton';
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  CANDY_SHOP_TREASURY_MINT,
  NETWORK,
  RPC_HOST,
} from '@/utils/candy-shop';
import { useGetPromise } from '@/hooks/useGetPromise';
import { useUserWallet } from '@/hooks/useUserWallet';

const CustomTokenMarketplace: React.FC = () => {
  const userWallet = useUserWallet();

  const candyShop = useGetPromise(
    CandyShop.initSolCandyShop({
      shopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
      treasuryMint: CANDY_SHOP_TREASURY_MINT,
      programId: CANDY_SHOP_PROGRAM_ID,
      env: NETWORK,
      // pass additional settings param to configure shop display
      settings: {
        currencySymbol: 'LQN',
        currencyDecimals: 9,
        priceDecimals: 3,
        volumeDecimals: 1,
        connectionUrl: RPC_HOST,
      } as any,
    })
  );
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={
          'Candy Shop supports custom SPL tokens as currency. Just specify your token symbol and decimals.'
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

export default CustomTokenMarketplace;

const DesContainer = styled.div`
  width: 100%;
`;
