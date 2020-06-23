import React, { Component } from "react";
// import axios from "../axios/axios-config.js"
import { connect } from "react-redux";
import * as actionTypes from "../actions/actionTypes.js";

class BurgerOrders extends Component {
  componentDidMount = () => {
    this.props.OrdersList();
  };

  render() {
    const orderListing = [];
    if (this.props.orders.length > 0) {
      for (let items of this.props.orders) {
        items[1].data.key = items[0];
        orderListing.push(items[1].data);
      }
      console.log(orderListing);
    }
    return (
      <div>
        {orderListing.map((data) => {
          return (
            <div key={data.key} style={{border:"1px solid black",margin:"2% auto", padding:"1%"}}>
              <div className="flex-class">
          <div>Name:<b>{data.details.name}</b></div>
          <div>Address:<b>{data.details.address}</b></div>
          <div>Email:<b>{data.details.email}</b></div>
          <div>Phone:<b>{data.details.mobile}</b></div>
          <div>Address Type:<b>{data.details.addressType}</b></div>
              </div>
              <div className="flex-class">
                <div>Bacon:{data.indgredients.bacon}</div>
                <div>Cheese:{data.indgredients.cheese}</div>
                <div>Meat:{data.indgredients.meat}</div>
                <div>Salad:{data.indgredients.salad}</div>
              </div>
              <div>Price {data.price}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OrdersList: () =>
      dispatch({
        type: actionTypes.FETCHORDERS,
        payload: {
          ordered: true,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerOrders);
