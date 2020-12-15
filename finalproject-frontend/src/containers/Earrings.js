import React from "react";
import EarringComponent from "../components/EarringComponent";

function Earring() {
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
        <h1>Earrings</h1>
        <EarringComponent />
      </div>
    </>
  );
}

export default Earring;
