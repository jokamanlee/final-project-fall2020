import React from "react";
import BraceletComponent from "../components/BraceletComponent";

function Bracelet() {
  return (
    <>
      <nav className="catergories">
        <h2 className="braceletLink">
          <a href="/bracelet">Bracelets</a>
        </h2>
        <h2 className="earringLink">
          <a href="/earring">Earrings</a>
        </h2>
        <h2 className="necklaceLink">
          <a href="/necklace">Necklaces</a>
        </h2>
      </nav>

      <div className="catPage">
        <h1>Bracelets</h1>
        <BraceletComponent />
      </div>
    </>
  );
}

export default Bracelet;
