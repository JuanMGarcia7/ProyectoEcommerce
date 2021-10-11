
import './App.css';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react';





const App =()=> {
  
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer  />
      </div>      
    </div>    
  );
}


export default App;
