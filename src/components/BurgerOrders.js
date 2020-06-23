import React, { Component } from "react";
// import axios from "../axios/axios-config.js"
import { connect } from "react-redux";
import * as actionTypes from "../actions/actionTypes.js";

class BurgerOrders extends Component {

    componentDidMount=()=>{
        this.props.OrdersList()
        
    }

  render() {
      console.log(this.props)
    return <div>
        {}
    </div>;
  }
}

const mapStateToProps=(state)=>{
return {
    orders:state.orders
}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        OrdersList: () =>
          dispatch({
            type: actionTypes.FETCHORDERS,
            payload: {
              ordered: true,
            },
          }),
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerOrders);
