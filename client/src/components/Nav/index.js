import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="left">
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="#0d47a1 blue darken-4">
      <div className="nav-wrapper">
        <a className="brand-logo center">
          <Link to="/">
            <span role="img" aria-label="shopping bag">
              🛍️
            </span>
            -Shop-Shop
          </Link>
        </a>

        {showNavigation()}
      </div>
    </nav>
  );
}

export default Nav;
