import { CandyShop, Sell } from '@liqnft/candy-shop'
import { Connection, PublicKey } from '@solana/web3.js'
import styled from 'styled-components'

const DesContainer = styled.div`
  width: 100%;
`

interface SellProps {
  connection: Connection
  walletPublicKey?: PublicKey
  candyShop: CandyShop
  walletConnectComponent: React.ReactElement
}

const MyCollection: React.FC<SellProps> = ({
  connection,
  walletPublicKey,
  candyShop,
  walletConnectComponent,
}) => {
  return (
    <DesContainer>
      <Sell
        connection={connection}
        walletPublicKey={walletPublicKey}
        candyShop={candyShop}
        walletConnectComponent={walletConnectComponent}
      />
    </DesContainer>
  )
}

export default MyCollection
