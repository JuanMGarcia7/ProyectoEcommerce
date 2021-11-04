import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div>
      <div className="cardTotal">
        <div className="cardProducto">
          <div className="card-body">
            <Image className="imagenes_productos" src={data.img} />
            <div>{data.id}</div>
            <div>{data.name}</div>
            <div>{data.price}</div>
            <Link to="/cart">
              <a href="#" className="btnGral">
                Comprar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
