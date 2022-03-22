import { CandyShop, Orders } from '@liqnft/candy-shop'
import { PublicKey } from '@solana/web3.js'
import styled from 'styled-components'

const DesContainer = styled.div`
  width: 100%;
`

interface OrdersProps {
  walletPublicKey?: PublicKey
  candyShop: CandyShop
  walletConnectComponent: React.ReactElement
}

const Marketplace: React.FC<OrdersProps> = ({
  walletPublicKey,
  candyShop,
  walletConnectComponent,
}) => {
  return (
    <DesContainer>
      <Orders
        walletPublicKey={walletPublicKey}
        candyShop={candyShop}
        walletConnectComponent={walletConnectComponent}
      />
    </DesContainer>
  )
}

export default Marketplace
