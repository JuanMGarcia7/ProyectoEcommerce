import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Table } from "semantic-ui-react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);

  const elminarItem = (item) => {
    cart.splice(
      cart.findIndex((i) => i.item === item.id),
      1
    );

    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <div>
        {cart.length <= 0 ? (
          <div className="carroVacio">Su carro esta vacio </div>
        ) : (
          <div className="carroVacio">Este es su carro de compras! </div>
        )}
      </div>
      {cart.map((item) => (
        <div key={cart.id} className="tableCart">
          <tr>
            <td className="tdCart">ID: {item.item} </td>
            <td className="tdCart">Producto: {item.itemTitle}</td>
            <td className="tdCart">Cantidad: {item.cantidadDeItems}</td>
            <td className="tdCart"> Precio: u$s{item.price}</td>
            <button onClick={elminarItem} className="tdCart btnEliminar">
              Eliminar item
            </button>
          </tr>
        </div>
      ))}
      <div>
        {cart.length > 0 ? (
          <button onClick={clearCart} className="btnEliminar">
            Vaciar carro!
          </button>
        ) : (
          <Link to="/">
            <div>Volver al listado</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
