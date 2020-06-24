import React from "react";
import {Link, withRouter} from "react-router-dom"

const redirectOrders=(props)=>{
  props.history.push("orders")
}

const NavBar = (props) => {
  return (
    <nav className="flex-class" style={{padding:"2%"}}>
      <Link to={"/"}>Home</Link>
        <div onClick={()=>redirectOrders(props)}>Orders</div>
    </nav>
  );
};

export default withRouter(NavBar);
