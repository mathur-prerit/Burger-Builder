import React from "react";
import "./App.css";
// import styles from './Button.module.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BurgerHome from "./components/BurgerHome.js";
import BurgerOrders from "./components/BurgerOrders";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BurgerHome} />
        <Route path="/orders" exact component={BurgerOrders} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
