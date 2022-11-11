import { ThemeProvider, createTheme } from '@material-ui/core';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { CandyShopDataValidator } from '@liqnft/candy-shop';
import { CurrencyProvider } from '@/components/Currency';
import { ShopRouter } from '@/views/ShopRouter';
import { RPC_HOST } from '@/utils/candy-shop';

require('@solana/wallet-adapter-react-ui/styles.css');

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
});

// Used for a multi-currency shop
const currencyOptions = [
  {
    currencySymbol: 'SOL',
    treasuryMint: 'So11111111111111111111111111111111111111112',
    currencyDecimals: 9,
    priceDecimals: 3,
    volumeDecimals: 1,
    mainnetConnectionUrl: RPC_HOST,
  },
  {
    currencySymbol: '56p',
    treasuryMint: '56pdaHboK66cxRLkzkYVvFSAjfoNEETJUsrdmAYaTXMJ',
    currencyDecimals: 9,
    priceDecimals: 2,
    volumeDecimals: 1,
    mainnetConnectionUrl: RPC_HOST,
  },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CurrencyProvider currencyOptions={currencyOptions}>
        <WalletModalProvider>
          <CandyShopDataValidator>
            <ShopRouter />
          </CandyShopDataValidator>
        </WalletModalProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
