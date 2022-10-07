import React from "react";
import { Link } from "react-router-dom";

function RaffleDraw() {
  return (
    <>
      <section className="pt-5 content-eco1-bg text-sm-start">
        {/* <div className="col-md eco-1-title">
          <p className="ai-title-home">
            HOMEQUBE RAFFLE DRAW <br />
            LUCKY WINNER OF{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/QubeToken/status/1562007029539307520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1562007029539307520%7Ctwgr%5E42ad0887d6de936618e77eb922fd85c4656841c5%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.homeqube.io%2Fclaimqubes"
              className="link-main-color"
            >
              A CONDOMINUM
            </a>{" "}
            FROM CALMA PROPERTIES INC
          </p>
        </div>
        <p class="q-tokenomics-showcase-intro-lead p-3 text-uppercase"></p>
        <center>
          <div className="faq-rectangle"></div>
        </center>
        <br />
        <br />

        <section className="text-uppercase text-center mt-5 rem-2">
          <div>
            <ul style={{ listStyleType: "none" }} className="text-start">
              <p>RAFFLE MECHANICS</p>
              <li>
                {" "}
                1. THE RAFFLE IS OPEN TO ALL BUYERS OF OUR STRUCTURAL LEGACY
                NFTS, COST AT 9 SOLS. SEE OUR COLLECTION{" "}
                <Link to="/structural-legacies" className="link-main-color">
                  HERE.
                </Link>
              </li>
              <li>
                {" "}
                2. PARTICIPANTS MUST LIKE AND FOLLOW OUR TWITTER, AND INSTAGRAM
                ACCOUNTS.
              </li>
              <li>
                {" "}
                3. CONTEST PERIOD IS FROM AUGUST 23,2022 UNTIL THE FIRST 1000
                NFTS HAS BEEN SOLD.
              </li>
            </ul>
            <br />
            <ul style={{ listStyleType: "none" }} className="text-start">
              <p>RAFFLE DRAW</p>
              <li>
                {" "}
                1. WINNERS WILL BE RANDOMLY GENERATED THRU AN ELECTRONIC DRAW
              </li>
              <li>
                {" "}
                2. WINNERS WILL BE ANNOUNCED ON OUR SOCIAL MEDIA CHANNELS.
              </li>
              <li> 3. WINNER MUST PRESENT THE PROOF OF OWNERSHIP OF THE NFT</li>
            </ul>
            <br />
          </div>
          <br />
          <br />
        </section> */}
        <div className="banner">
          <div className="slider">
            <img id="sliderImg" src="Pablo_Residence_2.PNG" />
          </div>
          <div className="overlayBack">
            <div className="raffle_content">
              <h1>HOMEQUBE RAFFLE DRAW</h1>
              <h3>
                LUCKY WINNER OF{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/QubeToken/status/1562007029539307520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1562007029539307520%7Ctwgr%5E42ad0887d6de936618e77eb922fd85c4656841c5%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.homeqube.io%2Fclaimqubes"
                  className="link-main-revert-color"
                >
                  A CONDOMINUM
                </a>{" "}
                FROM CALMA PROPERTIES INC
              </h3>

              <button
                className="button1_raffle btn btn-lg rounded-pill"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RaffleDraw;
