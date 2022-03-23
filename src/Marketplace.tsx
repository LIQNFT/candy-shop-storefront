import { CandyShop, Orders, Stat } from '@liqnft/candy-shop'
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
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={'Candy Shop is an open source on-chain protocol that empowers DAOs, NFT projects and anyone interested in creating an NFT marketplace to do so within minutes!'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        walletPublicKey={walletPublicKey}
        candyShop={candyShop}
        walletConnectComponent={walletConnectComponent}
      />
    </DesContainer>
  )
}

export default Marketplace
