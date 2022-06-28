import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
function LandingPage() {


    return(
    <>
     <section className="align-center text-uppercase text-center mt-5" style={{fontSize: "1.5rem"}}>
        <div>
            <p> Our Marketplace has four types of NFT Collections categories. These are: </p>
            <ol style={{ listStyleType: "none" }}>
                <li> 1. STRUCTURAL LEGACIES </li>
                <li> 2. Home Designs </li>
                <li> 3. System Architecture </li>
                <li> 4. Products </li>
            </ol>
            <br />
            <br />
            <p> CHECK OUR COLLECTIONS: </p>
         
            <NavLink to="/structural-legacies" className="a-link">
                  <button
                    className="button1 btn btn-lg rounded-pill"
                    type="button"
                  >
                    Collections
                  </button>
                </NavLink>
        </div>
        <br/>
        <br/>
        </section>
    </>);

    
}
export default LandingPage;
