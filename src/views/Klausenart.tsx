import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';


const Klausenart: React.FC = () => {
 return(
    <DesContainer>

      
        <div style={BG_Img}>
          <h1> Klausenart</h1>
            <div style ={{display:'flex', justifyContent:'center'}}>
             <img
              src="/Digital_Artwork_01.png"
              alt="Klausenart"
              style={{maxWidth: '100%', height:'auto'}} />
            </div>
        </div>
    </DesContainer>
  );
};

export default Klausenart;


const DesContainer = styled.div`
  width: 100%;
`;

const BG_Img = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
}
