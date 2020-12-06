import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [POSTSData, setPOSTSData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/`)
      .then(function (response) {
        if (response.data) {
          setPOSTSData(response.data);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="Home">
      <h1>Home Page</h1>
      <div className="postWrap">
        {POSTSData.map((item, i) => (
          <div className="Item" key={i}>
            <p className="Name">{item.name}</p>
            <div className="photoContainer">
              <img className="Photo" src={item.photo} />
            </div>
            <p className="Text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
