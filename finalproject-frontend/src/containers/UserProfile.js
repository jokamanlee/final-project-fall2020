import React from "react";

import UserProfileComponenet from "../components/UserProfileComponent";
import CreateUsername from "./CreateUsername";

function UserProfile({ userAuthInfo }) {
  return (
    <div>
      <CreateUsername userAuthInfo={userAuthInfo} />
      <h1>User Profile</h1>
      <UserProfileComponenet userAuthInfo={userAuthInfo} />
    </div>
  );
}

export default UserProfile;
