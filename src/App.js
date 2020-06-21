import React from "react";
import "./App.css";
// import styles from './Button.module.css';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact/>
    </BrowserRouter>
  );
}

export default App;
