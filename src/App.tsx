import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CandyShopDataValidator } from "@liqnft/candy-shop";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
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

import TopNav from "./components/TopNav";
import { CurrencyProvider } from "./components/Currency";
// import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import CustomTokenMarketplace from "./views/CustomTokenMarketplace";
import MarketplaceWithFilter from "./views/MarketplaceWithFilter";
import MarketplaceWithUrl from "./views/MarketplaceWithUrl";
import MultiCurrencyMarketplace from "./views/MultiCurrencyMarketplace";
import MultiCurrencySell from "./views/MultiCurrencySell";
import MyCollection from "./views/MyCollection";
import SingleOrder from "./views/SingleOrder";
import AuctionsView from "./views/AuctionsView";
import ActivityView from "./views/ActivityView";
import { RouteName } from "./constant/routeNames";
import { NETWORK, RPC_HOST } from "./utils/candy-shop";
import HomePage from "./views/HomePage";
import ClaimQubes from "./views/ClaimQubes";
import Footer from "./components/Footer";
import StructuralLegaciesFilter from "./views/FilterStructuralLegacies";
import HomeDesignFilter from "./views/FilterHomeDesign";
import SystemArchitectureFilter from "./views/FilterSystemArchitecture";
import ProductsFilter from "./views/FilterProducts";
import Fetch from "./views/Fetch";
import AddMyCollections from "./views/AddMyCollection";
import AlgorithmFilter from "./views/FiltersAlgorithm";
import ClaimQubesAWS from "./views/ClaimQubesAWS";
import Practice from "./views/dependetSelect";
import AllNftFilter from "./views/AllNfts";
require("@solana/wallet-adapter-react-ui/styles.css");

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
    mainnetConnectionUrl: RPC_HOST,
  },
  {
    currencySymbol: "56p",
    treasuryMint: "56pdaHboK66cxRLkzkYVvFSAjfoNEETJUsrdmAYaTXMJ",
    currencyDecimals: 9,
    priceDecimals: 2,
    volumeDecimals: 1,
    mainnetConnectionUrl: RPC_HOST,
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
      getSolletWallet({ network: NETWORK }),
      getSolletExtensionWallet({ network: NETWORK }),
      getSolongWallet(),
      getLedgerWallet(),
      getSafePalWallet(),
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={RPC_HOST!}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <CurrencyProvider currencyOptions={currencyOptions}>
            <WalletModalProvider>
              <CandyShopDataValidator>
                <main>
                  <MainContainer>
                    <Routes>
                      <Route
                        path={RouteName.HomePage}
                        element={
                          <>
                            <TopNav />
                            <HomePage />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.practice}
                        element={
                          <>
                            <TopNav />
                            <Practice />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.AllNftFilter}
                        element={
                          <>
                            <TopNav />
                            <AllNftFilter />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.ClaimQubes}
                        element={
                          <>
                            <TopNav />
                            <ClaimQubesAWS />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.StructuralLegaciesFilter}
                        element={
                          <>
                            <TopNav />
                            <StructuralLegaciesFilter />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.HomeDesignFilter}
                        element={
                          <>
                            <TopNav />
                            <HomeDesignFilter />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.SystemArchitectureFilter}
                        element={
                          <>
                            <TopNav />
                            <SystemArchitectureFilter />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.ProductsFilter}
                        element={
                          <>
                            <TopNav />
                            <ProductsFilter />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.AlgorithmFilter}
                        element={
                          <>
                            <TopNav />
                            <AlgorithmFilter />
                          </>
                        }
                      />
                        <Route
                        path={RouteName.MyCollection}
                        element={
                          <>
                            <TopNav />
                            <Fetch />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.sell}
                        element={
                          <>
                            <TopNav />
                            <MyCollection />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.auctionsView}
                        element={
                          <>
                            <TopNav />
                            <AuctionsView />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.addMyCollections}
                        element={
                          <>
                            <TopNav />
                            <AddMyCollections />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.activityView}
                        element={
                          <>
                            <TopNav />
                            <ActivityView />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.customToken}
                        element={
                          <>
                            <TopNav />
                            <CustomTokenMarketplace />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCollection}
                        element={
                          <>
                            <TopNav />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.marketplaceWithUrl}
                        element={
                          <>
                            <TopNav />
                            <MarketplaceWithUrl />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCurrencyMarketplace}
                        element={
                          <>
                            <TopNav showCurrencyToggle={true} />
                            <MultiCurrencyMarketplace />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCurrencySell}
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
              </CandyShopDataValidator>
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

export default App;
