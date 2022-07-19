import * as React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-3 bg-dark text-white text-center pt-5 pb-5 text-uppercase ">
      <div className="container px-4">
        <div className="row gx-3">
          <div className="col-md-6 container-fluid">
            <img
              src="../Homeqube-logo-black_small 1.svg"
              className="footer-logo"
              alt=""
            />
             
          </div>
          <div className="col link d-flex align-items justify-content-center">
            <div>
              <a
                href="https://www.instagram.com/homeqube.ai/"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mr-1"
                  src="../instagram.svg"
                  alt=""
                />
              </a>
              <a
                href="https://twitter.com/homeqube_ai"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../twitter.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/Homeqube-Pte-Ltd-SG-110205561591276"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../facebook.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/homeqube-pte-ltd/"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../linkedin.svg"
                  alt=""
                />
              </a>
              <a
                href="https://t.me/homeqube"
                target="_blank"
                rel="noreferrer noopener"
                class="flink-icon"
              >
                <img
                  className="footer-icon me-2 mx-1"
                  src="../telegram.svg"
                  alt=""
                />
              </a>
              <p className="footer-text-2 mt-2">

                <Link to="/terms" className="ahref">
                  Terms of Use
                </Link>
            
                <br />
                <Link to="/policy" className="ahref">
                  Privacy Policy
                </Link>
               
                <br />
                Homeqube Pte. Ltd.™
                <br />
                Homeqube inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
