import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import { Image } from "semantic-ui-react";
import "./ItemDetail.css";

const ItemDetailContainer = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  });
  return (
    <div>
      <div>
        <div className="cardTotalDetail">
          <div className="cardProductoDetail">
            <div className="containerImg">
              <Image className="imagenes_productos-detail" src={item.image} />
            </div>

            <div className="cardContent">
              <div className="itemsContent">{item.id}</div>
              <div className="itemsContent">{item.title}</div>
              <div className="itemsContent">{item.price}</div>
              <div className="itemsContent"> {item.description}</div>
            </div>
          </div>
        </div>
        <div className="cardFoot">
          <ItemCount />
          <a href="#" className="btnGral">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
