import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import "./itemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
    axios("https://fakestoreapi.com/products").then((json) =>
      setItems(json.data)
    );
  }, []);

  return (
    <div>
      <h1 className="tituloPrincipal"> New arrivals!</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/Item/${item.id}`}>
              {isLoading ? <Spinner /> : <Item data={item} />}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
