import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "./itemList.css";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const gettingData = async () => {
      const docs = [];
      const prods = await getDocs(collection(db, "Products"));
      prods.forEach((document) => {
        docs.push({ ...document.data(), id: document.id });
      });
      setItems(docs);
    };

    gettingData();
  }, []);

  items.sort(function (a, b) {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }

    return 0;
  });
  return (
    <div className="cardsContainer">
      <h1 className="tituloPrincipal"> New arrivals!</h1>
      {items.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={`/Item/${prod.id}`}>
              {isLoading ? <Spinner /> : <Item data={prod} />}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
