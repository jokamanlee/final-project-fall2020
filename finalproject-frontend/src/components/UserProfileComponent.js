import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfileComponent({ userAuthInfo }) {
  const [POSTData, setPOSTData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      // .get(
      //   `https://stormy-temple-10357.herokuapp.com/findName/${userAuthInfo.uid}`
      // )
      .get(`http://localhost:4000/findName/${userAuthInfo.uid}`)
      .then(function (userResponse) {
        if (userResponse.data) {
          setUserData(userResponse.data);
          setLoading(false);
          console.log(userResponse.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log(userData);
  useEffect(() => {
    axios
      // .get(`https://stormy-temple-10357.herokuapp.com/find/${userAuthInfo.uid}`)
      .get(`http://localhost:4000/find/${userAuthInfo.uid}`)
      .then(function (response) {
        if (response.data) {
          setPOSTData(response.data);
          setLoading(false);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  if (loading) return null;

  return (
    <div>
      <div>
        {userData.map((item, i) => (
          <div key={i}>
            <p>Hello {item.username}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfileComponent;
