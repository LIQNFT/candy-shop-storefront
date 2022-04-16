import { CandyShop, Sell } from '@liqnft/candy-shop'
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Cluster } from '@solana/web3.js'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useCurrency } from '../components/Currency'
import styled from 'styled-components'

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!)
const CANDY_SHOP_TREASURY_MINT = new PublicKey(process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!)
const CANDY_SHOP_PROGRAM_ID = new PublicKey(process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!)
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`

const MyCollection: React.FC = () => {
  const { connection } = useConnection()

  const wallet = useAnchorWallet()

  const { currency, getCurrencySettings } = useCurrency()

  console.log('Currency', currency);

  const candyShop = new CandyShop(
    CANDY_SHOP_CREATOR_ADDRESS,
    CANDY_SHOP_TREASURY_MINT,
    CANDY_SHOP_PROGRAM_ID,
    NETWORK,
    getCurrencySettings()
  )

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <Sell
        connection={connection}
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  )
}

export default MyCollection
