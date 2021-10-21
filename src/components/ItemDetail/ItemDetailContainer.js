//juan
import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Image } from "semantic-ui-react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);
  const [cantidadDeItems, setCantidadDeItems] = useState(1);

  const counterHandler = (counter) => {
    setCantidadDeItems(counter);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  });

  return (
    <div>
      <h1> {cantidadDeItems} </h1>
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
