import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfileComponent({ userAuthInfo }) {
  function deletePost(e) {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/delete?name=${name}`)
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }
  const [POSTData, setPOSTData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://stormy-temple-10357.herokuapp.com/findName/${userAuthInfo.uid}`
      )
      .then(function (userResponse) {
        if (userResponse.data) {
          setUserData(userResponse.data);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/find/${userAuthInfo.uid}`)
      .then(function (response) {
        if (response.data) {
          setPOSTData(response.data);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);
  function deleteName(e) {
    e.preventDefault();
    const id = e.currentTarget.id.value;
    axios
      .get(`http://localhost:4000/deleteName?name=${id}`)
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }
  if (loading) return null;
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div>
        {userData.map((item, i) => (
          <div key={i}>
            <p>Hello {item.username}</p>
            <form onSubmit={(e) => deleteName(e)}>
              <input type="hidden" name="id" value={userAuthInfo.uid} />
              <button type="submit" onClick={refreshPage}>
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>

      <div className="postWrap">
        {POSTData.map((item, i) => (
          <div className="Item" key={i}>
            <p className="Name">{item.name}</p>
            <div className="photoContainer">
              <img className="Photo" src={item.photo} />
            </div>
            <p className="Text">{item.text}</p>
            <form onSubmit={(e) => deletePost(e)}>
              <input type="hidden" name="name" value={item.name}></input>
              <button type="submit" onClick={refreshPage}>
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfileComponent;
