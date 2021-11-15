import React from "react";
import img from "./carritoSinFondo.png";

const CartWidget = () => {
  return (
    <div className="navs navegables Cart">
      <img src={img} alt="logoCarro" height="40px"></img>{" "}
    </div>
  );
};

export default CartWidget;
