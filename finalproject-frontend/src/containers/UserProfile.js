import React from "react";

import UserProfileComponenet from "../components/UserProfileComponent";

function UserProfile({ userAuthInfo, justCreated }) {
  console.log(justCreated);
  return (
    <div>
      <nav>
        {justCreated ? (
          <>
            <a href="/create-username">Create Name</a>
          </>
        ) : (
          <></>
        )}
      </nav>
      <h1>User Profile</h1>
      <UserProfileComponenet userAuthInfo={userAuthInfo} />
    </div>
  );
}

export default UserProfile;
