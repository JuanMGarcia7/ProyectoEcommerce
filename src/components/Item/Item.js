import React from 'react';
import ItemCount from '../ItemCount/ItemCount';



const Item = ({data}) => {
    return (
    <div>
        <div className="cardTotal">
            <div className="cardProducto">    
                <div className="card-body">
                    <div>
                        {data.id}
                    </div>
                    <div>
                        {data.name}
                    </div>
                    <div>
                        {data.username}
                    </div>
                    <div>
                        {data.phone}
                    </div>
                                       
                    <ItemCount />
                    
                    <a href="#" className="btnGral">Comprar</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Item;
