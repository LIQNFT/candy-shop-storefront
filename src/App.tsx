import { ThemeProvider, createTheme } from '@material-ui/core';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { CandyShopDataValidator } from '@liqnft/candy-shop';
import { ShopRouter } from '@/views/ShopRouter';

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WalletModalProvider>
        <CandyShopDataValidator>
          <ShopRouter />
        </CandyShopDataValidator>
      </WalletModalProvider>
    </ThemeProvider>
  );
};

export default App;
