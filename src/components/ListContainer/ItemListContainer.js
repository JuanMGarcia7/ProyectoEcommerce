import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './media/product.destacado1.jpg';


const ItemListContainer = (greeting) => {
    return (
        <div className="cardTotal">
            <div class="cardProducto">    
                <div className="card-body">
                    <img src={img} className="imagenes_productos"></img>
                    <h5 className="card-title">{greeting.title}</h5>
                    <p className="card-text">{greeting.parrafo}</p>
                    <a href="#" className="btnGral">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
