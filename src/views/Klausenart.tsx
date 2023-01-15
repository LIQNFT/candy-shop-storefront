import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const Klausenart: React.FC = () => {
 return(
    <DesContainer>

      <h1> Klausenart</h1>
        <div class="bg_img">
           <img src="/Digital_Artwork_01.png" alt="Klausenart" width: 100% height: auto />
        </div>
    </DesContainer>
  );
};

export default Klausenart;

const DesContainer = styled.div`
  width: 100%;
`;

const bg_img = styled.div`
  width: 100%;
  height: auto;
`;
