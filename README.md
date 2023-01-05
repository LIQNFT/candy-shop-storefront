# Candy Shop Storefront

Ethereum, Polygon and Solana NFT storefront powered by [Candy Shop](https://github.com/LIQNFT/candy-shop).

* [Docs](https://liqnft.gitbook.io/candy-shop/candy-shop/getting-started)
* [Website](https://candyshop.space/)

Key features:
* ETH, MATIC, SOL, SPL and ERC20 token marketplace
* SOL and SPL token NFT auctions
* Marketplace with modal or single NFT view
* NFT filtering, sort and search
* Multi collection marketplace
* Multi currency marketplace
* Marketplace activity

<img width="1363" alt="Solana NFT Storefront" src="https://user-images.githubusercontent.com/89616076/163665962-f8f9fa00-2143-4234-bb35-13955b55220e.png">

## One-Click Vercel Deployment

One-click solution to clone this project to your GitHub and deploy the prod package on a Vercel.
Your only task will be to customize your GitHub fork of this project and commit updates.
Vercel will automatically deploy new prod packages for each new commit.

**remember to select NodeJS > v.16 for deployment**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLIQNFT%2Fcandy-shop-storefront&env=REACT_APP_NETWORK,REACT_APP_RPC_HOST,REACT_APP_CANDY_SHOP_CREATOR_ADDRESS,REACT_APP_CANDY_SHOP_TREASURY_MINT,REACT_APP_CANDY_SHOP_PROGRAM_ID&envDescription=Please%20refer%20to%20the%20README&envLink=https%3A%2F%2Fgithub.com%2FLIQNFT%2Fcandy-shop-storefront&demo-title=NFT%20Marketplace&demo-description=Host%20your%20own%20marketplace%20with%20Candy%20Shop&demo-url=https%3A%2F%2Fgithub.com%2FLIQNFT%2Fcandy-shop-storefront&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F89616076%2F163665962-f8f9fa00-2143-4234-bb35-13955b55220e.png)



## Setup

### Prerequisites

* Ensure you have both `nodejs` and `yarn` installed. `nodejs` recommended version is 16.

### Installation

#### 1. Fork the project & clone it. Example:

```
git clone https://github.com/LIQNFT/candy-shop-storefront/
```

#### 2. Define your environment variables (.env file)

Rename the `.env.example` file at the root directory to `.env` and update the following variables in the `.env` file :

```
REACT_APP_CANDY_SHOP_CREATOR_ADDRESS=__PLACEHOLDER__
REACT_APP_CANDY_SHOP_TREASURY_MINT=__PLACEHOLDER__
REACT_APP_CANDY_SHOP_PROGRAM_ID=__PLACEHOLDER__
```
You may get these parameters by creating a shop [here](https://candyshop.space).

```
REACT_APP_NETWORK=devnet
```

This identifies the Ethereum, Polygon or Solana network you want to connect to. Options are:

* Ethereum: `ETH` (mainnet) and `GOERLI` (testnet)
* Polygon: `MATIC` (mainnet) and `MUMBAI` (testnet)
* Solana: `mainnet-beta` (mainnet) and `devnet` (testnet)

```
REACT_APP_RPC_HOST=https://api.devnet.solana.com
```

This identifies the RPC server your web app will access the Ethereum, Polygon or Solana network through.

#### 4. Customize your storefront:

##### 4.1 `App.css`: update 5 main CSS variables with your custom colors :

```
:root {
  --main-background-color: #343A50;
  --card-background-color: #804980;
  --countdown-background-color: #433765;
  --main-text-color:#F7F6F4;
  --title-text-color:#3CBA8B;
}
```

If you are using a background image, make sure to update it by overwriting your own background PNG file in src/img folder.

##### 4.2 `public` folder:

- Update existing demo cool cats images (cool-cats.gif, logo.png) with your owns images in project `public` folder. Make sure to name them identically.

That's it! Enjoy your beautiful storefront!

##  Available Commands Recap:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
