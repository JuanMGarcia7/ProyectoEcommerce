import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <ul>
          <div className="barraNav">
            <Link to="/" className="navegables navs">
              Home
            </Link>
            <Link to="/catalogo" className="navegables navs">
              Catalogo
            </Link>
            <Link to="/nosotros" className="navegables navs">
              Nosotros
            </Link>
            <CartWidget className="navegables navs" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
