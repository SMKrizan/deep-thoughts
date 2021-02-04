import React from 'react';
// React Router's 'Link' component changes URL while staying on same page
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {
  const logout = event => {
    // overrides <a> element's default action of having browser load a different resource
    event.preventDefault();
    // removes token from localStorage and returns to homepage
    Auth.logout();
  }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* these 'to'attributes will become 'a' element in the browser - URL will change when activated, but page will not refresh: the displaying component simply changes */}
        <Link to="/">
          <h1>Deep Thoughts</h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to='/profile'>Me</Link>
              <a href='/' onClick={logout}>
                Logout
              </a>
            </>
          ) : (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </>
            )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
