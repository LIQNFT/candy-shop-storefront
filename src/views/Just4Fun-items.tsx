import { useRef } from 'react'
import { CandyShop } from '@liqnft/candy-shop-sdk'
import { Orders } from '../public/Orders'
import { Stat } from '../public/Stat'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Cluster } from '@solana/web3.js'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styled from 'styled-components'

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!)
const CANDY_SHOP_TREASURY_MINT = new PublicKey(process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!)
const CANDY_SHOP_PROGRAM_ID = new PublicKey(process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!)
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #000;
  }
`

const Just4FunItems: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(
    new CandyShop(
      CANDY_SHOP_CREATOR_ADDRESS,
      CANDY_SHOP_TREASURY_MINT,
      CANDY_SHOP_PROGRAM_ID,
      NETWORK
    )
  )

  return (
    <DesContainer>
      <Stat
        candyShop={candyShopRef.current}
        title={''}
        description={''}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShopRef.current}
        walletConnectComponent={<WalletMultiButton />}
        // configure filter by collection
        filters={[
         //  { name: 'Homeqube', collectionId: '1', identifier: -354695101 },
          // { name: 'Home-design', collectionId: '2', identifier: 1462698944 },
          { name: '', collectionId: '3', identifier: 393799738 },
          // { name: 'Other-System-Architecture-Product', collectionId: '4', identifier: -1434943395 }
          // { name: 'Puppies + Shibas', collectionId: '4', identifier: [1235887132, 2036309415] },
          // { name: 'Purple Puppies', collectionId: '4', identifier: 2036309415, attribute: { backgrounds: 'gradient_purple' } }
        ]}
        defaultFilter={{ collection: '3', shop: ''}}
      />
    </DesContainer>
  )
}

export default Just4FunItems
