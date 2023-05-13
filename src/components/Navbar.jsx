import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";

const Navbar = () => {
  return (
    <>
    {console.log(useContext(UserContext))}
      <nav className="navegador">
        <div className="nav-menu">
          <NavLink to="/" className="nav-link">
            <img className="logo" src="/apex-legends-logo-2.png" alt="" />
          </NavLink>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/characters" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
          <NavLink to="/register" className="nav-link">
            <button className="btn-registro">Register</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
