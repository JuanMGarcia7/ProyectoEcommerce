import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Image } from "semantic-ui-react";
import logoNav from "../../assets/logoNav.png";
import CartContext from "../Context/CartContext";

const NavBar = () => {
  const [cart] = useContext(CartContext);
  const itemNum = cart.length;
  return (
    <div>
      <div className="navBarTotal">
        <ul>
          <div className="barraNav">
            <Link to="/">
              <Image src={logoNav} className="imgLogo" />
            </Link>
            <Link to="/" className="navegables navs">
              Home
            </Link>
            <Link to="/category/:id" className="navegables navs">
              Catalogo
            </Link>
            <Link to="/nosotros" className="navegables navs">
              Nosotros
            </Link>
            {cart.length > 0 ? (
              <Link to="/cart">
                <CartWidget />
                <div className="itemNum">{itemNum}</div>
              </Link>
            ) : null}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
