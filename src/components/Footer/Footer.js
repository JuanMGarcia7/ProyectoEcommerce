import React from "react";
import { Image } from "semantic-ui-react";
import "./Footer.css";
import logoEmail from "../../assets/email.png";
import logoInsta from "../../assets/logoInsta.png";
import logoTel from "../../assets/simContac.PNG";

const Footer = () => {
  return (
    <div className="footerTotal">
      <div className="mapa">
        <iframe
          className="mapa-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.58273696382!2d-59.86526578511455!3d-36.78057628340068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95942774dca74a79%3A0x5652b5107af4a484!2sMoreno%20739%2C%20Azul%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1628716469444!5m2!1ses-419!2sar"
          width="350"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="datos-contacto">
        <div className="datos-content">
          <Image className="imagenFoot" src={logoInsta} alt="insta" />
          @MagnoliahDesign
        </div>
        <div className="datos-content">
          <Image className="imagenFoot" src={logoEmail} alt="mail" />
          magnoliahdesign@gmail.com
        </div>
        <div className="datos-content">
          <Image
            className="imagenFoot"
            src={logoTel}
            alt="telefono"
            id="imagenTel"
          />
          <div className="datos-contacto">2281324996</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
