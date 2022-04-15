import { CandyShop, Sell } from '@liqnft/candy-shop'
import { Connection } from '@solana/web3.js'
import { AnchorWallet } from '@solana/wallet-adapter-react';
import styled from 'styled-components'

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    display: inline-block !important;
  }
`

interface SellProps {
  connection: Connection
  wallet: AnchorWallet | undefined
  candyShop: CandyShop
  walletConnectComponent: React.ReactElement
}

const MyCollection: React.FC<SellProps> = ({
  connection,
  wallet,
  candyShop,
  walletConnectComponent,
}) => {
  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>Sell</h1>
      <Sell
        connection={connection}
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={walletConnectComponent}
      />
    </DesContainer>
  )
}

export default MyCollection
