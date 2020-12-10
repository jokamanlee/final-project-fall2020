import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [POSTSData, setPOSTSData] = useState([]);
  const date = new Date();
  const better =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  console.log(better);
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

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="Home">
      <iframe name="hiddenFrame"></iframe>
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
            <div className="eachItem">
              <p className="Name">{item.name}</p>
              <div className="photoContainer">
                <img className="Photo" src={item.photo} />
              </div>
              <p className="Text">{item.text}</p>
              <div className="comments">
                {item.comments.map((comment, j) => (
                  <div className="Item" key={j}>
                    <p className="comment">
                      {comment}
                      <br></br>
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <form
                  // action="https://stormy-temple-10357.herokuapp.com/addComment"
                  action="http://localhost:4000/addComment/"
                  method="get"
                  target="hiddenFrame"
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Wanna say something...?"
                  ></input>
                  <input type="text" name="time" value={better}></input>
                  <input type="hidden" name="name" value={item.name}></input>

                  <button type="submit" onClick={refreshPage}>
                    Submit Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
