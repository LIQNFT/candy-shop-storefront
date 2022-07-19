import { NavLink } from "react-router-dom";
// import Player from "react-video-js-player";
import Homeqube from "../video/Homeqube-ICO.mp4";
import HomequbeOGG from "../video/Homeqube-ICO.ogg";
import Accordion from "./Accordion";
import Cards from "./Cards";
import NftNavLinks from "../components/NavBar/NftNavLinks";
import MarketplaceWithFilter from "./MarketplaceWithFilter";
import LandingPage from "./landingpage";

function HomePage() {
  const accordionData = [
    {
      title: `HOW TO SET UP YOUR WALLET?`,
      step1: ` WE CURRENTLY SUPPORTING PHANTOM WALLET FOR TRANSACTIONS ON OUR WEBSITE. VISIT THIS`,
      state2: `d-none`,
      state3: `d-none`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink1: `d-none`,
      statelink2: `d-none`,
      statelink3: `d-none`,
      statelink4: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: "How to buy NFT from this website?",
      step1: `STEP 1: CONNECT YOUR WALLET TO OUR MARKETPLACE BY CLICKING ‘CONNECT WALLET’`,
      step2: `STEP 2: ON OUR WEBSITE, YOU WILL SEE DIFFERENT CATEGORIES TO CHOOSE FROM. CLICK AND SEE THE LIST OF THE NFTS BASED ON THAT CATEGORY.`,
      step3: `STEP 3: FIND YOUR PREFERRED NFT. YOU CAN ALSO VIEW ALL THE INFORMATION ABOUT THAT NFT WITH THEIR ATTRIBUTES AND PRICE. `,
      step4: `STEP 4: CLICK THE “BUY NOW” BUTTON TO BUY AN NFT.`,
      step5: `STEP 5: CLICK APPROVE FOR THE TRANSACTION ON YOUR WALLET.`,
      step8:  `NOTE: UPON BUYING OUR “STRUCTURAL LEGACIES” COLLECTION, YOU ARE ELIGIBLE TO CLAIM “QUBES”, THE TOKEN OF HOMEQUBE.`,
      state6: `d-none`,
      state7: `d-none`,
      
      statelink: `d-none`,
      statelink1: `d-none`,
      statelink3: `d-none`,
      statelink4: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink2: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: "HOW TO DOWNLOAD AND OPEN YOUR 3D MODEL FILES?",
      step1: `STEP 1: CONNECT YOUR WALLET TO OUR MARKETPLACE BY CLICKING ‘CONNECT WALLET’`,
      step2: `STEP 2: GO TO `,
      step3: `STEP 3: CLICK ON THE NFT.`,
      step4: `STEP 4: CLICK “DOWNLOAD GLB”. YOUR 3D FILE WILL BE DOWNLOADED.`,
      step5: `STEP 5: TO OPEN YOUR 3D FILE, ADD A “.GLB” WHEN YOU RENAME IT.`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink: `d-none`,
      statelink1: `d-none`,
      statelink2: `d-none`,
      statelink3: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: "HOW TO CLAIM YOUR QUBE?",
      step1: `YOU ARE ELIGIBLE TO CLAIM QUBE TOKEN WHEN YOU BUY OUR STRUCTURAL LEGACY NFTS. MAKE SURE THAT THE NFT YOU BOUGHT HAS THE SYMBOL “HOMEQUBE” AND IS MINTED FROM THIS`,
      step2: `STEP 1: FIND THE URL CONTAINING YOUR NFT AT SOLANA EXPLORER `,
      step3: `STEP 2: GO TO`,
      step4: `STEP 3: PASTE THE URL IN THE TEXT BOX.`,
      step5: `STEP 4: CLICK THE 'SUBMIT' BUTTON THEN WAIT FOR THE AIRDROP OF THE QUBE TOKEN WITHIN 2 DAYS.`,
      step7: `NOTE: IN CASE YOU DIDN’T RECEIVE THE QUBE TOKEN WITHIN 2 DAYS, YOU MAY EMAIL US AT `,

      statelink4: `d-none`,
      state8: `d-none`,
      statelink: `d-none`,
      statelink1: `d-none`,
      statelink5: `d-none`,
      statelink7: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: `HOW MUCH QUBE WILL I RECEIVE AFTER BUYING A HOMEQUBE NFT?`,
      step1: `THE AMOUNT OF QUBE THAT YOU WILL BE RECEIVED WILL BE DEPENDENT ON THE EXCHANGE RATE OF SOLANA TO USD DURING YOUR PURCHASE. WE PEGGED OUR QUBE TOKEN AT $3 PER QUBE.`,
      step2: `FOR EXAMPLE, IF YOU BOUGHT OUR NFT AT 9 SOL AT USD 45 PER SOL, YOU WILL RECEIVE 135 QUBES.`,
      step3: `NOTE: YOU WILL NOT ABLE TO RECEIVE QUBE TOKEN AUTOMATICALLY WHEN YOU BUY A HOMEQUBE NFT.`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink1: `d-none`,
      statelink2: `d-none`,
      statelink1: `d-none`,
      statelink3: `d-none`,
      statelink4: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: `CAN I POST MY OWN NFT COLLECTION? WHAT KIND OF NFTS CAN I AUCTION TO SELL IN THIS WEBSITE?`,
      step1: `YOU CAN POST YOUR NFTS HERE RELATED TO HOME DESIGNS, ASSEMBLIES, AND PARTS. WE ACCEPT IMAGE (JPG, GIF, SVG), 3D (GLB) FILES FOR THE NFTS.`,
      step2: `NOTE: POSTING AN NFT INTO OUR WEBSITE COSTS 5 QUBES.`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      state3: `d-none`,
      statelink1: `d-none`,
      statelink2: `d-none`,     
      statelink3: `d-none`,
      statelink4: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink: `d-none`,
      statelink8: `d-none`,
      
    },
    {
      title: `HOW TO ADD YOUR HOME DESIGN NFT COLLECTION TO OUR WEBSITE?`,
      step1: `We will adding this functionality soon.`,
      statelink: `d-none`,
      state2: `d-none`,
      state3: `d-none`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink2: `d-none`,
      statelink1: `d-none`,
      statelink3: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink8: `d-none`,
    },
    {
      title: `HOW CAN I KNOW MORE ABOUT HOMEQUBE?`,
      step1: `YOU MAY VISIT`,
      state2: `d-none`,
      state3: `d-none`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink1: `d-none`,
      statelink2: `d-none`,     
      statelink3: `d-none`,
      statelink4: `d-none`,
      statelink5: `d-none`,
      statelink6: `d-none`,
      statelink7: `d-none`,
      statelink: `d-none`,
      
      
    },
  ];
  return (
    <>
      <section className="showcase text-light p-5 text-center text-sm-start">
        <div className="container-bg container">
          <div className="d-sm align-content-center justify-content-between container-content">
            <div>
              <h1 className="intro">
                Deconstructing Systems.
                <br />
                Decentralizing Power.
                <br />
                Democratizing Knowledge.
              </h1>

              <p className="intro-sentence text-uppercase mt-5">
                We are solana based NFT “Launchpad-Marketplace” For home <br />{" "}
                manufacturing, from 3d printed parts, home designs, home system{" "}
                <br /> algorithms, decors, fixtures Furnitures, Prototypes, and{" "}
                <br /> related others to homebuilding both for the metaverse and
                IRL.
              </p>

              <div className="intro-btn2">
                <a href="https://www.community.homeqube.com/" className="a-link">
                  <button
                    onclick="window.open('https://www.community.homeqube.com/')"
                    className="button2 btn btn-lg rounded-pill"
                  >
                    Mint
                  </button>
                </a>
                <NavLink to="/nftcollection" className="a-link">
                  <button
                    className="button1 btn btn-lg rounded-pill"
                    type="button"
                  >
                    Collections
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="yt-vid">
              <video width="100%" height="100%" autoPlay loop muted>
                <source src={Homeqube} type="video/mp4" />
                <source src={HomequbeOGG} type="video/ogg" />
              </video>
              {/* <Player 
             src={videoSrc}
             width="560"
             height="290"
             muted = {true}
             autoPlay = {true}
             />   */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-center content-eco1-bg text-sm-start">
        <div className="col link d-flex align-items justify-content-center p-5">
          <div className="container">
            <div className="row">
              <div className="col-md eco-1-title">
                <h3 className="text-uppercase ai-title">
                  WE ARE NOT JUST AN NFT MARKETPLACE
                </h3>
                <div>
                  <img src="/Rectangle 22.svg" />
                </div>
              </div>

              <div className="d-sm align-content-center group3 content-info">
                <div className="img-poweredcon">
                  <img
                    className="img-fluid img-powered"
                    src="/Print-parts.jpg"
                  />
                </div>
                <div className="container-fluid pt-5">
                  <p className="intro-sentence-homeapp d-md-wrap text-uppercase text-start">
                    <b>
                      Avenue for 3d printing parts community:
                      <br />
                    </b>{" "}
                    We envisioned this website as a platform for showcasing 3d
                    printed products for a variety of home building
                    applications. <br />
                    <br />
                    <b>
                      Showcase your home design ideas:
                      <br />
                    </b>{" "}
                    You can add your Home Building ideas as an NFT collection in
                    our website. We will also have Home design contest, which
                    will give you the opportunity against each other designs,
                    for a chance of earning QUBE tokens, and displaying your
                    work of art.
                    <br />
                    <br />
                    We will be changing QUBE fee for Annual placement on our
                    BETA Phase 2 around 2023.
                    <br />
                    <br />
                    <b>
                      Earn cubes:
                      <br />
                    </b>
                    What exactly is a qube? Qube is a token used in homeqube
                    app. This token primarily used to access the home building
                    features of forthcoming app. You can receive Qube by Buying
                    our homeqube NFT Collections.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="text-center content-eco1-bg text-sm-start">
       
        <div className="col link d-flex align-items justify-content-center p-5 row-icons">
          <div className="container">
            <div className="row">
              <div className="col-md eco-1-title">
                <h3 className="text-uppercase ai-title">
                  Create, Explore, and Collect HomeQube Designs
                </h3>
                <div>
                  <img src="/Rectangle 22.svg" />
                </div>
              </div>
          
              <div className="row">
                <div className="col justify-content-center p-5">
                  <img src="/walletImg2.png" class="card-img-top" alt="..." />
                 
                  <br />
                  <br />
                  <p className="text-uppercase">
                    {" "}
                    <b> Set up wallet </b>
                  </p>

                  <p className="text-uppercase">
                    Connect to Homeqube.io after you set up your wallet. We
                    currently support only Phantom wallets
                  </p>
                </div>

                <div className="col justify-content-center p-5">
                  <img
                    src="/To-Design-and-Earn.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <br />
                  <br />
                  <p className="text-uppercase">
                    <b> Create Designs </b>
                  </p>

                  <p className="text-uppercase">
                    We will releasing our beta release of our homeqube app
                    within the Q3 of 2022. Visit this{" "}
                    <a
                      href="https://www.qube.homeqube.com/"
                      target="_blank"
                      className="blog-link"
                    >
                      link
                    </a>
                  </p>
                </div>

                <div className="col justify-content-center p-5">
                  <img src="/exploreIMG.jpg" class="card-img-top" alt="..." />
                  <br />
                  <br />
                  <p className="text-uppercase">
                    <b> Explore Designs </b>
                  </p>

                  <p className="text-uppercase">Explore thousands of homeqube NFTs design in sale.</p>
                </div>

                <div className="col justify-content-center p-5">
                  <img src="/saletunay.jpg" class="card-img-top" alt="..." />
                  <br />
                  <br />
                  <p className="text-uppercase">
                    <b> Collect Design </b>
                  </p>

                  <p className="text-uppercase">
                    Qube shall be given to the primary buyers of our NFTs. Qube
                    can be used to access the features of fourthcoming app.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-5 text-center text-center content-eco1-bg text-sm-start">
        <img
          src="/Left-Box-1.svg"
          className="box-animation-1 img-fluid d-sm-none d-md-block"
        />
        <img
          src="/Left-Box-2(UpperSide).svg"
          className="box-animation-2 d-sm-none d-md-block"
        />
        <img
          src="/Left-Box-3(BottomSide).svg"
          className="box-animation-3 d-sm-none d-md-block"
        />
        <br />
        <br />
        <br />
        <div className="col-md eco-1-title">
          <p className="ai-title-home">Getting started</p>
        </div>
        <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
          <br />
          <br />
        </center>
      </section>

      <section className="p-4 text-dark text-start bg-white" style={{fontSize: "2rem"}}>
        <div className="accordion text-uppercase">
          {accordionData.map(
            ({
              title,
              step1,
              step2,
              step3,
              step4,
              step5,
              step6,
              step7,
              step8,
              state1,
              state2,
              state3,
              state4,
              state5,
              state6,
              state7,
              state8,
              statelink,
              statelink1,
              statelink2,
              statelink3,
              statelink4,
              statelink5,
              statelink6,
              statelink7,
              statelink8,
            }) => (
              <Accordion
                title={title}
                step1={step1}
                state1={state1}
                step2={step2}
                state2={state2}
                step3={step3}
                state3={state3}
                step4={step4}
                state4={state4}
                step5={step5}
                state5={state5}
                step6={step6}
                state6={state6}
                step7={step7}
                state7={state7}
                step8={step8}
                state8={state8}
                statelink={statelink}
                statelink1={statelink1}
                statelink2={statelink2}
                statelink3={statelink3}
                statelink4={statelink4}
                statelink5={statelink5}
                statelink6={statelink6}
                statelink7={statelink7}
                statelink8={statelink8}
              />
            )
          )}
        </div>
      </section>

      <section className="text-center content-eco1-bg pt-5">
        <img
          src="/Right-Box-1(Faded).svg"
          className="img-fluid right-box-2nd-animation-1"
        />
        <img
          src="/Right-Box-2(Upper).svg"
          className="img-fluid right-box-2nd-animation-2"
        />
        <img
          src="/Right-Box-3(Bottom).svg"
          className="img-fluid right-box-2nd-animation-3"
        />
        <section className="pt-5 text-center text-center content-eco1-bg text-sm-start">
        
          <div className="col-md eco-1-title">
            <p className="ai-title-home">NFT COLLECTIONS</p>
          </div>
           <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p> 
          
           <center> 
            <div className="faq-rectangle"></div>
          </center>
          <br />
          <br />
          <LandingPage />
        </section>
        {/* <nav className="Menu">
            <NftNavLinks />
        </nav> */}
        {/* <Cards /> */}
        
      </section>

      {/* <section className="text-center content-eco1-bg p-5">
        <div className="col-md eco-1-title">
          <h3 className="text-uppercase ai-title">Design Contest</h3>
        </div>
        <div class="display">
          <div class="img-container">
            <img src="/Contest.png" className="img-fluid" alt="..." />
          </div>
        </div>
      </section> */}

      {/* <section className="px-5 pb-5 pt-5 text-center content-eco1-bg">
       
        <div className="ai-header">
          <p className="ai-title">Event Roadmap</p>
          <p className="text-uppercase">
            We listed 2,450 regular and 50 special NFTs on first ever Homeqube
            Design NFT collection. After we hit a sell percentage, we can
            proceed on other developments of our work
          </p>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div
          className="timeline-steps aos-init aos-animate text-uppercase"
          data-aos="fade-up"
        >
          <div className="timeline-step">
            <div
              className="timeline-content"
              data-toggle="popover"
              data-trigger="hover"
            >
              <p>0%</p>
              <div className="inner-circle"></div>
              <p className="roadmap-header-h3">NFT Website lauching.</p>
              <div className="roadmap-list1"></div>
            </div>
          </div>

          <div className="timeline-step">
            <div
              className="timeline-content"
              data-toggle="popover"
              data-trigger="hover"
            >
              <p>15%</p>
              <div className="inner-circle"></div>
              <p className="roadmap-header-h3">
                Start development of the full version of homeqube app.
              </p>
              <div className="roadmap-list1"></div>
            </div>
          </div>

          <div className="timeline-step">
            <div
              className="timeline-content"
              data-toggle="popover"
              data-trigger="hover"
            >
              <p>40%</p>
              <div className="inner-circle"></div>
              <p className="roadmap-header-h3">
                Tie-up with designers, manufacturers, and professionals for app
                development.
              </p>
              <div className="roadmap-list1"></div>
            </div>
          </div>
          <div className="timeline-step">
            <div
              className="timeline-content"
              data-toggle="popover"
              data-trigger="hover"
            >
              <p>70%</p>
              <div className="inner-circle"></div>
              <p className="roadmap-header-h3">
                Buying 3d printing equipments for home construction
              </p>
              <div className="roadmap-list1"></div>
            </div>
          </div>
          <div className="timeline-step mb-0">
            <div
              className="timeline-content"
              data-toggle="popover"
              data-trigger="hover"
            >
              <p>100%</p>
              <div className="inner-circle"></div>
              <p className="roadmap-header-h3">
                Initiation of the qube liquidity pool.
              </p>
              <div className="roadmap-list1"></div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default HomePage;
