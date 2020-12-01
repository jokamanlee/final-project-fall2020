import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://nameless-beyond-24691.herokuapp.com`)
      .then(function (response) {
        if (response.data) {
          setSampleAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ sampleAPIData });
  return <div>Hello</div>;
}

export default Home;
