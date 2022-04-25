import { createTheme, ThemeProvider } from '@material-ui/core'
import { useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import * as anchor from '@project-serum/anchor'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolflareWebWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getSolongWallet,
  getLedgerWallet,
  getSafePalWallet,
} from '@solana/wallet-adapter-wallets'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import TopNav from './components/TopNav'
import { CurrencyProvider } from './components/Currency'
import Home from './views/Home'
import Marketplace from './views/Marketplace'
import CustomTokenMarketplace from './views/CustomTokenMarketplace'
import MarketplaceWithFilter from './views/MarketplaceWithFilter'
import MarketplaceWithUrl from './views/MarketplaceWithUrl'
import MultiCurrencyMarketplace from './views/MultiCurrencyMarketplace'
import MultiCurrencySell from './views/MultiCurrencySell'
import MyCollection from './views/MyCollection'
import SingleOrder from './views/SingleOrder'

require('@solana/wallet-adapter-react-ui/styles.css')

const candyMachineId = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!)
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!
const connection = new anchor.web3.Connection(rpcHost)

const txTimeout = 30000 // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: 'flex-start',
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: '12px 16px',
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
})

// Used for a multi-currency shop
const currencyOptions = [
  {
    currencySymbol: 'SOL',
    treasuryMint: 'So11111111111111111111111111111111111111112',
    currencyDecimals: 9,
    priceDecimals: 3,
    volumeDecimals: 1
  },
  {
    currencySymbol: '56p',
    treasuryMint: '56pdaHboK66cxRLkzkYVvFSAjfoNEETJUsrdmAYaTXMJ',
    currencyDecimals: 9,
    priceDecimals: 2,
    volumeDecimals: 1
  }
];

const App = () => {
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolflareWebWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getSolongWallet(),
      getLedgerWallet(),
      getSafePalWallet(),
    ],
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={rpcHost}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <CurrencyProvider currencyOptions={currencyOptions}>
            <WalletModalProvider>
              <main>
                <MainContainer>
                  <Routes>
                    <Route
                      path='/'
                      element={(
                        <>
                          <TopNav />
                          <Home
                            candyMachineId={candyMachineId}
                            connection={connection}
                            txTimeout={txTimeout}
                            rpcHost={rpcHost}
                          />
                        </>
                      )}
                    />
                    <Route
                      path='/marketplace/:tokenMint'
                      element={(
                        <>
                          <TopNav />
                          <SingleOrder />
                        </>
                      )}
                    />
                    <Route
                      path='/marketplace'
                      element={(
                        <>
                          <TopNav />
                          <Marketplace />
                        </>
                      )}
                    />
                    <Route
                      path='/sell'
                      element={
                        <>
                          <TopNav />
                          <MyCollection />
                        </>
                      }
                    />
                    <Route
                      path='/custom-token-marketplace'
                      element={
                        <>
                          <TopNav />
                          <CustomTokenMarketplace />
                        </>
                      }
                    />
                    <Route
                      path='/multi-collection-marketplace'
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilter />
                        </>
                      }
                    />
                    <Route
                      path='/marketplace-with-url'
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithUrl />
                        </>
                      }
                    />
                    <Route
                      path='/multi-currency-marketplace'
                      element={
                        <>
                          <TopNav showCurrencyToggle={true} />
                          <MultiCurrencyMarketplace />
                        </>
                      }
                    />
                    <Route
                      path='/multi-currency-sell'
                      element={
                        <>
                          <TopNav showCurrencyToggle={true} />
                          <MultiCurrencySell />
                        </>
                      }
                    />
                  </Routes>
                </MainContainer>
              </main>
            </WalletModalProvider>
          </CurrencyProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  margin-right: 4%;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
`

export default App
