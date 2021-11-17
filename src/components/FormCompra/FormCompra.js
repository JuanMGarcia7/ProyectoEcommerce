import React, { useContext } from "react";
import { addDoc, collection } from "@firebase/firestore";
import "./Form.css";
import { db } from "../../firebase";
import swal from "sweetalert";
import { useFormik } from "formik";
import CartContext from "../Context/CartContext";

const FormCompra = () => {
  const [cart] = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefono: "",
    },
    onSubmit: async (data) => {
      const docRef = await addDoc(collection(db, "Compra"), {
        data,
        cart,
      });

      swal({
        title: "Compra realizada!",
        text: "ID de seguimiento: " + docRef.id,
        icon: "success",
        button: "Volver",
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formTotal">
          <div className="formGeneral">
            <label>Nombre y apellido </label>
            <input
              type="text"
              className="formInput"
              id="name"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div className="formGeneral">
            <label>Email </label>
            <input
              type="email"
              className="formInput"
              id="email"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div className="formGeneral">
            <label>Telefono </label>
            <input
              className="formInput"
              id="telefono"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div>
            <button className="btnEliminar" type="submit">
              Comprar!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCompra;
