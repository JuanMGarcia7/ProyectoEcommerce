import React, {useState} from 'react'
import './ItemCount.css'
import swal from 'sweetalert';

const ItemCount =({}) => {

    let stock = 5
    const [counter , setCounter] = useState(1);

    const handleCounterUp =() =>{
        if(counter<stock){
            setCounter (counter+ 1)
        }else{
            swal({
                position: 'center',
                icon: 'error',
                title: 'No hay mas de ' + stock +' disponibles',
                timer: 1500
              })
        }
    }

    const handleCounterDown =() =>{
        if(counter>0){
            setCounter (counter-1)
        }
        
    }

    return (
        <div className="countGral">
            <button id="buttonDown" className="buttonCount" onClick={handleCounterDown}>-</button>
            Cantidad: {counter}
            <button id="buttonUp" className="buttonCount" onClick={handleCounterUp}>+</button>         
        </div>
    )
}

export default ItemCount;
