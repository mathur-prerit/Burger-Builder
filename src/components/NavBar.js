import React from "react";
import {Link} from "react-router-dom"

const NavBar = (props) => {
  return (
    <nav className="flex-class">
      <Link to={"/"}>Home</Link>
      <div className="flex-class">
        <div>Checkout</div>
      </div>
    </nav>
  );
};

export default NavBar;
