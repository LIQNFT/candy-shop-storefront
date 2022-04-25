# WOOFers NFT Marketplace Candy Shop + v2


## Getting Set Up

### Prerequisites

**REQUIRE NODEJS VERSION <= 16 (version 17 not supported)**.

* Download a Code Editor such as Visual Studio Code.

* Ensure you have both `nodejs` and `yarn` installed. `nodejs` recommended version is 16.

* Follow the instructions [here](https://docs.solana.com/cli/install-solana-cli-tools) to install the Solana Command Line Toolkit.

* Follow the instructions [here](https://hackmd.io/@levicook/HJcDneEWF) to install the Metaplex Command Line Utility.
  * Installing the Command Line Package is currently an advanced task that will be simplified eventually.

#### 3. Build the project and test. Go to the root project directory and type the commands :

To install dependencies:

```
yarn install
```

To test the app locally in the development mode (localhost:3000) :

```
yarn start
```

To build the production package (generated in build folder of the project) :

```
yarn build
```

#### 4. Customize the website UI :

##### 4.1 `Index.css` : update 5 main CSS variables with your custom colors :

```
:root {
  --main-background-color: #343A50;
  --card-background-color: #804980;
  --countdown-background-color: #433765;
  --main-text-color:#F7F6F4;
  --title-text-color:#3CBA8B;
}
```

Next to that, make sure to update background image by overwriting your own background PNG file in src/img folder.

##### 4.2 `public` folder :

- Update existing demo cool cats images (cool-cats.gif, logo.png) with your owns images in project `public` folder. Make sure to name them identically.
- Add your custom website title in `index.html` : `<title>Mint Page</title>`

##### 4.3 `Home.tsx` :

Scroll down down to line 380 (`return <main> [...]`) and start to update all titles/menu/text/images/text... as wished in the whole React HTML block.

That's it ! Enjoy your beautiful candy machine :)


##  Available Commands Recap :

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

## Need Help ?

You can contact me directly on Discord : BloodSpilll#9625

## To thank me with a small SOL tip :]

`58SevvhmaN4SfCop2HkepAWyM5zykr7Afiv91PAAfPqR`
