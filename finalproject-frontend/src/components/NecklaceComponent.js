import React, { useEffect, useState } from "react";
import axios from "axios";
import EachPost from "./EachPost";

function NecklaceComponent() {
  const [POSTData, setPOSTData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/findCat/necklace`)
      .then(function (response) {
        if (response.data) {
          setPOSTData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <div className="postWrap">
        {POSTData.map((item, i) => (
          <div className="eachItem">
            <EachPost PostInfo={item} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NecklaceComponent;
