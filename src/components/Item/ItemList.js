
import React, { useState, useEffect } from 'react';
import Item from './Item';
import Spinner from "../Spinner/Spinner"



const ItemList = () => {
    
    const [items , setItems] = useState([])
    const [isLoading , SetIsLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>setItems(data));
        setTimeout(()=>{
            SetIsLoading(false);
        },2000)       
    }, []);

   
    
    return (
        <div>       
                    
            <h1>ITEMS</h1>         
            {items.map ((item) =>{
                
                return(
                
                    <div key={item.id}>
                        {isLoading? <Spinner /> :   <Item data={item} />  }    
                    </div>
                    )
                
            })}
            
        </div>
    )
}

export default ItemList;
