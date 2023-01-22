import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';


const Token: React.FC = () => {
 return(
    <DesContainer>

        
        <div style={BG_Img}>
          <div style={BG_Txt}>
           <h1> Our Token: $KART</h1>
            <p>$KART is the natural token of the Klausen Art ecosystem and is used for buying NFTs. More features comming soon.</p>
           </div>
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

export default Token;


const DesContainer = styled.div`
  width: 100%;
`;

const BG_Img = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
}
const BG_Txt = {
  justifyContent:"left",
  alignItems:"left",
}

