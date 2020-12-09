import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <header className="Header">
      <nav>
        {loggedIn ? (
          <>
            <a href="/">Home</a>
            <a href="/user-profile">User Profile</a>
            <a href="/create">Create</a>

            <a onClick={() => LogoutFunction()}>Logout</a>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/create-account">Create Account</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
