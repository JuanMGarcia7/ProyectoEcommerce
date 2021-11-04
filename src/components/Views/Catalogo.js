import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const Catalogo = () => {
  return (
    <div>
      Elija una seccion!
      <div>
        <Link to="/categoryMates" className="opcionesCategories">
          Mates
        </Link>
      </div>
      <div>
        <Link to="/categoryBazar" className="opcionesCategories">
          Bazar y Deco
        </Link>
      </div>
      <div>
        <Link to="/categoryYerberas" className="opcionesCategories">
          Yerberas y Azucareras
        </Link>
      </div>
      <div>
        <Link to="/" className="opcionesCategories">
          Todas
        </Link>
      </div>
    </div>
  );
};

export default Catalogo;
