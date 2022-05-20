import { useState } from "react";
import NFTCollection1 from "../components/NftCollection1";
import NFTCollection2 from "../components/NftCollection2";
import NFTCollection3 from "../components/NftCollection3";
import NFTCollection4 from "../components/NftCollection4";
import NFTCollection5 from "../components/NftCollection5";

function NFTCollections() {
  const [active, setActive] = useState("CONTENT1");

  return (
    <>
      <div className="container d-flex">
        <div className="container-sm w-25">
          <div className="">
            <ul
              className="list-group"
              style={{
                textAlign: "left",
              }}
            >
              <button
                className="list-group-item border-none text-start"
                onClick={() => setActive("CONTENT1")}
              >
                <li className="list-group-item border-none">SYSTEM CONCEPTS</li>
              </button>
              <button
                className="list-group-item border-none text-start"
                onClick={() => setActive("CONTENT2")}
              >
                <li className="list-group-item border-none">HOME DESIGNS</li>
              </button>
              <button
                className="list-group-item border-none text-start"
                onClick={() => setActive("CONTENT3")}
              >
                <li className="list-group-item border-none">
                  OTHER SYSTEM <br /> ARCHITECTURE PRODUCTS
                </li>
              </button>
              <button
                className="list-group-item border-none text-start"
                onClick={() => setActive("CONTENT4")}
              >
                <li className="list-group-item border-none">HOMES</li>
              </button>
              <button
                className="list-group-item border-none text-start"
                onClick={() => setActive("CONTENT5")}
              >
                <li className="list-group-item border-none">COMMUNITY NFT</li>
              </button>
            </ul>
          </div>
        </div>
        <div className="container container-sm w-50">
              {active === "CONTENT1" &&  <NFTCollection1 />}
              {active === "CONTENT2" &&  <NFTCollection2 />}
              {active === "CONTENT3" &&  <NFTCollection3 />}
              {active === "CONTENT4" &&  <NFTCollection4 />}
              {active === "CONTENT5" &&  <NFTCollection5 />}
        </div>
      </div>
    </>
  );
}

export default NFTCollections;
