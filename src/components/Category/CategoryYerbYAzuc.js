import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import Item from "../Item/Item";

const CategoryYerbYAzuc = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const gettingYerbYAzuc = async () => {
      const docs = [];
      const q = query(
        collection(db, "Products"),
        where("category", "==", "Yerbera y Azucarera")
      );

      const prods = await getDocs(q);
      prods.forEach((document) => {
        docs.push({ ...document.data(), id: document.id });
      });
      setItems(docs);
    };
    gettingYerbYAzuc();
  }, []);

  return (
    <div>
      <h1 className="tituloPrincipal">Yerberas y Azucareras</h1>
      <div>
        {items.map((prod) => {
          return (
            <div key={prod.id}>
              <Link to={`/Item/${prod.id}`}>
                <Item data={prod} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryYerbYAzuc;
