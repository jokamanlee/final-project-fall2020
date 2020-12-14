import React, { useState, useEffect } from "react";
import axios from "axios";
import EachPost from "../components/EachPost";

function Home({ userAuthInfo }) {
  const [POSTSData, setPOSTSData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/`)
      .then(function (response) {
        if (response.data) {
          setPOSTSData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="Home">
      <h1>Home Page</h1>
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
      <div className="postWrap">
        {POSTSData.map((item, i) => (
          <div className="eachItem">
            <EachPost userAuthInfo={userAuthInfo} PostInfo={item} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
