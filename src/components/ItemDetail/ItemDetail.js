import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemDetail = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${itemID}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  });
  console.log(item);
  return (
    <div>
      hola
      {item.map((item) => {
        return (
          <div key={item.id}>
            <Item data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
