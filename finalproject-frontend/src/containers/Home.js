import React, { useState, useEffect } from "react";
import axios from "axios";

function Home({ userAuthInfo }) {
  const [POSTSData, setPOSTSData] = useState([]);
  // const findComment = `http://localhost:4000/findComment/${item.name}`;
  useEffect(() => {
    axios
      // .get(`https://stormy-temple-10357.herokuapp.com/`)
      .get(`http://localhost:4000/`)
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
          <div className="Item" key={i}>
            {/* <a href="http://localhost:4000/addLikes/${item.name}"> */}
            <p className="Name">{item.name}</p>
            <div className="photoContainer">
              <img className="Photo" src={item.photo} />
            </div>
            <p className="Text">{item.text}</p>
            {/* <p>{item.comments}</p> */}
            {item.comments.map((comment, j) => (
              <div className="Item" key={j}>
                <p>{comment}</p>
              </div>
            ))}

            {/* <form action={findComment}>
                {" "}
                <a href="/comments">Comments</a>
              </form> */}

            <div>
              <form
                // action="https://stormy-temple-10357.herokuapp.com/addComment"
                action="http://localhost:4000/addComment/"
                method="get"
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Wanna say something...?"
                ></input>
                <input type="text" name={item.name} value={item.name}></input>
                {/* <input
                    type="text"
                    name="Userid"
                    value={userAuthInfo.uid}
                  ></input> */}
                <button type="submit">Submit Post</button>
              </form>
            </div>
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
