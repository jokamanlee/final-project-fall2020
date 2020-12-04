import React from "react";

function UserProfileComponent({ userAuthInfo }) {
  console.log({ userAuthInfo });
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
    </div>
  );
}

export default UserProfileComponent;
