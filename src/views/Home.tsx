import { useRef } from 'react'
import { CandyShop } from '@liqnft/candy-shop-sdk'
import { Orders, Stat } from '@liqnft/candy-shop'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Cluster } from '@solana/web3.js'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styled from 'styled-components'
import woofcoins from '../assets/images/woofcoins.png'

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!)
const CANDY_SHOP_TREASURY_MINT = new PublicKey(process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!)
const CANDY_SHOP_PROGRAM_ID = new PublicKey(process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!)
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster

const DesContainer = styled.div`
  width: 100%;
`

const CustomTokenMarketplace: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(
    new CandyShop(
      CANDY_SHOP_CREATOR_ADDRESS,
      CANDY_SHOP_TREASURY_MINT,
      CANDY_SHOP_PROGRAM_ID,
      NETWORK,
      // pass additional settings param to configure shop display
      {
        currencySymbol: 'WOOF',
        currencyDecimals: 6,
        priceDecimals: 0,
        volumeDecimals: 0
      }
    )
  )

  return (
    <DesContainer>
      <WoofCoinsImage src={woofcoins} alt="wooofcoins"/>
      <Stat
        candyShop={candyShopRef.current}
        title={'WOOFers Marketplace'}
        description={'A collection WOOFers, Gen1 Art and other befriended NFT collections on Solana. The only true currency of this marketplace is WOOF.'}
        style={{ paddingBottom: 50, paddingTop: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShopRef.current}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  )
}

const WoofCoinsImage = styled.img `
  width: 300px;
  margin: auto;

  @media only screen and (min-width: 420px) {
    width: 600px;
  }

  @media only screen and (min-width: 851px) {
    width: 850px;
  }
`



export default CustomTokenMarketplace
