import React from "react";
import img from "./carritoSinFondo.png";
const CartWidget = () => {
  return (
    <div>
      <a href="#">
        {" "}
        <img src={img} alt="logoCarro" height="40px"></img>{" "}
      </a>
    </div>
  );
};

export default CartWidget;
