import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logedUser");
    setUser(false);
    navigate("/");
  };

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
          {user ? (
            <>
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
              <button onClick={handleLogout} className="btn-registro">
                Logout
              </button>
            </>
          ) : (
            <div className="register-login-container">
              <NavLink to="/register" className="nav-link">
                <button className="btn-registro">Register</button>
              </NavLink>
              <NavLink to="/login" className="nav-link">
                <sub>Already have an account?</sub>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
