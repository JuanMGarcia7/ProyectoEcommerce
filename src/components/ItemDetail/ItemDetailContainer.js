import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Image } from "semantic-ui-react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const ItemDetailContainer = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);
  const [cantidadDeItems, setCantidadDeItems] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const counterHandler = (counter) => {
    setCantidadDeItems(counter);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  });

  /* const quitIC = () => {
    let contador = document.getElementById("countGeneral");
    contador.parentNode.removeChild(contador);

    let buttonAgrCarrito = document.getElementById("agrCarrito");
    buttonAgrCarrito.parentNode.removeChild(buttonAgrCarrito);
  }; */

  const addTooCart = () => {
    const idem = cart.find((i) => i.item === item.id);
    if (idem) {
      idem.cantidadDeItems += cantidadDeItems;
      idem.price += item.price * cantidadDeItems;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          cantidadDeItems: cantidadDeItems,
          item: item.id,
          itemTitle: item.title,
          price: item.price * cantidadDeItems,
        },
      ]);
    }
  };

  return (
    <div>
      <h1 className="titlGeneral"> Detalle del producto </h1>
      <Link to="/">
        <div className="volverList">Volver al listado</div>
      </Link>
      <div>
        <div className="cardTotalDetail">
          <div className="cardProductoDetail">
            <div className="containerImg">
              <Image className="imagenes_productos-detail" src={item.image} />
            </div>

            <div className="cardContent">
              <div className="itemsContent">{item.id}</div>
              <div className="itemsContent">{item.title}</div>
              <div className="itemsContent"> {item.description}</div>
              <div className="itemsContent">
                {""}
                Precio: u$s {item.price * cantidadDeItems} por {cantidadDeItems}{" "}
                {cantidadDeItems > 1 ? "items" : "item"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btnGral" id="agrCarrito" onClick={addTooCart}>
            {" "}
            Agregar al carrito
          </button>
        </div>
        <div className="cardFoot">
          <ItemCount stock={5} initialValue={1} onAdd={counterHandler} />
          <Link className="btnGral" to="/cart">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
