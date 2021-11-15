import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Context/CartContext";

import Catalogo from "./components/Views/Catalogo";
import Nosotros from "./components/Views/Nosotros";
import CategoryMates from "./components/Category/CategoryMates";
import CategoryBazar from "./components/Category/CategoryBazar";
import CategoryYerbYAzuc from "./components/Category/CategoryYerbYAzuc";

import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

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
              <Route path="/catalogo" component={Catalogo} />
              <Route path="/categoryMates" component={CategoryMates} />
              <Route path="/categoryBazar" component={CategoryBazar} />
              <Route path="/categoryYerberas" component={CategoryYerbYAzuc} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
