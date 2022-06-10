import { NavLink } from "react-router-dom";
function HomePage() {
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

                <button
                  className="button1 btn btn-lg rounded-pill"
                  onclick="window.open('https://hqnftrialv2.xyz/')"
                  type="button"
                >
                  <NavLink to="/nftcollection" className="a-link">
                    Explore
                  </NavLink>
                  {/* <a href="#" className="a-link">
                    Explore
                  </a> */}
                </button>
              </div>
            </div>
            <div className="yt-vid">
              <video width="100%" height="100%" autoplay muted loop>
                <source src="/Homeqube-ICO.mp4" type="video/mp4" />
                <source src="/Homeqube-ICO.ogg" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center content-eco1-bg text-sm-start">
        <div className="col link d-flex align-items justify-content-center p-5">
          <div className="container">
            <div className="row">
              <div className="col-md eco-1-title">
                <h3 className="text-uppercase">
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
                <h3 className="text-uppercase">
                  Create, Explore, and Collect HomeQube Designs
                </h3>
              </div>
              <div className="row">
                <div className="col justify-content-center p-5">
                  <img
                    src="/wallet2.png"
                    style={{
                      width: "50px",
                      height: "51px",
                    }}
                  />
                  <br />
                  <br />
                  <p>
                    <b> Set up wallet </b>
                  </p>

                  <p>
                    Connect to Homeqube.io after you set up your wallet. We
                    currently support only Phantom wallets
                  </p>
                </div>

                <div className="col justify-content-center p-5">
                  <img
                    src="/collection2.png"
                    style={{
                      width: "50px",
                      height: "51px",
                    }}
                  />
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
                  <img
                    src="/nft2.png"
                    style={{
                      width: "50px",
                      height: "51px",
                    }}
                  />
                  <br />
                  <br />
                  <p>
                    <b> Explore Designs </b>
                  </p>

                  <p>Explore thousands of homeqube NFTs design in sale.</p>
                </div>

                <div className="col justify-content-center p-5">
                  <img
                    src="/sale2.png"
                    style={{
                      width: "50px",
                      height: "51px",
                    }}
                  />
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
          <h3 className="text-uppercase">Resouce for getting started</h3>
        </div>
        <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
          <br />
          <br />
        </center>
      </section>

      <section className="p-4 text-dark text-start bg-white">
        <div className="accordion accordion-flush " id="accordionFlush">
          <div className="accordion-item ">
            <h2 className="accordion-header " id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <b className="text-uppercase">How to set up your wallet?</b>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body">
                <p className="accordion-text text-uppercase">
                  We currently supporting Phantom wallet for transactions in our
                  website. Visit this
                  <a
                    href="https://help.phantom.app/hc/en-us/articles/4406388623251-How-to-create-a-new-wallet"
                    target="_blank"
                    className="blog-link"
                  >
                    guide
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <b className="text-uppercase">
                  How to buy NFT from this website?
                </b>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body text-uppercase">
                <p className="accordion-text">
                  Homeqube solves many of the recurring problems in
                  homebuilding, including the following:
                </p>
                <ul className="accordion-text">
                  <li>
                    STEP 1: BY CLICKING THE 'CONNECT WALLET', CONNECT YOUR
                    PREFERED CRYPTO WALLET TO OUR MARKETPLACE
                  </li>
                  <li>
                    STEP 2: ON THE OUR WEBSITE YOU WILL SEE DIFFERENT CATEGORIES
                    TO CHOOSE FROM. CLICK AND YOU WILL SEE THE LIST OF THE NFTS
                    BASED ON THAT CATEGORIES.
                  </li>
                  <li>
                    STEP 3: FIND YOUR PREFERED NFT. YOU CAN ALSO VIEW ALL OF THE
                    INFORMATION OF THAT NFT WITH THEIR ATTRIBUTES AND PRICE.
                  </li>
                  <li>STEP 4: THEN, CLICK THE 'BUY NOW' BUTTON TO BUY NFT.</li>
                  <li>
                    STEP 5: CLICK APPROVE FOR THE TRANSACTION ON YOUR WALLET.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <b className="text-uppercase">
                  How to download your 3d model files?
                </b>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body text-uppercase">
                <p className="accordion-text">
                  We will guide you through the entire process, including in the
                  following areas:
                </p>
                <ul className="accordion-text">
                  <li>STEP 1: OPEN YOUR CRYPTO WALLET.</li>
                  <li>
                    STEP 2: ON YOUR WALLET YOU WILL FIND YOUR COLLECTIBLES WHERE
                    YOUR NFT IS STORED.
                  </li>
                  <li>STEP 3: CLICK YOUR LATEST NFT PURCHASED.</li>
                  <li>
                    STEP 4: CLICK THE '...' ON THE TOP RIGHT CORNER OF YOUR NFT
                    THEN CLICK 'VIEW ON SOLSCAN'
                  </li>
                  <li>
                    STEP 5: ONCE YOU'RE ON SOLSCAN WEBSITE, YOU WILL SEE ALL OF
                    THE DETAILS AND OVERVIEW ON YOUR NFTS. CLICK THE METADATA
                    TAB
                  </li>
                  <li>
                    STEP 6: CLICK THE VIEW URI METADATA, THEN YOU WILL SEE ALL
                    OF THE METADATAS THAT ARE STORED ON YOUR NFT.
                  </li>
                  <li>
                    STEP 7: FIND THE "PROPERTIES" SECTION THEN "FILES", YOU WILL
                    NOW SEE TWO DIFFERENT URI'S WITH THEIR TYPES, IMAGE/GIF AND
                    GLB, COPY THE URI OF THE GLB TYPE WITH NO QUOTATIONS ("") ON
                    BOTH SIDES THEN PASTE IT TO YOUR BROWSER.
                  </li>
                  <li>
                    STEP 8: THE FILE WILL AUTOMATICALLY DOWNLOAD TO YOUR
                    COMPUTER, THEN ONCE IT'S FINISHED YOU WILL NOW RENAMED IT TO
                    .GLB FILE. THEN YOU CAN NOW VIEW IT TO YOUR 3D VIEWER.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <b className="text-uppercase">How to claim your qube?</b>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body text-uppercase">
                <ul className="accordion-text">
                  <li>
                    STEP 1: ON OUR WEBSITE, CLICK THE CLAIM QUBE ON THE
                    NAVIGATION BAR
                  </li>
                  <li>
                    STEP 2: PASTE THE SOLSCAN LINK AND YOUR PERSONAL EMAIL
                    ADDRESS.
                  </li>
                  <li>
                    YOU CAN FIND THE SOLSCAN LINK ON YOUR CRYPTO WALLET, WHERE
                    YOUR LATEST PURCHASED NFT STORED. CLICK 'VIEW ON SOLSCAN',
                    THEN COPY THE URL ON THE TOP OF YOUR BROWSER.
                  </li>
                  <li>
                    STEP 3: CLICK THE 'SUBMIT' BUTTON THEN WAIT FOR OUR EMAIL.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <b className="text-uppercase">
                  How to add your own home design NFT collection to our website?{" "}
                </b>
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body text-uppercase">
                <p className="accordion-text">
                  You may answer this
                  <a href="" className="blog-link">
                    form
                  </a>
                  or email us at about@homeqube.com for your interested in
                  posting your collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 text-center content-eco1-bg">
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
        <div className="ai-header row-icons">
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
