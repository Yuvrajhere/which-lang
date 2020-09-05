import React from "react";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink 
            exact
            to="https://yuvrajhere.github.io/whichlang/" 
            activeClassName="active">
              Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact
            to="https://yuvrajhere.github.io/whichlang/start" 
            activeClassName="active">
              Start
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact
            to="https://yuvrajhere.github.io/whichlang/about" 
            activeClassName="active">
              Know more
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;