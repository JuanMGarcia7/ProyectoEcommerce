import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Home from "./components/Views/Home";
import Catalogo from "./components/Views/Catalogo";
import Nosotros from "./components/Views/Nosotros";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalogo" component={Catalogo} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/ItemDetail/:id" component={ItemDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
