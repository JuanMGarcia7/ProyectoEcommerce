
import './App.css';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import React from 'react';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer
            img= 'Imagen'
            title='Mate'
            parrafo='Mate de acero, con bombilla'
        />
        <ItemListContainer
            img= 'Imagen'
            title='Yerbera y Azucarera'
            parrafo='Combo ideal para tu matera!'
        />
        <ItemListContainer
            img= 'Imagen'
            title='Lata'
            parrafo='Para decoracion y/o guardado!'
        />
      </div>      
    </div>    
  );
}
}


export default App;
