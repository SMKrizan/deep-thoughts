import React from 'react';
// React Router's 'Link' component changes URL while staying on same page
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {/* these 'to'attributes will become 'a' element in the browser - URL will change when activated, but page will not refresh: the displaying component simply changes */}
        <Link to="/">
          <h1>Deep Thoughts</h1>
        </Link>
        <nav className="text-center">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
