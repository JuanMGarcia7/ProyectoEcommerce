import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Image } from "semantic-ui-react";
import logoNav from "../../assets/logoNav.png";
import CartContext from "../Context/CartContext";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const NavBar = () => {
  const [cart] = useContext(CartContext);
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDrop = () => {
    setDropdown(!dropdown);
  };
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
            {/* <Link to="/catalogo" className="navegables navs">
              Catalogo
            </Link> */}
            <Dropdown
              isOpen={dropdown}
              toggle={abrirCerrarDrop}
              className="navegables navs dropdown"
            >
              <DropdownToggle caret>Categorias</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  {" "}
                  <Link to="/categoryMates" className="opcionesCategories">
                    Mates
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/categoryBazar" className="opcionesCategories">
                    Bazar y Deco
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/categoryYerberas" className="opcionesCategories">
                    Yerberas y Azucareras
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/" className="opcionesCategories">
                    Todas
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
