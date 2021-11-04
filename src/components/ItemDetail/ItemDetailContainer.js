import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Image } from "semantic-ui-react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ItemDetailContainer = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState([]);
  const [cantidadDeItems, setCantidadDeItems] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const counterHandler = (counter) => {
    setCantidadDeItems(counter);
  };

  /*    useEffect(() => {
    fetch(`https://console.firebase.google.com/project/e-commerce-fbb03/firestore/data/~2FProducts~2F${itemID}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }); */
  useEffect(() => {
    const getItem = async () => {
      const docRef = doc(db, "Products", itemID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("no esta!");
      }
    };
    getItem();
  });

  const addTooCart = () => {
    const idem = cart.find((i) => i.item === item.id);
    if (idem) {
      idem.cantidadDeItems += cantidadDeItems;
      idem.price += item.price * cantidadDeItems;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          cantidadDeItems: cantidadDeItems,
          item: item.id,
          itemName: item.name,
          price: item.price * cantidadDeItems,
        },
      ]);
    }
  };

  return (
    <div>
      <h1 className="titlGeneral"> Detalle del producto </h1>
      <Link to="/">
        <div className="volverList">Volver al listado</div>
      </Link>
      <div>
        <div className="cardTotalDetail">
          <div className="cardProductoDetail">
            <div className="containerImg">
              <Image className="imagenes_productos-detail" src={item.img} />
            </div>

            <div className="cardContent">
              <div className="itemsContent"> ID: {item.id}</div>
              <div className="itemsContent">Nombre: {item.name}</div>
              <div className="itemsContent"> Disponibles: {item.stock}</div>
              <div className="itemsContent">
                {""}
                Precio: u$s {item.price * cantidadDeItems} por {cantidadDeItems}{" "}
                {cantidadDeItems > 1 ? "items" : "item"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btnGral" id="agrCarrito" onClick={addTooCart}>
            {" "}
            Agregar al carrito
          </button>
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
