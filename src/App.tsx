import { createTheme, ThemeProvider } from "@material-ui/core";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
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
} from "@solana/wallet-adapter-wallets";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./views/Login";
import TopNav from "./components/TopNav";
import { CurrencyProvider } from "./components/Currency";
import Marketplace from "./views/Marketplace";
import CustomTokenMarketplace from "./views/CustomTokenMarketplace";
import MarketplaceWithFilter from "./views/MarketplaceWithFilter";
import MarketplaceWithUrl from "./views/MarketplaceWithUrl";
import MultiCurrencyMarketplace from "./views/MultiCurrencyMarketplace";
import MultiCurrencySell from "./views/MultiCurrencySell";
import MyCollection from "./views/MyCollection";
import SingleOrder from "./views/SingleOrder";
import Footer from "./components/Footer";
import ClaimQubes from "./views/ClaimQubes";
import Fetch from "./views/Fetch";
import NFTCollections from "./views/NFTCollectionsSO";
import Terms from "./views/Terms";
import Policy from "./views/Policy";
import NFTCollectionsSO from "./views/NFTCollectionsSO";
import NFTCollectionsHD from "./views/NFTCollectionsHD";
import NFTCollectionsOS from "./views/NFTCollectionsOS";
import NFTCollectionsH from "./views/NFTCollectionsH";
import NFTCollectionsCN from "./views/NFTCollectionsCN";
import LoginAuth from "./views/LoginAuth";
import Cards from "./views/Cards";
import HomequbeItems from "./views/Homeqube-items";
import HomequbeDesignItems from "./views/HomeDesign-items";
import Just4FunItems from "./views/Just4Fun-items";
import OSAPItems from "./views/OSAP-Items";
import ClaimQ from "./views/ClaimQ";
import Faqs from "./views/Faqs";
import HomePage from "./views/HomePage";
import NFTCollection1 from "./components/NftCollection1";
import NftList from "./views/NftList";
import MarketplaceWithFilterSL from "./views/MarketplaceWithFilterSL";
import MarketplaceWithFilterHD from "./views/MarketplaceWithFilterHD";
import MarketplaceWithFilterSA from "./views/MarketplaceWithFilterSA";
import MarketplaceWithFilterP from "./views/MarketplaceWithFilterP";

require("@solana/wallet-adapter-react-ui/styles.css");

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

// Used for a multi-currency shop
const currencyOptions = [
  {
    currencySymbol: "SOL",
    treasuryMint: "So11111111111111111111111111111111111111112",
    currencyDecimals: 9,
    priceDecimals: 3,
    volumeDecimals: 1,
  },
  {
    currencySymbol: "56p",
    treasuryMint: "56pdaHboK66cxRLkzkYVvFSAjfoNEETJUsrdmAYaTXMJ",
    currencyDecimals: 9,
    priceDecimals: 2,
    volumeDecimals: 1,
  },
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
  );

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
                      path="/"
                      element={
                        <>
                          <TopNav />
                          <HomePage />
                        </>
                      }
                    />
                    <Route
                      path="/nftcollection"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilter />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/structural-legacies"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilterSL />
                          {/* <Footer /> */}
                        </>
                      }
                    />

                    <Route
                      path="/home-design"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilterHD />
                          {/* <Footer /> */}
                        </>
                      }
                    />

                    <Route
                      path="/system-architecture"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilterSA />
                        </>
                      }
                    />

                    <Route
                      path="/products"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilterP />
                        </>
                      }
                    />

                    <Route
                      path="/homeqube"
                      element={
                        <>
                          <TopNav />
                          <HomequbeItems />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    {/* <Route
                      path="/home-design"
                      element={
                        <>
                          <TopNav />
                          <HomequbeDesignItems />
                        </>
                      }
                    /> */}
                    <Route
                      path="/SLC"
                      element={
                        <>
                          <TopNav />
                          <Just4FunItems />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/OSAP"
                      element={
                        <>
                          <TopNav />
                          <OSAPItems />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/faqs"
                      element={
                        <>
                          <TopNav />
                          <Faqs />
                          {/* <Footer /> */}
                        </>
                      }
                    />

                    {/* <Route
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
                    /> */}
                    {/* <Route
                      path='/nftcollection'
                      element={(
                        <>
                          <TopNav />
                          <NFTCollections />
                        </>
                      )}
                    /> */}
                    {/* <Route
                      path="/marketplace"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilter />
                        </>
                      }
                    /> */}
                    <Route
                      path="/loginAuth"
                      element={
                        <>
                          <LoginAuth />
                        </>
                      }
                    />

                    <Route
                      path="/nftcollection/system-concept"
                      element={
                        <>
                          <TopNav />
                          <NFTCollectionsSO />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/nftcollection/home-design"
                      element={
                        <>
                          <TopNav />
                          <NFTCollectionsHD />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/nftcollection/OSAP"
                      element={
                        <>
                          <TopNav />
                          <NFTCollectionsOS />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/nftcollection/homes"
                      element={
                        <>
                          <TopNav />
                          <NFTCollectionsH />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/nftcollection/community-nft"
                      element={
                        <>
                          <TopNav />
                          <NFTCollectionsCN />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/marketplace/:tokenMint"
                      element={
                        <>
                          <TopNav />
                          <SingleOrder />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    {/* <Route
                      path='/marketplace'
                      element={(
                        <>
                          <TopNav />
                          <Marketplace />
                        </>
                      )}
                    /> */}
                    <Route
                      path="/poZxCBHNsdSwErewqHQSELLlkGfsfGhJZCcxsDDxcdaswevJCiGopcxasedWarDfiGderUrghh"
                      element={
                        <>
                          <TopNav />
                          <MyCollection />
                          {/* <Footer /> */}
                        </>
                      }
                    />

                    {/* For Claim qubes here */}
                    <Route
                      path="/claimqubes"
                      element={
                        <>
                          <TopNav />
                          <ClaimQubes />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/mycollection"
                      element={
                        <>
                          <TopNav />
                          <Fetch />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/terms"
                      element={
                        <>
                          <TopNav />
                          <Terms />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/policy"
                      element={
                        <>
                          <TopNav />
                          <Policy />
                          {/* <Footer /> */}
                        </>
                      }
                    />

                    <Route
                      path="/custom-token-marketplace"
                      element={
                        <>
                          <TopNav />
                          <CustomTokenMarketplace />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/multi-collection-marketplace"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithFilter />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/marketplace-with-url"
                      element={
                        <>
                          <TopNav />
                          <MarketplaceWithUrl />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/multi-currency-marketplace"
                      element={
                        <>
                          <TopNav showCurrencyToggle={true} />
                          <MultiCurrencyMarketplace />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                    <Route
                      path="/multi-currency-sell"
                      element={
                        <>
                          <TopNav showCurrencyToggle={true} />
                          <MultiCurrencySell />
                          {/* <Footer /> */}
                        </>
                      }
                    />
                  </Routes>
                </MainContainer>
              </main>
              <Footer />
            </WalletModalProvider>
          </CurrencyProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
`;
// margin-top: 20px;
// margin-bottom: 20px;
// padding-bottom: 20px;
// margin-right: 4%;
// margin-left: 4%;

export default App;
