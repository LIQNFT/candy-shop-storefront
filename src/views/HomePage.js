import { NavLink } from "react-router-dom";
// import Player from "react-video-js-player";
import Homeqube from "../video/Homeqube-ICO.mp4";
import HomequbeOGG from "../video/Homeqube-ICO.ogg";
import Accordion from "./Accordion";
import Cards from "./Cards";
import NftNavLinks from "../components/NavBar/NftNavLinks";
import MarketplaceWithFilter from "./MarketplaceWithFilter";
import LandingPage from "./landingpage";
import RaffleDraw from "../components/RaffleDraw";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  const handleChangelng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const GlobeIcon = ({ width = 40, height = 40, color = "#4e4e4e" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      class="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  );
  const accordionData = [
    {
      title: `${t("ITEM1")}`,
      step1: ` ${t("SUBITEM1")}`,
      steplink: `https://help.phantom.app/hc/en-us/articles/4406388623251-How-to-create-a-new-wallet`, //For Links
      linkname: `${t("LINKITEM1")}`, //For LinkName
      othertext: `${t("OTHERTEXT1")}`, //For Other Text after Link
      //--------------Display Attributes--------------
      state2: `d-none`, //Display None for this Step
      state3: `d-none`, //Display None for this Step
      state4: `d-none`, //Display None for this Step
      state5: `d-none`, //Display None for this Step
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      statelink3: `d-none`, //Display None for this Link
      statelink6: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM2")}`,
      step1: `STEP 1: ${t("ITEM2-SUBITEM1")}`,
      step2: `STEP 2: ${t("ITEM2-SUBITEM2")}`,
      step3: `STEP 3: ${t("ITEM2-SUBITEM3")}`,
      step4: `STEP 4: ${t("ITEM2-SUBITEM4")}`,
      step5: `STEP 5: ${t("ITEM2-SUBITEM5")}`,
      step8: `${t("ITEM2-SUBITEM6")}`,
      //--------------Display Attributes--------------
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      statelink: `d-none`, //Display None for this Link
      statelink3: `d-none`, //Display None for this Link
      statelink6: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM3")}`,
      step1: `STEP 1: ${t("ITEM3-SUBITEM1")}`,
      step2: `STEP 2: ${t("ITEM3-SUBITEM2")}`,
      step3: `STEP 3: ${t("ITEM3-SUBITEM3")}`,
      step4: `STEP 4: ${t("ITEM3-SUBITEM4")}`,
      step5: `STEP 5: ${t("ITEM3-SUBITEM5")}`,
      steplink1: `/mycollection`, //For Links
      linkname1: `${t("ITEM3-LINKITEM1")}`, //For Link Name
      othertext1: `${t("ITEM3-OTHERTEXT1")}`, ////For Othertext after Link
      //--------------Display Attributes--------------
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      statelink: `d-none`, //Display None for this Link

      statelink6: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM4")}`,
      step1: `${t("ITEM4-SUBITEM1")}`,
      step2: `STEP 1: ${t("ITEM4-SUBITEM2")} `,
      step3: `STEP 2: ${t("ITEM4-SUBITEM3")}`,
      step4: `STEP 3: ${t("ITEM4-SUBITEM4")}`,
      step5: `STEP 4: ${t("ITEM4-SUBITEM5")}`,
      step7: `${t("ITEM4-SUBITEM6")}`,
      steplink: `https://explorer.solana.com/address/8VzbpTNAJs5b493qNJVqKAjuNAQWFdjrdf1pd9uUKZcB`, //For Links
      linkname: `${t("ITEM4-LINKITEM1")}.`, //For Link Name
      steplink1: `https://explorer.solana.com/`, //For Links
      linkname1: `(HTTPS://EXPLORER.SOLANA.COM/) `, //For Link Name
      othertext1: `.`, //For Othertext
      steplink2: `/claimqubes`, //For Links
      linkname2: `CLAIM QUBES`, //For Link Name
      othertext2: `.`, //For Othertext
      steplink3: `mailto:ABOUT@HOMEQUBE.COM`, //For Links
      linkname3: ` ABOUT@HOMEQUBE.COM`, //For Link Name
      othertext3: `.`, //For Othertext
      //--------------Display Attributes--------------
      state8: `d-none`, //Display None for this Step
    },
    {
      title: `${t("ITEM5")}`,
      step1: `${t("ITEM5-SUBITEM1")}`,
      step2: `${t("ITEM5-SUBITEM2")}`,
      step3: `${t("ITEM5-SUBITEM3")}`,
      steplink2: `/claimqubes`, //For Links
      linkname2: `CLAIM QUBE`, //For Link Name
      othertext2: `${t("ITEM5-LINKITEM1")}`, //For Othertext
      //--------------Display Attributes--------------
      state4: `d-none`, //Display None for this Step
      state5: `d-none`, //Display None for this Step
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      statelink6: `d-none`, //Display None for this Link
      statelink: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM6")}`,
      step1: `${t("ITEM6-SUBITEM1")}`,
      step2: `${t("ITEM6-SUBITEM2")}`,
      //--------------Display Attributes--------------
      state4: `d-none`, //Display None for this Step
      state5: `d-none`, //Display None for this Step
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      state3: `d-none`, //Display None for this Step
      statelink3: `d-none`, //Display None for this Link
      statelink6: `d-none`, //Display None for this Link
      statelink: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM7")}`,
      step1: `${t("ITEM7-SUBITEM1")}`,
      //--------------Display Attributes--------------
      state2: `d-none`, //Display None for this Step
      state3: `d-none`, //Display None for this Step
      state4: `d-none`, //Display None for this Step
      state5: `d-none`, //Display None for this Step
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      statelink: `d-none`, //Display None for this Link
      statelink3: `d-none`, //Display None for this Link
      statelink6: `d-none`, //Display None for this Link
    },
    {
      title: `${t("ITEM8")}`,
      step1: `${t("ITEM8-SUBITEM1")}`,
      steplink: `https://www.qube.homeqube.com/`, //For Links
      linkname: `WWW.QUBE.HOMEQUBE.COM`, //For Link Name
      othertext: `${t("ITEM8-OTHERTEXT1")}`, //For Othertext
      //--------------Display Attributes--------------
      state2: `d-none`, //Display None for this Step
      state3: `d-none`, //Display None for this Step
      state4: `d-none`, //Display None for this Step
      state5: `d-none`, //Display None for this Step
      state6: `d-none`, //Display None for this Step
      state7: `d-none`, //Display None for this Step
      state8: `d-none`, //Display None for this Step
      statelink3: `d-none`, //Display None for this Link
      statelink6: `d-none`, //Display None for this Link
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
                <a href="https://mint.homeqube.io/" className="a-link">
                  <button
                    onclick="window.open('https://mint.homeqube.io/')"
                    className="button2 btn btn-lg rounded-pill"
                  >
                    Mint
                  </button>
                </a>
                <NavLink to="/structural-legacies" className="a-link">
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
        <div></div>
        <p className="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
          <br />
          <br />
        </center>
      </section>
      <section className="ms-auto">
        <div class="dropdown">
          <button
            class="btn btn-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <GlobeIcon />
          </button>
          <ul class="dropdown-menu">
            <li>
              <button
                class="dropdown-item"
                onClick={() => handleChangelng("en")}
              >
                <img
                  src="/icons8-great-britain-20.png"
                  className="mx-2"
                  alt="image"
                />
                English
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => handleChangelng("tg")}
              >
                <img
                  src="/icons8-philippines-20.png"
                  className="mx-2"
                  alt="image"
                />
                Filipino
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => handleChangelng("por")}
              >
                <img
                  src="/icons8-portugal-20.png"
                  className="mx-2"
                  alt="image"
                />
                Portuguese
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onClick={() => handleChangelng("ind")}
              >
                <img
                  src="/icons8-indonesia-20.png"
                  className="mx-2"
                  alt="image"
                />
                Indonesian
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="p-4 text-dark text-start bg-white"
        style={{ fontSize: "2rem" }}
      >
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
              statelink3,
              statelink6,
              steplink,
              othertext,
              linkname,
              steplink1,
              othertext1,
              linkname1,
              steplink2,
              othertext2,
              linkname2,
              steplink3,
              othertext3,
              linkname3,
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
                statelink3={statelink3}
                statelink6={statelink6}
                steplink={steplink}
                linkname={linkname}
                othertext={othertext}
                steplink1={steplink1}
                linkname1={linkname1}
                othertext1={othertext1}
                steplink2={steplink2}
                linkname2={linkname2}
                othertext2={othertext2}
                steplink3={steplink3}
                linkname3={linkname3}
                othertext3={othertext3}
              />
            )
          )}
        </div>
      </section>

      <section>
        <RaffleDraw />
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
