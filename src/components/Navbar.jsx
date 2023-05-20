import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "./Button";

const Navbar = () => {
  console.log(useContext(UserContext))
  const {user, setUser} = useContext(UserContext)

  return (
    <>
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
          {
            user? (
          <>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </>
            ) : 
          ( 
            <div className="register-login-container">
            <NavLink to="/register" className="nav-link">
              <button className="btn-registro">Register</button>
            </NavLink>
            <NavLink to="/login" className='nav-link'>
              <sub>¿ya tienes cuenta?</sub>
            </NavLink>
          </div>
          )
        }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
