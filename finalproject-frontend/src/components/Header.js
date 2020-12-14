import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <header className="Header">
      <nav>
        {loggedIn ? (
          <>
            <a href="/">
              <span class="fontawesome-home"></span>
            </a>

            <a href="/user-profile">
              <span class="fontawesome-user"></span>
            </a>
            <a href="/create">
              <span class="fontawesome-pencil"></span>
            </a>

            <a href="/login" onClick={() => LogoutFunction()}>
              <span class="fontawesome-signout"></span>
            </a>
          </>
        ) : (
          <>
            <a href="/login">
              <span class="fontawesome-signin"></span>
            </a>
            <a href="/create-account">
              <span class="fontawesome-plus"></span>
            </a>
          </>
        )}
      </nav>
      <a className="pageName">Share Your Jewelry</a>
    </header>
  );
}

export default Header;
