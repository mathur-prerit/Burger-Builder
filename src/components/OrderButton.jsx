import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionTypes from "../actions/actionTypes.js";

const OrderButton = (props) => {
  return (
    <button
      onClick={(e)=>submitData(e,props.OrderItem)}
      disabled={props.price <= 100}
    >
      Order Now
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.reducer.price,
    purchased: state.orderReducer.purchased,
  };
};

const mapsDispatchToProps = (dispatch,ownProps) => {
  return {
    OrderItem: () =>
      dispatch({
        type: actionTypes.ORDERITEM,
        payload: {
          ordered: true,
        },
      }),
  };
};

export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(withRouter(OrderButton));
