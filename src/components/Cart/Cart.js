import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Table } from "semantic-ui-react";
import "./Cart.css";
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const elminarItem = (item) => {
    cart.splice(
      cart.findIndex((i) => i.item === item),
      1
    );

    setCart([...cart]);
  };

  return (
    <div>
      <div>
        {cart.length <= 0 ? (
          <div className="carroVacio">Su carro esta vacio </div>
        ) : null}
      </div>
      {cart.map((item) => (
        <div key={cart.id} className="tableCart">
          <tr>
            <td className="tdCart">ID: {item.item} </td>
            <td className="tdCart">Producto: {item.itemTitle}</td>
            <td className="tdCart">Cantidad: {item.cantidadDeItems}</td>
            <td className="tdCart"> Precio: u$s{item.price}</td>
            <button onClick={elminarItem}>Eliminar del carro</button>
          </tr>
        </div>
      ))}
    </div>
  );
};

export default Cart;
