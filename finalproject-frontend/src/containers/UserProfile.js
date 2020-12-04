import React from "react";

import UserProfileComponenet from "../components/UserProfileComponent";

function UserProfile({ userAuthInfo }) {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfileComponenet userAuthInfo={userAuthInfo} />
    </div>
  );
}

export default UserProfile;
