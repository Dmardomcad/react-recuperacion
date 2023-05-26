import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-page">
        <nav className="navegador-contacto">
          <ul className="footer-otros">
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contacto
              </NavLink>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
