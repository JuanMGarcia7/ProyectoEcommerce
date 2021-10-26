import React from "react";
import img from "./carritoSinFondo.png";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div className="navs navegables Cart">
      <img src={img} alt="logoCarro" height="40px"></img>{" "}
    </div>
  );
};

export default CartWidget;
