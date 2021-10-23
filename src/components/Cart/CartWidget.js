import React from "react";
import img from "./carritoSinFondo.png";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div>
      <Link className="navs navegables Cart" to="/cart ">
        <img src={img} alt="logoCarro" height="40px"></img>
      </Link>
    </div>
  );
};

export default CartWidget;
