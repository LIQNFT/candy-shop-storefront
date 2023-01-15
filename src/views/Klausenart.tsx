import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';
import {useWindowDimensions} from 'react-native';


const Klausenart: React.FC = () => {
 return(
    <DesContainer>

      <h1> Klausenart</h1>
        <BG_Img>
           <img src="/Digital_Artwork_01.png" alt="Klausenart" />
        </BG_Img>
    </DesContainer>
  );
};

export default Klausenart;

const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;

const DesContainer = styled.div`
  width: 100%;
`;

const BG_Img = styled.div`
  width: windowWidth;
  height: auto;
`;
