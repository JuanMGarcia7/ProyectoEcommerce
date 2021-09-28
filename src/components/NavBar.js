import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CartWidget from './Cart/CartWidget';


function NavBar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Magnoliah Design</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
