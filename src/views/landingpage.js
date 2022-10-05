import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <section
        className="align-center text-uppercase text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        <div className="container">
          <div class="row justify-content-around">
            <div class="col-4">
              <p>
                Our Marketplace has four types of NFT Collections categories.
                These are:
              </p>
            </div>
            <div class="col-4">
              <ul style={{ listStyleType: "none" }}>
                <li> ● STRUCTURAL LEGACIES </li>
                <li> ● Home Designs </li>
                <li> ● System Architecture </li>
                <li> ● Products </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <NavLink to="/structural-legacies" className="a-link">
            <button className="button1 btn btn-lg rounded-pill" type="button">
              Collections
            </button>
          </NavLink>
          {/* <p> CHECK OUR COLLECTIONS: </p> */}
        </div>
        <br />
        <br />
      </section>
    </>
  );
}
export default LandingPage;
