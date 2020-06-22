import React from "react";
import "./App.css";
// import styles from './Button.module.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BurgerHome from "./components/BurgerHome.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BurgerHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
