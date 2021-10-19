import React, { useState } from "react";
import "./ItemCount.css";
import swal from "sweetalert";
import item from "../Item/Item";

const ItemCount = ({}) => {
  let stock = 5;
  const [counter, setCounter] = useState(1);
  const [cantidadDeItems, setCantidadDeItems] = useState(1);

  const handleCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      swal({
        position: "center",
        icon: "error",
        title: "No hay mas de " + stock + " disponibles",
        timer: 1500,
      });
    }
  };

  const handleCounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    /*  setCantidadDeItems(counter);
    console.log(cantidadDeItems); */
  };

  const addToCart = () => {
    setCantidadDeItems(counter);

    let contador = document.getElementById("countGeneral");
    contador.parentNode.removeChild(contador);

    let buttonAgrCarrito = document.getElementById("agrCarrito");
    buttonAgrCarrito.parentNode.removeChild(buttonAgrCarrito);
  };

  return (
    <div className="countGral">
      <div id="countGeneral">
        <button
          id="buttonDown"
          className="buttonCount"
          onClick={handleCounterDown}
        >
          -
        </button>
        Cantidad: {counter}
        <button id="buttonUp" className="buttonCount" onClick={handleCounterUp}>
          +
        </button>
      </div>
      <div>
        <button className="btnGral" id="agrCarrito" onClick={addToCart}>
          {" "}
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
