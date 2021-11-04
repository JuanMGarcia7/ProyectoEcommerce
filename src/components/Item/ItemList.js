import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "./itemList.css";

//firebase
import { db } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  console.log(items);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
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

  return (
    <div>
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
