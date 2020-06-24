import React from "react";
import {Link, withRouter} from "react-router-dom"

const redirectOrders=(props)=>{
  props.history.push("orders")
}

const NavBar = (props) => {
  return (
    <nav className="flex-class" style={{padding:"2% 5%",backgroundColor:"#ffa64d",margin:"0"}}>
      <Link to={"/"} className="nav-btn" style={{textDecoration:"none",color:"black"}}>Home</Link>
        <div className="nav-btn" style={{cursor:"pointer"}} onClick={()=>redirectOrders(props)}>Orders</div>
    </nav>
  );
};

export default withRouter(NavBar);
