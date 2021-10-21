import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

//Views
/* import Home from "./components/Views/Home";
import Catalogo from "./components/Views/Catalogo";*/
import Nosotros from "./components/Views/Nosotros";
import ListContainer from "./components/ListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ListContainer/ItemListContainer";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={ItemListContainer} />
              <Route path="/category/:id" component={ItemListContainer} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/Item/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
