import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          type="button"
          className="btn btn-primary col-md-6"
          onClick={() => loginWithRedirect({})}>
            Log in
        </button>
      )}

      {isAuthenticated && <button type="button" onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
      )}
    </div>
  );
};

export default NavBar;
