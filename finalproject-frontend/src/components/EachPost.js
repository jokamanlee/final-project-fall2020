import React, { useEffect, useState } from "react";
import axios from "axios";
// import CreateComment from "./CreateComment";

function EachPost({ PostInfo }) {
  const date = new Date();
  const time =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let [Liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function likePost() {
    let num = 1;
    if (Liked) {
      num = -1;
    }
    setLiked(!Liked);
    setLikes(likes + num);
    axios
      .get(
        `https://stormy-temple-10357.herokuapp.com/addLikes?name=${PostInfo.name}&likes=${num}`
      )

      .catch(function (error) {
        console.log("Error getting like", error);
      });
  }
  useEffect(() => {
    if (PostInfo.likes) {
      setLikes(PostInfo.likes);
    }
  }, [PostInfo]);

  function submitComment(e) {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const comment = e.currentTarget.comment.value;

    axios
      .get(
        `https://stormy-temple-10357.herokuapp.com/addComment?name=${name}&comment=${comment}&time=${time}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="eachItem">
      <p className="Name">{PostInfo.name}</p>
      <div className="photoContainer">
        <img className="Photo" src={PostInfo.photo} onClick={likePost} />
      </div>
      <p>Liked by {likes} people</p>
      <p className="Text">{PostInfo.text}</p>
      <div className="comments">
        {PostInfo.comments.map((comment, i) => (
          <div className="Item" key={i}>
            <p className="comment">
              {comment}
              <br></br>
            </p>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={(e) => submitComment(e)}>
          <input
            type="text"
            name="comment"
            placeholder="Wanna say something...?"
          ></input>
          <input type="hidden" name="name" value={PostInfo.name}></input>
          <input type="hidden" name="time" value={time}></input>

          <button type="submit" onClick={refreshPage}>
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default EachPost;
