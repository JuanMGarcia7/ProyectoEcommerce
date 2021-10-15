import React from "react";
import { Image } from "semantic-ui-react";
import logoNav from "../../assets/logoNav.png";
import "../css/style.css";

const Nosotros = () => {
  return (
    <div>
      <Image src={logoNav} className="logoNosotros" />
      <div className="parrafNosotros">
        Somos una empresa destinada a la comercializacion de productos de todo
        tipo. Nos potenciamos de manera online, para poder facilitarte la
        comprar desde la comodida de tu casa, sin necesidad que salgas de la
        misma.Llegamos a la puerta de tu casa, EN TODO EL MUNDO! Nuestra gran
        cantidad de stock, nos permite vender de forma mayorista a aquellos que
        lo deseen, brindando soporte y ayuda las 24 horas de del dia, siempre a
        disposicion de nuestros clientes!
      </div>
    </div>
  );
};

export default Nosotros;
