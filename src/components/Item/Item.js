import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Image } from "semantic-ui-react";

const Item = ({ data }) => {
  return (
    <div>
      <div className="cardTotal">
        <div className="cardProducto">
          <div className="card-body">
            <Image className="imagenes_productos" src={data.image} />
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.price}</div>

            <a href="#" className="btnGral">
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
