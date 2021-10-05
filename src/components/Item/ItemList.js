
import React, { useState, useEffect } from 'react';
import Item from './Item';


const ItemList = () => {
    
    const [items , setItems] = useState([])
   
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>setItems(data));
    }, []);

   
    
    return (
        <div>
            <h1>ITEM</h1>
            {items.map ((item) =>{
                
                return(
                
                    <div key={item.id}>
                        <Item data={item} />
                    </div>
                    )
                
            })}
            
        </div>
    )
}

export default ItemList;
