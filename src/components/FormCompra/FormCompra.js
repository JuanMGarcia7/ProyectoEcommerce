import React from "react";
import "./Form.css";

const FormCompra = () => {
  return (
    <div>
      <div className="formTotal">
        <div className="formGeneral">
          <label for="nyaForm">Nombre y apellido </label>
          <input type="text" className="formInput" id="nyaForm"></input>
        </div>
        <div className="formGeneral">
          <label for="emailForm">Email </label>
          <input type="email" className="formInput" id="emailForm"></input>
        </div>
        <div className="formGeneral">
          <label for="telefonoForm">Telefono </label>
          <input className="formInput" id="telefonoForm"></input>
        </div>
      </div>
    </div>
  );
};

export default FormCompra;
