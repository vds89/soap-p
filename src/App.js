import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";


class App extends Component {
  render() {
    return (
<HashRouter>
<nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="/images/logo/logo_transparent.png" width="100" height= "90" class="d-inline-block align-center" alt=""/>
    Natural SOAp-p
  </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a><NavLink to={'/'} className="nav-link"> Home </NavLink></a>
      </li>
      <li class="nav-item">
        <a><NavLink to={'/Products'} className="nav-link"> Products </NavLink></a>
      </li>
      <li class="nav-item">
        <a><NavLink to={'/Contact'} className="nav-link"> Contact </NavLink></a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/products" component={Products}/>
  <Route path="/contact" component={Contact}/>
</div>
</HashRouter>

    );
  }
}

export default App;
