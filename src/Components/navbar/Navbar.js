import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css"

const NavBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
