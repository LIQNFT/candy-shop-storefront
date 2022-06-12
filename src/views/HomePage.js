import { NavLink } from "react-router-dom";
import Player from 'react-video-js-player';
import Homeqube from "../video/Homeqube-ICO.mp4"
import HomequbeOGG from "../video/Homeqube-ICO.ogg"
import Accordion from "./Accordion";
import Cards from "./Cards";


function HomePage() {
  const accordionData = [
    {
      title: `How to set up your wallet?`,
      step1: ` We currently supporting Phantom wallet for transactions in our
      website. Visit this`,
      state2: `d-none`,
      state3: `d-none`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink1: `d-none`,
     

    },
    {
      title: 'How to buy NFT from this website?',
      step1: `Step 1: By clicking the 'Connect Wallet', connect your prefered crypto wallet to our marketplace.`,
      step2: `Step 2: On the our website you will see different categories to choose from. Click and you will see the list of the NFTs based on that categories.`,
      step3: `Step 3: Find your prefered NFT. You can also view all of the information of that NFT with their attributes and price. `,
      step4: `Step 4: Then, click the 'Buy Now' button to buy NFT.`,
      step5: `Step 5: Click Approve for the transaction on your wallet.`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink: `d-none`,
      statelink1: `d-none`,
    },
    {
      title: 'How to download your 3d model files?',
      step1: `Step 1: Open your crypto wallet.`,
      step2: `Step 2: On your wallet you will find your collectibles where your NFT is stored.`,
      step3: `Step 3: Click your latest NFT purchased.`,
      step4: `Step 4: Click the '...' on the top right corner of your NFT then click 'View on Solscan'`,
      step5: `Step 5: Once you're on Solscan Website, you will see all of the details and overview on your NFTs. Click the Metadata Tab`,
      step6: `Step 6: Click the View URI Metadata, then you will see all of the metadatas that are stored on  your NFT.`,
      step7: `Step 7: Find the "properties" section then "files", you will now see two different uri's with their types, image/gif and glb, copy the uri of the glb type with no quotations ("") on both sides then paste it to your browser.`,
      step8: `Step 8: The file will automatically download to your computer, then once it's finished you will now renamed it to .glb file. Then you can now view it to your 3d Viewer.`,
      statelink: `d-none`,
      statelink1: `d-none`,
     
    },
    {
      title: 'How to claim your QUBE?',
      step1: `Step 1: On our website, click the Claim Qube on the Navigation Bar`,
      step2: `Step 2: Paste the Solscan Link and your personal Email Address.`, 
      step3: `You can find the Solscan Link on your crypto wallet, where your latest purchased NFT stored. Click 'View On Solscan', then copy the URL on the top of your browser.`,
      step4: `Step 3: Click the 'Submit' button then wait for our email.`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
      statelink: `d-none`,
      statelink1: `d-none`,
      
    },
    {
      title: `How to add your own home design NFT collection to our website?`,
      step1: `You may answer this`,
      statelink: `d-none`,
      state2: `d-none`,
      state3: `d-none`,
      state4: `d-none`,
      state5: `d-none`,
      state6: `d-none`,
      state7: `d-none`,
      state8: `d-none`,
    }
  ];
  return (
    <>
      <section className="showcase text-light p-5 text-center text-sm-start">
        <div className="container-bg container">
          <div className="d-sm align-content-center justify-content-between container-content">
            <div>
              <h1 className="intro">
                Design explore
                <br />
                And Collect Homeqube
                <br />
                Designs as NFT
              </h1>

              <p className="intro-sentence text-uppercase">
                We are solana based NFT “Launchpad-Marketplace” For home <br />{" "}
                manufacturing, from 3d printed parts, home designs, home system{" "}
                <br /> algorithms, decors, fixtures Furnitures, Prototypes, and{" "}
                <br /> related others to homebuilding both for the metaverse and
                IRL.
              </p>

              <div className="intro-btn2">
                <button
                  onclick="window.open('https://www.homeqube.ai/')"
                  className="button2 btn btn-lg rounded-pill"
                >
                  <a href="https://www.homeqube.ai/" className="a-link">
                    Create
                  </a>
                </button>
                <NavLink to="/nftcollection" className="a-link">
                <button
                  className="button1 btn btn-lg rounded-pill"
                  type="button"
                >    
                    Explore
                </button>
                </NavLink>
              </div>
            </div>
            <div className="yt-vid">
              <video width="100%" height="100%" autoPlay loop muted>
                <source src = {Homeqube} type="video/mp4" />
                <source src= {HomequbeOGG} type="video/ogg" />
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

      <section className="text-center content-eco1-bg text-sm-start">
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
      </section>

      <section className="text-center content-eco1-bg text-sm-start">
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
        <div className="col link d-flex align-items justify-content-center p-5">
          <div className="container">
            <div className="row">
              <div className="col-md eco-1-title row-icons">
                <h3 className="text-uppercase ai-title">
                  Create, Explore, and Collect HomeQube Designs
                </h3>
              </div>
              <div className="row">
                <div className="col justify-content-center p-5">
                <img src="/walletImg2.png" class="card-img-top" alt="..."/>
                  {/* <img src="img/Icons/wallet2.png" style=" width: 50px; height: 51px;" alt="" srcset="">  */}
                    <br/>
                    <br/>
                    <p> <b> Set up wallet </b></p>

                    <p>Connect to Homeqube.io after you set up your wallet. We currently support only Phantom wallets</p>
                </div>

                <div className="col justify-content-center p-5">
                <img src="/To-Design-and-Earn.jpg" class="card-img-top" alt="..."/>
                  <br />
                  <br />
                  <p>
                    <b> Create Designs </b>
                  </p>

                  <p>
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
                <img src="/exploreIMG.jpg" class="card-img-top" alt="..."/>
                  <br />
                  <br />
                  <p>
                    <b> Explore Designs </b>
                  </p>

                  <p>Explore thousands of homeqube NFTs design in sale.</p>
                </div>

                <div className="col justify-content-center p-5">
                <img src="/saleIMG.jpg" class="card-img-top" alt="..."/>
                  <br />
                  <br />
                  <p>
                    <b> Collect Design </b>
                  </p>

                  <p>
                    Qube shall be given to the primary buyers of our NFTs. Qube
                    can be used to access the features of fourthcoming app.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 text-center text-center content-eco1-bg text-sm-start">
        <br />
        <br />
        <br />
        <div className="col-md eco-1-title">
          <h3 className="text-uppercase ai-title">Resource for getting started</h3>
        </div>
        <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
          <br />
          <br />
        </center>
      </section>

      <section className="p-4 text-dark text-start bg-white">
 
           <div className="accordion">
                            {accordionData.map(({ title, step1, step2, step3, step4, step5, step6, step7, step8, state1, state2, state3, state4, state5, state6, state7, state8, statelink,statelink1 }) => (
                            <Accordion title={title} step1={step1} state1={state1} step2={step2} state2 = {state2} step3={step3} state3 = {state3} step4={step4} state4 = {state4} step5={step5} state5 = {state5} step6={step6} state6 = {state6} step7={step7} state7 = {state7} step8={step8} state8 = {state8} statelink = {statelink} statelink1 = {statelink1} />
                                ))}
          </div>

      
      </section> 
      
      <section className="text-center content-eco1-bg">
      <section className="pt-5 text-center text-center content-eco1-bg text-sm-start">
        <br />
        <br />
        <br />
        <div className="col-md eco-1-title">
          <h3 className="text-uppercase ai-title">NFT COLLECTIONS</h3>
        </div>
        <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
          <br />
          <br />
        </center>
      </section>
      <Cards />
      </section>
      
      <section className="px-5 pb-5 text-center content-eco1-bg">
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
        <div className="ai-header">
          <p className="ai-title">Event Roadmap</p>
          <p>
            We listed 2,450 regular and 50 special NFTs on first ever Homeqube
            Design NFT collection. After we hit a sell percentage, we can
            proceed on other developments of our work
          </p>
          <br />
          <center>
            <div className="home-rectangle"></div>
          </center>
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
      </section>
    </>
  );
}
export default HomePage;
