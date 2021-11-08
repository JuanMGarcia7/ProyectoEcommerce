import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./itemList.css";

const Item = ({ data }) => {
  return (
    <div>
      <div className="cardTotal">
        <div className="cardProducto">
          <div className="card-body">
            <Image className="imagenes_productos" src={data.img} />
            <div className="cardDescrip">ID: {data.id}</div>
            <div className="cardDescrip">{data.name}</div>
            <div className="cardDescrip"> ${data.price}</div>
            <Link to={`/Item/${data.id}`}>
              <a className="btnGral">Ver detalle</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
