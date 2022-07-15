import { PublicKey, Cluster } from "@solana/web3.js";
import { CandyShop } from "@liqnft/candy-shop-sdk";

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.REACT_APP_SOLANA_NETWORK! as Cluster;

const candyShop = new CandyShop({
  candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
  treasuryMint: CANDY_SHOP_TREASURY_MINT,
  candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
  env: NETWORK,
  settings: {
    currencyDecimals: Number(
      process.env.REACT_APP_SPL_TOKEN_TO_MINT_DECIMALS || 9
    ),
    currencySymbol: process.env.REACT_APP_SPL_TOKEN_TO_MINT_NAME || "SOL",
  },
});

export {
  candyShop,
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
};
