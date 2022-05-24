import { element } from "prop-types";
import { useState } from "react";
import { Link } from 'react-router-dom'
import NFTCollection1 from "../components/NftCollection1";
import NFTCollection2 from "../components/NftCollection2";
import NFTCollection3 from "../components/NftCollection3";
import NFTCollection4 from "../components/NftCollection4";
import NFTCollection5 from "../components/NftCollection5";

function NFTCollectionsSO() {
  // const [active, setActive] = useState("CONTENT1");
  const [hoveredItem, setHoveredItem] = useState("");
  const resetHover = () => setHoveredItem("");

  return (
    <>
      <div className="container content">
        <div className="container-sm conwid-25">
          <div className="">
         
            <ul
              className="list-group"
              style={{
                textAlign: "left",
              }}
            >
                <li className={hoveredItem === "CONTENT1" ? "list-group-item border-none on" : "list-group-item border-none on"}
                    onMouseEnter={() => setHoveredItem("CONTENT1")}
                    onMouseLeave={resetHover}>
                     <Link to='/nftcollection/system-concept' className="href">SYSTEM CONCEPTS</Link>
                </li>
                <li className={hoveredItem === "CONTENT2" ? "list-group-item border-none on" : "list-group-item border-none"}
                    onMouseEnter={() => setHoveredItem("CONTENT2")}
                    onMouseLeave={resetHover}>
                      <Link to='/nftcollection/home-design' className="href">HOME DESIGNS</Link></li>
                <li className={hoveredItem === "CONTENT3" ? "list-group-item border-none on" : "list-group-item border-none"}
                    onMouseEnter={() => setHoveredItem("CONTENT3")}
                    onMouseLeave={resetHover}>
                      <Link to='/nftcollection/OSAP' className="href">OTHER SYSTEM <br /> ARCHITECTURE PRODUCTS</Link>
                </li>
                <li className={hoveredItem === "CONTENT4" ? "list-group-item border-none on" : "list-group-item border-none"}
                    onMouseEnter={() => setHoveredItem("CONTENT4")}
                    onMouseLeave={resetHover}>
                      <Link to='/nftcollection/homes' className="href">HOMES</Link></li>
                <li className={hoveredItem === "CONTENT5" ? "list-group-item border-none on" : "list-group-item border-none"}
                    onMouseEnter={() => setHoveredItem("CONTENT5")}
                    onMouseLeave={resetHover}>
                       <Link to='/nftcollection/community-nft' className="href">COMMUNITY NFT</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-sm conwid-50">
          <NFTCollection1 />
              {/* {active === "CONTENT1" &&  <NFTCollection1 />}
              {active === "CONTENT2" &&  <NFTCollection2 />}
              {active === "CONTENT3" &&  <NFTCollection3 />}
              {active === "CONTENT4" &&  <NFTCollection4 />}
              {active === "CONTENT5" &&  <NFTCollection5 />} */}
        </div>
      </div>
    </>
  );
}

export default NFTCollectionsSO;
