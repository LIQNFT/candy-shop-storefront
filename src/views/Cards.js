import { Link } from "react-router-dom";
function Cards() {
  return (
    <div className="homepage">
      <div class="display">
        <Link to="/homeqube" className="href">
          <div class="card-container border border-1  border-top-0 container-fluid text-uppercase">
            <div class="upper-container">
              <img src="/Structural-Legacies.png" className="cards-banner" />
              <div class="image-container ">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container">
              <div>
                <h3>Structural Legacies</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p className="SL-Des text-uppercase">
                  Introducing Homeqube’s Structural Legacy System. Each
                  Structural Configuration is unique. We generated 2450 unique
                  combinations (without Cantilever) from our Systems
                  Architecture Platform (SAP). This Legacy System can be used to
                  build limitless design configurations for flat topographies
                  and up to 3 story housing, allowing open architecture. Our
                  composite mix is more sustainable, weather resilient, and
                  emits much less carbon than reinforced concrete/steel, and can
                  be ergonomically assembled at site.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/SLC" className="href">
          <div class="card-container border border-1  border-top-0 container-fluid text-uppercase">
            <div class="upper-container">
              <img src="/Structural-Legacies.png" className="cards-banner" />
              <div class="image-container text-uppercase">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container">
              <div>
                <h3>Structural Legacies with Cantilever</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p className="SL-Des text-uppercase">
                  Introducing Homeqube’s Structural Legacy System. Each
                  Structural Configuration is unique. We generated 50 unique
                  combinations (with Cantilevers) from our Systems Architecture
                  Platform (SAP). This Legacy System can be used to build
                  limitless design configurations for flat topographies and up
                  to 3 story housing, allowing open architecture. Our composite
                  mix is more sustainable, weather resilient, and emits much
                  less carbon than reinforced concrete/steel, and can be
                  ergonomically assembled at site.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/home-design" className="href">
          <div class="card-container border border-1  border-top-0 container-fluid text-uppercase">
            <div class="upper-container">
              <img src="/Home-Design.png" className="cards-banner" />
              <div class="image-container text-uppercase">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container">
              <div>
                <h3>Home Design</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p className="SL-Des text-uppercase">
                  Showcase here in our collection is the award winning Cagbalete
                  Sand Clusters for our Home Designs.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div class="display">
        <Link to="/OSAP" className="href">
          <div class="card-container border border-1  border-top-0 text-uppercase">
            <div class="upper-container">
              <img src="/Other System.png" className="cards-banner" />
              <div class="image-container">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container text-uppercase">
              <div>
                <h3>Other-System-Architecture-Product</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p>
                  Showcase here in this collection are the sports cruiser and
                  spherical bathrooms made by Architectyourlife14 (AYL).
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="#" className="href">
          <div class="card-container border border-1  border-top-0 text-uppercase ">
            <div class="upper-container-2">
              {/* <img src="/Other System.png" className="cards-banner" /> */}
              <div class="image-container-2">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container text-uppercase">
              <div>
                <h3>Reserve</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p className="text-uppercase">
                  Home Design Contest
                  {/* Showcase here in this collection are the sports cruiser and spherical bathrooms made by Architectyourlife14 (AYL). */}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="#" className="href">
          <div class="card-container border border-1  border-top-0 text-uppercase">
            <div class="upper-container-2">
              {/* <img src="/Other System.png" className="cards-banner" /> */}
              <div class="image-container-2">
                <img src="/Homeqube-logo-black_small 1.svg" />
              </div>
            </div>
            <div class="lower-container text-uppercase">
              <div>
                <h3>Reserve</h3>
                {/* <h4>2ND TITLE</h4> */}
              </div>
              <div>
                <p className="text-uppercase">
                  Community NFT
                  {/* Showcase here in this collection are the sports cruiser and spherical bathrooms made by Architectyourlife14 (AYL). */}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
