import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfileComponent({ userAuthInfo }) {
  const [POSTData, setPOSTData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const postId = POSTData.find(
  //   (post) => post.id === "gKvyblkxY9OuP5fLQUc9nOM72fk2"
  // );
  // const postId = POSTData.find(function (post) {
  //   return post.id === "gKvyblkxY9OuP5fLQUc9nOM72fk2";
  // });
  useEffect(() => {
    axios
      .get(`https://stormy-temple-10357.herokuapp.com/find`)
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

  // console.log(postId);
  // const postId =
  // const docRef = POSTData.doc("gKvyblkxY9OuP5fLQUc9nOM72fk2");

  // docRef
  //   .get()
  //   .then(function (doc) {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting document:", error);
  //   });
  // if (loading) return null;
  // else console.log({ userAuthInfo.uid });;

  return (
    <div>
      <p>
        <strong>UID:</strong>
        {userAuthInfo.uid}
      </p>
      <p>
        <strong>Email:</strong>
        {userAuthInfo.email}
      </p>
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
