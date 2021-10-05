import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/product.destacado1.jpg';
import ItemCount from '../ItemCount/ItemCount'; 
import ItemList from '../Item/ItemList';


const ItemListContainer = () => {
    return (
        <div >
            <ItemList />
        </div>
    )
}

export default ItemListContainer;
