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
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ POSTSData });
  return (
    <div>
      <h1>Home Page</h1>
      {POSTSData.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <img src={item.photo} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
