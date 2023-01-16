import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';


const Klausenart: React.FC = () => {
 return(
    <DesContainer>

      <h1> Klausenart</h1>
        <div className="BG_Img">
           <img src="/Digital_Artwork_01.png" alt="Klausenart" />
        </div>
    </DesContainer>
  );
};

export default Klausenart;


const DesContainer = styled.div`
  width: 100%;
`;

const BG_Img = styled.div`
  display:felx;
  justify-content:center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
